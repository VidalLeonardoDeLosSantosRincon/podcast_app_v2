import {
    Routes,
    Route,
    BrowserRouter as Router
} from "react-router-dom";

//components
import {App} from '../components/App';

//pages
import { Home } from "../pages/home";
import { Channel } from "../pages/channel";

export const AppRoutes = () => {
    return(
        <Router>
            <App>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/channels/" element={<Home/>}/>
                    <Route path="/channel/:id" element={<Channel/>}/>
                </Routes>
            </App>
        </Router>
    );
};