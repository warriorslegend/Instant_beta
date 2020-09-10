import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { GetValue } from '../actions/GetAction';
// Content
import { ShoppingCartOutlined } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';
import { LinkStyle } from '../constants/Style';

function ShoppingCart(props) {

    useEffect(() => {
        GetValue();
    }, [])


    return (
        <aside className="shopping-cart button flex">
            <Link to="/carrito" style={LinkStyle}>
                <Badge
                    color="primary"
                    overlap="circle"
                    badgeContent={props.CartProps.value}
                >
                    <ShoppingCartOutlined
                        style={{fontSize: '1.8em'}}
                    />
                </Badge>
            </Link>
        </aside>
    )
}

const mapStateToProps = state => ({
    CartProps: state.CartState
})

export default connect(mapStateToProps ,{ GetValue })(ShoppingCart);