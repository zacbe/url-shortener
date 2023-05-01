// local imports
import { middleware } from "../../middleware/index.js";
import { composeRes } from "../../helpers/index.js";

const schema = {
  type: "object",
  properties: {
    body: {
      type: "object",
    },
  },
};

async function baseHandler(event /*context, { signal }*/) {
  const qp = event.pathParameters;
  console.info({ qp });

  // 1. create unique id
  // 2. create record in db

  const shortUrl = "https://sh.zacbe.dev/123456";
  return composeRes(200, {
    url: shortUrl,
  });
}

let handler = middleware(baseHandler, schema);
export { handler };
