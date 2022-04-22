import React from "react";
import CategoryList from "../category-list/CategoryList";
import { Link } from "react-router-dom";

export default class Header extends React.Component {

    render() {

        return (
            <>
                <div className="logo">
                    <h1>RicettEpiche</h1>
                    <h3>Le pietanze preferite dei web developers</h3>
                </div>
                <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark mb-5">
                    
                    <div className="container-fluid justify-content-center">
                        <div className="mx-4"><a className="navbar-brand">RicettEpiche</a></div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contatti" className="nav-link active">Contatti</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/chi-siamo" className="nav-link active">Chi siamo</Link>
                        </li>
                            
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Categorie</a>
                            
                                <CategoryList />
        
                            </li>
        
                        </ul>
                        </div>
                    </div>
                    </nav>

            </>
        )
    }
}