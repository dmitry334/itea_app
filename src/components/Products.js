import { useState } from 'react';

const Products = (props) => {

    const [description, setDescription] = useState(false);

    const showDescription = (index) => {
        setDescription(true);
    }

    return (
        <ul className='popular-list'>
            {props.products.map((product, index) => {
                return (
                    <li key={product.title} className='popular-item'>
                        <div className='popular-rank'>Rate: {product.rating.rate}</div>
                        <ul className='space-list-items'>
                            <li>
                                <img
                                    className='avatar'
                                    src={product.image}
                                    alt={'Image for ' + product.title}
                                />
                            </li>
                            <li className="product-cat">{product.category}</li>
                            <li>{product.title}</li>
                            <li>{product.price}</li>
                            <li>{product.id} id</li>
                            { description &&
                                <li>{product.description} </li>}
                            <button onClick={() => {showDescription(index)}}> Show description </button>

                        </ul>
                    </li>
                )
            })}
        </ul>
    );
};

export default Products;
