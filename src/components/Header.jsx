
function Header({ totalSiswa }) {
  return (
    <>
      <header className="header">
        <div>
          <p className="eyebrow">SISTEM INFORMASI AKADEMIK</p>
          <h1>Manajemen Data Siswa</h1>
          <p className="subtitle">
            Kelola informasi siswa dengan mudah dan praktis.
          </p>
        </div>
        <div className="header-icon">🎓</div>
      </header>

      <section className="stats">
        <div className="stat-card">
          <span>Total Siswa</span>
          <strong>{totalSiswa}</strong>
        </div>
        <div className="stat-card">
          <span>Status Sistem</span>
          <strong className="online">● Online</strong>
        </div>
      </section>
    </>
  )
}

export default Header
