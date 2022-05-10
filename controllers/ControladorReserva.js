import { ServicioReserva } from "../services/ServicioReserva.js"
export class ControladorReserva{
    constructor(){}

async insertar(request,response){
        let servicio = new ServicioReserva()
        //recibir los datos de la peticion
        let datosPeticion = request.body
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

async buscarPorId(request,response){
        let servicio = new ServicioReserva()
        let id = request.params.id //id que llega por url
        try {
            response.status(200).json({
                mensaje: "exito buscando reserva por id",
                datos: await servicio.buscarPorId(id),
                estado: true
            })
        } catch (error) {
            response.status(400).json({
                mensaje: "fallo buscando reserva por id"+error,
                datos: [],
                estado: false
            })
        }
    }

async editar(request,response){
    let servicio=new ServicioReserva()
    let Id=request.params.Id
    let datosPeticion=request.body
    try {
        await servicio.editar(Id,datosPeticion)
        response.status(200).json({
            mensaje:"Exito editando la Reserva por ID",
            datos:"Datos del id: "+Id,
            estado:true
        })
    }catch(error){
        response.status(400).json({
            mensaje:"Error editando la Reserva por ID",
            datos:[],
            estado:false
        })
    }
}

async eliminar(request,response){
        let servicio = new ServicioReserva()
        let id = request.params.id //id que llega por url
        try {
            await servicio.eliminar(id)
            response.status(200).json({
                mensaje: "exito eliminando reserva por id",
                datos: "datos del id:" + id,
                estado: true
            })
        } catch (error) {
            response.status(400).json({
                mensaje: "fallo eliminando reserva por id"+error,
                datos: [],
                estado: false
            })
        }
    }
}