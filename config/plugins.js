'use strict';

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  'strapi-algolia': {
    enabled: true,
    config: {
      apiKey: env('ALGOLIA_ADMIN_KEY'),
      applicationId: env('ALGOLIA_APP_ID'),
      contentTypes: [
        { 
          name: 'api::article.article',
          index: 'adidas-shop',
          hiddeFields: [
            ''
          ]
        },
      ],
    },
  },
});