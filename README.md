# Cowin Vaccine Slot Notifier

## Description

This is a node script developed to hit the API provided by Government of India regarding the Cowin vaccine information and fetch the slots and if available notify the user.

## Running

First install the node dependencies

`$ npm i`

Then run the app using

`$ node app.js`

You can use forever to run the script as well

`$ forever start app.js`

### Tips to run

> This will have it running in background and send you an email notification when slots open up. This can be run on your local machine or you can set it up on a raspberry pi to run 24*7 and have you notified via email immediately.
> If you plan to deploy this on a server, please make a not the APIs exposed by API setu can be hit only via an Indian IP address. So make sure the application server is in India. Heroku in this case will most likely not work as it has its servers abroad.

### Working

The basic flow is hit the API to fetch the current slots information.
Check if slots allow vaccine for above 18, and have availabilty -> If Yes, send an email notification and log it.
If not, log it and continue execution
Repeat the call at a certain interval 1 minute in this case.

### Dependencies

[API Setu Documentation link](https://apisetu.gov.in/public/api/cowin#/)
+ To recieve slot information via publicly exposed APIs
[NodeMailer Doucmentation](https://nodemailer.com/smtp/well-known/)
+ To send Email notification
[Axios](https://www.npmjs.com/package/axios)
+ To make REST API calls