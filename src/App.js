import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavouritePage from "./pages/FavouritePage";
import Nav from "./components/Nav";
import CurrentPage from "./pages/CurrentPage";

function App() {
    // Nav is the visible navigation.
    // Routes defines different routes the app
    // can take - some might not be directly 
    // accessible by users and used by useNavigate.
    // See PostCard.js for an example.
    return (
        <main>
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/current" element={<CurrentPage />} />
                <Route path="/favourite" element={<FavouritePage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>
    );
}

export default App;
