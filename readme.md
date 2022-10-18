# Is EHCP right for me?

*On the web [here](https://kent-send.herokuapp.com/)*

A quiz and personalised results page for the Kent SEND service. It:

* filters inappropriate demand and singposts elsewhere
* screens applications for EHCP plans and improves the quality of applications

Built on the [next.js](https://github.com/zeit/next.js) framework.

Pushes to master are automatically redeployed on Heroku.

## Prerequisites

`node` and `npm`

## Running it locally

1. Grab dependencies with `npm install`
2. `npm run dev`

## Running it on the web

It should run on Heroku with no special steps.

In other places, run it in production mode with `npm run build` and then `npm start`.

## Content

At the moment, the content is stored as two data files `questions.json` and `options.json` in the folder `content`. It's safe to edit the text in these files to make minor content changes. Most keys accept HTML tags.

The application uses the `id` key to match questions to options, so don't change these unless you know what you're doing.

_In future, these data files could be generated as part of the build by pulling content from a headless CMS._

## Environment config

Needs none right now

## What it looks like

![SEND Explore your options - Kent County Council](https://user-images.githubusercontent.com/11888656/196427719-d8c0dccf-2b79-4da2-8765-8cba92b31f89.png)
