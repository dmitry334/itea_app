import {Link} from 'react-router-dom';

const PageNotFound = () => {
    return(
        <>
            <h2 style={{textAlign: 'center'}}>404 Page not found</h2>
            <p style={{textAlign: 'center'}}>Go to home page</p>
            <Link className='button' to='/'>Home</Link>
        </>
    );
};

export default PageNotFound;
