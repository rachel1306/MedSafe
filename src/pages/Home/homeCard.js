import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { Typography, Grid, Card, CardMedia, CardActions, CardContent, Button} from '@material-ui/core';

import { IoIosAdd } from "react-icons/io";
import { db } from '../../firebase/firebase';

import { AuthContext } from '../../authcontext/authcontext'
import './home.css'
import useStyles from './styles';

function HomeCard({ id, name, desc, price, image, supplier }) {

    const { currentUser } = useContext(AuthContext);
    const [sup, setSup]=useState([])
    const addToCart = () => {
        db.collection('users').doc(currentUser.uid).collection('cart').add({
            m_name: name,
            m_id: id,
            price
        }).then(() => {
            alert('Added to Cart  :)')
        })
    }

    console.log(id)

    useEffect(() => {
        var userRef = db.collection("supplier").doc(supplier);
        userRef.get().then((doc) => {
            if (doc.exists) {
                setSup(doc.data());
            } 
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

    }, [supplier])

    console.log(sup)
    
    const classes = useStyles();

    return ( <div>
      
              <Card className={classes.card} className="menucard">
                  <CardMedia className={classes.cardMedia} image={image}/>
                  <CardContent className={classes.cardContent}>
                      {name}
                    <Typography gutterBottom variant="h5">
                    Price: ₹ {price}
                    </Typography>
                    <Typography>
                    {desc}
                    <p>Supplier: {sup.s_name}</p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={addToCart}>Add to Cart</Button>
                  </CardActions>
              </Card>
    </div>
        // <div className='menuCard' key={id}>
        //     <AiOutlineHeart className='menuCard__heart'/>
        //     <div className='menuCard__img'>
        //         <img src={image} alt=""/>
        //     </div>
        //     <div className='menuCard__content'>
        //         <div className='mc__header'>
        //             <h1>{name}</h1>
        //             <IoIosAdd onClick={addToCart} className='menuCard__add'/>
        //         </div>
        //         <h2>₹ {price}</h2>
        //         <p>{desc}</p>
        //         <p>{sup.s_name}</p>
        //     </div>
        // </div>
    );
}

export default HomeCard