import React from 'react';
import Jumbotron from '../../components/cards/Jumbotron';

const Product = () => {

    return (
        <div>
            <Jumbotron title="Hellow World" subTitle='Welcome to admin product page'></Jumbotron>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-9">
                        <div className="">create product</div>
                        <p>create product from</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;