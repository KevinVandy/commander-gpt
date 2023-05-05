#! /usr/bin/env node

// Import required libraries
const program = require("commander");
const { openai } = require("./lib/openai");
const { writeDataFile } = require("./lib/writeDataFile");

// Set up version and description
program
  .version("1.0.0")
  .description("A Node CLI for generating responses from OpenAI's GPT-3 API");

// Set up example command
program
  .command("prompt <prompt>")
  .option("-o, --output <output>", "Output file name")
  .alias("p")
  .description("Generates an open-ai response to a prompt")
  .action(async (prompt, options) => {
    const response = await openai.completion(prompt);
    if (response?.data) {
      const text = response.data?.choices?.[0]?.text?.trim();
      console.log(`\n${text}\n`);

      if (options.output) {
        writeDataFile(options.output, text);
      }
    }
  });

// Parse command line arguments
program.parse(process.argv);
