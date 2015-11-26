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

### Block

```js
expect('input input_focused').to.be.a.block('input');
```

### Element

```js
expect('input__control').to.be.an.elem({
    block: 'input',
    elem: 'control'
});
```

### Modificator

_TODO_

### Nested

_TODO_
