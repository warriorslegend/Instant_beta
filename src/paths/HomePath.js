import React from 'react';
// Content
import Container from '../components/Container';
import ImageCarousel from '../components/ImageCarousel';
import ProductList from '../components/ProductList';
import Brands from '../components/Brands';

export default function HomePath() {
    return (
        <article className="flex column background-gray">
            <ImageCarousel/>
            <aside>
                <Container
                    title="Productos"
                    to="/productos"
                    content={<ProductList/>}
                />
                <Container
                    title="Tiendas populares"
                    to="/tiendas"
                    content={<Brands/>}
                />
                <Container
                    title="Categorías"
                    to="/categorias"
                    content="Contenido"
                />
            </aside>
        </article>
    )
}
