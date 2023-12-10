import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <Link to={"/"} class="navbar-brand"><i class="fas fa-store"></i> TIENDA ONLINE</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to={"/"}><i class="fas fa-home"></i> Inicio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={"/cart"}><i class="fas fa-shopping-cart"></i> Carrito</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={"/refund"}><i class="fas fa-undo-alt"></i> Devoluciones</Link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Productos" aria-label="Search" />
                        <button class="btn btn-outline-success d-flex align-items-center gap-2" type="submit"><i class="fas fa-search"></i></button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
