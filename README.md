# minimal-react-native-boiler
An up-to-date and very minimal React Native boilerplate with just the essentials (navigation & redux). Most boilerplates are bloated with a huge amount of extra features, and while that is useful for many applications, it takes awfully long to learn how to use the boilerplate "correctly". This boilerplate will have you coding in minutes, and you can then add more features as you need them.

# Features

* React Native 0.51.0
* React Native Navigation 1.1.305
* React Redux 5.0.6

# Usage

To start using this boilerplate, just do the following:

```
git clone git@github.com:lappalj4/minimal-react-native-boiler.git
cd minimal-react-native-boiler

// If you wish to use the countries-example branch instead of the barebones version
git checkout countries-example

rm -rf .git .gitattributes
```

That's it! If you wish to rename the app and package names, you can run (from the root):

```
npm install -g react-native-rename
react-native-rename yourAppName
```

# Versions

**Barebones**

* `master` branch of this repository
* Contains one screen and a very minimal example of how to use redux

**Countries Example**
* `countries-example` branch of this repository ([here](https://github.com/lappalj4/minimal-react-native-boiler/tree/countries-example))
* Simple app that lists all countries, has some sort and filter functionality and navigation examples
* Showcases some best practices (in my personal opinion) regarding redux/styling/structure etc.
