# Evaluate a News Article with Natural Language Processing Project

## Table of Contents

* [About](#about)
* [Languages](#languages)
* [Dependencies](#dependencies)
* [Functionality](#functionality)

## About

This project required me to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.

## Languages

* JavaScript
* HTML
* CSS

## Dependencies

* Node.js
* NPM
    * @babel/core
    * @babel/preset-env
    * babel-loader
    * body-parser
    * clean-webpack-plugin
    * cors
    * css-loader
    * css-minimizer-webpack-plugin
    * dotenv
    * express
    * html-webpack-plugin
    * jest
    * mini-css-extract-plugin
    * node-fetch
    * node-sass
    * sass-loader
    * style-loader
    * supertest
    * webpack-cli
    * webpack-dev-server
    * webpack
    * workbox-webpack-plugin

## Functionality

Create NLP Evaluator server:

* POST /evaluate API to evaluate URL via MeaningCloud Sentiment Analysis API
* Serve NLP Evaluator website
* Access MeaningCloud API key via local .env file
* Log API errors to console

Create NLP Evaluator website:

* Post URL to NLP Evaluator server
* Update evaluation results on page
* Prevent sending multiple requests at once
* Cache website for offline access
* Show friendly error message on missing fields or network failure
