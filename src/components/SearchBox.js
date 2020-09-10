import React from 'react';
import { Search } from '@material-ui/icons';

export default function SearchBox() {
    return (
        <aside className="flex row search-box align-center border radius-6px">
            <input type="text" placeholder="Buscar"/>
            <Search className="button search-button"/>
        </aside>
    )
}
