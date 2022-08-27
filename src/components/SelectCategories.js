import { memo } from 'react';

const SelectCategories = memo((props) => {
    const categories = ["All", "Electronics", "Jewelery", "Men's Clothing", "Women's Clothing"];

    function categoryHandler(category) {
        props.selectCategory(category);
        props.setCategoryParams({category : category});
    }

    return (
         <ul className={`categories ${props.loader === true ? 'disabled-cat' : null}`}>
             {categories.map((category, index) => {
                 return (
                     <li key={index}
                         className={category === props.selectedCategory ? 'active-cat' : null }
                         onClick={() => categoryHandler(category)}
                     >
                         {category}
                     </li>
                 )
             })}
         </ul>
    );
}, (prevProps, nextProps) => {
    return prevProps.loader === nextProps.loader;
})

export default SelectCategories;