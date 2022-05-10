//importar mongoose
import mongoose from "mongoose";

export async function conectar(){
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log('Exito conectandonos con la db')

    } catch (error) {
        console.log('Error en la conexion con db'+error)
    }
}