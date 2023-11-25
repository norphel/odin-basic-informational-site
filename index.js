const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.writeHead(200, {
            "Content-Type" : "text/html"
        });
        const homePage = fs.readFileSync("./index.html", "utf-8");
        res.end(homePage);
    } else if(req.url === "/about") {
        res.writeHead(200, {
            "Content-Type" : "text/html"
        });
        const aboutPage = fs.readFileSync("./about.html", "utf-8");
        res.end(aboutPage);
    } else if(req.url === "/contact-me") {
        res.writeHead(200, {
            "Content-Type" : "text/html"
        });
        const contactPage = fs.readFileSync("./contact-me.html", "utf-8");
        res.end(contactPage);
    } else {
        res.writeHead(200, {
            "Content-Type" : "text/html"
        });
        const notFound = fs.readFileSync("./404.html", "utf-8");
        res.end(notFound);
    }
});

server.listen(8080);