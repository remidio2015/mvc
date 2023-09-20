import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:3522xxyy@cluster0.jyk1ww8.mongodb.net/ehoje");
// A função connect guarda a string de conexão dentro dos parênses.

let db = mongoose.connection;
// Agora criamos uma variável que guarda a ação de conectar nosso usário como mogodb.
export default db;
