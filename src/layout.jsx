import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useGlobalContext } from './context/global_context';
import Home from './pages/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Cart from './pages/cart';
import Refund from './pages/refund';

const App = () => {
    const { updateDataFromAPI } = useGlobalContext();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                updateDataFromAPI(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/refund" element={<Refund />} />
                <Route exact path="*" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
