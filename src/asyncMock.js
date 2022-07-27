const products = [
    { 
        id: '1', 
        name: 'Camiseta Barcelona', 
        price: 1000, 
        category: 'camisetas', 
        img:'images/camisetas/barça.png', 
        stock: 0, 
        description:'Camiseta suplente del Barça'
    },
    { id: '2', name: 'Camiseta Newells', price: 800, category: 'camisetas', img:'images/camisetas/nob.jpg', stock: 13, description:'Camiseta titular de Newells'},
    { id: '3', name: 'Camiseta Palmeiras', price: 900, category: 'camisetas', img:'images/camisetas/palmeiras.jpg', stock: 5, description:'Camiseta titular de Palmeiras'},
    { id: '4', name: 'Camiseta Fiorentina', price: 1000, category: 'camisetas', img:'images/camisetas/fiorentina.jpg', stock: 3, description:'Camiseta titular de la Fiorentina'},
    { id: '5', name: 'Buzo Argentina', price: 1400, category: 'buzos', img:'images/buzos/argentina.jpg', stock: 7, description:'Buzo de la selección argentina'},
    { id: '6', name: 'Short Manchester United', price: 500, category: 'shorts', img:'images/shorts/manu.jpg', stock: 10, description:'Short del Manchester United'},
    { id: '7', name: 'Joggin Atlético Madrid', price: 1100, category: 'joggins', img:'images/joggins/atleticomadrid.jpg', stock: 4, description:'Joggin del Atlético Madrid'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}