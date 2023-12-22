import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"
import HomePage from "./Homepage/Homepage"
import Registartion from "./Registrationpage"
const Navigation = () => {

    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Registartion />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>


        </BrowserRouter>

    )
}
export default Navigation;