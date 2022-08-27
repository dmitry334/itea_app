import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { fetchPopularRepos }  from '../utils/api';
import SelectCategories from './SelectCategories';
import Products from './Products';
import Loader from "./Loader";

const Popular = () => {

    const [products, setProducts] = useState([]);
    const [categoryParams, setCategoryParams] = useSearchParams();
    const [loader, setLoader] = useState(false);
    const categorySearch = categoryParams.get('category');
    const [selectedCategory, setSelectedCategory] = useState(categorySearch ? categorySearch : 'All' );

    useEffect(() => {
        setLoader(true);
        fetchPopularRepos(selectedCategory)
            .then(data => {
                setProducts(data);
                setLoader(false);
            })
    }, []);

    const selectCategory = (categories) => {
        setLoader(true);
        setSelectedCategory(categories);
        fetchPopularRepos(categories)
            .then(data => {
                setProducts(data);
                setLoader(false);
            })
    }

    return (
        <>
            <SelectCategories
                selectedCategory={selectedCategory}
                selectCategory={selectCategory}
                setCategoryParams={setCategoryParams}
                categorySearch={categorySearch}
                loader={loader}
            />
            {loader ?
                <Loader /> :
                <Products
                    products={products}
                />
            }
        </>
    );
};

export default Popular;