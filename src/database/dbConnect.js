import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://remidio2030:3522xxyy@cluster0.jyk1ww8.mongodb.net");


let db = mongoose.connection;


export default db;