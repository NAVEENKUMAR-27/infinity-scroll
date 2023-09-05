import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Data } from './Data';

export const DetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const selectedProduct = Data.find(item => item.id === parseInt(id, 10));
        setProduct(selectedProduct);
    }, [id]); 
    console.log(Data,"Noo data found")

    return (
        <div>
            <h1>Neww</h1>
            {product ? (
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};
