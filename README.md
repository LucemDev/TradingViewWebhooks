# TradingView To Anywhere

### This is an API to create webhooks using [TradingView.To](https://tradingview.to) for clients that can be used to automate alerts to anywhere you want them to go.

---

### Supported Platforms
- telegram
- discord
- google sheet

---

### Access

The API is accessed via https endpoint. An API key and Secret is required as Authorization and User Phone Number to create, update or delete any webhooks
1. Setup Web Template
2. Sample Calls


You can get your API keys by filling this form here, and the admins will get back to you
// create a form to collect site, name, email, purpose details


### Usage

In this demo, we will use axios, a JavaScript Request library to make https calls.

We created a demo setup template to offer the simplest connection. 
This is a web page compiled using svelte that takes in your inputs using queries and generate the forms required for a successful creation, update, delete of a ussers webhook.

#### Web Template

  ![image](https://user-images.githubusercontent.com/22216995/205655533-276b4a60-c888-4af6-99d5-7ea07c392b98.png)

https://sell.tradingview.to/setup.html?apiKey=XXXXXXXXXX&apiSecret=XXXXXXXXXX-XXX-XXXXXXXXXX&phoneNumber=1234567890

Params required: 
1. apiKey &
2. apiSecret: you receive after approval
3. phoneNumber: clients phone number
4. limit: Maximum number of webhooks for a user. Default is 3


#### API calls

Endpoint: https://api.tradingview.to

Authorization: Pass Headers **apiKey** and **apiSecret**

Functions
```
GET /platforms -> returns an object of allowed platforms

POST /activation \
    body requires {phoneNumber, platform, name} and platform input requirements \
    if id is passed, an update to the id is made if the webhook is valid
    -> returns a new webhook if successful

GET /activations?phoneNumber=1234567890 \
    optional param phoneNumber \
    -> returns a list of webhooks

POST /upgrade/id -> requests an upgrade to the webhook id

DELETE /activation/id -> schedules webhook deletion in 30 days
```








