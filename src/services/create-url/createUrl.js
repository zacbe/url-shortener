// import core
import middy from "@middy/core";

// import some middlewares
import jsonBodyParser from "@middy/http-json-body-parser";
import httpErrorHandler from "@middy/http-error-handler";
import validator from "@middy/validator";

// schemas
import eventSchema from "../../schemas/eventSchema.json" assert { type: "json" };

async function baseHandler(event, context, { signal }) {
  // const body = event.body;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event, //.body,
      },
      null,
      2
    ),
  };
}

let handler = middy(baseHandler); //.use(jsonBodyParser).use(httpErrorHandler);

export { handler };
