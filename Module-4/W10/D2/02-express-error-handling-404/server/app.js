const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

app.use((req,res,next)=>{
  const error = new Error("Sorry, the requested resource couldn't be found");
  error.status = 404;

  next(error);
});

app.use((err,req,res,next)=>{
  
})


const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
