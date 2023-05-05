const axios = require("axios");
const { config } = require("../config");

const openai = {
  completion: async (prompt) => {
    const options = {
      url: "https://api.openai.com/v1/completions",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.openAIAPIKey}`,
      },
      data: {
        model: "text-davinci-003",
        prompt,
        max_tokens: 500,
        temperature: 0.9,
        top_p: 1,
        n: 1,
        stream: false,
      },
    };
    console.log("Prompting...\n");
    try {
      return axios.request(options);
    } catch (error) {
      console.log("Something went wrong...");
      process.exit(1);
    }
  },
};

module.exports = { openai };
