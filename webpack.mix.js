const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.copy('node_modules/paper-kit-2/assets/img', 'public/assets/img');
mix.copy('node_modules/paper-kit-2/assets/fonts', 'public/assets/fonts');

mix.js('resources/js/app.js', 'public/assets/js')
   .sass('resources/sass/app.scss', 'public/assets/css');

mix.scripts([
	 	'node_modules/paper-kit-2/assets/js/jquery-ui-1.12.1.custom.min.js',
		'node_modules/paper-kit-2/assets/js/popper.js',
		'node_modules/paper-kit-2/assets/js/bootstrap-switch.min.js',
		'node_modules/paper-kit-2/assets/js/nouislider.js',
		'node_modules/paper-kit-2/assets/js/moment.min.js',
		'node_modules/paper-kit-2/assets/js/bootstrap-datetimepicker.min.js',
		'node_modules/paper-kit-2/assets/js/paper-kit.js',
  ], 'public/assets/js/paper-kit.js').version()
   .styles([
	    'node_modules/paper-kit-2/assets/css/demo.css',
	    'node_modules/paper-kit-2/assets/css/nucleo-icons.css',
  ], 'public/assets/css/paper-kit.css').version();