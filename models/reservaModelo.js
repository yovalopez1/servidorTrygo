import mongoose from 'mongoose'
const Schema=mongoose.Schema
const Reserva= new Schema({
    fechaIn:{
        type:Date,
        required:true
    },
    fechaOut:{
        type:Date,
        required:true
    },
    nombreCliente:{
        type:String,
        required:true
    },
    cedulaCliente:{
        type:String,
        required:true
    },
    precio:{
        type:String,
        required:true
    }
})
export const modeloReserva=mongoose.model('reservas',Reserva)