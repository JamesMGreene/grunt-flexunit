# grunt-flexunit

> A Grunt task plugin to run FlexUnit tests for apps built on Adobe Flex/ActionScript/MXML/Flash/AIR/etc.


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
      // This doesn't work yet... still vaporware!
    },
  }
});
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## Release History
 - None yet! :weary:


## License
Copyright (c) 2014-2015 James M. Greene  
Licensed under the MIT license.


## Background Information on FlexUnit

### External Resources

#### Documentation

With the release of Apache FlexUnit 4.2.0, the Apache contributor team
ever-so-thankfully revamped the [FlexUnit tutorial series](http://flex.apache.org/flexunit/tutorial/)! :+1:

##### Tutorial Units

 1. [Introducing FlexUnit 4.2](http://flex.apache.org/flexunit/tutorial/flexunit/Unit-1.html)
 2. [Overview of Testing Terms and Terminology](http://flex.apache.org/flexunit/tutorial/flexunit/Unit-2.html)
 3. [FlexUnit Capabilities](http://flex.apache.org/flexunit/tutorial/flexunit/Unit-3.html)
 4. [FlexUnit Basics](http://flex.apache.org/flexunit/tutorial/flexunit/Unit-4.html)
 5. [Developing Static Tests](http://flex.apache.org/flexunit/tutorial/flexunit/Unit-5.html)
 6. [Working with the Test Fixture](http://flex.apache.org/flexunit/tutorial/flexunit/Unit-6.html)
 7. [Using Suites](http://flex.apache.org/flexunit/tutorial/flexunit/Unit-7.html)
 8. [FlexUnit Theories](http://flex.apache.org/flexunit/tutorial/flexunit/Unit-8.html)
 9. [External Data](http://flex.apache.org/flexunit/tutorial/flexunit/Unit-9.html)
 10. [Mock Classes](http://flex.apache.org/flexunit/tutorial/flexunit/Unit-10.html)
 11. [Parameterized Tests](http://flex.apache.org/flexunit/tutorial/flexunit/Unit-11.html)
 12. [Running Tests from Different Versions](http://flex.apache.org/flexunit/tutorial/flexunit/Unit-12.html)
 13. [Working with Asynchronous Operations](http://flex.apache.org/flexunit/tutorial/flexunit/Unit-13.html)
 14. [UIComponents](http://flex.apache.org/flexunit/tutorial/flexunit/Unit-14.html)
 15. [Creating Testable Code](http://flex.apache.org/flexunit/tutorial/flexunit/Unit-15.html)
 16. [Allowing Your Tests to Function with Continuous Integration](http://flex.apache.org/flexunit/tutorial/flexunit/Unit-16.html)


#### Source Code

 - [Repo](https://fisheye6.atlassian.com/browse/flex-flexunit-git)

 - [Nightly build report](https://builds.apache.org/job/flex-flexunit/)

 - [Ant Task](https://fisheye6.atlassian.com/browse/flex-flexunit-git/FlexUnit4AntTasks/src/org/flexunit/ant/tasks/FlexUnitTask.java)
     - [TestRun class](https://fisheye6.atlassian.com/browse/flex-flexunit-git/FlexUnit4AntTasks/src/org/flexunit/ant/tasks/TestRun.java)
     - [Compilation class](https://fisheye6.atlassian.com/browse/flex-flexunit-git/FlexUnit4AntTasks/src/org/flexunit/ant/tasks/Compilation.java)
 - [Ant AIR Player Launcher](https://fisheye6.atlassian.com/browse/flex-flexunit-git/FlexUnit4AntTasks/src/org/flexunit/ant/launcher/commands/player/AdlCommand.java)


#### Downloads
 - [Releases on Apache](http://flex.apache.org/download-flexunit.html)
     - e.g. one mirror's binary download for [Release 4.2.0](http://mirror.symnds.com/software/Apache/flex/flexunit/4.2.0/binaries/apache-flex-flexunit-4.2.0-4.12.0-bin.zip)

### Older External Resources

#### Documentation
 - [Main Page](https://cwiki.apache.org/confluence/display/FLEX/FlexUnit)
 - Tutorial Series
     1. [Introduction](https://cwiki.apache.org/confluence/display/FLEX/FlexUnit+Introduction)
     2. [Getting Started](https://cwiki.apache.org/confluence/display/FLEX/FlexUnit+Getting+Started)
     3. [Setting up a FlexUnit 4 Project](https://cwiki.apache.org/confluence/display/FLEX/FlexUnit+Setting+up+a+project)
     4. [Terminology](https://cwiki.apache.org/confluence/display/FLEX/FlexUnit+Terminology)
     5. [Writing a Basic Test](https://cwiki.apache.org/confluence/display/FLEX/FlexUnit+Writing+a+basic+test)
     6. [Writing an Asynchronous Test](https://cwiki.apache.org/confluence/display/FLEX/FlexUnit+Writing+an+AsyncTest)
     7. [Using Asynchronous Startup](https://cwiki.apache.org/confluence/display/FLEX/FlexUnit+Using+Asynchronous+Startup)
     8. [Assigning Order to your Tests](https://cwiki.apache.org/confluence/display/FLEX/FlexUnit+Order)


#### Source Code

 - [Repo](https://github.com/flexunit/flexunit/)

 - [Ant Task](https://github.com/flexunit/flexunit/blob/master/FlexUnit4AntTasks/src/org/flexunit/ant/tasks/FlexUnitTask.java)
     - [TestRun class](https://github.com/flexunit/flexunit/blob/master/FlexUnit4AntTasks/src/org/flexunit/ant/tasks/TestRun.java)
     - [Compilation class](https://github.com/flexunit/flexunit/blob/master/FlexUnit4AntTasks/src/org/flexunit/ant/tasks/Compilation.java)
 - [Ant AIR Player Launcher](https://github.com/flexunit/flexunit/blob/7d4c01cdcdb003f24a1b4a4dd9126598564a243c/FlexUnit4AntTasks/src/org/flexunit/ant/launcher/commands/player/AdlCommand.java)


#### Downloads
 - [Releases on GitHub](https://github.com/flexunit/flexunit/releases)


### Ancient External Resources

#### Documentation
 - [Home page on SourceForge](http://sourceforge.net/adobe/flexunit/home/FlexUnit/)

#### Source Code
 - _???_

#### Downloads
 - [SourceForge "Downloads" page](http://sourceforge.net/adobe/flexunit/wiki/Downloads/)
