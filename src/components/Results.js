import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { battle } from "../utils/api";

const Result = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [winner, setWinner] = useState(null);
    const [loser, setLoser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const searchParams = new URL.SearchParams(location.search);
        battle([searchParams.get('playerOneName'), searchParams.get('playerTwoName')])
            .then(data => {
                if(!data) {
                    setError('Looks like you have problems');
                    setLoading(false);
                }

                setError(null);
                setLoading(false);
                setWinner(data[0]);
                setWinner(data[1]);
            })
    }, []);


    return (
        <div>
            
        </div>
    );
};

export default Result;
