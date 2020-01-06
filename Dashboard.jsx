  import React,{Component} from 'react';
  import { fade, makeStyles } from '@material-ui/core/styles';
  import Popup from "reactjs-popup";
  import AppBar from '@material-ui/core/AppBar';
  import Toolbar from '@material-ui/core/Toolbar';
  import IconButton from '@material-ui/core/IconButton';
  import Typography from '@material-ui/core/Typography';
  import InputBase from '@material-ui/core/InputBase';
  import Badge from '@material-ui/core/Badge';
  import MenuItem from '@material-ui/core/MenuItem';
  import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
  import Menu from '@material-ui/core/Menu';
  import MenuIcon from '@material-ui/icons/Menu';
  import SearchIcon from '@material-ui/icons/Search';
  import AccountCircle from '@material-ui/icons/AccountCircle';
  import MailIcon from '@material-ui/icons/Mail';
  import RemindersIcon from '@material-ui/icons/NotificationsNoneSharp';
  import ArchiveIcon from '@material-ui/icons/ArchiveOutlined';
  import EditIcon from '@material-ui/icons/EditOutlined';
  import TrashIcon from '@material-ui/icons/DeleteOutlineRounded';
  import NotesIcon from '@material-ui/icons/EmojiObjectsOutlined';
  import NotificationsIcon from '@material-ui/icons/Notifications';
  import SettingIcon from '@material-ui/icons/SettingsOutlined';
  import MoreIcon from '@material-ui/icons/MoreVert';
  import { Box, Button } from '@material-ui/core';
  import clsx from 'clsx';
  import { useTheme } from '@material-ui/core/styles';
  import Drawer from '@material-ui/core/Drawer';
  import CssBaseline from '@material-ui/core/CssBaseline';
  import List from '@material-ui/core/List';
  import Divider from '@material-ui/core/Divider';
  import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
  import ChevronRightIcon from '@material-ui/icons/ChevronRight';
  import ListItem from '@material-ui/core/ListItem';
  import ListItemIcon from '@material-ui/core/ListItemIcon';
  import ListItemText from '@material-ui/core/ListItemText';
  import InboxIcon from '@material-ui/icons/MoveToInbox';
  import RefreshIcon from '@material-ui/icons/Refresh';
  import SettingsIcon from '@material-ui/icons/Settings';
  import CloudDoneIcon from '@material-ui/icons/CloudDone';
  import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
  import Popover from '@material-ui/core/Popover';
  import Paper from '@material-ui/core/Paper';
  import Popper from '@material-ui/core/Popper';
  import ClickAwayListener from '@material-ui/core/ClickAwayListener';
  import Grow from '@material-ui/core/Grow';
  import MenuList from '@material-ui/core/MenuList';
  import Avatar from '@material-ui/core/Avatar';
  import { deepOrange, deepPurple } from '@material-ui/core/colors';
  import Card from '@material-ui/core/Card';
  import CardHeader from '@material-ui/core/CardHeader';
  import CardMedia from '@material-ui/core/CardMedia';
  import CardContent from '@material-ui/core/CardContent';
  import CardAction from '@material-ui/core/CardActions';
  import CardActionArea from '@material-ui/core/CardActionArea';
  import CreateNote from '../components/CreateNote';
  import { positions } from '@material-ui/system';
  // import LoginPage from '../components/LoginPage';
  import '../CssFile/Dashboard.css'


  const keepLogo = require ('../components/Assets/right.png')
  const drawerWidth = 240;
  const useStyles = makeStyles(theme => ({

            list: {
                width: 250,
            },

            fullList: {
                width: 'auto',
            },

            root : {
                flexGrow : 1,
                display : 'flex',
                  '&..makeStyles-search-15' : {
                      boxSizing : 'containtBox'
                  },
            },

            refreshIcon : {
                color : 'black',
                fontSize : 'default',
                width : theme.spacing(7),
                height : '100%',
            },

            cloudDoneIcon : {
                color : 'black',
                fontSize : 'default',
                width : theme.spacing(7),
                height : '100%',
            },

            listView : {
                color : 'black',
                fontSize : 'default',
                width : theme.spacing(7),
                height : '100%',
            },

            appBar  : {
                transition  : theme.transitions.create ( ['margin', 'width'], {
                easing  : theme.transitions.easing.sharp,
                duration  : theme.transitions.duration.leavingScreen,
                } ),
            },

            appBarShift : {
                width : `calc(100% - ${drawerWidth}px)`,
                marginLeft  : drawerWidth,
                transition  : theme.transitions.create(['margin', 'width'], {
                easing  : theme.transitions.easing.easeOut,
                duration  : theme.transitions.duration.enteringScreen,
                }),
            },

            hide  : {
                display : 'none',
            },

            drawer  : {
                '& .MuiDrawer-paper':{
                   top : '4.6em',
                },
                width : drawerWidth,
                flexShrink  : 0,
            },

            profile :{
                '&..MuiMenuItem-root':{
                    top : '4.6em',
                }
            },

            drawerPaper : {
                width : drawerWidth,
            },

            drawerHeader  : {
                display : 'flex',
                alignItems  : 'center',
                padding : theme.spacing(0, 1),
                ...theme.mixins.toolbar,
                justifyContent  : 'flex-end',
            },

            menuButton : {
                marginRight : theme.spacing(2),
            },

            title : {
                display : 'none',
                [theme.breakpoints.up('sm')]: {
                display : 'block',
                color : 'black'
                },
            },

            search : {
                position : 'relative',
                borderRadius : theme.shape.borderRadius,
                backgroundColor : 'lightgray',
                height : '40px',
                boxSizing : 'unset',
                marginRight : theme.spacing(2),
                alignContent : 'center',
                justifyContent : 'center',

                [theme.breakpoints.up('sm')]: {
                marginLeft : theme.spacing(14),
                width: '50%',
                },
                
                '&.makeStyles-inputInput-18' : {
                paddingTop : '22px',
                paddingLeft : '55px', 
                backgroundColor : 'red',
                },
            },

            searchIcon : {
                width : theme.spacing(7),
                height : '100%',
                position : 'absolute',
                pointerEvents : 'none',
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'center',
                color : 'black',
            },

            inputRoot : {
                color : 'inherit',
                width : '100%',
            },

            inputInput : {
                padding : theme.spacing(1, 1, 1, 7),
                transition : theme.transitions.create('width'),
                width : '100%',

                [theme.breakpoints.up('md')]: {
                width : 600,
                },
            },

            sectionDesktop : {
                display : 'none',

                [theme.breakpoints.up('md')]: {
                  display : 'flex',
                  color : 'black'
                },
            },

            sectionMobile : {
                display : 'flex',
                [theme.breakpoints.up('md')]: {
                  display : 'none',
                  color : 'black',
                },
            },

            content : {
                flexGrow  : 1,
                padding : theme.spacing(3),

                transition  : theme.transitions.create('margin', {
                  easing  : theme.transitions.easing.sharp,
                  duration  : theme.transitions.duration.leavingScreen,
                }),

                marginLeft  : -drawerWidth,
            },

            contentShift  : {

                transition  : theme.transitions.create('margin', {
                  easing  : theme.transitions.easing.easeOut,
                  duration  : theme.transitions.duration.enteringScreen,
                }),

                marginLeft  : 0,
            },

            typography: {
              padding: theme.spacing(2),
            },

            paper: {
              marginRight: theme.spacing(2),
              width : '100%',
              paddingLeft : '40px',
              // backgroundColor : 'yellow'
              // '&..MuiMenuItem-root':{
              //   width : '100%',
              //   paddingLeft : '40px',
              // },
            },

            purple : {
              //color : " purple ",
              color : theme.palette.getContrastText(deepOrange[500]),
              backgroundColor : " red "
            },

            avatarRoot : {
              display: 'flex',
              '& > *': {
                margin: theme.spacing(1),
              },
            },

            card : {
              maxWidh : '345',
              top : '4.5em',
              '&.MuiPaper-rounded ':{
                display : 'flex',
                flexDirection : 'column',
                alignItems : 'center',
                
              },

            },

            cardMedia : {
              height : '1',
              paddingTop : '4.6em',

            },

            expand: {
              transform: 'rotate(0deg)',
              marginLeft: 'auto',
              transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
              }),
            },

            expandOpen: {
              transform: 'rotate(180deg)',
            },

            mobileSettings : {
              backgroundColor : 'yellow',
            },

            signIn : {
              alignItems : 'center',
            },

            keepIcon : {
              marginTop : '8px',
              height : '40px',
              marginRight : '23px',
          },

  }));
  
    export default function PrimarySearchAppBar(props) {
        const classes = useStyles();
        const [ anchorEl, setAnchorEl ] = React.useState(null);
        const [ mobileMoreAnchorEl, setMobileMoreAnchorEl ] = React.useState(null);
        const [ open, setOpen ] = React.useState (false);
        const [openAvatar,setOpenAvatar] = React.useState(null);
        const [ openDrawer, setopenDrawer ] = React.useState (false);
        const isMenuOpen = Boolean (anchorEl);
        const isMobileMenuOpen = Boolean (mobileMoreAnchorEl);
        const id = open ? 'simple-popover' : undefined;
        
        const anchorRef = React.useRef(null);
        const anchorAvatarRef = React.useRef(null);
        const [expanded,setExpanded] = React.useState(false);
        const [openPopper, setOpenPopper] = React.useState(false);
      
        const handleAvatarClick = event => {
          setOpenAvatar(event.currentTarget);
        };
      
        const handleAvatarClose = () => {
          setOpenAvatar(null);
        };


            const sideList = (
            <div
                  className = { classes.list } 
                  role = " presentation " >

                <List>
                    {['Notes', 'Reminders'].map((text, index) => (
                      <ListItem 
                          button key = { text } 
                      >
                            <ListItemIcon> 
                              {index % 2 === 0 ? <NotesIcon /> : <RemindersIcon />}
                            </ListItemIcon>

                            <ListItemText primary = { text } />
                      </ListItem>
                    ))}
                </List>

                <Divider />

                <List>
                    <label style = { { marginLeft : '20px', fontSize : 'small' } }> LABELS </label>
                      {['Edit Labels'].map((text, index) => (
                        <ListItem button key = {text}>
                      
                      <ListItemIcon><EditIcon /></ListItemIcon>

                      <ListItemText primary = {text} />

                        </ListItem>
                      ))}
                </List>

                <Divider />

                <List>
                    {['Archive', 'Trash'].map((text, index) => (
                      <ListItem 
                          button key = { text } >

                      <ListItemIcon>
                          {index % 2 === 0 ? <ArchiveIcon /> : <TrashIcon />}
                      </ListItemIcon>

                      <ListItemText primary = { text } />

                      </ListItem>
                    ))}
                </List>
            </div>

        );


            const handleProfileMenuOpen = event => {
              setAnchorEl (event.currentTarget);
            };

            const handleProfileMenuClose = () => {
              setAnchorEl (null);
            };
            
            const handleMobileMenuClose = () => {
              setMobileMoreAnchorEl (null);
            };
            
            const handleMenuClose = () => {
              setAnchorEl (null);
              handleMobileMenuClose ();
            };
            
            const handleMobileMenuOpen = event => {
              setMobileMoreAnchorEl(event.currentTarget);
            };
        
            const handleDrawerOpen = () => {
              setopenDrawer(true);
            };

            const handleDrawerClose = () => {
              setopenDrawer(false);
            };

            const handleToggle = () => {
              setOpen(prevOpen => !prevOpen);
            };

            const handlePopperClose = event => {
              if (anchorRef.current && anchorRef.current.contains(event.target)) {
                return;
              }
              setOpen(false);
            };

            const handleExpandClick = () => {
            setExpanded(!expanded);
            };

            function handleListKeyDown(event) {
              if (event.key === 'Tab') {
                event.preventDefault();
                setOpen(false);
              }
            }
  
            const prevOpen = React.useRef(open);
              React.useEffect(() => {
                if (prevOpen.current === true && open === false) {
                  anchorRef.current.focus();
                }
                prevOpen.current = open;
            }, [open]);

            const menuId = 'primary-search-account-menu';
            const renderMenu = (
              <Menu
                  anchorEl = { anchorEl }
                  anchorOrigin = {{ vertical : 'top', horizontal : 'right' }}
                  id = { menuId }
                  transformOrigin = {{ vertical : 'top', horizontal : 'right' }}
                  open = { isMenuOpen }
                  onClose = { handleMenuClose } 
              >
                <MenuItem onClick = { handleMenuClose }> Profile </MenuItem>
                <MenuItem onClick = { handleMenuClose }> My account </MenuItem> 
              </Menu>
            );
            
            const settingId = 'primary-settings-menu';
            const renderSettingMenu = (
              <Menu 
              anchorEl = { anchorEl }
                  anchorOrigin = {{ vertical : 'top', horizontal : 'right' }}
                  id = { settingId }
                  transformOrigin = {{ vertical : 'top', horizontal : 'right' }}
                  open = { isMenuOpen }
                  onClose = { handleMenuClose } 
              >
                <MenuItem onClick = { handleMenuClose }> Settings </MenuItem>
                <MenuItem onClick = { handleMenuClose }> help </MenuItem> 

              </Menu>
            );
  
            // const renderMobileProfile = ();
            const mobileMenuId = 'primary-search-account-menu-mobile';
            const renderMobileMenu = (
                <Menu 
                    anchorEl = {mobileMoreAnchorEl}
                    anchorOrigin = { { vertical : 'top', horizontal : 'right' } }
                    id = { mobileMenuId }
                    transformOrigin = { { vertical : 'top', horizontal : 'right' } }
                    open = { isMobileMenuOpen }
                    onClose = { handleMobileMenuClose } 
                >
                <MenuItem>
                <IconButton 
                    aria-label = "refresh of currunt page" 
                    color = "black"
                    onClick = { handleToggle }
                    onClose = { handlePopperClose }
                    onClose = { handleMobileMenuClose }
                     
                >
                      <SettingIcon />
                </IconButton>
                  <p 
                  // onClick = {handleToggle} 
                  onClose = {handlePopperClose} 
                  onClose = { handleMobileMenuClose } > 
                  Settings </p>
            </MenuItem>
                <Popper 
                    style = {{ width : '100%', paddingLeft : '5px', color : 'yellow', backgroundColor : '#fff', zIndex : '1' }}
                    open = {open} anchorEl = {anchorRef.current} 
                    role = {undefined} transition disablePortal 
                >
                    {({ TransitionProps, placement }) => (
                    < Grow
                      {...TransitionProps}
                      style = {{ transformOrigin : placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                <Paper elevation = { 20 } >

                  <ClickAwayListener onClickAway = {handlePopperClose}>
                    <MenuList  id = "menu-list-grow" 
                      onKeyDown = { handleListKeyDown } 
                    >
                          <MenuItem onClick = {handlePopperClose}> Settings </MenuItem> 
                          <MenuItem onClick = {handlePopperClose}> Enable dark theme</MenuItem>
                          <MenuItem onClick = {handlePopperClose}> send feedback</MenuItem>
                          <MenuItem onClick = {handlePopperClose}> Help</MenuItem>
                          <MenuItem onClick = {handlePopperClose}> App downloads</MenuItem>
                          <MenuItem onClick = {handlePopperClose}> Keyboard stortcuts</MenuItem> 

                    </MenuList>

                    </ClickAwayListener>

                </Paper>
            </Grow>
          )}
        </Popper>

            <MenuItem 
                onClick = { handleProfileMenuOpen } 
                onClose = { handleProfileMenuClose}
            >
                <IconButton
                  aria-label = "account of current user"
                  aria-controls = "primary-search-account-menu"
                  aria-haspopup = "true"
                  color = "black"
                >
                  <AccountCircle />
                </IconButton>

                <p> Profile </p>

            </MenuItem>

            <MenuItem>
                <IconButton 
                    aria-label = "refresh of currunt page" 
                    color = "black" 
                    type = "submit"
                    aria-label = "search" >
                      <RefreshIcon />
                </IconButton>
                <p> Refresh </p>
            </MenuItem>

            <MenuItem>
              <IconButton aria-label = "view of currunt page" 
                color = "black">
                < ViewAgendaIcon/>
            </IconButton>
            
              <p> ListView </p>
          </MenuItem> 

        </Menu>
      );
      const openProfile = Boolean(openAvatar);
      const idAvatar = openProfile ? 'simple-popover' : undefined;

      const renderProfile = (
        <Popover
        id = {idAvatar}
        open = {openProfile}
        anchorEl = {openAvatar}
        onClose = {handleAvatarClose}
        anchorOrigin = {{
          vertical : 'bottom',
          horizontal : 'center',
        }}
        transformOrigin = {{
          vertical : 'top',
          horizontal : 'center',
        }}
      >
        <Card className = {classes.card}>
        <Avatar style = {{backgroundColor : 'red' }} className = "avtar">V</Avatar>
        <CardContent>
          <Typography className = {classes.typography}>
            <p className = { classes.signIn}>
                 Vikas Waghmare 
            </p>
          </Typography>
          <Typography className = {classes.typography}>
            waghmarevikascs@gmail.com.
          </Typography>
          <Button 
            style = {{alignItems : 'center' , marginLeft : '65px'}} 
            onClick = {()=> {
            props.history.push('/LoginPage')
            }} > 
             SignOut 
          </Button>
        </CardContent>
        </Card>
      </Popover>
      );

        return(
              < div className = { classes.root } >
                  <CssBaseline />
                      <AppBar 
                          position = "fixed" color = "inherit"
                          className = { classes.appBar } 
                      >

                      <Toolbar >

                  <IconButton 
                      edge = "start"
                      className = { classes.menuButton }
                      color = "black"
                      aria-label = "open drawer"
                      onClick = {!openDrawer ? handleDrawerOpen : handleDrawerClose }
                      onChange = {handleToggle}

                  >

                    <MenuIcon/>
                
                  </IconButton>

              <img src = {keepLogo} alt = "Logo" className = {classes.keepIcon} />
          <Typography className = {classes.title} variant = "h6" noWrap>
            
            Fundoo Keep 
          </Typography>

          <div className = {classes.search}>

            <div className = {classes.searchIcon}>
              <SearchIcon />
            </div>

            <InputBase style = {{ marginTop : '13px' }}
              placeholder = " Search… "
              classes = {{
                root : classes.inputRoot,
                input : classes.inputInput,
              }}
              inputProps = {{ 'aria-label' : 'search' }}
            />
            </div>

          <div className = {classes.root} />

          <div className = {classes.sectionDesktop}>

          <IconButton
               edge = "end"
              aria-label = "refresh of currunt page"
              aria-controls = {menuId}
              aria-haspopup = "true"
              //onClick = {handleProfileMenuOpen}
              color = "black" >
              <RefreshIcon />
            </IconButton>

            <IconButton
               edge = "end"
              aria-label = "refresh of currunt page"
              aria-controls = {menuId}
              aria-haspopup = "true"
              //onClick = {handleProfileMenuOpen}
              color = "black" >
              <ViewAgendaIcon />
            </IconButton>

            <IconButton 
               
                ref = {anchorRef}
                //aria-controls = {open ? 'menu-list-grow' : undefined}
                aria-controls = {settingId}
                aria-haspopup = "true"
                onClick = {handleToggle} 
            >
                  <SettingIcon />
            </IconButton> 
            
            <Popper 
                open = {open} 
                anchorEl = {anchorRef.current} 
                role = {undefined} transition disablePortal
                >
                  {({ TransitionProps, placement }) => (
                  < Grow
                  {...TransitionProps}
                  style = {{ transformOrigin : placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                      <Paper >
                        <ClickAwayListener onClickAway = {handlePopperClose}>
                          <MenuList autoFocusItem = {openPopper} id = "menu-list-grow" onKeyDown={handleListKeyDown}>
                            <MenuItem onClick = {handlePopperClose}> Settings </MenuItem>
                            <MenuItem onClick = {handlePopperClose}> Enable dark theme </MenuItem>
                            <MenuItem onClick = {handlePopperClose}> send feedback </MenuItem>
                            <MenuItem onClick = {handlePopperClose}> Help </MenuItem>
                            <MenuItem onClick = {handlePopperClose}> App downloads </MenuItem>
                            <MenuItem onClick = {handlePopperClose}> Keyboard stortcuts </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
              </Popper>

            <IconButton
              // edge = "end"
              aria-label = " account of current user "
              // aria-controls = { menuId }
              aria-haspopup = " true "
              // onClick = { handleProfileMenuOpen }
              color = " inherit "
            >

              {/* <AccountCircle /> */}
              <div className = { classes.avatarRoot }  >
                <Avatar className = {classes.purple} 
                  onClick = {handleAvatarClick} > 
                    V 
                </Avatar>
                    {renderProfile}
              </div>
            </IconButton>

          </div>

          <div className = {classes.sectionMobile}>

            <IconButton
              aria-label = "show more"
              aria-controls = {mobileMenuId}
              aria-haspopup = "true"
              onClick = {handleMobileMenuOpen}
              color = "inherit" >
              <MoreIcon />
            </IconButton>

          </div>

        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderSettingMenu}
      {renderMenu}
      {renderMobileMenu}

      <Drawer
        className = {classes.drawer}
        variant = "persistent"
        anchor = "left"
        open = {openDrawer}
        onClick = {handleToggle} 
      >
        {sideList}
      </Drawer>
      
      <main
        className = {clsx(classes.content, {
          [classes.contentShift] : open,
        })}
      >
        <div className = {classes.drawerHeader} />
          <div>
            <CreateNote/>
          </div>
      </main>

    </div>
  );
}


