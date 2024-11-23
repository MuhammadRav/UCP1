const doctorModel = require('../models/doctorModel');

// Tampilkan semua dokter
exports.index = (req, res) => {
  const doctors = doctorModel.getAll();
  res.render('doctor/index', { doctors });
};

// Tampilkan form tambah dokter
exports.createForm = (req, res) => {
  res.render('doctor/create');
};

// Tangani tambah dokter
exports.create = (req, res) => {
  const { name, specialty, experience } = req.body;
  doctorModel.create({ name, specialty, experience });
  res.redirect('/doctors');
};

// Tampilkan form edit dokter
exports.editForm = (req, res) => {
  const doctor = doctorModel.getById(req.params.id);
  if (doctor) {
    res.render('doctor/edit', { doctor });
  } else {
    res.status(404).send('Doctor not found');
  }
};

// Tangani edit dokter
exports.update = (req, res) => {
  const { name, specialty, experience } = req.body;
  doctorModel.update(req.params.id, { name, specialty, experience });
  res.redirect('/doctors');
};

// Tangani hapus dokter
exports.delete = (req, res) => {
  doctorModel.delete(req.params.id);
  res.redirect('/doctors');
};
