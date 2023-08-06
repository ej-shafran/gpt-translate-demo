# gpt-translate-demo

A (very minimal) demo of the capabilities (or lack thereof) of ChatGPT's translator capabilities.

## Setup

Copy your OpenAI API key to a file called `.env`, under the variable `OPENAI_API_KEY`.

Install the dependencies with `npm install`.

## Usage

Once you've done the [setup](#setup), you can run `npm start` to see it in action.

You can go into `index.ts` to edit the `sentence` constant or just take a look at the code.

## Notes

The `.env` file is in `.gitignore` so you don't push your OpenAI API key to GitHub.
The `index.js` file is in `.gitignore` so you don't push the (possibly outdated) compiled output of your code to GitHub.
