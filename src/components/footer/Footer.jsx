import React, { useEffect } from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import CopyrightIcon from '@material-ui/icons/Copyright';


const useStyles = makeStyles(theme => ({
    copyRight: {
        textAlign: "center",
        fontSize:13,
        paddingTop:20,
        paddingBottom:20
    },
    copyRightIcon: {
        width:15,
        height:15,
        color: '#616161'
    }
}));

const Footer = props => {
	
    const classes = useStyles();
    
	return (
		<>
        <footer className={classes.footer}>
          <Typography className={classes.copyRight}>Copyright <CopyrightIcon className={classes.copyRightIcon} /> 2020. All rights reserved.</Typography>
        </footer>
        </>
	);
};

export default Footer;
