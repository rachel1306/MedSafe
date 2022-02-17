import React, { useState, useEffect, useContext } from 'react'
import { IoArrowBackOutline, IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { AuthContext } from '../../authcontext/authcontext'
import './home.css'
import homeCard from './homeCard'

function Home() {

  const [medicine, setMedicine] = useState([])
  let total = 0
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
      db.collection('medicine').onSnapshot(snapshot => (
        setMedicine(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
        )
    ))
  }, [currentUser.uid])

  for (const key in medicine) {
    total = total + Number(medicine[key].data.price)
  }

  return (
    <div className='menu'>
      <Link to='/'>
        <IoArrowBackOutline className='menu_back'/>
      </Link>
      <Link to='/cart'>
        <IoCartOutline className='cart-icon'/>
      </Link>
      <div className='menu_header'>
        <h1>Our Menu</h1>
      </div>
      <div className='menu_container'>
                  {medicine.map((med) => (
                    <homeCard
                      id={med.data.m_id}
                      key={med.id}
                      name={med.data.m_name}
                      price={med.data.price}
                      supplier={med.data.supplier}
                      // name={med.data.m_name}

                      image={""}
                      desc=""
                    />
                  ))}
      </div>
        
    </div>
  );
} 

export default Home