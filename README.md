# Tata Camisetas

Bienvenido a Tata Camisetas. Soy Tomás Dalla Bona.

> Ecommerce.

## Running Locally

```bash
$ git clone https://github.com/tomdb03/tatacamisetas-Dalla-Bona-React.git
$ cd tatacamisetas-Dalla-Bona-React
$ npm install
$ npm start
```

## Built Using

- [Create-React-App](https://create-react-app.dev/)
- [Firebase](https://firebase.com)

## Dependencies

- [React Bootstrap](https://react-bootstrap.github.io/)
- [Reacto Router Dom](https://v5.reactrouter.com/web/guides/quick-start)

## Routes

- '/' navega a <ItemListContainer.js />, mostrando todos los productos.
- '/category/:categoryId' navega a <ItemListContainer.js />, pero filtrando por categoría.
- '/detail/:productId' navega a <ItemDetailContainer.js />, mostrando el detalle del producto dependiendo del parámetro de URL.
- '/cart' navega a <CartDiv.js />, mostrando el carrito.
- '/checkout' navega a <Checkout />, donde se genera la orden de compra.

## Navegación

![image](./public/navegacion.gif)

## Test app

- [Deploy](https://tatacamisetas-dalla-bona-react.vercel.app/)