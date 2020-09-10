import React from 'react';
import { connect } from 'react-redux';
import { AddToCart } from '../actions/AddAction';
// Content
import { Button } from '@material-ui/core';
import { ButtonStyle } from '../constants/Style';

function Product(props) {
    return(
        <div className="card product shadow radius-10px">
            <img src={props.src} alt={props.name}/>
            <div className="card-body flex column">
                <span>{props.brand} {props.name}</span>
                <div className="flex row space-between align-center price-aside">
                    <span className="price radius-10px">${props.price}</span>
                    <Button
                        variant="contained"
                        color="primary"
                        style={ButtonStyle}
                        onClick={() => props.AddToCart((props.id-1))}
                    >
                        Agregar al carrito
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default connect(null, { AddToCart })(Product);