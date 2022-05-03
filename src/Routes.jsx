import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { Internet } from "./pages/Internet";
import { Intranet } from "./pages/Intranet";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Internet />} />
                <Route path="/intra" element={<Intranet />} />
            </Routes>
        </Router>
    )
}