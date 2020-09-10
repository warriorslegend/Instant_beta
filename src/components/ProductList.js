import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
// Content
import { NavigateBeforeRounded, NavigateNextRounded } from '@material-ui/icons';
import { ArrowStyle } from '../constants/Style';
import Product from './Product';
import List from '../database/Products.json';

export default function ProductList() {
    return (
        <div className="flex justify-center full">
            <Carousel
                slidesPerPage={4}
                slidesPerScroll={1}
                breakpoints={{
                    800: {
                        slidesPerPage: 2
                    },
                    655: {
                        slidesPerPage: 1
                    }
                }}
                arrowLeft={
                    <NavigateBeforeRounded
                        name="arrow-left"
                        style={ArrowStyle}
                    />
                }
                arrowRight={
                    <NavigateNextRounded
                        name="arrow-right"
                        style={ArrowStyle}
                    />
                }
                addArrowClickHandler
            >
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
            </Carousel>
        </div>
    );
}