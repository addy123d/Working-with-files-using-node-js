//Playing with Files

//File Statistics
const fs = require('fs');
fs.stat('./sample.text', (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(stats.isFile()); //true
  console.log(stats.isDirectory()); //false
  console.log(stats.isSymbolicLink()); //false
  console.log(stats.size); //1024000 //= 1MB
})

//Read File

fs.readFile('./sample.text', 'utf8' , (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
})


//Write File

const content1 = 'Follow us on github too !';

fs.writeFile('./sample.text', content1, err => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("file written successfully");
})

// If you don't want to replace then use fs.appendFile()
const content2 = 'Please like and follow @crashy_code !';

fs.appendFile('./sample.text', content2, err => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("file written successfully");
})

