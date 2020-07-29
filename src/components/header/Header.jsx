import React, { useEffect } from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box'

import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from "@material-ui/core/Typography";
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
        backgroundColor: '#84BD00',
        borderBottom: '0.5px solid #CEDEEE',
        zIndex: theme.zIndex.drawer + 1
    },
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 0.1,
		fontSize: '1.6vw'
	},
	toolbar: {
		minHeight: 48,
		backgroundColor: '#284968',		
	},
	logoutButton: {
		'&:hover': {
			background: '#7b8389'
		}
	},
	dashBoardButton: {
		marginLeft: theme.spacing(6.25),
		fontSize: '1.2vw',
		'&:hover': {
			background: '#7b8389'
		}
	},
	reportsButton: {
		marginRight: theme.spacing(90),
		fontSize: '1.2vw',
		'&:hover': {
			background: '#7b8389'
		}
	},
	userInfoButton: {
		fontSize: '1.2vw',
		'&:hover': {
			background: '#7b8389'
		}
	},
	search: {
		position: 'relative',
		borderRadius: 12,
		backgroundColor: '#FFF',
		marginLeft: 150,
		width: 500,
		height:40
	  },
	  searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		float: 'right',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	  },
	  inputRoot: {
		color: 'inherit',
	  },
	  inputInput: {
		paddingTop: 10,
		paddingLeft: 20,
		transition: theme.transitions.create('width'),
		width: '100%'
	  },
}));

const Header = props => {
	
	const classes = useStyles();
	const menuId = 'primary-search-account-menu';


	// const renderMenu = (
	// 	<Menu
	// 		anchorEl={anchorEl}
	// 		anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
	// 		id={menuId}
	// 		keepMounted
	// 		transformOrigin={{ vertical: 'top', horizontal: 'right' }}
	// 		open={isMenuOpen}
	// 		onClose={handleMenuClose}
	// 	>
	// 		<MenuItem onClick={logoutClicked}>Logout</MenuItem>
	// 	</Menu>
	// );

	return (
		<div>
			<AppBar
				color="transparent"
				className={classes.appBar}
				position="fixed">
				<Toolbar>
					<Box display="flex" >
						<Link to="/">
							<img src={logo} width={50} alt="Logo" />
						</Link>
					</Box>

					<Box className={classes.search}>
						
						<InputBase
						placeholder="Search the products here..."
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
						inputProps={{ 'aria-label': 'search' }}
						/>
						<div className={classes.searchIcon}>
							<SearchIcon color="action" />
						</div>
					</Box>

					<Box display="flex" ml={15} >
						{/* <Link to="/dashboard"> */}
						{/* </Link> */}
						{/* <Box  className={classes.planName} component="span" alignItems mx={2} display="inline" alignSelf="center">SILVER</Box>
						<Divider classes={{root: classes.dividerRoot}} orientation="vertical" alignSelf="center" flexItem   />
						<Box className={classes.creditBalance} component="span" mx={2} display="inline" alignSelf="center">Credits: <b>3000</b></Box>
						<Divider classes={{root: classes.dividerRoot}} orientation="vertical" flexItem  />
						<Box className={classes.planExpire} component="span" mx={2} display="inline" alignSelf="center"><b>8</b> Days remaining in credit cycle</Box> */}
					</Box>

					<Box flexGrow={1} />

					<Box display="flex" style={{color:"#FFF"}} >
						<IconButton color="inherit" placement="right">
							<Badge badgeContent={4} color="secondary">
								<NotificationsIcon />
							</Badge>
						</IconButton>
						<IconButton color="inherit" placement="right">
							<ShoppingBasketIcon />
						</IconButton>
						
						<IconButton
							edge="end"
							aria-label="account of current user"
							placement="right"
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			{/* {renderMenu} */}
		</div>
	);
};

export default Header;
