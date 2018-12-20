# node-api

## Available scripts

```bash
# Start developing with REPL
npm run dev

# Start production
npm start

# Run ESLint
npm run lint

# Run ESLint with --fix
npm run lint-fix

# Formate the code with Prettier
npm run prettier
```
### Run without Docker (Development)

1. Clone this repository
2. Go to cloned directory
3. Run command `npm install`
4. Run command `npm run dev`
5. Open the `http://localhost:3000/`

### Run in Docker (Production)

1. Clone this repository
2. Go to cloned directory
3.  Start with docker-compose: `docker compose up -d --build`

    It starts all services in separated containers, a [Traefik](https://traefik.io/) reverse proxy. All nodes communicate via NATs transporter.

4.  Open the http://docker-ip:3000/ (`http://localhost:3000/` if you are checking in local system)
5.  Scale up services

    `docker-compose scale hello=3`

## Endpoints
1. `GET /`  Example: http://localhost:3000/
2. `GET /hello/{slug}`  Example: http://localhost:3000/hello/test
3. `POST /post`  Example: http://localhost:3000/post with POST body (application/json & application/x-www-form-urlencoded Content-Type are supported for POST Body)


## Code Overview

### Dependencies

- [moleculer](https://github.com/moleculerjs/moleculer) - Microservices framework for NodeJS
- [moleculer-web](https://github.com/moleculerjs/moleculer-web) - Official API Gateway service for Moleculer
- [nats](https://github.com/nats-io/node-nats) - [NATS](https://nats.io) transport driver for Moleculer _(optional)_

### Application Structure

- `moleculer.config.js` - Moleculer ServiceBroker configuration file.
- `services/` - This folder contains the services.

### Further Improvements

- Add redis server(docker container) for caching
- Add unit tests (using Jest)


