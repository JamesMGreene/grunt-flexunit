# grunt-flexunit

> A Grunt task plugin to running FlexUnit tests for apps built on Adobe Flex/ActionScript/MXML/FLV/AIR/etc.


## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the
[Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to
create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and
use Grunt plugins. Once you're familiar with that process, you may install this
plugin with this command:

```shell
npm install grunt-flexunit --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-flexunit');
```


## The "flexunit" task

### Overview
In your project's Gruntfile, add a section named `flexunit` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  flexunit: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.rawConfig
Type: `String`
Default value: `null`

A string value that is used as the raw configuration for the `flexunit` command line arguments, minus the input and output files.


### Usage Example

```js
grunt.initConfig({
  flexunit: {
    example1: {
      'docs/': ['src/example.as']
    },
  }
});
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## Release History
 - 0.1.0: Published to NPM on 2014-02-12.
    - Initial release.


## License
Copyright (c) 2014 James M. Greene  
Licensed under the MIT license.
