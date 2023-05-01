// local imports
import { composeRes } from "../../helpers/index.js";
import { middleware } from "../../middleware/index.js";

const schema = {
  type: "object",
  properties: {
    body: {
      type: "object",
    },
  },
};

async function baseHandler(event) {
  const qp = event.pathParameters;
  console.info({ qp });

  // 1. create unique id
  // 2. create record in db

  const longUrl =
    "https://dev.to/osmanforhad/react-js-identifier-text-has-already-been-declared-solution-4b2k";
  return composeRes(301, {
    Location: longUrl,
  });
}

let handler = middleware(baseHandler, schema);
export { handler };
