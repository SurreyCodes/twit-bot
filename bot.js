console.log("Hello user, the SCC bot is online")

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var tweet = {
  status: 'Hi @lespinalrivera! What did you code today? #Surreycodes'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
  if (err) {
    console.log('could not be tweeted');
  } else {
    console.log("I'm ALIVE!!");
  }
}

// var retweet = function() {
//   var params = {
//     q: '#surreycode, #surreycodes, #surreycodecamp',
//     result_type: 'recent',
//     lang: 'en'
//   }
//
//   T.get('search/tweets', params, gotData);
//
//   function gotData(err, data, response) {
//     if (!err) {
//       var retweetId = data.statuses[0].id_str;
//       Twitter.post('statuses/retweet/:id', {
//         id:retweetId
//       }, function(err, response) {
//         if (response) {
//           console.log('Retweeted!');
//         }
//         if (err) {
//           console.log('I Could not Retweet :( Something is wrong.')
//         }
//       });
//     }
//     else {
//       console.log('uh oh, something went wrong while searching')
//     }
//   }
//
// }
