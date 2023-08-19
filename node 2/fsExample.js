// it works on both sync and asynchronous ways

const fs =  require('fs');

fs,readFile('eamples.txt', 'utf-8', (err, data)=>{
    if (err){
        console.log(err);
        return;
    }
    console.log(data)
})

const fileContent = fs.readFileSync('eamples.txt', 'utf-8');
console.log(fileContent)

fs.writeFile('example2.txt' , 'Welcome back 2',(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log('File created successfully')
})

fs.unlink('example2.txt' , 'Welcome back 2',(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log('File Removed successfully')
})


// Adding Directory
fs.mkdir('new_Dir',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Directory Created successfully')
});

// Remove Directoty
fs.rmdir('new_Dir',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Directory Created successfully')
});

