//el controlador tiene la logica del negocio(que tiene que hacer)
import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorHabitacion{
    constructor(){
    }

    async insertar(request,response){
        let servicio=new ServicioHabitacion()
        //recibir los datos de la peticion
        let datosPeticion = request.body
        console.log(datosPeticion)
        try {
            await servicio.registrar(datosPeticion)
            response.status(200).json({
                mensaje: "exito en el ingreso de datos",
                datosIngresados: [],
                estado: true
            })
        } catch (error) {
            response.status(400).json({
                mensaje: "fallo en el ingreso de datos"+error,
                datosIngresados: [],
                estado: false
            })
        }
    }

    async buscarTodos(request,response){
        let servicio=new ServicioHabitacion()
        try {
            response.status(200).json({
                mensaje: "exito buscando la habitacion",
                datos: await servicio.buscarTodos(),
                estado: true
        })
        } catch (error) {
            response.status(400).json({
                mensaje: "fallo buscando la informacion"+error,
                datos: [],
                estado: false
        })
        }
    }

    async buscarPorId(request,response){
        let servicio=new ServicioHabitacion()
        let id = request.params.id //id que llega por url
        try {
            response.status(200).json({
            mensaje: "exito buscando la habitacion por id",
            datos: await servicio.buscarPorId(id),
            estado: true
        })
        } catch (error) {
            response.status(400).json({
            mensaje: "fallo buscando la habitacion por id"+error,
            datos: [],
            estado: false
        })
        }
    }

    async editar(request,response){
        let servicio=new ServicioHabitacion()
        let id = request.params.id //id que llega por url
        let datosPeticion = request.body
        try {
            await servicio.editar(id,datosPeticion)
            response.status(200).json({
                mensaje: "exito editando habitacion por id",
                datos: [],
                estado: true
            })
        } catch (error) {
            response.status(400).json({
                mensaje: "exito editando habitacion por id"+error,
                datos: [],
                estado: false
            })
        }
        
    }

    async eliminar(request,response){
        let servicio=new ServicioHabitacion()
        let id = request.params.id //id que llega por url
        try {
            await servicio.eliminar(id)
            response.status(200).json({
                mensaje: "exito eliminando habitacion por id",
                datos: "datos del id:" + id,
                estado: true
            })
        } catch (error) {
            response.status(400).json({
                mensaje: "fallo eliminando habitacion por id"+error,
                datos: [],
                estado: false
            })
        }
    }
}