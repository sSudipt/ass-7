import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Blog from './components/Blog/Blog'
import './App.css'
import { useEffect, useState } from "react";
import BO from './components/BO/BO'

function App() {
  
  const [products, setProducts] = useState([]);
  

  

  useEffect(() => {
    fetch("./recipe.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        
      });
  }, []);

  const [B,setB] = useState ([])



  const handle = (p) =>{
    const isExists = B.find((products) => products.recipe_id == p.recipe_id);
    if (!isExists) {
      setB([...B,p]);
    } else {
      toast("Cart already exists");
    }
  };
  

  return (
    <>
     <Header />
     <Banner />
     <div className="ml-40 flex justify-between mr-16  ">
       <div className='w-[870px] grid grid-cols-1 md:grid-cols-2 gap-4'>
       {products.map((product) => (
          <Blog key={product.recipe_id} product={product} 
          handle={handle}
          />
        ))}
       </div>
        <BO B={B}/>
      </div>
      <ToastContainer />
 
    </>
  )
}

export default App
