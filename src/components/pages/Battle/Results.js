import { useEffect, useState } from 'react';
import {Link, useSearchParams} from 'react-router-dom'
import { battle } from '../../../utils/api';
import Loader from '../General/Loader';
import Player from './Player';

const Results = () => {
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [winner, setWinner] = useState(null);
    const [loser, setLoser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        battle([searchParams.get('playerOneName'), searchParams.get('playerTwoName')])
            .then(data => {
                if( !data ) {
                    setError('Looks like you have problems!')
                    setLoading(false)
                }

                setError(null)
                setLoading(false)
                setWinner(data[0])
                setLoser(data[1])
            })
    }, [])

    if(loading) {
        return (
            <Loader />
        )
    }

    if (error) {
        return (
            <div>
                <p>{error}</p>
                <Link to='/battle'>Reset</Link>
            </div>
        )
    }

    return (
        <>
            <div className='row'>
                <Player
                    label='Winner'
                    score={winner?.score}
                    profile={winner?.profile}
                />
                <Player
                    label='Loser'
                    score={loser?.score}
                    profile={loser?.profile}
                />
            </div>
            <Link className='result-reset' to='/battle'>Reset</Link>
        </>
    );
};

export default Results;
