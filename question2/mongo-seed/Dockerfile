FROM mongo

COPY init.json /init.json
CMD mongoimport --host mongodb --db beers-db --collection beers --type json --file /init.json --jsonArray