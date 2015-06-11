# zackexplosion-ngLoading

A simple angualrjs http loading effect. It displays the following image when waiting for ajax.

![](http://i.imgur.com/OzH16jz.gif)

## Installation

#### via bower

Run

```
bower install zackexplosion-ngLoading
```

in your angular module.

#### via rails-assets

Add the following to `Gemfile`:

```ruby
source 'https://rails-assets.org' do
  gem 'rails-assets-zackexplosion-ngLoading'
end
```

Run `bundle` to install after that.

Then add in `application.js`:

```javascript
//= require zackexplosion-ngLoading
```

Add in `application.css.scss`:

```scss
@import "zackexplosion-ngLoading";
```

Inject the dependency in your angular module:

```javascript
angular
.module('blog', [
    'zackexplosion-ngLoading',
])
```

And add the following tag in your root html template, right after `body` tag:

```html
<body>
<div id="zackexplosion-ng-loading" data-ng-show="zackexplosion_loading" class="whirly-loader">
  Loading…
</div>
...
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

Edit `sass/zackexplosion.ng-loading.scss` for different styling!
