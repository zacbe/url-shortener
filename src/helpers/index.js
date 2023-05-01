/**
 * Returns an object with the specified status code, headers, and body.
 *
 * @param {number} code - The HTTP status code for the response.
 * @param {object} [headers={}] - An object containing HTTP headers for the response.
 * @param {any} [body=null] - The response body, which can be any JSON-serializable value or an instance of Error.
 * @returns {object} An object with the following properties:
 *   - statusCode: The HTTP status code for the response.
 *   - headers: An object containing HTTP headers for the response.
 *   - body: The JSON-serialized response body, or null if no body is provided or it cannot be serialized.
 */
function composeRes(code, headers = null, body = null) {
  let responseBody = body;

  if (body instanceof Error) {
    responseBody = {
      message: body.message,
      stack: body.stack,
    };
  }

  return {
    statusCode: code,
    ...(responseBody ? { body: JSON.stringify(responseBody) } : {}),
    headers: {
      "Content-Type": headers["Content-Type"] || "application/json",
      ...headers,
    },
  };
}

export { composeRes };
