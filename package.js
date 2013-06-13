Package.describe({
  summary: "Aloha Editor -- HTML5 contentEditable WYSIWYG editor"
});

Package.on_use(function (api) {
  // @todo check why loading is not working anymore
  // -- all files need to be added to the html file manually
  api.add_files('lib/require.js', 'client');
  api.add_files('lib/vendor/jquery-1.8.2.js', 'client');
  api.add_files('aloha-editor-config.js', 'client');
  api.add_files('lib/aloha.js', 'client');
  api.add_files('css/aloha.css', 'client');
});
