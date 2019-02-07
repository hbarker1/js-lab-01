





let name1 = prompt ('what is your name?');
console.log(name1);

let name2 = prompt ('what is your name?');
console.log(name2);

let name3 = prompt ('what is your name?');
console.log(name3);


if (name1.length > name2.length && name1.length > name3.length)  {
    console.log (`${name1} has the longer name`);

}


else if (name1.length === name2.length) {
    console.log (`${name1} & ${name2} tie for the longest name`);
    
}

else if (name1.length === name3.length) {
    console.log (`${name1} & ${name3} tie for the longest name`);
    
}

else if (name2.length > name1.length && name2.length > name3.length) {
    console.log (`${name2} has the longer name`);

}


else if (name2.length === name1.length) {
    console.log (`${name2} & ${name1} tie for the longest name`);
    
}

else if (name2.length === name3.length) {
    console.log (`${name2} & ${name3} tie for the longest name`);
    
}

else if (name3.length > name1.length && name3.length > name2.length) {
    console.log (`${name3} has the longer name`);

}


else if (name3.length === name1.length) {
    console.log (`${name3} & ${name1} tie for the longest name`);
    
}

else if (name3.length === name2.length) {
    console.log (`${name3} & ${name2} tie for the longest name`);
    
}


