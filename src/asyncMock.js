const products = [
    { 
        id: '1', 
        name: 'Camiseta Barcelona', 
        price: 1000, 
        category: 'camisetas', 
        img:'images/camisetas/', 
        stock: 5, 
        description:'Camiseta suplente del Barca'
    },
    { id: '2', name: 'Camiseta Newells', price: 800, category: 'camisetas', img:'images/camisetas/', stock: 13, description:'Camiseta titular de Newells'},
    { id: '3', name: 'Short Manchester United', price: 500, category: 'shorts', img:'images/shorts/', stock: 10, description:'Short del Manchester United'}
]

export const getProductsDeAlfredo = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}