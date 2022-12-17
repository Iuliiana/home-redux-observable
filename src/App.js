import './App.scss';
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";
import {Services} from "./pages/Services";
import {Notfound} from "./pages/Notfound";
import {Task1} from "./pages/Task1";
import {News} from "./pages/News";
import ServicesDetail from "./pages/ServicesDetail";

function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path='/' index element={<Services/>}/>
                    <Route path='/:serviceId/details' element={<ServicesDetail/>}/>
                    <Route path='/search' index element={<Task1/>}/>
                    <Route path='/news' index element={<News/>}/>
                    <Route path='*' element={<Notfound/>}/>
                </Route>

            </Routes>

        </>
    );
}

export default App;
