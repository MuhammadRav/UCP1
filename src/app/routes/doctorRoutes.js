const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// Rute untuk menampilkan daftar dokter
router.get('/', doctorController.index);

// Rute untuk menampilkan form tambah dokter
router.get('/create', doctorController.createForm);

// Rute untuk menangani tambah dokter
router.post('/create', doctorController.create);

// Rute untuk menampilkan form edit dokter
router.get('/edit/:id', doctorController.editForm);

// Rute untuk menangani edit dokter
router.post('/update/:id', doctorController.update);

// Rute untuk menangani hapus dokter
router.post('/delete/:id', doctorController.delete);

module.exports = router;
