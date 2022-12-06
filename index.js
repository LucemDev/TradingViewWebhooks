const axios = require("axios")
const API = "https://api.tradingview.to"


const config = {
    headers: {
        apiKey: "",
        apiSecret: ""
    }
}

const sendRequest = (path, method="GET", data={}) => {
    console.log("Sending API Request", path, method, "in 5 seconds")
    return new Promise(resolve => {
        setTimeout(() => {

            if (method === "GET")
                resolve(axios.get(API + path, config))

            if (method === "POST")
                resolve(axios.post(API + path, data, config))

            if (method === "DELETE")
                resolve(axios.delete(API + path, config))

        }, 5000)
    })
}

//5. Upgrade A Webhook - (IP Restriction Required)
sendRequest( "/upgrade/8zwDEkwUOMCVGyFvAUSM", "POST").then(res => {

    console.log("Webhook Expiry extended by 1 month")

}).catch(error => console.error(error.message))


return;

//1. Get Platform
sendRequest("/platforms").then(platforms => {

    console.log("Platforms", platforms.data)

    //2. Create Webhook - (Site Restriction Required)
    sendRequest("/activation", "POST", {
        phoneNumber: "254719191191",
        platform: "telegram",
        name: "John Doe",
        chat: "-123456789"
    }).then(webhook => {

        console.log("Created", webhook.data)

        //3. Get Webhooks - (Site Restriction Required)
        sendRequest( "/activations?phoneNumber=254719191191").then(webhooks => {

            console.log("Webhooks", webhooks.data)

            //4. Update Webhook - (Site Restriction Required)
            sendRequest( "/activation", "POST", {
                id: webhook.data.id,
                name: "John Doe's Telegram",
                chat: "-123456789",
                platform: "telegram"
            }).then(update => {

                console.log("Updated", update.data)

                //5. Upgrade A Webhook - (IP Restriction Required)
                sendRequest( "/upgrade/" + update.data.id, "POST").then(res => {

                    console.log("Webhook Expiry extended by 1 month")

                    //6. Delete Webhook - (Site Restriction Required)
                    sendRequest( "/activation/" + update.data.id, "DELETE")
                        .then(res => console.log("Scheduled For Deletion In"))
                        .catch(error => console.error(error.message))

                }).catch(error => console.error(error.message))

            }).catch(error => console.error(error.message))

        }).catch(error => console.error(error.message))

    }).catch(error => console.error(error.message))

}).catch(error => console.error(error.message))



