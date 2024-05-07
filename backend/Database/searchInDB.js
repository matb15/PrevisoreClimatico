import connessione from './connessioneDB.js';
import mongoose from 'mongoose';
import dataWeather from './Schema/weather.js';

//Definiamo il database che vogliamo usare del mongodb

//const url = "mongodb+srv://AdminMeteo:abcde123@meteo.aiaoufr.mongodb.net/"

//Scriviamo una funzione che legge i documenti del DB
//Prima ci connettiamo con MongoClient(Url_mongo)
//Successivamente dobbiamo passare il nome del db
//Successivamente la Collezione
//Infinite la Query per trovare il campo

//Funzione asincrona che cerca NomeCittà e Data intera con mongoose

async function searchInDocument(cityName, date) {
    connessione()
    const collezione = mongoose.model('dataWeather', dataWeather, 'Prova')
    const ricerca = await collezione.findOne({ "cityName": cityName, "date": date })
    console.log(ricerca)
}
export default searchInDocument