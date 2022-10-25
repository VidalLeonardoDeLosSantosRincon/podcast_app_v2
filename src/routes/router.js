import {
    Routes,
    Route,
    BrowserRouter as Router
} from "react-router-dom";

//components
import {App} from '../components/App'

//pages
import { Home } from "../pages/home";

export const AppRoutes = () => {
    return(
        <Router>
            <App>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
            </App>
        </Router>
    );
};