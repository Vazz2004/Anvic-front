import React from 'react';
import PlantCardList from './promociones';

const App = () => {
    const plantData = [
        {
            imageSrc: '/imagenesparapromo/img1.png',
            category: 'Indoor',
            plantName: 'Peace Lily',
            price: 36.0,
            bgColor: 'teal',
            textColor: 'orange',
        },
        {
            imageSrc: '/imagenesparapromo/img2.png',
            category: 'Outdoor',
            plantName: 'Monstera',
            price: 45.0,
            bgColor: 'teal',
            textColor: 'teal',
        },
        {
            imageSrc: '/imagenesparapromo/img3.webp',
            category: 'Outdoor',
            plantName: 'Oak Tree',
            price: 68.5,
            bgColor: 'purple',
            textColor: 'purple',
        },
    ];

    return (
        <div>
            <PlantCardList plantData={plantData} />
        </div>
    );
};

export default App;
