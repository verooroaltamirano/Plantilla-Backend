import * as controllerProducts from '../controllers/controllerProducts.js'

const routesProducts = (app) => {
    app.get('/products',controllerProducts.nombreFuncion)
    app.get('/inicioPagina',controllerProducts.verinicio)
    app.get('/precio',controllerProducts.verPrecio)

}
export default routesProducts

