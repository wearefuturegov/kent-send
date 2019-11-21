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

## Environment config

Needs none right now