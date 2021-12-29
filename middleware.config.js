module.exports = {
  integrations: {
    shopify: {
      location: '@vue-storefront/shopify-api/server',
      configuration: {
        api: {
          domain: 'bizycs.myshopify.com',
          storefrontAccessToken: 'c47bead80302a52e4288bb6944b63e68'
        },
        currency: 'USD',
        country: 'US'
      }
    }
  }
};
