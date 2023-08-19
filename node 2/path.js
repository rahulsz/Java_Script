const path = required('path');


console.log(_filename)    // it gives full path
console.log(_filename)    // it gives directory name


console.log(path.basename(_filename) )   // it gives basename
console.log(path.basename(_dirname) )   // it gives base directory name


console.log(path.join('/hello', '/hello', 'file1.txt')) 


