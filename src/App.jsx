
import { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header'
import StudentForm from './components/StudentForm'
import StudentTable from './components/StudentTable'

const API_URL = 'http://localhost:3000/api/siswa'

function App() {
  const [siswa, setSiswa] = useState([])
  const [loading, setLoading] = useState(true)
  const [pesan, setPesan] = useState('')
  const [editKode, setEditKode] = useState(null)

  const [form, setForm] = useState({
    kode_siswa: '',
    nama_siswa: '',
    alamat_siswa: '',
    tgl_siswa: '',
    jurusan_siswa: ''
  })

  const ambilData = async () => {
    try {
      const response = await fetch(API_URL)

      if (!response.ok) {
        throw new Error('Gagal mengambil data')
      }

      const data = await response.json()
      setSiswa(data)
    } catch (error) {
      setPesan('Gagal mengambil data. Pastikan backend berjalan.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    ambilData()
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const resetForm = () => {
    setForm({
      kode_siswa: '',
      nama_siswa: '',
      alamat_siswa: '',
      tgl_siswa: '',
      jurusan_siswa: ''
    })

    setEditKode(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setPesan('')

    try {
      const url = editKode
        ? `${API_URL}/${editKode}`
        : API_URL

      const response = await fetch(url, {
        method: editKode ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message)
      }

      setPesan(result.message)
      resetForm()
      await ambilData()
    } catch (error) {
      setPesan(error.message || 'Terjadi kesalahan')
    }
  }

  const handleEdit = (data) => {
    setForm({
      kode_siswa: data.kode_siswa,
      nama_siswa: data.nama_siswa,
      alamat_siswa: data.alamat_siswa,
      tgl_siswa: data.tgl_siswa?.slice(0, 10) || '',
      jurusan_siswa: data.jurusan_siswa
    })

    setEditKode(data.kode_siswa)

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleDelete = async (kode) => {
    if (!window.confirm(`Yakin ingin menghapus siswa ${kode}?`)) {
      return
    }

    try {
      const response = await fetch(`${API_URL}/${kode}`, {
        method: 'DELETE'
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message)
      }

      setPesan(result.message)
      await ambilData()

      if (editKode === kode) {
        resetForm()
      }
    } catch (error) {
      setPesan(error.message || 'Gagal menghapus data')
    }
  }

  return (
    <main className="container">

      <Header totalSiswa={siswa.length} />

      {pesan && (
        <div className="message">
          {pesan}
          <button onClick={() => setPesan('')}>×</button>
        </div>
      )}

      <StudentForm
        form={form}
        editKode={editKode}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        resetForm={resetForm}
      />

      <StudentTable
        siswa={siswa}
        loading={loading}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

      <footer>
        © 2026 Manajemen Data Siswa · React & Express API
      </footer>

    </main>
  )
}

export default App
