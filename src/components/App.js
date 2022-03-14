import { useEffect, useState } from "react";
import { buildUrlReceta, buildUrlIngrediente, buildUrlRandomRecepie, buildUrlTipo, getIngredients, getSteps, prueba} from "./util/StringUtil" 
import RecipeReviewCard from './Recipies/RecipeReviewCard'
import { display } from "@mui/system";

function App() {
  const [receta, setReceta] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([])
  const [recetaDia, setRecetaDia] = useState([])
  

  useEffect( () => { 
    async function fetchData() {
        try {
          var url = buildUrlRandomRecepie();
          const recepies = await getRecepies(url)
          setRecetaDia(recepies.recipes)
    console.log(url)
        } catch (err) {
            console.log(err);
        }
    }
    fetchData();
}, []);

  const handleInputChange = (ev) => {
    setReceta(ev.target.value)
}

async function handleClick() {
  console.log("entra a clic");
  const search = receta;

  if(search) {
      if (busqueda=='receta'){
        console.log('Busqueda por receta')
        var url = buildUrlReceta(search);
      }else if (busqueda=='tipo'){
        console.log('Busqueda por tipo')
        var url = buildUrlTipo(search);
      }
  }

  const recepies = await getRecepies(url);
    console.log(url);
    if (busqueda=='receta'){
           setResultados(recepies.results)
    }else if (busqueda=='tipo'){
      setResultados(recepies.recipes)
    }
    setReceta('')
  }

  async function getRecepies(url) {
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data);
      return data;
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div id='divPadre'>
      <div id='divHeader'>
        <h1>Recetario</h1>
      </div>
      {/* <Radio/> */}
      <div id='divContenedorBuscador'>
          <legend>Elige un tipo de busqueda</legend>
          <label>
              <input type="radio" id="receta" name="busqueda" onChange={() => setBusqueda('receta')}/> Receta
          </label>
          <label>
              <input type="radio" id="tipo" name="busqueda" onChange={() => setBusqueda('tipo')}/> Tipo
          </label>
          <div id='divBuscar'>
            <input onChange={handleInputChange} value={receta}></input>
            <button onClick={handleClick}>
              Buscar
            </button>
          </div>
      </div>
       

      {resultados.length >0 ? 
            <div id="resultados">  
                {resultados.map((recipe, index) => (
                      <li key={index}> 
                        <RecipeReviewCard title = {recipe.title}
                          summary = {recipe.summary}
                          image = {recipe.image}
                          ingredients =  {recipe.extendedIngredients}
                          instructions = {recipe.analyzedInstructions[0].steps}
                          cuisines = {recipe.cuisines}/>                 
                    </li>    
                ))}   
            </div>
       :
          <div id="recetaDelDia">
            <h2>Receta del Dia</h2>
                    {recetaDia.map((recipe, index) => (
                          <li key={index}> 
                            <RecipeReviewCard title = {recipe.title}
                              summary = {recipe.summary}
                              image = {recipe.image}
                              ingredients =  {recipe.extendedIngredients}
                              instructions = {recipe.analyzedInstructions[0].steps}
                              cuisines = {recipe.cuisines}/>                 
                        </li>        
                    ))}
          </div>
       }  
    </div>
  );
}

export default App;
