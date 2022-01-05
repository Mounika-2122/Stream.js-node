//stream.js reading

const fs=require("fs");
const server=require("http").createServer();

server.on("request" , (req,res) =>{
    
    const readable = fs.createReadStream("text-file.txt");
    readable.on("date" , chunk => {
        res.write(chunk); //Chunks=is a piece of data
    });
    readable.on("end" ,() => {
        res.end();
    });
    readable.on("error" ,err=> {
       console.log(err);
       res.statusCode=500;
       res.end("This Movie is not available ......");
    });
});

server.listen(8000, "127.0.0.1", () => {
    console.log("its working");
});