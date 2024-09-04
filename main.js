//CRYPTO MODULE


const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

// Encrypting the string "Hello World"
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello World', 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log('Encrypted String:', encrypted);

// Generating a random string using uuid
const randomString = uuidv4();
console.log('Random UUID:', randomString);


// // OS MODULE



// const os = require('os')
// //Host name of your system
// const hostname = os.hostname()
// console.log(hostname)

// // Type of operating system

// const osType = os.type()
// console.log(osType)

// //Platform the os is running

// const Platform = os.platform()
// console.log(Platform)


// // Cpu Architecture
// const architecture = os.arch()
// console.log(architecture)

// // const Details about system cpu cores

// const cpus = os.cpus()
// console.log("Cpu cores" , cpus)


// //Total Memory

// const totalMemory = os.totalmem()
// console.log("Toal Memory" , totalMemory)

// //Free Memory
// const freeMemory = os.freemem()
// console.log("Free Memory " , freeMemory)

// //Network interface 

// const networkInterfaces = os.networkInterfaces();
// console.log('Network Interfaces:', networkInterfaces);

// // User Information

// const userInfo = os.userInfo()
// console.log('User Info:', userInfo);

// //Uptime

// const uptime = os.uptime();
// console.log('System Uptime (Hours):', uptime/3600);



// By COMMAND LINE

const os = require('os');

// Get the command-line argument
const argument = process.argv[2];

switch (argument) {
  case 'hostname':
    console.log('Hostname:', os.hostname());
    break;
  
  case 'platform':
    console.log('Platform:', os.platform());
    break;
  
  case 'arch':
    console.log('CPU Architecture:', os.arch());
    break;

  case 'cpus':
    console.log('CPU Info:', os.cpus());
    break;

  case 'memory':
    console.log('Total Memory:', os.totalmem());
    console.log('Free Memory:', os.freemem());
    break;

  case 'network':
    console.log('Network Interfaces:', os.networkInterfaces());
    break;

  case 'uptime':
    console.log('System Uptime (seconds):', os.uptime());
    break;

  case 'userinfo':
    console.log('User Info:', os.userInfo());
    break;

  default:
    console.log('Please provide a valid argument: hostname, platform, arch, cpus, memory, network, uptime, userinfo');
}


//