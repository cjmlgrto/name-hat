# SMS Name Draw

It's a Kris Kringle name draw, done automatically and over SMS. Given a list of members and their phone numbers, each member is sent a text message of the name of another member (randomly drawn) from the list. The name-drawing algorithm has been written to ensure not a single person draws their own name.

## Requirements

* NodeJS
* A [Twilio](twilio.com/) account, with [SMS messaging enabled](https://www.twilio.com/docs/sms/quickstart/node#install-nodejs-and-the-twilio-module)

## Setup

1. Rename `.env.example` to `.env` and populate the missing fields as per your Twilio account
2. Rename `src/members.example.js` to `src/members.js` and populate it accordingly

## Usage

To test the name-drawing algorithm without sending any text messages, run `npm run test-draw`.

To test that you've correctly set up your Twilio account, run `npm run test-sms`.

To actually run the name draw and send a message to every person in that list, run `npm run draw`.
