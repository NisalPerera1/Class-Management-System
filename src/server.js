const exress = require('express');
const app = express();
const bodyPaser = require ('body-parser');

const port = 3000;
app.listen(port,()=>{
    console.log("App is Running on port $(port)");
});
