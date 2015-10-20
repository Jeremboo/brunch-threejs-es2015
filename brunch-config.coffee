exports.config =
  # See http://brunch.io/#documentation for docs.
  files:
    javascripts:
      joinTo:
       'app.js': /^app|^bower_components/
    stylesheets:
      joinTo: 'app.css'
    templates:
      joinTo: 'app.js'
