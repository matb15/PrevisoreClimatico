//Connessione db con mongoose
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config({ path: "../../.env" })
const mongoDB = mongoose
const stringaDiConnessione = process.env.STRINGADB
async function connessione() {
    try {
        await mongoose.connect(stringaDiConnessione)
        console.log("Connessione al database avvenuta con successo")
    } catch (error) {
        console.log(error)
    }
}
export default connessione