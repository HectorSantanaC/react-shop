import React from 'react';
import '@styles/Order.scss';
import flechita from '@icons/flechita.svg';

const Order = () => {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My orders</h1>
                <div className="my-order-content">
                    <div className="order">
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                        <img src={flechita} alt="arrow" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;