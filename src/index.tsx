import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CssBaseline } from "@mui/material";
import App from "./App"


const theme = createTheme({
    palette: {
        mode: "light"
    },
    spacing: 4
});


const root = ReactDOM.createRoot(
    document.querySelector("#root") as HTMLElement
)
root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
)