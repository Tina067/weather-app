const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define paths for Express config
const publicDirectoryPath =path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../template/partials')

//Setup handebars engine and views location
app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('',(req, res) =>{
    res.render('index',{
        title:'Weather',
        name:'Tina Murmu'
    })
})

app.get('/about',(req, res) =>{
    res.render('about',{
        title:'About Me',
        name:'Tina Murmu'
    })
})

app.get('/help',(req, res) =>{
    res.render('help',{
        helpText:'This is some helpful text.',
        title:'help me',
        name:'Tina Murmu'
    })
})


app.get('/weather',(req, res)=>{
    res.send({
        forecase:'It is snowing',
        location:'Jamtara'
    })
})

app.get('/help/*', (req,res) =>{
    res.send('Help article not found')
})

app.get('*',(req, res) =>{
    res.send('My 404 page');
})

app.listen(3000,()=>{
    console.log('Server is listening on port 3000');
})