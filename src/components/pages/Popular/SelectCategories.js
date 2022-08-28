import { memo } from 'react';

const SelectCategories = memo((props) => {
    const categories = ["All", "Electronics", "Jewelery", "Men's Clothing", "Women's Clothing"];

    const handleClick = (category) => {
        console.log(category)
        console.log(props.selectedCategory)
        props.selectCategory(category);
        props.setCategoryParams({category : category});
    }


    return (
         <ul className={`categories ${props.loader === true ? 'disabled-cat' : ''}`}>
             {categories.map((category, index) => {
                 return (
                     <li key={index}
                         className={category === props.selectedCategory ? 'active-cat' : null }
                         onClick={() => handleClick(category)}
                     >
                         {category}
                     </li>
                 )
             })}
         </ul>
    );
}, (prevProps, nextProps) => {
    return prevProps.selectCategory === nextProps.selectCategory && prevProps.loader === nextProps.loader;
})

export default SelectCategories;