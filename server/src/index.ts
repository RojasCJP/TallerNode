import express, {Application, json} from "express";
import index_routes from './routes/indexroutes';
import peliculas_routes from './routes/peliculasroutes'
import morgan from 'morgan';
import cors from 'cors';

class server{
    public app:Application;

    constructor(){
        this.app=express();    
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    // localhost:3000/movie/obtener
    routes():void{ 
        this.app.use(index_routes);
        this.app.use('/movie', peliculas_routes);
    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('servidor en el puerto: ', this.app.get('port'));
        });
    }
}

const servidor = new server();
servidor.start(); 