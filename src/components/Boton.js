import PropsTypes from 'prop-types'

function Boton(props) {
    return(
        <button id="boton" onClick={props.handleClick}>
            Buscar
        </button>
    )

}

Boton.propTypes ={
    texto: PropsTypes.string.isRequired,
    handleClick: PropsTypes.func.isRequired
}

export default Boton