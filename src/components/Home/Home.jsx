import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    const {} = tshirts;
    return (
        <div>
            <h2>This is Home T-Shirt:  {tshirts.length}</h2>
        </div>
    );
};

export default Home;