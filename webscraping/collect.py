
import pandas as pd
import requests
from bs4 import BeautifulSoup
import sqlite3 as sql
from sqlite3 import Error
import csv

#https://www.crummy.com/software/BeautifulSoup/bs4/doc/
# https://towardsdatascience.com/web-scraping-board-game-descriptions-with-python-7b8f6a5be1f3

"""
#explore the first board game page
url = r"https://boardgamegeek.com/boardgame/174430/gloomhaven"
page_data = requests.get(url)
r
soup


# you want to get the table of data with id="features"
"""

# this does not contain all of the meta-data i am looking for unfortunately
#https://beaniepedia.com/beanies/wp-json/wp/v2/posts/25965
#https://beaniepedia.com/beanies/wp-json/



def gather_links(filename="bbLinks.csv"):

    # there could be an issue with saving the data to a df and then writing to a CSV file but lets see if this works - a better way would be to write to the CSV for each iteration of the for loop
    # https://beaniepedia.com/beanies/release-year/<year>/
    years = ['1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015',
        '2016','2017','2018','2019','2020']

    # https://beaniepedia.com/beanies/wp-json/wp/v2/posts?per_page=50&page=42
    # url part 1
    up1 = r'https://beaniepedia.com/beanies/wp-json/wp/v2/posts?per_page=50'
    #up1 = r"https://beaniepedia.com/beanies/release-year/"
    # will populate this to write to csv
    bb_dict = {'link':[],'title':[]}

    #for loop
    for u in range(1,43):
        url = up1 + '&page=' + str(u)
        print(url)
        d = requests.get(url).json()
        for item in d:
            bb_dict['title'].append(item['title']['rendered'])
            bb_dict['link'].append(item['link'])

    df = pd.DataFrame(bb_dict)
    df.head()
    export_csv = df.to_csv(filename, index = None, header=True)


def build_DB():
    #load the csv file
    bbData = pd.read_csv(r'bbLinks.csv')
    bbData.head()
    bbList = []
    #for loop
    for u in range(0,len(bbData.index)):
        bb = {'title':bbData['title'][u].replace(",",""),'link':bbData['link'][u].replace(",","")}
        url = bbData['link'][u]
        print(url)
        d = requests.get(url)
        soup = BeautifulSoup(d.content, 'html.parser')

        imageLink = soup.find("a", id="boxlink")['href']
        bb['image'] = imageLink
        table = soup.find('table', id="features")
        rows = table.find_all("tr")
        for r in rows:
            property = r.th.string.replace(":","")
            value = r.td.string

            # Basic data cleaning
            if value:
                value = value.replace(",","")
            else: # value does not exist
                value = "N/A"
            
            bb[property]=value
        print(bb)
        bbList += [bb]
        #(desc.append(description["content"]) if description else desc.append("No Description"))
        #n+=1
    print(bbList)
    bbData_all = pd.DataFrame.from_dict(bbList,orient='columns')
    bbData_all.head()
    export_csv = bbData_all.to_csv('fulldata.csv', index = None, header=True)

    #create an sqlite database and connection
    #conn = sql.connect(r'bbdb')

    #c = conn.cursor()
    #load the data into the database
    #bbData_all.to_sql('beanieBabies', conn)
    #query the data to verify
    #q = pd.read_sql('select * from beanieBabies', conn)
    #q.head()

#gather_links()
build_DB()


def test():
    url = 'https://beaniepedia.com/beanies/beanie-boos/glamour-the-leopard-large-2nd-release/'
    bb ={}
    d = requests.get(url)
    soup = BeautifulSoup(d.content, 'html.parser')

    imageLink = soup.find("a", id="boxlink")['href']
    bb['image'] = imageLink
    table = soup.find('table', id="features")
    rows = table.find_all("tr")
    for r in rows:
        property = r.th.string.replace(":","")
        value = r.td.string
        print(property,value)
        if value:
            value = value.replace(",","")
        else: # value does not exist
            value = "N/A"

        bb[property]=value
    print(bb)
