const Products = (props) => {
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
                        </ul>
                    </li>
                )
            })}
        </ul>
    );
};

export default Products;
