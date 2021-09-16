var axios = require('axios');
var data = JSON.stringify({
  "key": "APP_CONFIG",
  "output": {
    "WATSON_ASSISTANT": {
      "API_KEY": "Gc9-P7K8amoWjESUb5T1aIp03BPfJRLWAepWeLQg-eUz",
      "URL": "https://api.us-south.assistant.watson.cloud.ibm.com/instances/f00a3cc1-5d55-45d6-8f6b-c326dcab8aee",
      "ASSISTANTS": [
        {
          "name": "Covid19VA",
          "id": "0bb0ace2-e073-4a74-bf81-813148b3cbf9",
          "default": false
        },
        {
          "name": "HomeAutomationVA",
          "id": "fd0ac5f5-d10c-4214-8673-b0777cce5dbf",
          "default": true
        }
      ]
    },
    "WATSON_DISCOVERY": {
      "ENABLE": true,
      "API_KEY": "E3aOrw9akpapy0AGiaevDEF4cxGt7znelEXcd6fFufEa",
      "ENVIRONMENT_ID": "7a5e5c39-7299-47b8-85ee-4993a57f93ad",
      "CONFIGURATION_ID": "6c841bb8-6958-4f4d-8910-8a20d1ca96c9",
      "COLLECTION_ID": "b29fb498-40be-4a0a-a7b1-aad39647be29"
    },
    "WATSON_STT_API_KEY": "rd-K2Hh3akmlOHleAp2bxx1hN0XAan3_56K2hMtdECoh",
    "WEATHER_USERNAME": "6be9a18a-fafd-4582-9dad-cbaa61c1283b",
    "WEATHER_PASSWORD": "mqZtnVE4mJ",
    "WEATHER_URL": "https://6be9a18a-fafd-4582-9dad-cbaa61c1283b:mqZtnVE4mJ@twcservice.mybluemix.net",
    "GOOGLE_API_KEY": "AIzaSyA_xN3mG2LL27jctSXHC4eiroRvOI454SE",
    "GOOGLE_LOGIN_CLIENT_ID": "874807563899-i7po2dfrqqc9qa69jp0mudd9n3sm5485.apps.googleusercontent.com",
    "GOOGLE_LOGIN_CLIENT_SECRET": "boc_RjJYo1eJPuXSlN8RP8m6",
    "CLOUD_FUNCTIONS_CREDENTIALS": "b91976bd-22e8-4f8f-acd1-899fc7620596:jvUvYRsFHo3Hj80ZsPKD6HVDMJHA55vKd2fcMGrR3FheUZ0J4pC7QCtm7D03DVKR",
    "ENABLE_SLACK": true,
    "SLACK_BOT_USER_TOKEN": "xoxb-604673852422-604419668471-83dkNDcUpA4QkDpOg7KaeUHQ",
    "SLACK_SIGNIN_SECRET": "512e4fc74a2c413c704814d548c803aa",
    "ENABLE_MS_BOT": false,
    "MS_BOT_APP_ID": "1aea9eef-e816-4917-a971-df146ff788e4",
    "MS_BOT_APP_PASSWORD": "HZ0#@2;P0(5z9rf^R^MLb6a|Ah{",
    "MQTT_HOST_URL": "https://rqeofj.messaging.internetofthings.ibmcloud.com",
    "MQTT_CLIENT_ID": "A:rqeofj:a-rqeofj-6p40bdqnv9",
    "MQTT_USER": "a-rqeofj-6p40bdqnv9",
    "MQTT_PASSWORD": "0A@g&bdxUyfsFp@ys7"
  }
});

var config = {
  method: 'post',
  url: 'REPLACE_WITH_SERVER_URL/api/Mappings',
  headers: { 
    'Content-Type': 'application/json', 
    'Cookie': 'connect.sid=s%3A4KXwEuPrX032IPObb5GtosS_3Ze5ZNlb.N0eSgk0hqLC93qolCGcfaKAkYgjGIYyNPz6sIDGc3r4'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
