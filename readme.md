# unused-filename [![Build Status](https://travis-ci.org/sindresorhus/unused-filename.svg?branch=master)](https://travis-ci.org/sindresorhus/unused-filename)

> Get an unused filename by appending a number if it exists: `file.txt` → `file (1).txt`

Useful for safely writing, copying, moving files without overwriting existing files.


## Install

```
$ npm install unused-filename
```


## Usage

```
.
├── rainbow (1).txt
├── rainbow.txt
└── unicorn.txt
```

```js
const unusedFilename = require('unused-filename');

(async () => {
	console.log(await unusedFilename('rainbow.txt'));
	//=> 'rainbow (2).txt'
})();
```


## API

### unusedFilename(filePath[, incrementer])

Returns a `Promise<string>` containing either the original `filename` or the `filename` increased by `incrementer`.

### unusedFilename.sync(filePath[, incrementer])

Returns a `string` containing either the original `filename` or the `filename` increased by `incrementer`.

#### filePath

Type: `string`

The path to check for filename collision.

#### incrementer `optional`

Type: `function`

The function to increase filename.


## Related

- [filenamify](https://github.com/sindresorhus/filenamify) - Convert a string to a valid safe filename


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
