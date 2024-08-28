import requests
import re
import json
import time
# pageid: 8935083 

# wikiEndpoint = "https://en.wikipedia.org/w/api.php?"
wikiEndpoint = "https://de.wikipedia.org/w/api.php?"

# idk if work, haven't checked
countriesParam = {
  'origin': "*",
  'format': "json",
  'action': "query",
  'prop': "iwlinks",
  "iwprop": "url",
  "list": "search",
  "srsearch": "List of castles in Albania"
}

# params to get single coord
geoLocParams = {
  'origin': "*",
  'format': "json",
  'action': "query",
  'prop': "coordinates",
  'generator': "search",
  'gsrsearch': "",
  'gsrlimit': 1,
}


def appendParamsToUrl(parameters):
    url = wikiEndpoint
    for key in parameters.keys():
      # if key == "gsrsearch" or key == "pageid":
      #     parameters[key] = text.replace(" ", "_").replace("'", "")
      url += f"{key}={parameters[key]}&"
    # print(url)
    return url

def getCountryArticleName():
  url = appendParamsToUrl(countriesParam)
  response = requests.get(url)
  data = response.json()
  print(data)
  
# getCountryArticleName()

def loopCountryCastleNames():
  file = open("names.txt", "r",encoding="utf-8")
  nameList = file.read().split("\n")
  
  withLoc = 0
  noLoc = 0
  
  locations = {}
  for castle in nameList:
    try:
      data =  searchSingleCastleCoords(castle)["query"]["pages"]
      key = list(data.keys())[0]
      latLon = [data[key]["coordinates"][0]["lat"], data[key]["coordinates"][0]["lon"]]
      locations[castle] = latLon
      # locations[castle.split(",")[0]] = latLon
      withLoc += 1
    except Exception as e:
      print(e, castle)
      noLoc += 1
    time.sleep(0.0001)
  
  print(f"withLoc:{withLoc}, noloc: {noLoc}")
  with open(f"b.json", "w") as outfile:
    outfile.write(json.dumps(locations, indent=1))

def searchSingleCastleCoords(castleName):
  # append castlename to search keyword url
  geoLocParams["gsrsearch"] = castleName.split(",")[0].replace(" ", "_")
  url = appendParamsToUrl(geoLocParams)
  
  # api call
  response = requests.get(url)
  data = response.json()
  
  return data


loopCountryCastleNames()
# print(searchSingleCastleCoords("Second Battle of Wissembourg"))










