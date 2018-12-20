const { Service } = require('moleculer');

/**
 * Handles Hello API endpoints
 *
 * @class HelloService
 * @extends {Service}
 */
class HelloService extends Service {
  /**
   * Creates an instance of HelloService.
   *
   * @param {ServiceBroker} broker
   * @memberof HelloService
   */
  constructor(broker) {
    super(broker);

    this.parseServiceSchema({
      name: 'hello',

      /**
       * Service settings
       */
      settings: {},

      /**
       * Service metadata
       */
      metadata: {},

      /**
       * Service dependencies
       */
      // dependencies: [],
      actions: {
        /**
         * Say a 'Hello'
         *
         * @returns String
         */
        hello() {
          return 'Hello';
        },

        /**
         * Say Hello with Slug.
         *
         * @param {String} slug - User name
         */
        helloSlug: {
          params: {
            slug: 'string'
          },
          handler(ctx) {
            const slug = ctx.params.slug || '';
            return `Hello ${slug}`;
          }
        },

        /**
         * Handle Post request on /post endpoint
         */
        post: {
          handler(ctx) {
            let postData = ctx.params;
            if (typeof postData === 'object') {
              postData = JSON.stringify(postData);
            }
            return postData;
          }
        }
      }
    });
  }
}

module.exports = HelloService;
