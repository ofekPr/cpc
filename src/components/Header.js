import React from 'react'
import { SideSheet, Paragraph, Menu, HomeIcon, CornerDialog, LogInIcon, ShoppingCartIcon, CogIcon, toaster } from 'evergreen-ui'
import Component from "@reactions/component";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Box from '@material-ui/core/Box';
import products from '../sources/products'
import useStyles from '../sources/useStyles'

export default () => {
    const classes = useStyles()
    return(
        <Component initialState={{ isShown: false, isShownTwo: false }}>
            {({ state, setState }) => (
                <React.Fragment>
                    <Box className={classes.root} width="100%">
                        <AppBar className={classes.customWidth} position="static" width="100%">
                            <Toolbar width="100%">
                                <IconButton
                                    edge="start"
                                    className={classes.menuButton}
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={() => setState({ isShown: true })}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography className={classes.title} variant="h4" noWrap>
                                    News
                                </Typography>
                                <div className={classes.search}>
                                    <Autocomplete
                                            freeSolo
                                            disableClearable
                                            id="combo-box-demo"
                                            options={products}
                                            getOptionLabel={(option) => option.label}
                                            style={{ width: 300, left: 100 }}
                                            renderInput={(params) => <TextField {...params} label="products" color="secondary" variant="outlined" />}
                                    />
                                </div>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <SideSheet
                        isShown={state.isShown}
                        onCloseComplete={() => setState({ isShown: false})}
                    >
                    <Paragraph margin={40}>Menu</Paragraph>
                        <Menu className="menu">
                            <Menu.Group>
                                <Menu.Item icon={HomeIcon}>home</Menu.Item>
                                <Menu.Item icon={ShoppingCartIcon}>cart</Menu.Item>
                                <Menu.Item 
                                    icon={LogInIcon}
                                    onSelect={() => setState({ isShownTwo: true, isShown: false })}                                >log in</Menu.Item>
                            </Menu.Group>
                            <Menu.Divider />
                            <Menu.Group>
                                <Menu.Item icon={CogIcon} intent="danger">settings</Menu.Item>
                            </Menu.Group>
                        </Menu>
                    </SideSheet>
                    <CornerDialog
                        title="thanks"
                        isShown={state.isShownTwo}
                        onCloseComplete={() => setState({ isShownTwo: false })}
                        onConfirm={(close) => {
                            toaster.notify(
                                'instead of a toaster the client will go to another page or something'
                                )
                                close()
                        }}
                    >
                        thanks for logging in
                    </CornerDialog>
                </React.Fragment>
            )}
        </Component>
    )
}
