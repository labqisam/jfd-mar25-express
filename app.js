const express = require('express');
const app = express();
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jfd_maret_2025'
})

db.connect(function(){
    console.log('Berhasil terhubung ke mysql\n======');
})

db.addListener('error', function(err){
    console.log(err);    
})

app.set('view engine', 'ejs');
app.set('views', 'view-ejs');

app.get('/', (req, res) => {
    let data_untuk_view = {
        nama: 'Iqbal'
    }
    res.render('beranda', data_untuk_view)
})

app.get('/karyawan', async (req, res) => {
    let dataKaryawan = new Promise((resolve, reject) => {
        db.query('SELECT * FROM karyawan', (errorSQL, dataSQL) => {
            if(errorSQL){
                reject(errorSQL)
            } else {
                resolve(dataSQL)
            }
        })
    })

    let dataView = {
        dakar: await dataKaryawan
    }

    res.render('karyawan/index', dataView);
});

app.listen(3000, () => {
    console.log('Server sudah on, silahkan ke http://localhost:3000');    
})