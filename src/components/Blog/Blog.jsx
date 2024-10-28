import M from '../../assets/Rectangle 20170.png';
import A from '../../assets/Frame.png';
import B from '../../assets/Frame (1).png';


const Blog = ({ product ,handle}) => {
    const { recipe_name, short_description, ingredients, preparing_time, calories } = product;
    
    return (
        <main >
            <div className="w-[324px] h-[582px] pt-5 pl-6 pr-6 pb-5 bg-gray-100 mb-7 shadow-xl border rounded-lg">
                <div>
                    <img src={M}  />
                </div>
                <h3 className="mt-2 gap-16">{product.recipe_name}</h3>
                <p className="mt-1 gap-16 text-[#878787]">{product.short_description}</p>
                <hr />
                <h3 className="mt-2">Ingredients: {product.ingredients.length}</h3>
        
                <ul className="mt-1 gap-16 gap-16 ">
                    {product.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
        
                <hr />
                <div className='flex justify-between mt-2'>
                <a className='flex items-center'>
            <img src={A} alt="Preparation Time" className='mr-2' /> 
            <span>{product.preparing_time}</span>
            </a>
            <a className='flex items-center'>
                <img src={B} alt="Calories" className='mr-2' /> 
                <span>{product.calories}</span>
            </a>
                    </div>
        
                <button 
               
                onClick={() => handle(product)}
                className="btn bg-[#0BE58A] rounded-full px-6 py-2 text-black mt-3">
                    Want to Cook
                </button>
               
            </div>

            
    </main>
    
    );
};

export default Blog;
