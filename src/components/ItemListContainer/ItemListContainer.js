
import { getProducts, getProductsById } from "../../asyncMock"
import ItemList
import { useState, useEffect }

const ItemListContaier = ({ greeting }) =>  {
    const [products, setProducts] = useState ([])

    const {categoryId} = useParams()
    
    useEffect (() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        useEffect(categoryId)
            .then(resonse => {
                setProducts(response)
            })
            .catch(error => { 
                console.error(error)
            })
        },[categoryId])

    return (
        <div>
            <h1>{ greeting }</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContaier