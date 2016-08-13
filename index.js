const express = require("express");

const app = express();

app.use(express.static("./public"));

app.get("/api/sum", (request, resolve) => {

});

app.listen(8080, () => {
    console.log("The server is running at localhost:8080");
});
