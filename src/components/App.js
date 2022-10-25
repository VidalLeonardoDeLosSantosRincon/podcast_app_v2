
import './App.css';

import { Layout } from './main/layout';

export const App = ({children}) => {
    return (
        <div className="App">
            <Layout>
                {children}
            </Layout>
        </div>
    );
}


