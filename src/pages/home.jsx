import React from "react";
import { useGlobalContext } from "../context/global_context";
import '../styles/home.css'

const Home = () => {
    const { globalState } = useGlobalContext();

    const dataFromAPI = globalState.dataFromAPI || [];

    if (dataFromAPI.length === 0) {
        return <p>Cargando lista de productos...</p>; 
    }

    return (
        <div className="d-flex flex-wrap justify-content-center p-3 gap-3 container bg-light">
            {dataFromAPI.map((item, index) => (
                <div key={index} className="card selecting-card" style={{ width: '18rem' }}>
                    <img src={item.image} style={{maxHeight:"300px", width:"auto"}} className="card-img-top p-3" alt="..." />
                    <div className="card-body d-flex flex-column justify-content-end">
                        <h5 className="card-title text-primary clamp-text">{item.title}</h5>
                        <h6><i className="fas fa-star text-warning"></i> {item.rating.rate}</h6>
                        <h4 className="selecting-price">${item.price}</h4>
                        <p className="card-text clamp-text">{item.description}</p>
                        <a href="#" className="btn btn-primary"><i class="fas fa-cart-plus"></i> Añadir</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
