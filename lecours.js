/* const path = require ('path');

const filename = process.argv[2];

function parsePath(filename) {
console.log(path.dirname('/test/test.txt')); // chemin dossier parent
console.log(path.basename('/tets/test.txt')); // nom complet fichier
console.log(path.extname('/test/test.txt')); // extension fichier
}

parsePath(filename); */








// MODULE URL
/*const example = new URL('https://www.google.fr/node.js/?param1=toto&param2=titi');
console.log(example.hostname); // www.google.fr
console.log(example.pathname); // /node.js/
console.log(example.search); // ?param1=toto&param2=titi
console.log(example.searchParams); // URLSearchParams { 'param1' => 'toto', 'param2' => 'titi' }
example.searchParams.forEach((key, value) => {
	console.log(key);
	// toto
    // param1
	console.log(value);
	// titi
    // param2
}); */

/*








// EXERCICE 2

const fs = require('fs');
const path = require('path');
const filename = path.join(__dirname, 'index.txt');

console.log(['titi','toto'].join());

fs.readFile(filename,(err,content) => {
	if(err) console.log(err);
	console.log(String(content)); // Mon fichier texte index
});

*/





/*
// EXERCICE 3

const { tmpdir } = require('os');
const { join } = require('path');
const fs = require('fs');

const dest_dir = join(tmpdir(), 'test');

fs.mkdir(dest_dir, (error) => {
	if(error) console.log(error);
	const dest = join(dest_dir, 'example-copy.js');

	fs.copyFile(__filename, dest, (error) => {
		if(error === null) {
			console.log("La copie vers" ${dest} " s'est bien passée.") 
			// La copie vers/var/folders/dd/t8j0xpg55pq4k63287658wpw0000gn/T/test/example-copy.js s'est bien passée.
		}
	})
})*/





/*

// EXERCICE 4

const fs = require('fs');
const path = require('path');
const filename = path.join(__dirname, 'index.txt');

fs.appendFile(filename, ' Nouveau text', function (err) {
  if (err) throw err;
});

fs.readFile(filename,(err,content) => {
	if(err) console.log(err);
	console.log(String(content)); // Mon fichier texte index
});
*/







/*
// EXERCICE 5

const os = require('os');

console.log('os.userInfo() :', os.userInfo());
const {username} = os.userInfo();
console.log('os.cpus() :', os.cpus());
const cpus = os.cpus().length;

console.log("Salut " +username+", cet ordinateur a "+cpus+" CPU");
*/





/*
// EXERCICE 6

const { type } = require('os');
const { readdir } = require('fs');

const log = (error, modules) => {
	return error ? console.error(error.message) : console.log(modules);
};

switch(type()) {
	case 'Windows_NT' : readdir('C:\\Program Files', log); break;
	case 'Linux' : readdir('/usr/bin', log); break;
	case 'Darwin' : readdir('/Applications', log); break;
};
*/




// Module EVENTS

// ex 1
/*const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('date', (date) => {
	console.log('Année : %d', date.getFullYear());
});

emitter.emit('date', new Date('2018-03-01'));
emitter.emit('date', new Date('1983-03-24'));*/


// ex 2
/*const EventEmitter = require('events');
const emitter = new EventEmitter();
const tick = () => process.stdout.write('.');
let counter = 0;

setInterval(() => {
	counter++:
	emitter.emit('date', new Date());

	if(counter === 5) {
		process.exit(0);
	}
}, 1000);

emitter.on('date', tick);

emitter.on('date', (date) => {
	if(counter === 3) {
		console.log('Année : %d', date.getFullYear());
		emitter.removeListter('date', tick);
	}	
});*/







// Module PROCESS 

//ex 1
/*const variables = Object.keys(process.env);

console.log(variables);
console.log(process.argv);*/


// ex 2
/*const { NODE_ENV } = process.env;

if(NODE_ENV === 'dev') {
	console.log('On est en mode développement');
}

console.log('mode : %s', NODE_ENV);*/






// Module HTTP

/*const { get } = require('https');
const url = 'https://oncletom.io/node.js/package.json';

get(url, (response) => {
	response.on('data', (data) => {
		console.log(data.toString());
	});
});*/

//récupérer un fichier externe : https://oncletom.io/node.js/package.json;
// Ecrire le contenu dans un fichier json en local
// Afficher le contenu du fichier généré en local via le module process
const { get } = require('https');
const url = 'https://oncletom.io/node.js/package.json';
const fs = require('fs');
const filename = 'newjsonfile.json';

get(url, (response) => {
	response.on('data', (data) => {
	fs.writeFile(filename, data, (err) => {
		  if (err) console.log(err);
		  console.log('Créé');
		  fs.readFile(filename, (err, content) => {
		  	if (err) console.log(err);
		  	process.stdout.write(content);
		  })
	});
});
});	
