var webpackConfig = require('./webpack.config.js')
webpackConfig.devtool = 'inline-source-map'
// process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',
        reportSlowerThen: 5000,


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai'],


        // list of files / patterns to load in the browser
        files: [
          'tests/*.js'
        ],


        // list of files / patterns to exclude
        exclude: [
        ],


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // possible values: config.LOG_DISABLE || config.LOG_ERROR 
        //     || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,

        autoWatch: true,
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // browsers: ['MyHeadlessChrome'],
        browsers: ['Chrome', 'MyHeadlessChrome'],
        customLaunchers: {
          MyHeadlessChrome: {
            base: 'ChromeHeadless',
            flags: ['--disable-translate', '--disable-extensions', '--remote-debugging-port=9222']
          }
        },


        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
        preprocessors: {
          // add webpack as preprocessor
          'tests/*.js': ['webpack', 'sourcemap'],
          'src/terminal7.js': ['webpack', 'sourcemap'],
        },

        webpack: webpackConfig,

        webpackMiddleware: {
          // webpack-dev-middleware configuration
          // i. e.
          stats: 'errors-only',
        },

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,
        mochaReporter: {
            showDiff: true
        }
    })
}
