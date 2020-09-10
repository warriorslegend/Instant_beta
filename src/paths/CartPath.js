import React from 'react';
import { connect } from 'react-redux';

function CartPath({CartProps}) {

    let ProductsInCart = [];

    Object.keys(CartProps.products).forEach( (item) => {
        if (CartProps.products[item].inCart) {
            ProductsInCart.push(CartProps.products[item])
        };
    })

    ProductsInCart = ProductsInCart.map((product, index) =>{
        return(
            <div className="flex row shadow cart-content" key={index}>
                <img src={product.src} alt={product.name}/>
                <div className="flex column justify-center card-body">
                    <span className="strong">{product.name}</span>
                    <span>Precio: <span className="price radius-10px">${product.price}</span></span>
                    <span>Cantidad: {product.quantity}</span>
                </div>
            </div>
        )
    });

    return (
        <article>
            <aside className="cart flex row container space-between">
                <div className="cart-list">{ProductsInCart}</div>
                <div className="subtotal">Subtotal ({CartProps.value} {CartProps.value === 1 ? 'producto' : 'productos'}): <span className="strong">${CartProps.total} MXN</span></div>
            </aside>
        </article>
    );
}

const mapStateToProps = state => ({
    CartProps: state.CartState
})

export default connect(mapStateToProps)(CartPath);
