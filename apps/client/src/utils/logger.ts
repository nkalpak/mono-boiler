import nodeLogger from "pino";

const logger = nodeLogger({ browser: { asObject: true } });

export { logger };
