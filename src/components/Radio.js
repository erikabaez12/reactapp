import PropsTypes from 'prop-types'

function Radio(){
    return(
        <div>
             <legend>Elige un tipo de busqueda</legend>
    <label>
        <input type="radio" id="radioRecepie" name="busqueda" value="recepie"/> Receta
    </label>
    <label>
        <input type="radio" id="radioIngredient" name="busqueda" value="ingredient"/> Ingrediente
    </label>
        </div>
    )
}

export default Radio