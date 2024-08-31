import psycopg2
import json

# conn = psycopg2.connect(host="localhost", dbname="postgres", user="postgres", password="soccer16", port=5432)
# conn = psycopg2.connect( host="database-1.cd2qsosgal8z.us-east-1.rds.amazonaws.com", dbname="database-1", user="postgres", password="soccer16", port=5432)

# supabase
conn = psycopg2.connect(user="postgres.puehvbysudhpfwhdxksa",
                        password="#",
                        host="aws-0-us-east-1.pooler.supabase.com", 
                        port=6543,
                        dbname="postgres")

# spring.application.name=castle-finder

# spring.datasource.url=jdbc:postgresql://localhost:5432/postgres
# spring.datasource.username=postgres
# spring.datasource.password=soccer16
# spring.datasource.driver-class-name=org.postgresql.Driver

# spring.jpa.hibernate.ddl-auto=validate
# spring.jpa.show-sql=true

cur = conn.cursor()

# cur.execute("DROP TABLE IF EXISTS castles;")

# cur.execute("""CREATE TABLE IF NOT EXISTS castles(
#   id INT PRIMARY KEY,
#   name VARCHAR(255),
#   lat_lon FLOAT[]
  
# );
# """)

cur.execute("""CREATE SEQUENCE IF NOT EXISTS castles_seq
            START WITH 1
            INCREMENT BY 1
            MINVALUE 1
            NO MAXVALUE
            CACHE 1;    
""")
# cur.execute("""INSERT INTO castles_seq (last_value, log_cnt, is_called) VALUES
#             1, 0, false;""")

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
  

conn.commit()

cur.close()
conn.close()
