const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest() {
        console.log('Test');
    },
};

options.makeTest();

/* console.log(options.name);

delete options.name;

console.log(options); */

/* let counter = 0;

for (const key in options) {
    if (typeof (options[key]) === 'object') {
        
        for (const i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter += 1;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter += 1;
    }
} */

console.log(Object.keys(options).length);
