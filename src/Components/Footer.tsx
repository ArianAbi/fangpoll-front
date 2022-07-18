import React from "react";
import { Typography, Box } from "@mui/material";

const Footer = () => {
    return (
        <footer>

            <div className="footer-content">

                <Box className="paragraphs">
                    <Typography variant="h3" sx={{ fontSize: "2.5rem", margin: "10px 15px" }}>
                        Footer
                    </Typography>
                    <Typography variant="body1" sx={{ width: "400px", padding: "0 15px" }}>
                        this page was made in 5 weeks for final assignment of web development course
                    </Typography>
                </Box>

                <div className="social-media">
                    <span>W</span>
                    <span>Ig</span>
                    <span>In</span>
                    <span>Git</span>
                </div>
            </div>

            <Typography variant="body1">@2022</Typography>
        </footer>
    )
}

export default Footer