In addition to setting up the project, you will require a json server to run the graphQL queries

install global npm package for json server
sudo npm intall -g json-server

run the json server from within the directory where db.json exist
json-server --watch db.json --port 8900

GraphiQL will be available at the following command. 
npm start 
http://localhost:4800/graphql
