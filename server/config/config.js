/**
 * Puerto
 */

process.env.PORT = process.env.PORT || 3000

/**
 * Entorno
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

/**
 * Base de datos
 */

let urlDB;

/**
 * NOTAS
 * Para crear las variables desde el CLI de Heroku
 *  heroku config:set MONGO_URI="XXXXXXX" -> Crea la variable
    heroku config:get nombre -> Obtiene la variable creada
    heroku config:unset nombre -> Borra la variable
 */

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URI
}

process.env.URLDB = urlDB;

/**
 * Fecha Expiracion TOKEN
 * 60s
 * 60m
 * 24h
 * 30 dias
 */

process.env.EXP_TOKEN = 60 * 60 * 24 * 30;

/**
 * Seed de autenticacion
 */

process.env.SEED =  process.env.SEED || 'secret'
