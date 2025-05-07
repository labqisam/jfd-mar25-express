const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'view-ejs');

app.get('/', (req, res) => {
    let data_untuk_view = {
        nama: 'Iqbal'
    }
    res.render('beranda', data_untuk_view)
})

app.listen(3000, () => {
    console.log('Server sudah on, silahkan ke http://localhost:3000');    
})