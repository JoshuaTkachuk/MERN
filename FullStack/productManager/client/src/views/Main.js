import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import React, { useState } from 'react';
const Main = (props) =>{
    const [product, setProduct] = useState([]);
    return(
        <div>
            <ProductForm product={product} setProduct={setProduct}/>
            <ProductList product={product} setProduct={setProduct}/>
        </div>
    );
}
export default Main;