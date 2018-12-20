module.exports = {
  logger: true,
  logLevel: 'info',
  cacher: {
    type: process.env.CACHE || 'Memory',
    options: {
      ttl: process.env.CACHE_TTL || 30
    }
  },
  metrics: true,
  statistics: true,
  hotReload: true
};
