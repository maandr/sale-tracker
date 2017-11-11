import app from './App'

const port = 3000

app.listen(3000, (error) => {

    if(error) {
        return console.log(error)
    }
    return console.log(`Server is listening on 3000`)
})