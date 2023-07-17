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


### Usage

We created a demo setup template to offer the simplest connection. 
This is a web page compiled using svelte that takes in your inputs using queries and generate the forms required for a successful creation, updating, deletion of user's webhook.

The HTTPs endpoints are described [below](#api-calls)

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

Authorization: Pass Headers **Key** and **Secret**

See examples
- [Javascript](./index.js)

Functions

| Method |  Endpoint   | Function  |
|--------|-------------|-----------|
| GET    |/platforms                             |returns an object of allowed platforms
| POST   |/activation/platform?email/phone	     |create webhook
| GET    |/activations?email/phone		         |get user webhooks
| PATCH  |/activation/platform/ID?email/phone    |update a user webhook
| POST   |/upgrade/ID			                 |Add days to a user webhook
| DELETE |/activation/ID			             |schedule a webhook for deletion in 30 days


#### Error Codes

| Status Code | Description                 |
|-------------|-----------------------------|
| 200         | Success                     |
| 201         | Created                     |
| 202         | Accepted                    |
| 400         | Bad Data Request            |
| 401         | Unauthorized                |
| 402         | Payment Required            |
| 404         | Not Found                   |
| 406         | Bad User Phone/email        |
| 500         | Server Error                |









