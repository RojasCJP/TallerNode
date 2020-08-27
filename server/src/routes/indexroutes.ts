import {Router} from 'express';

class indexRoutes{
    public router:Router=Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', (req, res)=>{
            res.send('Hola mundo!');
        });

        this.router.get('/prueba', (req, res)=>{
            res.send('Esta es la prueba para el nuevo dominio /prueba');
        });
    }
}

const index_routes = new indexRoutes();
export default index_routes.router;