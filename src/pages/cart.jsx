import React from "react";
import { useGlobalContext } from "../context/global_context";

const Cart = () => {

    const { globalState } = useGlobalContext();

    const cartProducts = globalState.cartProducts || [];

    const addItem = (index) => {
        debugger
        const item = cartProducts.find(item => item.id == index);
        console.log(item);
    }

    return (
        <div className="d-flex flex-wrap justify-content-center p-3 container bg-light">
            {cartProducts.length > 0 && (
                <>
                    <div className="col-md-7 col-sm-12">
                        {cartProducts.map(item => (
                            <div class="alert alert-dark d-flex gap-2 align-items-center row" role="alert">
                                <img className="col-3" style={{ maxHeight: "100px", width: "auto" }} src={item.image} alt="Sin imagen" />
                                <h6 className="col-7">{item.title}</h6>
                                <div className="col-2 d-flex justify-content-evenly">
                                    <button onClick={() => addItem(item.id)} style={{ background: "white", borderRadius: '100%' }} className="btn"><i class="fa-solid fa-plus"></i></button>
                                    <button style={{ background: "white", borderRadius: '100%' }} className="btn"><i class="fa-solid fa-minus"></i></button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-5 col-sm-12 p-3 pt-0">
                        <div style={{ background: 'white' }} className="border rounded p-2">
                            <h2 className="text-center display-5">Datos de Factura</h2>
                            <hr />
                            {cartProducts.map(item => (
                                <div className="row align-items-center">
                                    <p className="col-7 text-truncate m-0 py-0">{item.title}</p>
                                    <h6 className="col-5 m-0 py-0">
                                        {item.quantity ? (
                                            <strong>{item.quantity} x {item.price}</strong>
                                        ) : (
                                            <strong> 1 x {item.price}</strong>
                                        )}
                                    </h6>

                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            {cartProducts.length == 0 && (
                <h1 className="display-2">Carrito de compras vacío...</h1>
            )}

        </div>
    );
};

export default Cart;