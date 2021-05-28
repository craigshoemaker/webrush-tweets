const tweet = require('../tweet');

module.exports = async function (context, req) {
    const text = await tweet.compose('https://feeds.simplecast.com/tOjNXec5');
    context.res = {
        body: text
    };
}