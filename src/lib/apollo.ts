import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4o6kqhq0wwm01z2gttd7kxw/master",
    cache: new InMemoryCache()
})