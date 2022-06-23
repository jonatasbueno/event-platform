import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4qhg4t43s1x01xx36ejg8v9/master",
  cache: new InMemoryCache()
})