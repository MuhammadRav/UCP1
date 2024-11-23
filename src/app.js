const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const doctorRoutes = require('./app/routes/doctorRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method')); // Untuk menangani request PUT dan DELETE

// Static files
app.use(express.static('public')); // Menggunakan folder public untuk file statis (CSS, JS, dll.)

// View engine setup
app.set('view engine', 'ejs'); // Menggunakan EJS untuk rendering tampilan
app.set('views', 'src/app/views'); // Menentukan lokasi views

// Routes
app.get('/', (req, res) => {
  res.render('index'); // Mengarahkan ke halaman utama di views/index.ejs
});

app.use('/doctors', doctorRoutes); // Menangani rute dokter

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
