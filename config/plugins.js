const { join } = require("path");


module.exports = {

    graphql: {
        config: {
            generateArtifacts: true,
            artifacts: {
                schema: join(__dirname, '..', 'schema.graphql'),
                typegen: join(__dirname, '..', 'types.d.ts'),
            },
            endpoint: '/graphql',
            shadowCRUD: true,
            playgroundAlways: false,
            depthLimit: 7,
            amountLimit: 100,
            apolloServer: {
                tracing: false,
            },
        },
    },
    meilisearch: {
        config: {
            host: 'http://127.0.0.1:7700',
            apiKey: 's0kaaR9Z9H7Dg_xjydhOUG3oNjIuxgJwfQjD2ZQvBT4',
            product: {
                settings: {
                    synonyms: {
                        party: ['parties', 'function', "event", "occason", "party", "program"],
                    }
                }
            }
        },
    },
}
