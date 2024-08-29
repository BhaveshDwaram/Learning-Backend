const file=require('fs');
// Synchronous Version
file.writeFileSync('./intermediate/test_sync.txt',"This is a test file created using writeFileSync.If i run again it will rewrite the original content");

// Asynchronous verison
file.writeFile('./intermediate/test_async.txt',"This is written by a async call",(err)=>{}); 


// Synchronous Version
const result =file.readFileSync("./intermediate/test_sync.txt","utf-8");// Here sunchronous read will return the content
console.log(result);

// Asynchronous verison
file.readFile("./intermediate/test_async.txt",(err,res)=>{
    if(err){
        console.log("Error Occured ! : ",err);
    }

    else{
        console.log(res);
    }
})

file.appendFileSync("./intermediate/test_sync.txt", `This is the current date : ${new Date().getDate().toLocaleString()}`);

file.cpSync("./intermediate/test_sync.txt","./intermediate/copy_sync.txt");// copy file

file.unlinkSync("./intermediate/copy_sync.txt"); // delete file

console.log(file.statSync("./intermediate/test_sync.txt"));

file.mkdirSync("new-folder/sub-file/sub-sub-file",{recursive:true}); // create directory
file.rmdirSync("./new-folder",{recursive:true}); // remove directory