
const twitterHandles = {
  "ag-grid": "ag_grid",
  "nrwl": "nrwl_io",
  "narwhal": "nrwl_io",
  "ideablade": "IdeaBlade",
  "lemon-productions": "RealLemonHead",
  "iconic-framewok": "ionicframework"
};

function getSponsorKeys(content) {
  const matches = content.match(/sponsor\: ?(.*?)?\</gi);
  const keys = matches.map(match => {
    return match
      .replace(/sponsor\: ?/i, '')
      .replace(/</, '')
      .replace(/ /g, '-')
      .toLowerCase();
  });

  return keys;
}

function getTwitterHandles(content) {
  const keys = getSponsorKeys(content);
  const sponsorHandles = keys.map(key => twitterHandles[key]);
  return sponsorHandles;
};

module.exports = { getTwitterHandles };
