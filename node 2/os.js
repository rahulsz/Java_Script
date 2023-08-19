const os = required('os');

const freeMemory = os.freeMemory();

console.log(freeMemory);
console.log(os.arch());
console.log(os.userInfo());


const obj = {
    type: os.type(),
    user: os.userInfo(),
    release : os.release(),

}

console.log(obj);