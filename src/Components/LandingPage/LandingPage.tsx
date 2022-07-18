import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, Typography, Divider, Button } from "@mui/material";

const LandingPage = () => {
    return (
        <Container maxWidth="md" sx={{ display: "flex", flexDirection: 'column', margin: "auto" }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h2" fontWeight="400" color="#1e1e1e">
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
            </Box>
            <Divider />
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 80px" }}>
                <div className="features">
                    <div className="img-placeholder"></div>
                    Easy to Use
                </div>
                <div className="features">
                    <div className="img-placeholder"></div>
                    Open Source
                </div>
                <div className="features">
                    <div className="img-placeholder"></div>
                    Available on Github
                </div>
            </Box>
        </Container>
    )
}

export default LandingPage