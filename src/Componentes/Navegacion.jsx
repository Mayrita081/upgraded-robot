import React from "react";

class Navegacion extends React.Component{
render(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="https://www.capacitarte.org/" rel="noreferrer" target="_blank">Capacitarte ::: React</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="https://www.capacitarte.org/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="https://www.capacitarte.org/">Cursos</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="https://www.capacitarte.org/">Programas</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="https://www.capacitarte.org/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="https://www.capacitarte.org/">Action</a></li>
                    <li><a className="dropdown-item" href="https://www.capacitarte.org/">Another action</a></li>
                    <li><a className="dropdown-item" href="https://www.capacitarte.org/">Something else here</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

}

export default Navegacion;