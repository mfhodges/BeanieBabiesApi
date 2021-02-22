import csv
import os
import sys


ASTROLOGYDATES = {  
    "Aquarius" :{"start": "1/20","end": "2/18"},
    "Pisces" :{"start": "2/19","end": "3/20"},
    "Aries" : {"start": "3/21","end": "4/19"}, 
    "Taurus" :{"start": "4/20","end": "5/20"},
    "Gemini" :{"start": "5/21","end": "6/20"},
    "Cancer" :{"start": "6/21","end": "7/22"},
    "Leo" :{"start": "7/23","end": "8/22"},
    "Virgo" :{"start": "8/23","end": "9/22"},
    "Libra" :{"start": "9/23","end": "10/22"},
    "Scorpio" :{"start": "10/23","end": "11/21"},
    "Sagittarius" :{"start": "11/22","end": "12/21"},
    "Capricorn" :{"start": "12/22","end": "1/19"}
}
MONTHS = {
    "January":"1",
    "February": "2",
    "March":"3",
    "April":"4",
    "May":"5",
    "June":"6",
    "July":"7",
    "August":"8",
    "September":"9",
    "October":"10",
    "November":"11",
    "December":"12"
}



def birthday2sign(birthday):
    # bdays are formatted like "31 July 1998" OR "17 March"
    try:
        inputDay,month,year = birthday.split(" ")
    except:
        try:
            inputDay,month = birthday.split(" ")
        except:
            return("ERROR")
    try:
        inputMonth = MONTHS[month]
    except:
        return("ERROR")
    #print(inputMonth, inputDay)

    for sign,dates in ASTROLOGYDATES.items():
        start = dates['start']
        end = dates['end']

        #print(sign,start,end,birthday)
        signMonthStart,signDayStart = start.split("/")
        signMonthEnd,signDayEnd = end.split("/")
        if ((inputMonth == signMonthStart and inputDay >= signDayStart) or (inputMonth == signMonthEnd and inputDay <= signDayEnd)):
            #print("compat sign 2", sign)
            return sign
        
        # no error checking :^)
    




def find_astro_signs(inputfile="fulldata.csv"):

    my_path = os.path.dirname(os.path.abspath(sys.argv[0]))
    print(my_path)
    file_path = os.path.join(my_path,"../data",inputfile)

    dataFile = open(file_path,"r")
    dataFile.readline() # skips the header
    outfile = open(os.path.join(my_path,"../data","astrologyBBdata.csv"),"w+")
    outfile.write("%s, %s\n" % ("style_number","astro_sign"))
    for line in dataFile:
        # bdays are formatted like "31 July 1998" and are in the 8th column
        data = line.split(",")
        style_number =data[4]
        birthday = data[8]
        print(birthday,style_number)
        sign = birthday2sign(birthday)
        print(style_number, birthday,sign)
        # style number is a unique field that will be used to later relate the signs to the full data
        # style number is actually not unique!! 
        outfile.write("%s, %s\n" % (style_number,sign))



find_astro_signs()

#birthday2sign("03 May 2005") #--> should return taurus