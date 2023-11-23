import { Router } from "express";
import connection from "../bd/database.js";

const routes = Router();
const selectSecciones = "SELECT * FROM SECCIONES;"

function selectFamily(family) {
    return `
    SELECT DISTINCT F.*
    FROM FAMILIAS F
    JOIN CONTENIDOFAMILIAS CF ON F.ID_FAMILIA = CF.ID_FAMILIA
    JOIN CONTENIDOSECCION CS ON CF.ID_FAMILIA = CS.ID_FAMILIA
    JOIN SECCIONES S ON CS.ID_SECCION = S.ID_SECCION
    WHERE S.NOMBRE_SECCION = '${family}';
    `;
}

function selectArticulos(familyArticulo) {
    return `
        SELECT A.*
        FROM ARTICULOS A
        JOIN CONTENIDOFAMILIAS CF ON A.ID_ARTICULO = CF.ID_ARTICULO
        JOIN FAMILIAS F ON CF.ID_FAMILIA = F.ID_FAMILIA
        WHERE F.NOMBRE_FAMILIA = '${familyArticulo}';
    `;
}




const executeQuery = (query) => {
    return new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

routes.get("/", async (req, res) => {
    try {
        const resultsSecciones = await executeQuery(selectSecciones);

        const resultsConsumibles = await executeQuery(selectFamily("CONSUMIBLES"));
        const resultsObjetos = await executeQuery(selectFamily("OBJETOS"));

        const resultsSalsas = await executeQuery(selectArticulos("SALSAS"));
        const resultsComidas = await executeQuery(selectArticulos("COMIDAS"));
        const resultsBebidas = await executeQuery(selectArticulos("BEBIDAS"));
        const resultsOtros = await executeQuery(selectArticulos("OTROS"));

        res.render("index", {
            resultsSecciones,
            resultsConsumibles,
            resultsObjetos,
            resultsSalsas,
            resultsComidas,
            resultsBebidas,
            resultsOtros

        });
    } catch (error) {
        console.error('Error al ejecutar las consultas:', error);
        res.status(500).send('Error interno del servidor');
    }
});


export default routes;