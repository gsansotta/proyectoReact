import Players from "./Players"


const playersList = ({ players }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {players.length ? players.map((player) => <Players key={player.id} {...player} />) : <h2>Cargando futbolistas...</h2>}
        </div>
    )
}
export default playersList