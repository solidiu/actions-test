import * as fs from 'fs';
import fetch from 'node-fetch';

async function run() {
	const url =
		'https://raw.githubusercontent.com/solidiu/actions-test/main/api_cache.json';
	const raw_data = await fetch(url);
	const data = await raw_data.json();
	
	data.date = Date.now();

	const content = JSON.stringify(data, null, 4);

	fs.writeFile('./api_cache.json', content, (err) => {
		if (err) {
			console.error(err);
		} else {
			console.log(
				'Successfully wrote ' + content + ' to the cache file.'
			);
		}
	});
}

run();
