
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import OurRecipe from "./Components/OurRecipe"
import Recipes from "./Components/Recipes"


function App() {
  

  return (
    <>
    <Nav></Nav>
    <div className="w-5/6 mx-auto">
    <Banner></Banner>

    <OurRecipe></OurRecipe>

    <Recipes></Recipes>
    
    </div>
    
      <h1 className="text-red-500">hello</h1>
      <button className="btn btn-outline btn-accent">Accent</button>
    </>
  )
}

export default App
