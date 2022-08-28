export const PlayerPreview = (props) => {
    return (
        <div>
            <div className='column'>
                <img className='avatar user-avatar' src={props.avatar} alt='avatar' />
                <h2 className='username'>@{props.username}</h2>
            </div>
            {props.children}
        </div>
    );
};
