
# How I got the data
I first collected links to each Beanie Babies page by scraping them from Beaniepedia's REST API . Since each Beanie Baby has its own post I paginated through all of the posts. This first step was implemented in `gather_links()` in `collect.py`. 

Once I had each link, I used Beautiful Soup to scrape content from each page and populate a CSV. I did not scrape all availbe metadata for each Beanie Baby. In future releases, additional fields will be considered. As of now the provided fields are: 

- Title
- Link
- Image
- Theme
- Style Number
- Colour
- Swing Tag Generation
- Tush Tag Generation
- Birthday
- Release Date
- Release Year
- Retirement Date
- Animal
- Subtheme
- Size

# Cleaning my data 🧼
If the Beanie Baby did not have a birthday listed, I have not included this in the DB. So sorry to these little friends... 

If a Style Number was not listed or was not numerical, this field was set to "N/A". No further fact-checking went into verifying the Style Numbers

If a field was blank it was set to "N/A". For `Retirement Date` if the value is "-" this is not considered blank because this means that the Beanie Baby has not been retired yet.  

## Known issues
- Some Birthdays contain the year and some dont. 
- Some Release Dates and Retirement Date are listed M/D/Y and some are D/M/Y.


# Future Work
- Researching the Beanie Babies that do not have birthdays and including them in the DB.
- Including the Description, Poem and, Collectors Note in the DB. 

