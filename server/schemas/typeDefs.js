const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    wishlists: [Wishlist]!
  }

  type Wishlist {
    _id: ID
    listName: String
    priceLimit: Number
    gifts: [Gift]!
  }

  type Gift {
    _id: ID
    giftName: String
    price: Number
    itemBought: Boolean
  }

  type Auth {
    token: ID!
    user: User
  } 
  
  input giftInput {
    _id: ID
    giftName: String
    price: Number
    itemBought: Boolean
  }

  type Query {
    wishlist(wishlistId: ID!): Wishlist
    me: User
  }

 

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWishlist(listName: String!, priceLimit: Number): Wishlist
    removeWishlist(wishlistId: ID!): Wishlist
    updateWishlist(listName: String!, priceLimit: Number!) : Wishlist
    addGift(input: giftInput!): Wishlist
    removeGift(giftId: ID!, WishlistId: ID!): Wishlist
    updateGift(giftId: ID!, WishlistId: ID!): Wishlist
  }
`;

module.exports = typeDefs;
