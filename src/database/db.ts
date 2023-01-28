import pg from "pg"
import dotenv from "dotenv"

dotenv.config()
const {Pool}= pg

const connection= new Pool({
    connectionString: process.env.DATABASE_URL
})
console.log("connected database")

export default connection;