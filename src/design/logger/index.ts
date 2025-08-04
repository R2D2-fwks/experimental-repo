import pino from 'pino';

export const logger = pino({
  level: 'debug', // Set the minimum log level
  serializers: {
    req: pino.stdSerializers.req, // Serialize express request objects
    res: pino.stdSerializers.res, // Serialize express response objects
    err: pino.stdSerializers.err, // Serialize error objects
  },
  // Add custom levels
  customLevels: {
    audit: 35,
  },
});