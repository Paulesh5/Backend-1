//Creacion de un web server en Express

//Invocar la libreria express
const express = require('express') //COMMONSJS
const {engine} = require('express-handlebars')

//Crear una instancia
const app = express()

// app.get('/', (req, res) => {
//     res.send("Bienvenidos")
// })

// app.get('/dashboard',(req,res) => {
//     res.send("Dashboard principal")
// })

// app.use((req,res) => {
//     res.send("404 - Not Found")
// })

// //Mandar info en formato JSON
// app.use(express.json())


// app.post('/register',(req, res) => {

//     const {pedido, solicitado} = req.body // Desestructuracion JS

//     res.send(`El pedido de ${pedido} es realizado por ${solicitado}`)

// })


// //Params
// app.get('/pedido/:tipo/:clase', (req, res) => {
//     console.log(req.params)
//     res.send(`El pedido es hamburguesa ${req.params.tipo} de tipo ${req.params.clase}`)
// })


// //Query params
// app.get('/search', (req, res) => {
//     console.log(req.query)
//     if (req.query.tipo === "sencilla"){
//         res.send("Hamburguesa sencilla")
//     }else{
//         res.send("Otro tipo de hamburguesa")
//     }
// })





// //sacado de la pagina de express-handlebars
// //Utilizar un motor de plantillas
// app.engine('handlebars', engine());
// //Extension de las paginas
// app.set('view engine', 'handlebars');
// //Ubicacion del directorio views
// app.set('views', './src/views');

// app.get('/hamburguesa/vegana', (req, res) => {
//     res.render('home')
// })
// app.get('/hamburguesa/about', (req, res) => {
//     res.render('about')
// })






// app.get('/hamburguesa/simple', (req, res) => {
//     res.send("Hamburguesa - simple")
// })



// app.get('/hamburguesa/doble', (req, res) => {
//     res.sendFile('./doble.png', {
//         root:__dirname
//     })
// })

// app.get('/hamburguesa/triple', (req, res) => {
//     res.sendFile('./triple.docx', {
//         root:__dirname
//     })
// })

// app.get('/hamburguesa/mixta', (req, res) => {
//     res.status(202).json({
//         "tipo" : "Mixta",
//         "extra" : "No"
//     })
// })


app.use(express.json())

app.get('/entrada',(req, res) => {
    res.send("Entrada al local")
})

//CREAR UN MIDDLEWARE
app.use((req, res, next) => {
    const{email, password} = req.body // DESESTRUCTURACION
    if(email === "paul@gmail.com" && password === "12345"){
        next()
    }else{
        res.send("Usuario no registrado")
    }
})

app.get('/pedido',(req, res) => {
    res.send(`Bienvenido - ${req.body.email} Listo para su orden`)
})


//Iniciar el servidor en el puerto 3000
app.listen(3000)

console.log("Web Server ejecutandose en el puerto 3000")
