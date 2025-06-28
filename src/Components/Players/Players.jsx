import { useEffect, useState } from "react";
import Player from "../Player/Player";
import PropTypes from 'prop-types';

const Players = ({handleChooseplayer}) => {

    const [players, setPlayers] = useState([]);

    useEffect( () => {
        fetch('bplBlog.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    },[]);

    return (
        <div>
            <div className="flex justify-between items-center px-2 my-10">
                <h2 className="text-3xl font-bold">Availabe Players</h2>
                <div className="">
                    <button className="bg-yellow-300 rounded-lg py-2 px-4 mr-2 text-xl font-semibold">Availabe</button>
                    <button className="bg-green-300 rounded-lg py-2 px-4 mr-2 text-xl font-semibold">Selected : 0</button>
                </div>
            </div>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 px-2 md:px-0">
                {
                    players.map( (player, idx) => <Player 
                        key={idx}
                        player = {player}
                        handleChooseplayer = {handleChooseplayer}
                        ></Player>)
                }
            </div>
        </div>
    );
};

Players.propType = {
    players : PropTypes.array
}

export default Players;