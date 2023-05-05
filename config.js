require("dotenv").config({
  path: __dirname + "/.env",
});

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const config = {
  openAIAPIKey: OPENAI_API_KEY,
};

module.exports = { config };
