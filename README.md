# markdown-it-br

[![Build Status](https://img.shields.io/travis/jay-hodgson/markdown-it-br/master.svg?style=flat)](https://travis-ci.org/jay-hodgson/markdown-it-br)
[![NPM version](https://img.shields.io/npm/v/markdown-it-br.svg?style=flat)](https://www.npmjs.org/package/markdown-it-br)
[![Coverage Status](https://img.shields.io/coveralls/jay-hodgson/markdown-it-br/master.svg?style=flat)](https://coveralls.io/r/jay-hodgson/markdown-it-br?branch=master)

> Center text plugin for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser.

__v1.+ requires `markdown-it` v4.+, see changelog.__

`->Centered Text<-` => `<div style="text-align: center;">Centered Text</div>`


## Install

node.js, browser:

```bash
npm install markdown-it-br --save
bower install markdown-it-br --save
```

## Use

```js
var md = require('markdown-it')()
            .use(require('markdown-it-br'));

md.render('protect <br> from the input') // => 'protect <br> from the input'

```

The widgetparams can be used to determine what kind of html widget should be rendered in the output container.

_Differences in browser._ If you load script directly into the page, without
package system, module will add itself globally as `window.markdownitBr`.


## License
[MIT](https://github.com/jay-hodgson/markdown-it-br/blob/master/LICENSE)
