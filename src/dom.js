export function sls(strings, ...values) {
	let output = values
		.map((val, i) => strings[i] + val)
		.join('') +
		strings[values.length];

	return output
		.split(/(?:\r\n|\n|\r)/)
		.map(line => line.replace(/^\s+/gm, ''))
		.join(' ')
		.trim();
}
