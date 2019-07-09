declare namespace unusedFilename {
	interface Options {
		/**
		Filename increase function.

		@param filename - The filename of filePath.
		@param extension - The extension of filePath.
		@param counter - Tried count.
		@returns Modified filename to try

		@example

		```js
		(async () => {
			const filename = await unusedFilename('rainbow.txt', {
				incrementer(filename, extension, counter) {
					return `${filename}${'_'.repeat(counter)}${extension}`
				}
			})

			console.log(filename);
			//=> 'rainbow__.txt'
		})();
		```

		*/
		readonly incrementer?: (filename: string, extension: string, counter: number) => string;
	}
}

declare const unusedFilename: {
	/**
	Get an unused `filename` increased by `option.incrementer` if it exists: `file.txt` → `file (1).txt`.

	@param filePath - The path to check for filename collision.
	@returns Either the original `filename` or the `filename` increased by `option.incrementer`.
	*/
	(filePath: string, options?: unusedFilename.Options): Promise<string>;

	/**
	Synchronously get an unused `filename` increased by `option.incrementer` if it exists: `file.txt` → `file (1).txt`.

	@param filePath - The path to check for filename collision.
	@returns Either the original `filename` or the `filename` increased by `option.incrementer`.
	*/
	sync(filePath: string, options?: unusedFilename.Options): string;

	// TODO: Remove this for the next major release
	default: typeof unusedFilename;
};

export = unusedFilename;
