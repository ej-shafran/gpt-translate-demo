import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error("`OPENAI_API_KEY` env variable not set");
}

const configuration = new Configuration({
  apiKey,
});

const openai = new OpenAIApi(configuration);

openai
  .createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "assistant",
        content:
          "Given a sentence in English, translate it to Hebrew, excluding any words within single-quotes (') - leave them in English.",
      },
      {
        role: "user",
        content:
          "You should use more words such as 'love' or 'empathy' in your response.",
      },
    ],
  })
  .then((res) => {
    console.log(JSON.stringify(res.data, null, 2));
  });
