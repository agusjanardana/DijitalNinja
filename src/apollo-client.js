import { ApolloClient, InMemoryCache } from '@apollo/client';

import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

const httpLink = new HttpLink({
    uri: 'https://dijitalninja.hasura.app/v1/graphql',
    headers: {
        'x-hasura-admin-secret': 'h32CPEWHRADn4CzV02XXyNl6OFRw5VXNfqfOO3dhSAEtDKHGGPgVeGsrCX1wWh7W',
    },
});
const wsLink = new WebSocketLink({
    uri: 'ws://dijitalninja.hasura.app/v1/graphql',
    options: {
        reconnect: true,
    },
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});

export default client;
