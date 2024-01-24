import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from '../LandingPage'

export default function Rotas() {
    return(
        
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <LandingPage/> } />
            </Routes>
        </BrowserRouter>

    )
}