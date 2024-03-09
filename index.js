// const express = require("express");
// const cluster = require('cluster');
// const os = require("os");

// const cpuLen = os.cpus().length;


// if (cluster.isMaster) {
//     console.log(`Master process ${process.pid} is running`);

//     for (let i = 0; i < cpuLen; i++) {
//         cluster.fork();
//     }

//     cluster.on('exit', (Worker, code, signal) => {
//         console.log(`died ${Worker.process.pid}. restrating..`)
//         cluster.fork();
//     })
// } else {
//     const app = express();

//     app.get('/test', (req, res) => {
//         let total = 0;
//         for (let i = 0; i < 50_000_000; i++) {
//             total++;
//         }
//         res.send({ total: total });
//     })

//     app.listen(3000, () => {
//         console.log("server running",3000);
//     })
    
// }


const express=require('express');
const mongoose=require('mongoose');
const app=express();
require("dotenv").config();
const cors = require('cors');
const authRoutes=require("./routes/auth")
const userRoutes=require("./routes/user")
app.use(express.json())
app.use(cors());

app.use('/api/auth',authRoutes);
app.use('/api/users',userRoutes);
mongoose.connect(process.env.mongo_url).then(()=>{
    console.log("connected")
}).catch(()=>{
    console.error("error occured")
})


app.listen(process.env.port,()=>{
    console.log(`Server is up and listening`);
})