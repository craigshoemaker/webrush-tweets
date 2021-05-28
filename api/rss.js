const Parser = require('rss-parser');
const parser = new Parser();

async function getLatestEpisode(rssUrl) {
  try {

    if (!rssUrl || rssUrl.length === 0) {
      throw new Error('Invalid rssUrl.');
    }

    const feed = await parser.parseURL(rssUrl);
    let episode = {};

    if (feed.items.length > 0) {
      episode = feed.items[0];
    }

    return episode;

  } catch (ex) {
    console.log(ex);
    throw ex;
  }
}

module.exports = { getLatestEpisode };
