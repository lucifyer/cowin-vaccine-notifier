const emailHelper = require('./emailHelper.js')
const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://cdn-api.co-vin.in',
    headers: { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36" }
});
let counter = 0
let found = false

const doShit = (instance) => {
    instance.get('/api/v2/appointment/sessions/public/calendarByPin?pincode=590001&date=11-05-2021')
        .then(response => {
            found = false
            counter++;
            response.data.centers.forEach(center => {
                center.sessions.forEach(session => {
                    if (session.min_age_limit === 18 && session.available_capacity > 0) {
                        found = true
                        const message = 'Booking open at ' + center.name + ', ' + center.pincode + ' on ' + session.date
                        console.log(message)
                        emailHelper.sendEmail('gawasvishnu26@gmail.com', message)
                    }
                })
            })
            if (!found) {
                console.log('None found at iteration', counter)
            }
        })
        .catch(err => console.log('error', err))
}

console.log('App Initializing...')
setInterval(doShit, 60000, instance)