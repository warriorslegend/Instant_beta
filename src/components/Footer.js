import React from 'react';
import { Link } from 'react-router-dom';
// Content
import { LinkStyle } from '../constants/Style';

export default function Footer() {
    return (
        <footer className="flex column background-gray-dark white">
            <Link to="/contacto" style={LinkStyle}>
                <span>Contacto</span>
            </Link>
            <Link to="/terminos-y-condiciones" style={LinkStyle}>
                <span>Términos y condiciones</span>
            </Link>
        </footer>
    )
}
