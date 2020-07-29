import React, {useEffect, useState, useContext, useReducer, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import { spacing } from '@material-ui/system';
import axios from 'axios';
import BannerSlider from '../slider/Slider'
import IconButton from '@material-ui/core/IconButton';
import { Redirect, Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(10),
    },
    paper: {
      width: 250
    },
    control: {
      padding: theme.spacing(2),
    },
    productName: {
        fontSize:18,
        textAlign:"center",
        fontWeight:600,
        color:"#676c6f"
    },
    productPrice: {
        fontSize:16,
        textAlign:"center",
        fontWeight:600,
    },
    actionIcons: {
        padding:10
    },
    actionIcon: {
        paddingLeft:10,
        paddingRight:10,
        width:40,
    }
}));

const Products = (props) => {
    const classes = useStyles();

    const [products, setProducts] = useState({
        loading: false,
        data: []
    });

    const changeIcon = (productId) => {
        // <Redirect to="product/" />
    }

    useEffect(() => {
        setProducts({
            ...products,
            loading: true
        });

        axios.get(`products.json`)
            .then( response  => {
                setProducts({
                    ...products,
                    loading: false,
                    data: response.data
                });
                console.log(response.data)
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [1]);
      
    return(
        <>
            <BannerSlider></BannerSlider>
            <Grid container className={classes.root}>
                <Grid item lg={12}>
                <Grid container justify="left" spacing={10}>
                    {products.data.map(product => (
                    <Grid item>
                        <Paper className={classes.paper} >
                            <Grid>
                            <Link to={`/product/${product.id}`}>
                                <CardMedia component="img" className={classes.media} src={product.image} title={product.name} />
                            </Link>
                            <Typography component="body" className={classes.productName}>{product.name}</Typography>
                            <Typography component="body" className={classes.productPrice}>$ {product.price}</Typography>
                            
                            </Grid>
                            <Divider></Divider>
                            <Grid container className={classes.actionIcons} direction="row" alignItems="center" justify="center">
                                <IconButton onClick={changeIcon} disableRipple="true">
                                    <FavoriteIcon color="action" className={classes.actionIcon} fontSize="small" />
                                </IconButton>
                                
                                <IconButton disabled={product.avlQty > 0 ? false : true} onClick={changeIcon} disableRipple="true">
                                    <AddShoppingCartIcon color={product.avlQty > 0 ? "action" : "disabled"} className={classes.actionIcon} fontSize="small" />
                                </IconButton>

                                <Link to={`/product/${product.id}`}>
                                    <VisibilityIcon color="action" className={classes.actionIcon}  fontSize="small" />
                                </Link>
                                
                                
                            </Grid>
                        </Paper>
                    </Grid>
                     ))} 
                </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Products;