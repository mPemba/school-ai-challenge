This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Code Challenge for SchoolAI

I've been able to connect to the OpenAI API and set up a basic chat UI. 

Haven't been able to figure out how to write a script to format the Alabama Language Arts Standards as local data file with embeddings. Still working on this part. 

## Getting Started

Add a file called `.env.local` and add your OpenAI API key: 

`OPENAI_API_KEY={your api key here}`

Run the development server:

`yarn install`

`yarn dev`

## Cypress tests

To run Cypress tests you must first start the dev server. 

In a new terminal window navigate to the project and run `yarn e2e:run`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
