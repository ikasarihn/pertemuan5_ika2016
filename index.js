const express = require( 'express' )
const app = express()
const port = 3000
const connection = require( "./models/db" )

app.get( '/', ( req, res ) =>
{
    res.send( 'Hello World!' )
} )

app.listen( port, () =>
{
    console.log( `App Listen on ${ port }` )
} )