
--CREANDO BD
CREATE DATABASE bd_articulos;
--USAR BD
USE bd_articulos;


--TABLA ARTICULOS
CREATE TABLE ARTICULOS(
    ID_ARTICULO INT NOT NULL PRIMARY KEY,
    NOMBRE_ARTICULO VARCHAR(50),
    PRECIO INT NOT NULL
);

--TABLA FAMILIAS
CREATE TABLE FAMILIAS(
    ID_FAMILIA INT NOT NULL PRIMARY KEY,
    NOMBRE_FAMILIA VARCHAR(50)
);

--TABLA SECCIONES
CREATE TABLE SECCIONES(
    ID_SECCION INT NOT NULL PRIMARY KEY,
    NOMBRE_SECCION VARCHAR(50)
);

--TABLA CONTENIDOFAMILIAS
CREATE TABLE CONTENIDOFAMILIAS(
    ID_FAMILIA INT NOT NULL,
    ID_ARTICULO INT NOT NULL,
    Foreign Key (ID_FAMILIA) REFERENCES FAMILIAS(ID_FAMILIA),
    Foreign Key (ID_ARTICULO) REFERENCES ARTICULOS(ID_ARTICULO)
);

--TABLA CONTENIDOSECCION
CREATE TABLE CONTENIDOSECCION(
    ID_SECCION INT NOT NULL,
    ID_FAMILIA INT NOT NULL,
    Foreign Key (ID_SECCION) REFERENCES SECCIONES(ID_SECCION),
    Foreign Key (ID_FAMILIA) REFERENCES CONTENIDOFAMILIAS(ID_FAMILIA)
);



-- Inserción de datos en la tabla ARTICULOS
INSERT INTO ARTICULOS(ID_ARTICULO, NOMBRE_ARTICULO, PRECIO) VALUES
(1, 'COCACOLA', 20),
(2, 'FANTA', 30),
(3, 'BURRITO', 11),
(4, 'SALSA', 5),
(5, 'ESTOFADO', 102),
(6, 'BANDEJA', 22),
(7, 'PAPEL', 98),
(8, 'PALO', 3211),
(10, 'AGUA', 2);

-- Inserción de datos en la tabla FAMILIAS
INSERT INTO FAMILIAS(ID_FAMILIA, NOMBRE_FAMILIA) VALUES
(1, 'BEBIDAS'),
(2, 'COMIDAS'),
(3, 'OTROS'),
(0, 'SALSAS');

-- Inserción de datos en la tabla SECCIONES
INSERT INTO SECCIONES(ID_SECCION, NOMBRE_SECCION) VALUES
(4, 'CONSUMIBLES'),
(2, 'OBJETOS');

-- Relacionar ARTICULOS con FAMILIAS mediante CONTENIDOFAMILIAS
INSERT INTO CONTENIDOFAMILIAS(ID_FAMILIA, ID_ARTICULO) VALUES
(0, 4),  -- Salsa pertenece a la familia de SALSAS
(1, 1),  -- Coca Cola pertenece a la familia de BEBIDAS
(1, 2),  -- Fanta pertenece a la familia de BEBIDAS
(1, 10), -- Agua pertenece a la familia de BEBIDAS
(2, 3),  -- Burrito pertenece a la familia de COMIDAS
(2, 4),  -- Salsa pertenece a la familia de COMIDAS
(2, 5),  -- Estofado pertenece a la familia de COMIDAS
(3, 6),  -- Bandeja pertenece a la familia de OTROS
(3, 7),  -- Papel pertenece a la familia de OTROS
(3, 8);  -- Palo pertenece a la familia de OTROS

-- Relacionar FAMILIAS con SECCIONES mediante CONTENIDOSECCION
INSERT INTO CONTENIDOSECCION(ID_SECCION, ID_FAMILIA) VALUES
(4, 0),  -- La familia de SALSAS está en la sección de CONSUMIBLES
(4, 2),  -- La familia de BEBIDAS está en la sección de CONSUMIBLES
(4, 1),  -- La familia de COMIDAS está en la sección de CONSUMIBLES
(2, 3);  -- La familia de OTROS está en la sección de OBJETOS