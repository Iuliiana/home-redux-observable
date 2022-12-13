import {NavLink, Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header>
                <ul className="nav">
                    <li><NavLink className="nav-item" to='/'>services</NavLink></li>
                    <li><NavLink className="nav-item" to='/search'>search</NavLink></li>
                    <li><NavLink className="nav-item" to='/task-2'>Task 2</NavLink></li>
                </ul>
            </header>

            <div className="wrapper">
                <Outlet/>
            </div>
        </>
    );
}
export {Layout}