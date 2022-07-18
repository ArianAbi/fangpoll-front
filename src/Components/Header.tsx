import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header >
            <Link to={"/"}>
                <div className="logo">LOGO</div>
            </Link>
            <Button variant="outlined" size="medium">Sign Up</Button>
        </header>
    )
}

export default Header