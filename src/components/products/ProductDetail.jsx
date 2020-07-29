import React, {useEffect, useState, useContext, useReducer, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import { spacing } from '@material-ui/system';
import axios from 'axios';
import BannerSlider from '../slider/Slider'
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import FilledInput from '@material-ui/core/FilledInput';
import { Redirect, Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(10),
    },
    paper: {
      width: 250,
    },
    control: {
      padding: theme.spacing(2),
    },
    productName: {
        fontSize:22,
        fontWeight:600,
        paddingBottom: 20
    },
    productCategory: {
        fontSize:14,
        fontWeight:'normal',
        paddingBottom: 20
    },
    productSKU: {
        fontSize:14,
        fontWeight:'normal',
        paddingBottom: 20
    },
    productDesc: {
        fontSize:14,
        fontWeight:'normal',
        paddingBottom: 20
    },
    productPrice: {
        fontSize:20,
        fontWeight:600,
        color: '#84BD00',
        paddingBottom: 20
    },
    actionIcons: {
        padding:10,
    },
    actionIcon: {
        paddingLeft:10,
        paddingRight:10,
        width:40
    },
    addCartBlock:{
        padding: 20,
    },
    qtyInput: {
        width:50,
        marginLeft:20,
        marginRight:20
    },
    qtyButton: {
        border: '1px solid #CCC',
        fontSize: '1em',
        borderRadius: 1,
        minWidth: 50
    },
    qtyValue: {
        color: '#00000',
        fontSize: '1.5em'
    },
    addCartButton: {
        marginLeft: 40,
        backgroundColor: '#84BD00',
        borderRadius:30,
        color: '#FFF',
        width: 150,
        height:45
    },
    relatedProducts: {
        padding:20,
        '& > .productName': {
            textAlign:"center",
        }
    },
    breadcrumbs: {
        marginTop:20,
        padding:5,
        backgroundColor: '#f5f5f5',
        borderRadius:5
    },
    breadcrumbLink: {
        display: 'flex',
        color: '#000',
        fontSize:13
    },
    breadcrumbText: {
        fontSize:13,
        color: '#616161'
    },
    breadcrumbIcon: {
        marginRight: theme.spacing(0.5),
        width: 17,
        height: 17,
    }
}));

const Products = (props) => {
    const classes = useStyles();

    const { match } = props
    const productId = match.params.id;

    const [cartCouter, setCartCounter] = useState(1)
    const [product, setProduct] = useState({
        loading: false,
        data: {},
        relatedProducts: []
    });

    const handleIncrement = () => {
        setCartCounter(cartCouter + 1);
    };

    const handleDecrement = () => {
        setCartCounter(cartCouter - 1 > 0 ? cartCouter - 1 : 0);
    };


    useEffect(() => {
        setProduct({
            ...product,
            loading: true
        });

        axios.get(`/products.json`)
            .then( response  => {

                const relatedProducts = response.data.slice(0,5);
                const matchedProduct = response.data.find(product => product.id == productId);
                setProduct({
                    ...product,
                    loading: false,
                    data: matchedProduct,
                    relatedProducts: relatedProducts
                });
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [productId]);

    const renderQtyBlock = () => {
        console.log(product.data)
        if(product.data.avlQty && product.data.avlQty > 0) 
            return(
                <>
                    <Button onClick={handleDecrement} className={classes.qtyButton}>-</Button>
                    <Button disabled className={classes.qtyValue}>{cartCouter}</Button>
                    <Button onClick={handleIncrement} className={classes.qtyButton}>+</Button>
                </>
            )
    }
      
    return(
        <>
            <BannerSlider></BannerSlider>
            <Breadcrumbs aria-label="breadcrumb" separator=">" className={classes.breadcrumbs}>
                <Link color="inherit" to="/" className={classes.breadcrumbLink}>
                    <HomeIcon className={classes.breadcrumbIcon} /> Home
                </Link>
                <Typography color="textPrimary" className={classes.breadcrumbText}>
                    Product
                </Typography>
                <Typography color="textPrimary" className={classes.breadcrumbText}>
                    {product.data.name}
                </Typography>
            </Breadcrumbs>
            <Grid container className={classes.root} alignContent="space-between">

                    <Grid item xs={5}>
                            <CardMedia
                                component="img"
                                width="250px"
                                className={classes.media}
                                src={product.data.image}
                                title={product.data.name}
                                />
                    </Grid>
                    
                    <Grid xs={6} alignItems="flex-end">
                        <Typography component="body" className={classes.productName}>{product.data.name}</Typography>
                        <Typography className={classes.productCategory}>Categories: {product.data.category}</Typography>
                        <Typography className={classes.productSKU}>SKU: {product.data.sku}</Typography>
                        <Typography className={classes.productPrice}>${product.data.price}</Typography>
                        <Typography className={classes.productDesc}>{product.data.description}</Typography>
                        <Divider />
                                <Grid className={classes.addCartBlock}>
                                    {renderQtyBlock()}
                                    <Button variant="contained" disabled={product.data.avlQty && product.data.avlQty > 0 ? false : true}  className={classes.addCartButton}>ADD TO CART</Button>
                                </Grid>
                            <Divider />
                    </Grid>
            </Grid>

            <Grid>
                <Typography>RELATED PRODUCTS</Typography>
                <Divider />
                <Grid container justify="center" className={classes.relatedProducts} spacing={5} >
                    {product.relatedProducts.map(product => (
                    <Grid item>
                        <Paper className={classes.paper} elevation={3} >
                            <Grid>
                            <Link to={`/product/${product.id}`}>
                                <CardMedia component="img" className={classes.media} src={product.image} title={product.name} />
                            </Link>
                            <Typography component="body" style={{textAlign:"center"}} className={classes.productName}>{product.name}</Typography>
                            <Typography component="body" style={{textAlign:"center"}} className={classes.productPrice}>$ {product.price}</Typography>
                            
                            </Grid>
                        </Paper>
                    </Grid>
                    ))}
                </Grid>
            </Grid>
        </>
    )
}

export default Products;