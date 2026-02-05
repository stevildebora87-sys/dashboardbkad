// ================================
// LIST OPD (33 OPD)
// ================================

const opdList = [
  "Dinas Pendidikan",
  "Dinas Kesehatan",
  "Dinas PUPR",
  "Dinas Perhubungan",
  "Dinas Sosial",
  "Dinas Kominfo",
  "Dinas Pariwisata",
  "Dinas Pertanian",
  "Dinas Perikanan",
  "Dinas Lingkungan Hidup",
  "Dinas Dukcapil",
  "Dinas PMD",
  "Dinas Tenaga Kerja",
  "Dinas Koperasi UKM",
  "Dinas Perdagangan",
  "Dinas Penanaman Modal",
  "Bappeda",
  "BPKAD",
  "Inspektorat",
  "Satpol PP",
  "BPBD",
  "Sekretariat DPRD",
  "Sekretariat Daerah",
  "Bagian Umum",
  "Bagian Hukum",
  "Bagian Organisasi",
  "Bagian Pemerintahan",
  "Kecamatan Siberut Selatan",
  "Kecamatan Siberut Utara",
  "Kecamatan Sipora Selatan",
  "Kecamatan Sipora Utara",
  "Kecamatan Pagai Selatan",
  "Kecamatan Pagai Utara"
];

// ================================
// BUAT DATA PENDAPATAN PER OPD + PER BULAN
// ================================

const pendapatanData = opdList.map((nama) => {

  // Target antara 50–150 M
  let target = Math.floor(Math.random() * 100 + 50) * 1000000000;

  // Realisasi total 60–100%
  let realisasi = Math.floor(target * (Math.random() * 0.4 + 0.6));

  // Data bulanan 12 bulan
  let bulanan = [];
  for (let i = 0; i < 12; i++) {
    bulanan.push(Math.floor(realisasi / 12 + Math.random() * 2000000000));
  }

  return {
    nama: nama,
    target: target,
    realisasi: realisasi,
    bulanan: bulanan
  };
});
