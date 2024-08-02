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
            host: 'https://ms-ae7b8064b19e-11977.fra.meilisearch.io',
            apiKey: '5ec98fb051844280ad06d48f89c022027ea7cfff',
            product: {
                entriesQuery: {
                    limit: 10
                },
                indexName: ['product'],
                settings: {
                    synonyms: {
                        party: ['parties', 'function', "event", "occason", "party", "program"],
                    },

                }
            },
            catrgory: {
                entriesQuery: {
                    limit: 10
                },
                indexName: ['product'],
                settings: {
                    synonyms: {
                        party: ['parties', 'function', "event", "occason", "party", "program"],
                    }
                }
            }
        },
    },
}
