import React from 'react';
import { Link } from 'react-router-dom';
// Content
import { LinkStyle } from '../constants/Style';

export default function Container(props) {
    return (
        <div className="flex column container">
            <div className="flex row align-center">
                <span className="title">{props.title}</span>
                <Link to={props.to} style={LinkStyle}>
                    <span className="button see-all">Ver más</span>
                </Link>
            </div>
            <div className="flex row wrap">
                {props.content}
            </div>
        </div>
    )
}
