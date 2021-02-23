import pandas as pd
import requests
from bs4 import BeautifulSoup
import sqlite3 as sql
from sqlite3 import Error
import csv


"""
Basic webscraping with Beautiful Soup and WP REST API

Part 1. scrape links and titles to each Beanie Baby - gather_links()
Part 2. 
"""


def gather_links(filename="bbLinks.csv"):
    url_part = r"https://beaniepedia.com/beanies/wp-json/wp/v2/posts?per_page=50"
    bb_dict = {"link": [], "title": []}  # empty to show schema
    for u in range(1, 43):  # hardcode page limit
        url = url_part + "&page=" + str(u)
        d = requests.get(url).json()
        for item in d:
            bb_dict["title"].append(item["title"]["rendered"])
            bb_dict["link"].append(item["link"])
    df = pd.DataFrame(bb_dict)
    df.head()
    df.to_csv(filename, index=None, header=True)


def build_DB():
    # load the csv file
    bbData = pd.read_csv(r"bbLinks.csv")
    bbData.head()
    bbList = []
    # for loop through pre-scraped links
    for u in range(0, len(bbData.index)):
        bb = {
            "title": bbData["title"][u].replace(",", ""),
            "link": bbData["link"][u].replace(",", ""),
        }
        url = bbData["link"][u]
        print("reading data from: ", url)
        d = requests.get(url)
        soup = BeautifulSoup(d.content, "html.parser")
        imageLink = soup.find("a", id="boxlink")["href"] 
        bb["image"] = imageLink
        table = soup.find("table", id="features") # data all contained within this table
        rows = table.find_all("tr")
        for r in rows:
            property = r.th.string.replace(":", "")
            value = r.td.string
            # Basic data cleaning
            if value:
                value = value.replace(",", "").replace("&#8211", "-").replace("'","")
            else:  # value does not exist
                value = "N/A"
            bb[property] = value
        print(bb)
        bbList += [bb]
    print(bbList)
    bbData_all = pd.DataFrame.from_dict(bbList, orient="columns")
    bbData_all.head()
    bbData_all.to_csv("fulldata.csv", index=None, header=True)


## this is what generates the scraped data
#gather_links()
#build_DB()


## below is a small example so I could learn how to scrape data.
def sample():
    url = "https://beaniepedia.com/beanies/beanie-babies/scurry-the-beetle/"
    bb = {}
    d = requests.get(url)
    soup = BeautifulSoup(d.content, "html.parser")

    imageLink = soup.find("a", id="boxlink")["href"]
    bb["image"] = imageLink
    table = soup.find("table", id="features")
    rows = table.find_all("tr")
    for r in rows:
        property = r.th.string.replace(":", "")
        value = r.td.string
        print(property, value)
        if value:
            value = value.replace(",", "")
        else:  # value does not exist
            value = "N/A"

        bb[property] = value
    print(bb)

