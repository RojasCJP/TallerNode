import {Router} from 'express';

class peliculasRoutes{
    public router:Router=Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/obtener', (req, res)=>{
            res.send('esto es una pelicula');
        });
    }
}

const peliculas_routes = new peliculasRoutes();
export default peliculas_routes.router;