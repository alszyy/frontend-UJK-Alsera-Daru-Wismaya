
function StudentTable({
  siswa,
  loading,
  handleEdit,
  handleDelete
}) {
  return (
    <section className="panel table-panel">
      <div className="panel-heading">
        <div>
          <h2>Daftar Siswa</h2>
          <p>Data siswa yang tersimpan di database.</p>
        </div>
        <span className="count">{siswa.length} Siswa</span>
      </div>

      {loading ? (
        <p className="empty">Memuat data siswa...</p>
      ) : siswa.length === 0 ? (
        <p className="empty">Belum ada data siswa.</p>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Kode</th>
                <th>Nama Siswa</th>
                <th>Alamat</th>
                <th>Tanggal Lahir</th>
                <th>Jurusan</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {siswa.map((data, index) => (
                <tr key={data.kode_siswa}>
                  <td>{index + 1}</td>

                  <td>
                    <span className="code">
                      {data.kode_siswa}
                    </span>
                  </td>

                  <td className="student-name">
                    {data.nama_siswa}
                  </td>

                  <td>{data.alamat_siswa}</td>

                  <td>{String(data.tgl_siswa).slice(0, 10)}</td>

                  <td>{data.jurusan_siswa}</td>

                  <td>
                    <div className="actions">
                      <button
                        className="edit-button"
                        onClick={() => handleEdit(data)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-button"
                        onClick={() => handleDelete(data.kode_siswa)}
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default StudentTable
