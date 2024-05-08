import { Button, Container, Grid, Box } from "@mui/material";
import { useContext } from "react";
import { Context } from "../index";

const Login = () => {
    const { firebase, auth } = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const { user } = await auth.signInWithPopup(provider)
    }

    return (
        <Container>
            <Grid
                container
                style={{ height: window.innerHeight - 50 }}
                alignItems="center"
                justifyContent="center"
            >
                <Grid
                    container
                    style={{ width: 400, backgroundColor: 'lightgray' }}
                    alignItems="center"
                    direction="column"
                >
                    <Box p={5}>
                        <Button variant="outlined" onClick={login}>Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Login;
