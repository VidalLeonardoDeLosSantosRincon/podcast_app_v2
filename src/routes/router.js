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

//configuring store
import {Store} from "../store/store";
import {Provider} from "react-redux";

export const AppRoutes = () => {
    return(
            <Router>
                <Provider store={Store}>
                    <App>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/channels/" element={<Home/>}/>
                            <Route path="/channel/:id" element={<Channel/>}/>
                        </Routes>
                    </App>
                </Provider>
            </Router>
    );
};