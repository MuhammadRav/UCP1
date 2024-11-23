let doctors = []; // Array untuk menyimpan data dokter

// Ambil semua data dokter
exports.getAll = () => doctors;

// Ambil data dokter berdasarkan ID
exports.getById = (id) => doctors.find((doctor) => doctor.id === id);

// Tambahkan dokter baru
exports.create = (data) => {
  const newDoctor = { id: Date.now().toString(), ...data };
  doctors.push(newDoctor);
};

// Update dokter berdasarkan ID
exports.update = (id, updatedData) => {
  const index = doctors.findIndex((doctor) => doctor.id === id);
  if (index !== -1) {
    doctors[index] = { id, ...updatedData };
  }
};

// Hapus dokter berdasarkan ID
exports.delete = (id) => {
  doctors = doctors.filter((doctor) => doctor.id !== id);
};
