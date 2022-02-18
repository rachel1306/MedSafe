import React, { useState, useEffect, useContext } from 'react'
import { IoArrowBackOutline, IoCartOutline, IoPersonCircleOutline } from "react-icons/io5";
import { Typography, Box, AppBar, Grid, Container, CssBaseline, Toolbar, Button, CardActions, CardContent, CardMedia, Card} from '@material-ui/core';

import { Link } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { AuthContext } from '../../authcontext/authcontext'
import './home.css'
import MenuCard from './homeCard';
import useStyles from './styles';

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
  console.log(medicine)

  const classes = useStyles();
  const cards =[1,2,3,4,5,6,7,8,9]
    
  return (
  <div className="mainbody">
    <CssBaseline />
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="static" className='navbar'>
        <Toolbar className='Medsafe'>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MedSafe
          </Typography>
          
          <Link to='/profile'>
            <IoPersonCircleOutline className='menu_back' />
          </Link>
          <Link to='/cart'>
            <IoCartOutline className='cart-icon'/>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom >MedSafe</Typography>
            <Typography variant="h5" align="center" color="textSecondary" gutterBottom >
            <p>
            A pharmacy your family can trust. Always there to care. At the corner of happy and healthy. Caring beyond prescriptions            </p>
          </Typography>
          <div className={classes.buttons}>
          </div>
          </Container>         
        </div>
        <Container  maxWidth="md" >
          <Grid className={classes.grid} container direction="row" spacing={1} alignItems='center' justifyContent='center'>
            

          {medicine.map((med) => (
                  <Grid item xs={12} sm={6} md={4} className={classes.grid} >
                  <MenuCard 
                    id={med.data.m_id}
                    key={med.id}
                     name={med.data.m_name}
                     price={med.data.price}
                     supplier={med.data.supplier}
                     image={med.data.image}
                      desc=""
                 />
                 </Grid>
               ))}        
        </Grid>
      </Container>
      </main>
      <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
              Made by Khushi, Maria, Nihitha and Royce
            </Typography>
      </footer>

    {/* // <div className='menu'>
    //   <Link to='/'>
    //     <IoArrowBackOutline className='menu_back'/>
    //   </Link>
    //   <Link to='/cart'>
    //     <IoCartOutline className='cart-icon'/>
    //   </Link>
    //   <div className='menu_header'>
    //     <h1>Our Menu</h1>
    //   </div>
    //   <div className='menu_container'>
    //               {medicine.map((med) => (
    //                 <MenuCard 
    //                   id={med.data.m_id}
    //                   key={med.id}
    //                   name={med.data.m_name}
    //                   price={med.data.price}
    //                   supplier={med.data.supplier}
    //                   // name={med.data.m_name}

    //                   image={""}
    //                   desc=""
    //                 />
    //               ))}
    //   </div>
        
    // </div> */}

  </div>
  );
} 

export default Home