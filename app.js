//importa la libreria dovenv
//require('dotenv').config()

import 'dotenv/config'

//importa la clase servidor

import {Servidor} from './Server/Servidor.js'

// crea un objeto de la clase servidor

let servidor = new Servidor()

//llamo al metodo encerder servidor

servidor.encenderServidor()
