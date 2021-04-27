module.exports = {
  friendlyName: 'Index',
  description: 'Index home.',
  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/index'
    }
  },
  fn: async function () {
    const shortUrls = await ShortUrl.find().sort('createdAt DESC');
    return { shortUrls };
  }
};
