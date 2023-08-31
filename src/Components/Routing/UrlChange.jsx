import React from 'react';
import { Data } from './Data';
import { Link } from 'react-router-dom';

export const UrlChange = () => {
    return (
        <div style={{ display: "flex" }}>
            <nav style={{ borderRight: "solid 2px", padding: "20px" }}>
                {
                    Data.map((key) => (
                        <Link
                            style={{ margin: "1rem 0", display: "block" }}
                            to={`/detail/${key.name}`} 
                            key={key.id}
                        >
                            {key.name}
                        </Link>
                    ))
                }
            </nav>
        </div>
    );
};
