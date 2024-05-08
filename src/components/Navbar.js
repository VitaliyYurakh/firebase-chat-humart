import { Toolbar, AppBar, Button, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils.js/consts";

import { useAuthState } from "react-firebase-hooks/auth"
import { useContext } from "react";
import { Context } from "../index";

const Navbar = () => {

    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)

    const logout = () => {
        auth.signOut()
    }

    return (
        <AppBar color="secondary" position="static">
            <Toolbar variant="dense">
                <Grid container justifyContent="flex-end">
                    {user ?
                        <Button variant="outlined" onClick={logout}>Выйти</Button>
                        :
                        <NavLink
                            to={LOGIN_ROUTE}
                        >
                            <Button variant="outlined">Логин</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;