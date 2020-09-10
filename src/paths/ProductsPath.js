import React from 'react';
import Product from '../components/Product';
import List from '../database/Products.json'

export default function ProductsPath() {
    return (
        <article className="container flex column justify-center">
            <span className="title">Todos los productos</span>
            <div className="flex row wrap">
                {List.map( (product) =>{
                    return (
                        <Product
                            name={product.name}
                            brand={product.brand}
                            src={product.src}
                            price={product.price}
                            key={product.id}
                            id={product.id}
                        />
                    )
                }) }
            </div>
        </article>
    )
}
