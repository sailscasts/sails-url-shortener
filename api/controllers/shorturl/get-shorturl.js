module.exports = {
  friendlyName: 'Get shorturl',
  description: '',
  inputs: {
    shortId: {
      type: 'string',
      description: 'The short url identifier',
      required: true
    }
  },
  exits: {
    success: {
      responseType: 'redirect'
    },
    notFound: {
      responseType: 'notFound'
    }
  },
  fn: async function ({ shortId }) {
    const shortUrl = await ShortUrl.findOne({ short: shortId });
    if (!shortUrl) {throw 'notFound';}
    const newClicks = shortUrl.clicks + 1;
    await ShortUrl.updateOne({ id: shortUrl.id}).set({
      clicks: newClicks
    });
    return shortUrl.url;
  }
};
