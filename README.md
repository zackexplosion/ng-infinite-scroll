# zackexplosion-ng-infinite-scroll

An angualrjs infinite scrolling. Trigger event on scrolling to bottom.

## DEMO

![](http://i.imgur.com/VI2GtcE.gif)

Scrolling to the bottom will trigger the loading effect to load more content.

Experience it yourself:

[http://zackexplosion.github.io/ng-infinite-scroll](http://zackexplosion.github.io/ng-infinite-scroll)

## Installation

#### via bower

Run

``` bash
bower install zackexplosion-ng-infinite-scroll
```

in your angular module.

#### via rails-assets

Add the following to `Gemfile`:

``` ruby
source 'https://rails-assets.org' do
  gem 'rails-assets-zackexplosion-ng-infinite-scroll
end
```

Run `bundle` to install after that.

Then add in `application.js`:

```javascript
//= require zackexplosion-ng-infinite-scroll
```

Inject the dependency in your angular module:

```javascript
angular
.module('blog', [
    'zackexplosion-ng-infinite-scroll',
])
```

In your controller

``` javascript
$rootScope.$on('scrollToBottom', function(){      
  // do something
});
```

## Contribute

Fork & clone the project, and run the following commands in the project directory:

```bash
npm install
```

and

```bash
gulp
```

after which, open `http://localhost:8080/` in your browser.

