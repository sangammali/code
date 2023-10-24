import { Stack } from "@mui/material"
import Header from "../common/Header"
import Footer from "../common/Footer"
import {Outlet} from "react-router-dom"
const Layout = ()=>{
return(
    <>
    <Header />
    <Stack>
        <Outlet />
    </Stack>
    <Footer />
    </>
)
}

export default Layout