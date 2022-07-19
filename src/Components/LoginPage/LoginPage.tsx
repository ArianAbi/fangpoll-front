import { Container, Stack, Button, TextField, Box, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onLoginClick = (e: any) => {
        e.preventDefault()
        console.log(`username : ${username} , password : ${password}`);
    }

    return (
        <Container maxWidth={"sm"} sx={{ my: 8 }}>
            <Paper elevation={6} sx={{ backgroundColor: "#fff", py: 4 }}>
                <Stack justifyContent={"center"} alignItems={"center"} component={"form"} spacing={7}>
                    <Typography variant="h3">Fangpoll</Typography>
                    <Stack sx={{ width: "60%", p: 2 }} spacing={5} alignItems={"center"} >
                        <TextField
                            required
                            fullWidth
                            label={"Username"}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <TextField
                            required
                            fullWidth
                            label={"Password"}
                            type={"password"}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Stack>
                    <Button
                        variant="contained"
                        size="large"
                        type="submit"
                        onClick={onLoginClick}
                    >Login</Button>
                </Stack>
            </Paper>
        </Container >
    )
}

export default LoginPage