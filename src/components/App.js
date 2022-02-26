import Radio  from "./Radio";
import Boton from './Boton'
import { useState } from "react";
import { buildUrlReceta, buildUrlIngrediente, getIngredients, getSteps, prueba} from "./util/StringUtil" 
import { createCardRecepie, createCardIngredients } from "./util/CardUtil"

function App() {
  const [receta, setReceta] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const[resultados, setResultados] = useState('')

  const handleInputChange = (ev) => {
    setReceta(ev.target.value)
}

// const handleClick = () => {
//   const recetaEnEstado = receta;
//   if (!recetaEnEstado) return;

//   console.log('entre1')
//   console.log(busqueda)
//   prueba(receta, busqueda)

// };

async function handleClick() {
  const search = receta;

  if(search) {
      if (busqueda=='receta'){
        var url = buildUrlReceta(search);
      }else if (busqueda=='ingrediente'){
        console.log('ingrediente')
        var url = buildUrlIngrediente(search);
      }
  }
    // results.innerHTML = ""; borraba resultados anterirores //todo ver como borrar en react 
    const recepies = await getRecepies(url);
        if (busqueda=='receta'){
    recepies.results.forEach(recepie => {
        createCardRecepie(recepie);
    })
    }else if (busqueda=='ingrediente'){
        recepies.forEach(recepie => {
          setResultados(createCardIngredients(recepie))
    })
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
    <div>
     <h1>Busque una receta</h1>
     <br></br> 
      <br></br>
      {/* <Radio/> */}
      <div>
             <legend>Elige un tipo de busqueda</legend>
    <label>
        <input type="radio" id="receta" name="busqueda" onChange={() => setBusqueda('receta')}/> Receta
    </label>
    <label>
        <input type="radio" id="ingrediente" name="busqueda" onChange={() => setBusqueda('ingrediente')}/> Ingrediente
    </label>
        </div>
      <input onChange={handleInputChange} value={receta}></input>
      <button onClick={handleClick}>
        Buscar
      </button>
      <div id="resultados"></div>
    </div>
  );
}

export default App;
