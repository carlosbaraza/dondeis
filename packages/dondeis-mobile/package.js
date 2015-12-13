Package.describe({
  name: 'dondeis-mobile',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  var where = 'web.cordova';

  api.versionsFrom('1.2.1');
  api.use('driftyco:ionic', where);
  api.use('angular@1.3.0');
  api.use('dondeis-base', where);

  /****************************************************************************/
  // Angular Logic
  /****************************************************************************/
  // Config
  api.addFiles([
    'lib/app.js',
    'lib/routes.js'
  ], where);

  // Controllers
  api.addFiles([
    'controllers/questions/list.js',
    'controllers/questions/new.js'
  ], where);

  // Layout
  api.addFiles(['views/index.html'], where);

  /****************************************************************************/
  // Templates
  /****************************************************************************/
  api.addFiles([
    'views/home.html',
    'views/questions/list.html',
    'views/questions/new.html'
  ], where);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('dondeis-mobile');
});
