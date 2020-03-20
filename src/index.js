const  express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.post('/users',(req,res)=>{

})







app.listen(port,()=>{
    console.log ('connected to port'+port)  
})