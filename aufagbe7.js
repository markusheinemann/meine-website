const names = ['Max', 'Nina', 'Mai'];

// console.log(names);
// console.log(names.length)
// console.log(names[0]);
// console.log(names.reverse());

// names.push('Leon')
// console.log(names)

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (const name of names) {
    console.log(name);
}

names.forEach((name, i) => {
    console.log("Name: " + name, " Index: " + i)
})