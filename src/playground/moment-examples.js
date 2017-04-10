var moment = require('moment');

console.log(moment().format());

/*
Unix Timestamps

January 1st, 1970 @ 12:00am -> 0
January 1st, 1970 @ 12:01am -> 60 (as in seconds)

*/

var now = moment();

//number of seconds since 01/01/1970 @ 12:00 AM
console.log('Current timestamp', now.unix());

var timestamp = 1491780642;
var currentMoment = moment.unix(timestamp);

console.log('current moment', currentMoment.format('MMM D, YYYY @ hh:mm A'))

//April 4th, 2017 @ 12:13 AM
console.log('current moment test', currentMoment.format('MMMM Do, YYYY @ hh:mm A'))
