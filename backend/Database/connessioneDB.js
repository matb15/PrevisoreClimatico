//Connessione db con mongoose
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config({ path: "../../.env" })

const user = process.env.nomeUT
const passwd = process.env.Password
const DB = process.env.NameDB

async function connessione() {
    try {
        await mongoose.connect(`mongodb+srv://${user}:${passwd}@meteo.aiaoufr.mongodb.net/${DB}`)
        console.log("Connessione al database avvenuta con successo")
    } catch (error) {
        console.log(error)
    }
}
export default connessione