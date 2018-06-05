function attr_fix(key, value) {
	if(typeof value === 'object') {
		value = Object
			.keys(value)
			.map(key => `${key}:${value[key]}`)
			.join(';');
	}

	return `${key}="${value}"`;
}

export default function dom(type, attributes, ...children) {
	const attr = Object
		.keys(attributes || {})
		.map(key => attr_fix(key, attributes[key]))
		.join(' ');

	 return `<${type} ${attr}> ${children.join('')} </${type}>`;
}

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


