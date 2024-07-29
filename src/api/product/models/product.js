module.exports = {
    lifecycles: {
        async afterCreate(result, data) {
            await strapi.plugins['meilisearch'].services.meilisearch.addObject('product', result);
        },
        async afterUpdate(result, params, data) {
            await strapi.plugins['meilisearch'].services.meilisearch.updateObject('product', result);
        },
        async afterDelete(result, params) {
            await strapi.plugins['meilisearch'].services.meilisearch.deleteObject('product', result.id);
        },
    },
};