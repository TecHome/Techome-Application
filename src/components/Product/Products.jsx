import React, { useEffect } from 'react';
import Header from '../../layouts/Header'
import Gallery from '../Home/Gallery/Gallery';
import HeaderProducts from '../Home/Gallery/Header';

export default function Products() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header item={'Products'} />
            <HeaderProducts />
            <Gallery />
        </>
    );
}
