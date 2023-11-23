import express from "express";
import path from "path";
import routes from "./routes/router.js";
import connection from "./bd/database.js";




//CONFIGURANDO DIRNAME
import {
    dirname,
    join
} from "path";

import {
    fileURLToPath
} from "url";




const __dirname = dirname(fileURLToPath(
    import.meta.url));

//intialization

const app = express();

//setting
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
const puerto = process.env.PORT || 3000;

app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});



//middlewares





//routes

app.use(routes);

