const { program } = require('commander');
const fs = require('fs');




program.name('counter')
.description('Custom CLI')
.version('0.1.0');

program.command('count')
.description('Counts numbber of words in a file')
.argument('<file >', 'File path and name')
.action((file)=>{
  let count=0;
  fs.readFile(file, "utf-8", (err, data)=>{
   const splitArray= data.split(" ");
   console.log(splitArray.length);
   count =splitArray.length
  })
  
})

program.parse();



