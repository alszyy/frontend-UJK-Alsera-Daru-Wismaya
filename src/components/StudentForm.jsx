
function StudentForm({
  form,
  editKode,
  handleChange,
  handleSubmit,
  resetForm
}) {
  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <h2>{editKode ? 'Edit Data Siswa' : 'Tambah Siswa Baru'}</h2>
          <p>Lengkapi informasi siswa di bawah ini.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            Kode Siswa
            <input
              name="kode_siswa"
              value={form.kode_siswa}
              onChange={handleChange}
              placeholder="Contoh: S006"
              disabled={!!editKode}
              required
            />
          </label>

          <label>
            Nama Siswa
            <input
              name="nama_siswa"
              value={form.nama_siswa}
              onChange={handleChange}
              placeholder="Masukkan nama lengkap"
              required
            />
          </label>

          <label>
            Alamat Siswa
            <input
              name="alamat_siswa"
              value={form.alamat_siswa}
              onChange={handleChange}
              placeholder="Masukkan alamat"
              required
            />
          </label>

          <label>
            Tanggal Lahir
            <input
              type="date"
              name="tgl_siswa"
              value={form.tgl_siswa}
              onChange={handleChange}
              required
            />
          </label>

          <label className="full-width">
            Jurusan Siswa
            <input
              name="jurusan_siswa"
              value={form.jurusan_siswa}
              onChange={handleChange}
              placeholder="Contoh: Informatika"
              required
            />
          </label>
        </div>

        <div className="form-actions">
          <button className="primary-button" type="submit">
            {editKode ? 'Simpan Perubahan' : '+ Tambah Siswa'}
          </button>

          {editKode && (
            <button
              className="secondary-button"
              type="button"
              onClick={resetForm}
            >
              Batal
            </button>
          )}
        </div>
      </form>
    </section>
  )
}

export default StudentForm
