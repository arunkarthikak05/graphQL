const typeDefs = `#graphql
 type Game {
    id: ID!,
    title: String!,
    platform:[String!]!,
 }
 type Review{
    id: ID!,
    rating: Int!,
    contnet:String!,
 }
 type Author{
    id:ID!,
    name:String!,
    boolean:Boolean!,
 }
 type Query{
    reviews:[Review]
    review(id:ID!): Review
    games:[Game]
    authors:[Author]
 }
`

module.exports = typeDefs
/*
Datatypes:
int float string boolean ID(unique)
*/