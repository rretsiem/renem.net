require('dotenv').config();

// import querystring from "querystring";

const { APIKEY } = process.env;

exports.handler = async (event, context) => {
  // if (event.httpMethod !== "POST") {
  //   return { statusCode: 405, body: "Method Not Allowed" };
  // }

//  const params = querystring.parse(event.body);
  const name = "World";

  return {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: `Hello, ${name}`
  };
};