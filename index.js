// READING AND WRTITING THE FILES
// const fs=require('fs')

// const text=fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(text);

// const write='THIS IS THE TEXT WRITTEN'
// fs.writeFileSync('./txt/output', write);
// console.log(write);

// const person1=fs.readFileSync('./txt/person1.txt','utf-8');
// console.log(person1);

// const person2='HI THIS THE PERSON2 SPEAKING '
// fs.writeFileSync('./txt/person2', person2 )
// console.log(person2);


//SERVER CREATING 
const http = require('http')
const url = require('url');

const server = http.createServer((req, res) => {


    const path = req.url;
    if (path === '/' || path === '/about') {
        res.end('THIS IS THE ABOUT PAGE !');
    }

    else if (path === '/product') {
        res.end('THIS IS PRODUCT PAGE !');
    }
    else {
        res.write(404);
        res.end('PAGE NOT FOUND !')

    }
    res.end('HELLO FROM SERVER!!');
});

console.log('SERVER STARTED');
server.listen(8080)


