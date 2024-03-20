import React, { useState } from 'react'
import Data from './Data'
import Card from '../Card'
import Button from '../Button'

function Gynae() {
  const [item, setItems] = useState(Data)
  const menuItems = [...new Set(Data.map((val) => val.category))]

  const filterItems = (cat) => {
    const newItems = Data.filter((newval) => newval.category === cat)
    setItems(newItems)
  }

  return (
    <>
      <div className='container-fluid'>
        <div className="row">
          <h1 className='text-center col-12 fw-bold mt-4 mb-4' style={{color : "#2e294eff"}}>
            Find a gynac in your city
            <i className="fa-solid fa-user-doctor mx-3"></i>
          </h1>
          <Button menuItems={menuItems}
            filterItems={filterItems}
            setItems={setItems}
          />
          <Card item={item} />
        </div>

      </div>
    </>
  )
}

export default Gynae