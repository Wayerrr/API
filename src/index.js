const express = require('express');

const app = express();

const usersRoutes = require('./routes/users.js');

const middlewareLogRequest = require('./middleware/logs');

app.use(middlewareLogRequest);

app.use(express.json());

app.use((req, res, next) => {
    console.log('Middleware kedua');
    next();
});

app.use('/users', usersRoutes);

app.listen(4000, () => {
    console.log('Server dijalankan di Port 4000 berhasil');
});

// app.use('/', (req, res, next) => {
//     res.send('Halo, Wayer!!!')
// })

// app.post('/', (req, res, next) => {
//     res.send('<h3>Haloo, Post Method!</h3>');
// });

// app.get('/', (req, res, next) => {
//     res.json({
//         nama : 'Wayer',
//         kelas : 'XI PPLG 2'
//     });
// });
