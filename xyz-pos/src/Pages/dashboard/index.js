import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

import './index.css'
import infoAction from '../../store/actions/infoAction'
import tableReducer from '../../store/actions/tableAction'

function Dashboard() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const [displayNavbar, setDisplayNavbar] = useState('display-navbar')
  const [closeNavbar, setCloseNavbar] = useState('close-navbar')
  const [closeNavbarAnimation, setCloseNavbarAnimation] = useState('')

  useEffect(() => {
    !isNavbarOpen && setIsNavbarOpen(false)
    !isNavbarOpen && setDisplayNavbar('display-navbar')
    !isNavbarOpen && setCloseNavbar('')
  }, [isNavbarOpen])

  useEffect(() => {
    dispatch(infoAction())
    dispatch(tableReducer())
  }, [dispatch])

  const {info} = useSelector(state => state.infoReducer)
  const {table} = useSelector(state => state.tableReducer)

  const handleNavbar = (input) => {
    if(input) {
      setIsNavbarOpen(input)
      setDisplayNavbar('')
      setCloseNavbar('close-navbar-display')
      setCloseNavbarAnimation('')
    }else{
      setCloseNavbarAnimation('close-navbar-animation')
      setTimeout(() => {
        setIsNavbarOpen(input)
      }, 500)
    }
  }
  return (
    <div className="dashboard-wrapper">

      {/* Dashboard Navbar */}
      <div onClick={() => handleNavbar(true)} className={`close-navbar ${closeNavbar}`}><h3>Navbar</h3></div>
      <div className={`dashboard-navbar ${displayNavbar} ${closeNavbarAnimation}`}>
        <div onClick={() => handleNavbar(false)} className="close-sign-dashboard">
          <img src="/Assets/close-24px.svg" alt="..." />
        </div>
        <div className="profile">
          <img src="/Assets/account_circle-24px.svg" alt="..."/>
          <div className="profile-detail">
            <span className="name">Ahmad Contoso</span>
            <span className="email">contoso@gmail.com</span>
            <span onClick={() => history.push("/")} className="keluar">Keluar</span>
          </div>
        </div>
        <div className="option">
          <img src="/Assets/dashboard-24px.svg" alt="..."/>
          <span>Dashboard</span>
          <span>&gt;</span>
        </div>
        <div className="option">
          <div>
            <img src="/Assets/product-24px.svg" alt="..."/>
          </div>
          <div>
            <span>Produk</span>
          </div>
          <div>
            <span>&gt;</span>
          </div>
        </div>
        <div className="option">
          <div>
            <img src="/Assets/report-24px.svg" alt="..."/>
          </div>
          <div>
            <span>Laporan</span>
          </div>
          <div>
            <span>&gt;</span>
          </div>
        </div>
        <div className="option">
          <div>
            <img src="/Assets/settings-24px.svg" alt="..."/>
          </div>
          <div>
            <span>Pengaturan</span>
          </div>
          <div>
            <span>&gt;</span>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="dashboard-container">
        <div className="dashboard-header">
          <span>Dashboard</span>
          <h3><span>Halo, Ahmad!</span></h3>
        </div>

        {/* Info */}
        <div className="info-container">
          {
            !info ? <h1>Loading ...</h1> : info.map(inf => {
              return <div className="info">
              <span>{inf.title}</span>
            <span>{inf.content}</span>
            </div>
            })
          }
        </div>

        {/* Penjualan */}
        <div className="penjualan-container">
          <div>
            <h3>Penjualan Hari ini</h3>
            <span>Kamis, 13 Agustus 2020</span>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <td><b>Jam</b></td>
                  <td><b>Customer</b></td>
                  <td><b>Barang</b></td>
                  <td><b>Harga Barang</b></td>
                  <td><b>Qty</b></td>
                  <td><b>Total</b></td>
                  <td><b>Action</b></td>
                </tr>
              </thead>
              <tbody>
                {
                  !table ? <h1>Loading...</h1> : table.map(tab => {
                    return <tr>
                    <td>{tab.jam}</td>
                    <td>{tab.customer}</td>
                    <td>{tab.barang}</td>
                    <td>{tab.hargaBarang}</td>
                    <td>{tab.qty}</td>
                    <td>{tab.total}</td>
                    <td><button className="table-button">Lihat Detail</button></td>
                  </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
