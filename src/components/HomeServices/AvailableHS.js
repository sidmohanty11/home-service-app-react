import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableHS.module.css';
import HSItem from './HSItem';

//The no. of available home services available wrapped around a Card.

const AvailableHS = () => {
    const [hs, setHs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpErr, setHttpErr] = useState(false);

    //----------fetching data from firebase server!-------------
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://react-http-8d73b-default-rtdb.firebaseio.com/jugaad.json');

            if (!res.ok) {
                throw new Error('Something went wrong from server!');
            }
            const resData = await res.json();
            const loadedData = [];
            for (const key in resData) {
                loadedData.push({
                    id: key,
                    name: resData[key].name,
                    description: resData[key].description,
                    price: resData[key].price
                });
            }
            setHs(loadedData);
            setIsLoading(false);
        };
        //---can't use try catch as we have to make useEffect async fn---
        //-------------can make this a fn itself-------------------------
        //--------------or use then catch--------------------------------
        fetchData()
            .then()
            .catch(e => {
            setIsLoading(false);
            setHttpErr(e.message);
            });
    }, []);
    return (
        <div className={classes.hs}>
            <Card>
                <ul>
                    {hs.map(h =>
                        <HSItem
                        id={h.id}
                        key={h.id}
                        name={h.name}
                        description={h.description}
                        price={h.price} />
                    )}
                </ul>
                {isLoading && !httpErr && <p className={classes.loading}>Loading...</p>}
                {httpErr && <p className={classes.httpError}>{httpErr}</p>}
            </Card>
        </div>
    )
}

export default AvailableHS;
