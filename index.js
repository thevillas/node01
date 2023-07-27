const express = require('')
const app = express()
const port = 5000;
const morgan = require('')
app.use(morgan('dev'));





app: listen(PORT,()=>('server run on $(port)'))