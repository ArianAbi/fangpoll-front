import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CssBaseline } from "@mui/material";
import { grey } from "@mui/material/colors";
import App from "./App"


const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            paper: "#d9d9d9",
            default: "#d9d9d9"
        }
    },
    typography: {
        h2: {
            fontWeight: "600"
        },
        h3: {
            fontWeight: "500"
        }
    }
});


const root = ReactDOM.createRoot(
    document.querySelector("#root") as HTMLElement
)
root.render(
    <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
)