declare namespace unusedFilename {
	interface Options {
		/**
		Filename increase function
		*/
		incrementer?: (filename: string, extension: string, counter: number) => string;
	}
}

declare const unusedFilename: {
	/**
	Get an unused filename by appending a number if it exists: `file.txt` → `file (1).txt`.

	@param filePath - The path to check for filename collision.
	@returns Either the original `filename` or the `filename` appended with a number.
	*/
	(filePath: string, options?: unusedFilename.Options): Promise<string>;

	/**
	Synchronously get an unused filename by appending a number if it exists: `file.txt` → `file (1).txt`.

	@param filePath - The path to check for filename collision.
	@returns Either the original `filename` or the `filename` appended with a number.
	*/
	sync(filePath: string, options?: unusedFilename.Options): string;

	// TODO: Remove this for the next major release
	default: typeof unusedFilename;
};

export = unusedFilename;
