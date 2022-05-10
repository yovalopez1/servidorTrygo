import express from 'express'
import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'
import {ControladorReserva} from '../controllers/ControladorReserva.js'
export let rutas = express.Router()

//defino las rutas

//
let controladorHabitacion = new ControladorHabitacion()
let controladorReserva = new ControladorReserva()
//1.Servicio agregar habitacion
rutas.post('/api/v1/habitaciones/', controladorHabitacion.insertar)
//2. servicio para buscar todas las habitaciones
rutas.get('/api/v1/habitaciones/',controladorHabitacion.buscarTodos)
//3.
rutas.get('/api/v1/habitaciones/:id/', controladorHabitacion.buscarPorId)
//4.
rutas.put('/api/v1/habitaciones/:id/', controladorHabitacion.editar)
//5.
rutas.delete('/api/v1/habitaciones/id/', controladorHabitacion.eliminar)
//6.
rutas.post('/api/v1/reserva/', controladorReserva.insertar)
rutas.get('/api/v1/reserva/:id/', controladorReserva.buscarPorId) 
rutas.put('/api/v1/reserva/:id/', controladorReserva.editar)
rutas.delete('/api/v1/reserva/:id/', controladorReserva.eliminar)
//para los servicios de reservas