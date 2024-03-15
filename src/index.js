const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const taskRoutes = require('./rutas/users.rutas')
const port = 4000;

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(taskRoutes);
app.use((err,req,res,next) =>{
    return res.json({
        message: err.message
    })
})

app.listen(port, () => console.log(`Server on port ${port}`));