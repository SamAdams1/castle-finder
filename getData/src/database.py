import psycopg2
import json

conn = psycopg2.connect(host="localhost", dbname="postgres", user="postgres", password="", port=5432)

cur = conn.cursor()

cur.execute("DROP TABLE IF EXISTS castles;")
# do stuff
cur.execute("""CREATE TABLE IF NOT EXISTS castles(
  id INT PRIMARY KEY,
  name VARCHAR(255),
  lat_lon FLOAT[]
  
);
""")

# cur.execute(""" INSERT INTO castles (id, name, location) VALUES
#             (1, 'Hogwarts', '{14,88}')
            
#             """)


with open("getData/austria.json", "r") as json_file:
    castles = json.load(json_file)
query = """
  INSERT INTO castles (id, name, lat_lon) 
  VALUES (%s, %s, %s);
"""
count = 0
for key in castles.keys():
  latLon = castles[key]
  
  cur.execute(query, (count, key, f"{{{latLon[0]}, {latLon[1]}}}"))
  count += 1
  
# 
# cur.execute("INSERT INTO castles (id, name, location) VALUES (2, '{"+key+"}', '{"+ latLon[0] + "," + latLon[1]+ "}');")
conn.commit()

cur.close()
conn.close()
