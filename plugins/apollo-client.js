export default (context) => {
  return {
    httpEndpoint: 'http://localhost:1337',
    browserHttpEndpoint: '/graphql',
    
    getAuth: () => {
      console.log("Token is: " + store);
      return store._token
    }
  }
}
