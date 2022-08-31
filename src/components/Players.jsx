const Players = ({nombre, imagen, posicion, precio}) => {
  return (
    <article>
        <h1>{nombre}</h1>
        <img src={imagen} alt="" />
        <h3>{posicion}</h3>
        <h2>{precio}</h2>        
    </article>
  )
}
export default Players