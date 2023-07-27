const express = require('')
const app = express()
const port = 5000;
const morgan = require('')
app.use(morgan('dev'));
app.use(express.json());

const service = require('./src/servicio.js')



app.get("/", (req, res) => {
    res.json({
        mensage: "lista de usuarios",
        body: service.getUser(),
})

});

app.get('/:id', (req, res) => {
    const id = req.params.id;
})


app.post("/", (req, res) => {
    let { body : newUser} = req
    let user = service.createUser(newUser);
    res.status(201).json({
        mensage : "nuevo usuario creado",
        body: user
    });
})


app: listen(PORT,()=>('server run on $(port)'))