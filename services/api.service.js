const { Service } = require('moleculer');
const ApiGateway = require('moleculer-web');

/**
 * API Gateway
 *
 * Handles API requests.
 *
 * @class APIService
 * @extends {Service}
 */
class APIService extends Service {
  /**
   * Creates an instance of APIService.
   *
   * @param {ServiceBroker} broker
   * @memberof APIService
   */
  constructor(broker) {
    super(broker);

    this.parseServiceSchema({
      name: 'api',

      /**
       * Service Mixins
       */
      mixins: [ApiGateway],

      /**
       * Service settings
       */
      settings: {
        port: process.env.PORT || 3000,

        routes: [
          {
            path: '/',
            aliases: {
              'GET /': 'hello.hello',
              'GET /hello/:slug': 'hello.helloSlug',
              'POST /post': 'hello.post'
            },

            // Disable to call not-mapped actions
            mappingPolicy: 'restrict',

            // Set CORS headers
            cors: false,

            // Parse body content
            bodyParsers: {
              json: true,
              urlencoded: {
                extended: true
              },
              text: { type: 'text/plain' },
              raw: true
            }
          }
        ]
      }
    });
  }
}

module.exports = APIService;
