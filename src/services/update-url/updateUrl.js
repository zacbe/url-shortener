// local imports
import { composeRes } from "../../helpers/index.js";
import { middleware } from "../../middleware/index.js";

const schema = {
  type: "object",
  required: ["body"],
  properties: {
    body: {
      type: "object",
      required: ["url", "expiresAt"],
      properties: {
        url: { type: "string", format: "url" },
        expiresAt: {
          type: "string",
          format: "date",
        },
      },
    },
  },
};

async function baseHandler(event /*context, { signal }*/) {
  const qp = event.pathParameters;
  const body = event.body;
  console.info({ qp, body });

  // 1. create unique id
  // 2. create record in db

  const shortUrl = "https://sh.zacbe.dev/123456";
  return composeRes(200, {
    url: shortUrl,
  });
}

let handler = middleware(baseHandler, schema);
export { handler };
