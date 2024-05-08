import { Container, Grid, Box } from "@mui/material";

const Loader = () => {
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
                    alignItems="center"
                    direction="column"
                >
                    <Box p={5}>
                        <div className="loader"></div>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Loader;