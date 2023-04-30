export async function deleteUrlHandler(event) {
  const { id } = event.pathParameters;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        id,
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
}
