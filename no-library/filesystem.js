//create, read, delete file 

//create
 const fs = require('fs');
fs.writeFile("./no-library/blog1.txt", "Hello, world!", ((err, data) => {
    if(err) {
        console.log(err);
    }
    console.log("create blog1 file");
}));

//read
fs.readFile("./no-library/blog1.txt", (err,data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
    console.log(data.toString());
})


//delete
if(fs.existsSync("./no-library/deleteme.txt")) {
    fs.unlink("./no-library/deleteme.txt", (err) => {
        if(err) {
            console.log(err);
        }
        console.log("file deleted");
    })
}

//create and delete directory
if(!fs.existsSync('test')) {
    fs.mkdir("test", (err) => {
        if(err) {
            console.log(err);
        }
        console.log("folder created");
    })
} else {
    fs.rmdir("test", (err) => {
        if(err) {
            console.log(err);
        }
        console.log("folder deleted");
    })
}

