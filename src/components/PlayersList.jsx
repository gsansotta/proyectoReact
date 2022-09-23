
import Players from "./Players"


const playersList = ({ players }) => {
   
    
    return (       
         <>      

        <div className="flex flex-wrap justify-center">
            {players.length ? players.map((player) => <Players key={player.id} {...player} />) : <button class="btn loading" id="btnCarga">Cargando jugadores</button>}
        </div>
        </>
    )
}
export default playersList