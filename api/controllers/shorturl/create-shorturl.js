module.exports = {
  friendlyName: 'Create shorturl',
  description: '',
  inputs: {
    url: {
      type: 'string',
      isURL: true,
      required: true
    }
  },
  exits: {
    success: {
      responseType: 'redirect'
    }
  },
  fn: async function ({ url }) {
    await ShortUrl.create({ url });
    return '/';

  }


};
