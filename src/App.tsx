import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Helmet } from "react-helmet";
import HomePage from "./HomePage.tsx";
import DetailsPage from "./DetailsPage.tsx";

const App = () => {
    return (
        <>
            <Helmet>
                <meta name="google-site-verification" content="A_WMxsHStyuT_xuG0Wj6tzpFxeQqSAD0YyCCk27OgLI" />
                <meta name="msvalidate.01" content="D131A4DC4BABA108E2607C4F1B370F25" />
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
