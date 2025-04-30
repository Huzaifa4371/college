const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors')
const Student = require("./routes/students")

const app = express();

app.use(bodyparser.json());
app.use(cors());
app.use("/students", Student);

const PORT = 8080;


app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT}`);
})
