const chalk = require('chalk')
const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=dfd2a147bdd22abf1daae4278fe7d866&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)

    request({ url , json: true }, (error, {body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        }
        else if(body.error){
            callback('Unable to find location.', undefined)
        }
        else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.' + ' It is ' + body.current.cloudcover + '% cloudy and ' + body.current.humidity + '% humid.')
        }
    })
}

module.exports = forecast