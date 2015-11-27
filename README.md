Chai assertions for BEM class names
---

[![npm](https://img.shields.io/npm/v/chai-bem.svg?style=flat-square)](https://www.npmjs.com/package/chai-bem)
[![travis](http://img.shields.io/travis/mistadikay/chai-bem.svg?style=flat-square)](https://travis-ci.org/mistadikay/chai-bem)
[![coverage](http://img.shields.io/coveralls/mistadikay/chai-bem/master.svg?style=flat-square)](https://coveralls.io/r/mistadikay/chai-bem)
[![deps](http://img.shields.io/david/mistadikay/chai-bem.svg?style=flat-square)](https://david-dm.org/mistadikay/chai-bem)

WIP

## Install
```
npm i chai-bem
```

## Usage

Plug-in the plugin first:
```js
import chai from 'chai';
import chaiBEM from 'chai-bem';

chai.use(chaiBEM());
```

You can set optional BEM naming rules (default values and available options are the same as in [bem-naming](https://github.com/bem/bem-naming#custom-naming-convention)), for example:
```js
chai.use(chaiBEM({
    elem: '-',
    mod: '--',
    wordPattern: '[a-zA-Z0-9]+'
}));
```

Both classNames and DOM elements are supported:

```js
expect('input input_focused').to.be.a.block('input');
expect(document.getElementById('someInput')).to.be.a.block('input');
```

### Block

* `__block__` method
* `__validBlock__` property

Examples:

```js
// you can check plain classNames
expect('input input_focused').to.be.a.block('input');

// you can just check if it's a valid block at all
expect('input input_focused').to.be.a.validBlock;

// this will throw an error
expect('input__control').to.be.a.validBlock;
```

### Element

* `__elem__` method
* `__validElem__` property

```js
expect('input__control').to.be.an.elem({
    block: 'input',
    elem: 'control'
});

// you can just check if it's a valid element at all
expect('input__control').to.be.a.validElem;

// this will throw an error
expect('input').to.be.a.validElem;
```

### Modificators

* `__mods__` method

```js
// you can check one modificator (both block and element mods are supported)
expect('sidebar sidebar_color_dark').to.have.mods({
    color: 'dark'
});
expect('menu__item menu__item_size_big').to.have.mods({
    size: 'big'
});

// or you can check a bunch
expect('menu__item menu__item_size_big menu__item_position_left').to.have.mods({
    size: 'big',
    position: left
});

// this will throw an error because both mods were expected
expect('menu__item menu__item_size_big menu__item_position_left').to.have.mods({
    size: 'small',
    position: left
});

// you can check boolean modificators as well (both explicit and implicit)
expect('menu menu_visible_true').to.have.mods({
    visible: true
});
expect('menu menu_visible').to.have.mods({
    visible: true
});
```

### Nested

_TODO_

### `.not`

Examples:
```js
expect('button_big').to.not.be.a.validBlock;

expect('menu__item').to.not.have.mods({
    size: 'small',
    position: left
});
```
