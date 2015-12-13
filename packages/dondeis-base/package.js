Package.describe({
  name: 'dondeis-base'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');
  
  api.use('ecmascript');
  api.use('underscore');
  api.use('accounts-password');
  api.use('alanning:roles@1.2.14');
  api.use('aldeed:collection2@2.5.0');
  api.use('dburles:collection-helpers@1.0.4');

  /****************************************************************************/
  // Collections
  /****************************************************************************/
  api.addFiles([
    'schemas.js',
    'collections/questions.js'
  ]);

  /****************************************************************************/
  // Exports
  /****************************************************************************/
  api.export('Questions');
});
