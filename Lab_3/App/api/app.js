const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());


const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const db = require("./config/db")
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
})

app.listen(3000, () => {
    console.log('app listening on port 3000!');
});





