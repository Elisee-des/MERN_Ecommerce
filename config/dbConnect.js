const { default: monogoose } = require('mongoose')

const dbConnect = () => {
    try {
        const conn = monogoose.connect("mongodb://localhost:27017/digitic")
        console.log('Database connected successfully')
    }
    catch(error)
    {
        console.log("Database error")
    }
}

module.exports = dbConnect;