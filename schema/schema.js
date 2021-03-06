const graphql = require("graphql");
const axios = require("axios");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

//create object for user
const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(` http://localhost:8900/users/${args.id}`)
          .then(resp => resp.data);
        //return _.find(users, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
