const elvenShieldReceipe = {
    leathStrips: 2,
    ironIgnot: 1,
    refinedMoonstone: 4
}

const elvenGuantletsReceipe = {
    ...elvenShieldReceipe,
    leather: 1,
    refinedMoonstone: 3
}

console.log(elvenShieldReceipe)
console.log(elvenGuantletsReceipe)

import { useState } from 'react';

const Recipes = () => {
    const [recipe,setRecipe] = useState({})
    return (
        <div>
            <h3>Current Recipe:</h3>
            <button onClick={()=> setRecipe(elvenShieldReceipe)}>Elven Shield Recipe</button>
            <button onClick={()=> setRecipe(elvenGuantletsReceipe)}>Elven Guantlet Recipe</button>
            <ul>
                {Object.keys(recipe).map((material)=>(
                    <li key={material}>
                        {material}: {recipe[material]}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Recipes;