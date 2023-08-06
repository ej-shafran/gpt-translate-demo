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

// this works for this sentence
const sentence =
  "Your use of the word 'because' is incorrect in that sentence.";
// but not for
// const sentence = "You should use more words like 'empathy' and 'love' in your response."

const openai = new OpenAIApi(configuration);

openai
  .createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Given a sentence in English, translate it to Hebrew. Do *not* translate any text surrounded by quotes (').

Your sentence is:
${sentence}
`,
      },
    ],
    temperature: 0,
  })
  .then((res) => {
    console.log(JSON.stringify(res.data, null, 2));
  });
