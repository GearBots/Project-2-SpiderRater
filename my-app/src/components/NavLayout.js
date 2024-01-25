import { NavLink, Link, Outlet } from "react-router-dom";
function NavLayout(){
    return (
        <div>
            <header>
            <nav>
                <h1 className="title"> Spider-Rater </h1>
                <NavLink to="/" className='navbar'> Home </NavLink>
                <Link to="/movielist" className="navbar"> Movie List </Link>
            </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
export default NavLayout;