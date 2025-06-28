import { FaUser } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";
const Player = ({ player, handleChooseplayer }) => {

    const { cover_img, player_name, country_name,batting_style,player_price } = player;

    return (
        <div className="p-2 rounded bg-gray-100 pb-6">
            <img className="w-full h-60 rounded-lg mb-5" src={cover_img} alt="Player-img" />
            <div className="flex items-center gap-3 text-lg font-bold">
                <FaUser></FaUser>
                <h3>{player_name}</h3>
            </div>
            <div>
                <div className="flex justify-between items-center my-4 border-b-2 border-r-gray-50 pb-3">
                    <div className="flex justify-between items-center gap-3 text-gray-600">
                        <IoFlag></IoFlag>
                        <h5>{country_name}</h5>
                    </div>
                    <button className="bg-gray-300 rounded py-1 px-2">All-Rounder</button>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-bold">Rating</h2>
                <div className="flex justify-between items-center py-4">
                    <h4 className="font-semibold">Bating-Style</h4>
                    <p className="text-gray-600">{batting_style}</p>
                </div>
                <div className="flex justify-between items-center">
                    <h2 className="font-bold">Price: {player_price} Tk</h2>
                    <button onClick={() => handleChooseplayer(player_price)} className="bg-gray-300 rounded p-1">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;