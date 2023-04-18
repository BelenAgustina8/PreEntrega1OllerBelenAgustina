const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        stock: 25,
        desctiption: 'Celular con manzanita mordida'
    },
    {
        id: '2',
        name: 'Samsung S21',
        price: 1200,
        category: 'celular',
        stock: 20,
        desctiption: 'Celular con camara ultima tecnologia'
    },
    {
        id: '3',
        name: 'Xiaomi M10',
        price: 980,
        category: 'celular',
        stock: 12,
        desctiption: 'Celular chino'
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products.find(produ => produ.id===productId ))
        }, 500)
    })
}

