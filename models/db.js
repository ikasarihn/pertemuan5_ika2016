const mysql = require( "mysql" );
const dbConfig = require( "../config/db.config" );
const connection = mysql.createConnection( {
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
} );

connection.connect( error =>
{
    if ( error ) throw error;
    console.log( "Successfully connected to the database" );
} );
module.exports = connection;

// insert: (mahasiswaBaru, result) => {
//     sql.query("INSERT INTO mahasiswa SET ?", mahasiswaBaru, (err, res) => {
//         if (err) {
//             console.log( "error: ", err );
//             result( err, null );
//             return;
//         }

//         result( null, { id: res.insertId, ...mahasiswaBaru } );
//     })
// }