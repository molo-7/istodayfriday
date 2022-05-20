const http = require("http");
const server = http.createServer((req, res) => {
  const message = new Date().getDay() === 5 ? "Yeaaa" : "No :(";

  res.setHeader("Content-Type", "text/html").end(`
    <h1 style="text-align: center; margin-top: 130px; font-weight:normal; font-size: 120px; font-family: sans-serif">
    ${message}
    </h1>
  `);
});
const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Server Is Up 🚀\nPort: ${port}`));