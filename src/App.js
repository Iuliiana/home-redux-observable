import './App.scss';
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";
import {Services} from "./pages/Services";
import {Notfound} from "./pages/Notfound";
import {Task1} from "./pages/Task1";
import {Task2} from "./pages/Task2";
import ServicesDetail from "./pages/ServicesDetail";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' index element={<Services/>}/>
                    <Route path='/:serviceId/details' element={<ServicesDetail/>}/>
                    <Route path='/search' index element={<Task1/>}/>
                    <Route path='/task-2' index element={<Task2/>}/>
                    <Route path='*' element={<Notfound/>}/>
                </Route>

            </Routes>

        </>
    );
}

export default App;
