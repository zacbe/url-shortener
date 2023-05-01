// import core
import middy from "@middy/core";

// import middlewares
import validator from "@middy/validator";
import httpErrorHandler from "@middy/http-error-handler";
import httpHeaderNormalizer from "@middy/http-header-normalizer";
import httpJsonBodyParser from "@middy/http-json-body-parser";

// schemas
import { transpileSchema } from "@middy/validator/transpile";

export const middleware = (fn, schema = null) => {
  return middy(fn)
    .use(httpHeaderNormalizer())
    .use(httpJsonBodyParser())
    .use(httpErrorHandler())
    .use(validator({ eventSchema: transpileSchema(schema) }));
};
