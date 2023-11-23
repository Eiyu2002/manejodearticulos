$(".btnSeccion").click(function () {
    const sectionText = $(this).text().trim();

    if (sectionText === "CONSUMIBLES") {
        toggleContainers(".containerSeccion", ".containerConsumibles");
    } else if (sectionText === "OBJETOS") {
        toggleContainers(".containerSeccion", ".containerObjetos");
    }
});

$(".btnBack").click(function () {
    $(this).parent().toggleClass("none");
    $(".containerSeccion").toggleClass("none");
});

$(".btnConsumibles").click(function () {
    const consumibleText = $(this).text().trim();

    if (consumibleText === "SALSAS" || consumibleText === "COMIDAS" || consumibleText === "BEBIDAS") {
        toggleContainers(".containerConsumibles", `.container${consumibleText}`);
    }
});

$(".btnObjetos").click(function () {
    const objetoText = $(this).text().trim();

    if (objetoText === "OTROS") {
        toggleContainers(".containerObjetos", ".containerOtros");
    }
});

function toggleContainers(hideSelector, showSelector) {
    $(hideSelector).toggleClass("none");
    $(showSelector).toggleClass("none");
}


$(".articulo").click(function () {
    const articuloText = $(this).find("h3").text().trim();
    const precioText = $(this).find("h4").text().trim();
    const precio = parseInt(precioText.match(/\d+/g)[0]); // Extraer el valor numérico del precio

    const articulo = $("<div>").html(articuloText);
    const price = $("<div class=price>").html(precioText);
    const btnDelete = $("<button class=btnDelete>").text("X");

    btnDelete.click(function () {
        // Restar el precio del artículo eliminado de la suma total
        const pricetotal = $(".total").length ? parseInt($(".total").text().trim()) : 0;
        const nuevaSuma = pricetotal - precio;

        if (nuevaSuma === 0) {
            $(".total").remove();
        } else {
            $(".total").text(nuevaSuma);
        }

        // Eliminar el elemento padre del botón delete
        $(this).parent().remove();
    });

    $(".containerList").append($("<div class=articuloLoad>").append(articulo, price, btnDelete));
});

$(".btnMonto").click(function () {
    const pricetotal = $(".price").text().trim();
    const suma = pricetotal.match(/\d+/g).reduce((total, num) => total + parseInt(num), 0);

    if ($(".total").length === 0) {
        $(".mainContainerList").append($("<h1 class='total'>").text(suma));
    } else {
        $(".total").text(suma);
    }
});










