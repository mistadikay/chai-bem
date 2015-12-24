Chai assertions for BEM class names
---

[![npm](https://img.shields.io/npm/v/chai-bem.svg?style=flat-square)](https://www.npmjs.com/package/chai-bem)
[![downloads](https://img.shields.io/npm/dm/chai-bem.svg?style=flat-square)](https://www.npmjs.com/package/chai-bem)
[![travis](http://img.shields.io/travis/mistadikay/chai-bem.svg?style=flat-square)](https://travis-ci.org/mistadikay/chai-bem)
[![coverage](http://img.shields.io/coveralls/mistadikay/chai-bem/master.svg?style=flat-square)](https://coveralls.io/r/mistadikay/chai-bem)
[![deps](http://img.shields.io/david/mistadikay/chai-bem.svg?style=flat-square)](https://david-dm.org/mistadikay/chai-bem)

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

* `block` method
* `validBlock` property

Examples:

```js
// check if it's an `input` block
expect('input input_focused').to.be.a.block('input');

// or you can just check if it's a valid block at all
expect('input input_focused').to.be.a.validBlock;

// this will throw an error
expect('input__control').to.be.a.validBlock;
```

### Element

* `elem` method
* `validElem` property

```js
expect('input__control').to.be.an.elem({
    block: 'input',
    elem: 'control'
});

// is it a valid element at all
expect('input__control').to.be.a.validElem;

// this will throw an error
expect('input').to.be.a.validElem;
```

### Modificators

* `mods` method

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
    position: 'left'
});

// this will throw an error because both mods were expected
expect('menu__item menu__item_size_big menu__item_position_left').to.have.mods({
    size: 'small',
    position: 'left'
});

// you can check boolean modificators as well (both explicit and implicit)
expect('menu menu_visible_true').to.have.mods({
    visible: true
});
expect('menu menu_visible').to.have.mods({
    visible: true
});
```

### BEMJSON

* `bemjson` or `bem` method

```js
// block with a couple of mods
expect('input input_focused input_color_black').to.be.bem({
    block: 'input',
    mods: {
        focused: true,
        color: 'black'
    }
});

// element with a couple of mixes
expect('input__control random some__stuff').to.be.bem({
    block: 'input',
    elem: 'control',
    mix: [
        {
            block: 'random'
        },
        {
            block: 'some',
            elem: 'stuff'
        }
    ]
});
```

### `.not`

`.not` is supported for all assertions excluding `bemjson`. Examples:

```js
expect('button_big').to.not.be.a.validBlock;

expect('menu__item').to.not.have.mods({
    size: 'small',
    position: 'left'
});
```
