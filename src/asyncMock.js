const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://i.ibb.co/R3ysGPp/pngwing-com-1.png',
        stock: 25,
        desctiption: 'Celular con manzanita mordida'
    },
    {
        id: '2',
        name: 'Samsung S21',
        price: 1200,
        category: 'celular',
        img: 'https://i.ibb.co/wNd0CYP/pngwing-com-2.png',
        stock: 20,
        desctiption: 'Celular con camara ultima tecnologia'
    },
    {
        id: '3',
        name: 'Sony Xperia 4',
        price: 980,
        category: 'tablet',
        img: 'https://i.ibb.co/p4WZYqb/pngwing-com-3.png',
        stock: 12,
        desctiption: 'Tableta'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId ))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category === productCategory ))
        }, 500)
    })
}

export default getProductsById