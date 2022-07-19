import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, Typography, Divider, Button, Stack } from "@mui/material";

const LandingPage = () => {
    return (
        <Container maxWidth="md" sx={{ py: 12 }}>
            <Stack alignItems={"center"} spacing={5}>
                <Typography variant="h2">
                    Welcome To Fangpoll
                </Typography>
                <Typography variant="body1" paragraph={true} color="#6c6c6c" sx={{ width: "60%", textAlign: "center" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quo mollitia reiciendis obcaecati consequuntur et
                </Typography>
                <Link to={"/login"}>
                    <Button variant="contained" >
                        Login to Start
                    </Button>
                </Link>
            </Stack>
            <Divider sx={{ my: 5 }} />
            <Stack direction={"row"} justifyContent={"space-between"} sx={{ px: 10, mt: 5 }}>
                <div className="features">
                    <div className="img-placeholder"></div>
                    Login
                </div>
                <div className="features">
                    <div className="img-placeholder"></div>
                    Create a Poll
                </div>
                <div className="features">
                    <div className="img-placeholder"></div>
                    Share it
                </div>
            </Stack>
        </Container>
    )
}

export default LandingPage