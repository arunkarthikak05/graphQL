const {ApolloServer} = require('apollo-server');

const db = require('./database');
const typeDefs = require('./Schema')

const resolvers = {
    Query:{
        games(){
            return db.games
        },
        reviews(){
            return db.reviews
        },
        authors(){
            return db.authors
        },
        review( _, args){
            return db.reviews.find((data)=>data.id === args.id)
        }
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers
})


server.listen().then(({url})=>{
    console.log(url)
})
console.log(`Server started at 4000`)