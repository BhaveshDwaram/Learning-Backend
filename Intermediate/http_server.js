// basic http server

// const http=require('http');
// const fs=require('fs');

// const server =http.createServer((req,res)=>{
//     if(req.url==="/favicon.ico") return res.end();
//     const log=`${Date.now()} : ${req.url} : New Connection Request received.. \n`
//     fs.appendFile('./intermediate/logs.txt',log,(err,data)=>{
//         switch(req.url){
//             case "/" :
//             res.end("This is Landing page !")
//             break;

//             case "/home" :
//             res.end("This is home page !")
//             break;

//             case "/about" :
//             res.end("This is about page !")
//             break;

//             case "/login" :
//             res.end("This is login page !")
//             break;

//             default :
//             res.end("404 page Not found!")
//             break;
//         };
      
//     })
    

// });

// server.listen(5000,()=>{
//     console.log("Listening on port 5000");
// })



// Http server which handels urls and pasre them.
// parsing means breaking the url into smaller components

const http= require('http');
const fs=require('fs');
const url =require('url'); // Third party package installed from website npmjs

function myHandler(req,res){
    if(req.url==="/favicon.ico") return res.end();
    const log=`${Date.now()} : ${req.method}: ${req.url} : New Connection Request received.. \n`

    // const myurl=url.parse(req.url);
    const myurl=url.parse(req.url,true); // enabling second parameter will also enable parsing query paramater
    
    fs.appendFile('./intermediate/logs.txt',log,(err,data)=>{
        // console.log(myurl);  // This will give the entire url contents
        const username=myurl.query.username ||" default : tester"; // default value is tester
        const search=myurl.query.search_query;
        const userid=myurl.query.userid ||0;
        switch(myurl.pathname){ // here for routing we just nedd pathname so thats why we first parsed the req.url
                             // and obtained pathname which dont include paramters unlike path or href
            case "/" :
            res.end(`Hi ${username} this is Landing page !`)
            break;

            case "/home" :
            res.end(`Hi ${username} this is home page !` )
            break;

            case "/about" :
            res.end(`Hi ${username} this is about page !` )
            break;

            case "/signup":
            if(req.method==="GET") res.end(`Hi ${username} this is signup page`)
            else if(req.method==="POST"){
                    // DB query
                res.end("Signup Successful !")
            } 
            break;

            case "/login" :
                if(req.method==="GET") res.end(`Hi ${username} with ${userid} this is Login page`)
                else if(req.method==="POST"){
                            // DB query
                        res.end("Login Successful !")
                } 
            break;

            case "/search" :
            res.end(`Hi ${username} these are the search results of `+search )
            break;

            default :
            res.end("404 page Not found!")
            break;

        };
    })
};

const server =http.createServer(myHandler);

server.listen(5000,()=>{
    console.log("Listening on port 5000");
})
