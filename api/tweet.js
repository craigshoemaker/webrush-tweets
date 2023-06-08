const rss = require('./rss');
const sponsors = require('./sponsors');

async function compose(rssUrl) {
  
  const episode = await rss.getLatestEpisode(rssUrl);
  const { title, content } = episode;
  const handles = sponsors.getTwitterHandles(content);
  const slug = title.toLowerCase()
    .replace(/[()\#:]/g, '')
    .replace(/[ \/]/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/,/g, '')
  ;
  
  const tweetText =
    `${title}

${episode.itunes.summary}

Listen now! 👇
https://webrush.io/episodes/${slug}

Thanks: @${handles.join(' & @')}`;

  return tweetText;
}

module.exports = { compose }
