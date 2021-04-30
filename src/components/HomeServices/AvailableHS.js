import React from 'react';
import Card from '../UI/Card';
import './AvailableHS.css';
import HSItem from './HSItem';

const DUMMY_HS = [
    {
        id: 'h1',
        name: 'Plumbers Organization',
        description: 'Any plumber related work',
        price: 300,
    },
    {
        id: 'h2',
        name: 'Computer/Mobile Repair Organization',
        description: 'Any software/hardware related work',
        price: 300,
    },
    {
        id: 'h3',
        name: 'Electricians Organization',
        description: 'For any electricity stuffs',
        price: 300,
    },
    {
        id: 'h4',
        name: 'You need Cook Organization',
        description: 'If you need cook',
        price: 300,
    },
    {
        id: 'h5',
        name: 'Maid Organization',
        description: 'If you need maid',
        price: 300,
    },
];

const AvailableHS = () => {
    return (
        <div className="hs">
            <Card>
                <ul>
                    {DUMMY_HS.map(hs => <HSItem
                        key={hs.id}
                        name={hs.name}
                        description={hs.description}
                        price={hs.price} />
                    )}
                </ul>
            </Card>
        </div>
    )
}

export default AvailableHS;
