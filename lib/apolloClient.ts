import { ApolloClient, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';


const client = new ApolloClient({
	uri: 'https://countries.trevorblades.com',
	cache: new InMemoryCache(),
});

export default client;
