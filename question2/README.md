## Question 2. NodeJS Competency Test
Build a beer api using NodeJs with 2 endpoints. You will need to have a database, ideally MongoDB but MySQL or PostgreSQL is also ok.
You are free to use any npm package that you would want. You can use ExpressJS or HapiJS or FeatherJS or Fastify or whatever.

## Docker compose
docker-compose file will run server with connect to mongo db local and seed the data in mongo-seed folder

## How to run
1. copy `.env.example` to be `.env` file
2. run command `docker-compose up`
3. open browser `localhost:5000`

## APIs endpoint
1. get random beer `GET /beer/random`
2. create beer `POST /beer`

