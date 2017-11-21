const fs = require('fs');

const readFromFile = (fileName, callback)=>{
//    const t =  fs.readFileSync(fileName,"utf-8");
//    return t;
    fs.readFile(fileName, "utf-8", (err, data) => {
        if (err){
            console.log('error:: ', err);
            throw err;
        } 
        callback(data);
        console.log('END');
    });

  };
  
    console.log('START');
    readFromFile('sample.txt', (res) => {
        console.log(res);
    });
  
  //https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options