const express = require('express')
const {engine} = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000

const fortunes = [
    'Conquer your fears or they will conquer you',
    'Rivers need springs',
    'Do not fear what you don"t know',
    'You will have a pleasant suprise',
    'Whenever possible, keep it simple'
]

app.engine('handlebars', engine())

app.set('view engine', 'handlebars')

app.set('views', './views');

app.use(express.static(__dirname + '/public'))


// app.get('/', (req, res) => {
//     res.type('text/plain')
//     res.send('Welcome to Meadowlark Travel')
// })
app.get('/', (req, res) => {
    res.render('home')
})

// app.get('/about*', (req, res) => {
//     res.type('text/plain')
//     res.send('About Meadowlark Travel')
// })

// app.get('/about', (req, res) => { const randomFortune =
//     fortunes[Math.floor(Math.random()*fortunes.length)]
//       res.render('about', { fortune: randomFortune })
//     })

app.get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about', { fortune: randomFortune })
})

// app.get('/about/directions', (req, res) => {
//     res.type('text/plain')
//     res.send('Directions to Meadowlark Travel')
// })

// app.get('/about/contact', (req, res) => {
//     res.type('text/plain')
//     res.send('Send us message here at Meadowlark Travel')
// })

// app.use((req, res) => {
//     res.type('text/plain')
//     res.status(404)
//     res.send('404 - Not Found')
// })
app.use((req, res) => {
    res.status(404)
    res.render('404')
})

// app.use((err, req, res, next) => {
//     console.log(err.message)
//     res.type('text/plain')
//     res.status(500)
//     res.send('500 - Server Error')
// })
app.use((req, res) => {
    res.status(500)
    res.render('500')
})

app.listen(port, () => {
    console.log(`Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`)
})