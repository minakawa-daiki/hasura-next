import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const link = createHttpLink({
    uri: process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
    credentials: 'same-origin',
    headers: {
        'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET
    }
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
});

export default client;
