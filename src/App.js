import './App.scss';
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";
import {Home} from "./pages/Home";
import {Notfound} from "./pages/Notfound";
import {Task1} from "./pages/Task1";
import {Task2} from "./pages/Task2";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' index element={<Home/>}/>
                    <Route path='/search' index element={<Task1/>}/>
                    <Route path='/task-2' index element={<Task2/>}/>
                    <Route path='*' element={<Notfound/>}/>
                </Route>

            </Routes>

        </>
    );
}

export default App;
