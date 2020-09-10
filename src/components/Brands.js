import React from 'react';
import BrandList from '../database/Brands.json';
import { NavigateBeforeRounded, NavigateNextRounded } from '@material-ui/icons';
import { ArrowStyle } from '../constants/Style';
import Carousel from '@brainhubeu/react-carousel'

function Brands() {

    return (
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
            {BrandList.map((brand) =>{
            return(
                <div className="card shadow card-body radius-10px brands">
                    <img src={brand.src} alt={`Logo de ${brand.name}`}/>
                </div>
            )
            })}
        </Carousel>
    )
}

export default Brands
