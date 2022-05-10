//importo el paquete express
//const express = require('express') forma vieja
import express from 'express'
//importar rutas del api
import { rutas } from '../routes/rutas.js'

import {conectar} from '../database/conexion.js'

//importar el ayudante cors
import cors from 'cors'

export class Servidor{

    constructor(){
        //atributo app donde almaceno la funcionalidad de express
        this.app = express()
        this.conectarconBd()
        this.llamarAuxiliar()
        this.atenderServicios()
    }

    encenderServidor(){
        this.app.listen(process.env.PORT, function(){
            console.log(`Servidor encendido en ${process.env.PORT}`)
        })
    }

    atenderServicios(){
        this.app.use('/',rutas)
    }

    conectarconBd(){
        conectar()
    }

    llamarAuxiliar(){
        //activo la recepcion de datos por el body de la peticion
        this.app.use(express.json())
        this.app.use(cors())
    }


}