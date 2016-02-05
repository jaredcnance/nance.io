var VALID_DEPLOY_TARGETS = [ //update these to match what you call your deployment targets
  'dev',
  'qa',
  'prod'
];

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    redis: {
      allowOverwrite: true,
      keyPrefix: 'nance:index',
      host: 'ec2-54-227-246-40.compute-1.amazonaws.com',
      port: '15009',
      password: 'p6mppjonhutllh4sjngemdq0mqt'
    },
    s3: {
      prefix: 'nance',
      filePattern: '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2}'
    }
  };
  if (VALID_DEPLOY_TARGETS.indexOf(deployTarget) === -1) {
    throw new Error('Invalid deployTarget ' + deployTarget);
  }

  if (deployTarget === 'dev') {
    ENV.build.environment = 'development';
    ENV.redis.url = 'redis://0.0.0.0:6379/';
    ENV.plugins = ['build', 'redis']; // only care about deploying index.html into redis in dev
  }

  if (deployTarget === 'qa' || deployTarget === 'prod') {
    ENV.build.environment = 'production';
    ENV.s3.accessKeyId = 'AKIAJH3XKIAZJYDRTSAQ';
    ENV.s3.secretAccessKey = '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';
    ENV.s3.bucket = 'nance-io';
    ENV.s3.region = 'us-west-2';
  }

  if (deployTarget === 'qa') {

  }

  if (deployTarget === 'prod') {

  }

  return ENV;

}
