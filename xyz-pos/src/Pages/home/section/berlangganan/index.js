import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

// Component
import Card from './components/Card/Card'
import berlanggananAction from '../../../../store/actions/berlanggananAction'

import './index.css'

function Berlangganan() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(berlanggananAction())
  }, [dispatch])

  const {data} = useSelector(state => state.berlanggananReducer)

  return (
    <div id="pelajari" className="berlangganan-container">
      {/* Title */}
      <div className="title-berlangganan-container">
        <h3>Daftar sekarang dan nikmati fiturnya!</h3>
      </div>
      <div className="class-container">
        {
          !data && <h1>Loading</h1> 
        }
        {
          data && data.map(datum => {
            return <Card datum={datum}/>
          })
        }
      </div>
    </div>
  )
}

export default Berlangganan
