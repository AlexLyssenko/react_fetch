import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Helmet } from "react-helmet";
import HomePage from "./HomePage.tsx";
import DetailsPage from "./DetailsPage.tsx";

const App = () => {
    return (
        <>
            <Helmet>
                <meta name="google-site-verification" content="A_WMxsHStyuT_xuG0Wj6tzpFxeQqSAD0YyCCk27OgLI" />
                <title>Fetch react</title>
            </Helmet>

            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path=":id" element={<DetailsPage/>}/>
                </Routes>
            </Router>
        </>
    );
};

export default App;
