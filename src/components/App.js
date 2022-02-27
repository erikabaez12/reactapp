import Radio  from "./Radio";
import Boton from './Boton'
import { useEffect, useState } from "react";
import { buildUrlReceta, buildUrlIngrediente, buildUrlRandomRecepie, getIngredients, getSteps, prueba} from "./util/StringUtil" 
import { createCardRecepie, createCardIngredients } from "./util/CardUtil"

function App() {
  const [receta, setReceta] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const[resultados, setResultados] = useState('')
  const [random, setRandom] = useState([]);

  useEffect(() => {
		// componentDidMount
		alert('Bienvenido')

	}, []);
    
    useEffect( () => { 
        async function fetchData() {
            try {
              var url = buildUrlRandomRecepie();
              const recepies = await getRecepies(url)
              createCardRecepie(recepies.recipes[0])
          //     recepies.recepies.forEach(recepie => {
          //     createCardRecepie(recepie);
          // })
        console.log(url)
                // const res = await axios.get('/posts'); 
                // setRandom(res.data);
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
  
  // async function showRandomRecepie(){
  //   try {
  //     var url = buildUrlRandomRecepie();
  //     console.log(url)
  //     const response = await fetch(url)
  // } catch(err) {
  //   console.log(err)
  // }
  // }

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
