# TradingView To Anywhere

### This is an API to create webhooks using [TradingView.To/Anywhere](https://tradingview.to) for clients that can be used to automate alerts to anywhere you want them to go.

---

### Supported Platforms
- Telegram
- Discord
- Googlesheet
- Metatrader 4
- Metatrader 5
- Binance
- Binance US
- Bybit
- IQ Option
- Kucoin


---

### Access

The API is accessed via https endpoint. An API key and Secret is required as Authorization to create, update or delete any webhooks.
To get your API Keys, Visit [TTA Dashboard](https://dashboard.tradingview.to)


#### API calls

BASE URL Endpoint: https://api.tradingview.to

Authorization: Pass Headers/Query Params **Key** and **Secret**

See examples
- [Javascript](./index.js) using axios

##### Functions

| Method |  Endpoint   | Function                                   | Permission |
|--------|-------------|--------------------------------------------|------------|
| GET    |/platforms                     | returns an object of allowed platforms     | 1          |
| POST   |/activation/{PLATFORM_ID}	     | create webhook                             | 2          |
| GET    |/activations	         | get users webhooks                         | 1          |
| PATCH  |/activation/{PLATFORM_ID}/{WEBHOOK_ID} | update a user webhook    | 2          |        
| POST   |/upgrade/ID			                 | Add days to a user webhook     | 1          |       
| DELETE |/activation/ID			             | schedule a webhook for deletion in 30 days | 2          |


###### Notes

Each platform returned contain an array of required fields in **setup** field. If the input is empty, then that is not a required step. The name of the input is included in the tag. For example. Telegram requires an input __number__ named tag __chat__. **Name** Field is required for each webhook.

Creating or Updating a webhook requires a user email or phone passed in the query. Example `/activation/telegram?email=test@email.com`



##### Permission Levels

| Level |   Description |
|-------|---------------|
| 1     |   API Key& Secret Required |
| 2     |   User Email/Phone Required |
| 3     |   IP Address Lock |


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









