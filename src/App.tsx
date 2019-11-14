import React , {useEffect ,useState} from 'react';
import axios from 'axios';
import Recipe from './components/Recipe';
import './App.css';

interface Recipe1{
  recipe :{
    label: string;
    calories: number;
    image: string;
    ingredients:{
      text: string;
    }
  
  }
  
}
const App: React.FC = () => {

  const APP_ID: string ='c25c79bd';
  const APP_KEY: string = ' 08f341ad21bd34f19b4c5503701997c3 ';
 
  const [recipes , setRecipes] = useState<Recipe1[]>([]);
  const [search , setSearch] = useState('');
  const [query , setQuery] = useState('chicken')

  useEffect(() => {
   getRecipes();
  
  }, [query]);




  async function getRecipes() {
    try {
      const response = await axios.get( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const dataOfRecipe = response.data.hits;
      setRecipes(dataOfRecipe);     
      console.log(dataOfRecipe);
    } catch (error) {
      console.error(error);
    }
  }

  const updateSearch = (e:any) => {
    setSearch(e.target.value);

  }

  const getSearch = (e:any) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
    
  }
  



  return (
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input  className='search-bar' type='text' value={search} onChange={updateSearch}/>
        <button className='search-button' type='submit'>Search</button>
      </form>
   <div className="recipes">
   {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} title ={recipe.recipe.label} calories= {recipe.recipe.calories}
        image= {recipe.recipe.image} ingredient= {recipe.recipe.ingredients.text}
        />
      ))}
    
   </div>
      
    </div>
  );
}

export default App;
