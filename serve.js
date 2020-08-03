const {createServer} = require("http");
const app = createServer();

app.listen(6969, () => {
    console.log("running on 6969");
});