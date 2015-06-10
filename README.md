# zackexplosion-ng-infinite-scroll

A angualrjs infinite scrolling. Trigger events on scrolling to bottom.

## Installation

#### via bower

Run

```
bower install zackexplosion-ng-infinite-scroll
```

in your angular module.

#### via rails-assets

Add the following to `Gemfile`:

```ruby
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

If you have any ajax request, the circle effect should pop up when loading ajax.

## Contribute

Fork & clone the project, and run the following commands in the project directory:

```
npm install
```

and

```
gulp
```

after which, open `http://localhost:8080/` in your browser.

