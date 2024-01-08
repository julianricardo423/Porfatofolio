/*Variable para las líneas verticales*/
let palabra1;
let lineaV1;
let lineaV2;
let lineaH1;
let imagenesIngresadas;
let regexp;

/*Variables inicializadas que contienen el texto y título SOBRE MI en español*/
let sobreMiTituloE = 'Bienvenido';
let sobreMiParrafoE = 'Mi nombre es Julián Vargas, ' + 
'soy Ingeniero de software, me apasiona el mundo del TI. Desde muy niño me ha interesado ' + 
'el mundo de la tecnología, además,  tengo un tío que es Ingeniero de sistemas y me incentivó a estudiar está carrera, ' +
'tengo experiencia como QA para el sector bancario. Mi mayor motivación para entrar en el mundo del desarrollo ' + 
'es que es un campo en el cual toca estar actualizado con nuevas tecnologías.';

/*Variables inicialziadas que contienen el texto y título SOBRE MI en ingles*/
let sobreMiTituloI = "Welcome";
let sobreMiParrafoI = "My name is Julián Vargas " + 
'I am passionate about the world of IT. Since I was very young, I have been interested in the world ' + 
'of technology. Additionally, I have an uncle who is a Systems Engineer, and he encouraged me to ' + 
'study this career. I have experience as a QA for the banking sector. My greatest motivation for ' + 
'entering the world of development is that it is a field in which one must constantly stay updated ' + 
'with new technologies.';

/*Variables inicializadas que contienen el texto y título HABILIDADES en español*/
let habilidadesTituloE = 'Habilidades';
let habilidadesParrafoE = 'Actualmente tengo conomiento en c# y java realizando aplicaciones de escritorio ' + 
'para el sector bancario, manejando bases de datos modelo entidad relación sql server, con arquitectura MVC , también he realizado ' + 
'páginas web con html, css, bootstrap, sass y javascript, mi experiencia en el desarrollo web es solo realizando' +
'páginas e-commerce';

/*Variables inicializadas que contienen el texto y título HABILIDADES en ingles*/
let habilidadesTituloI = 'Habilitys';
let habilidadesParrafoI = 'I currently have knowledge in C# and Java for creating desktop applications for the ' + 
'banking sector, managing SQL Server entity-relationship model databases, with MVC architecture. I have also developed ' + 
'web pages using HTML, CSS, Bootstrap, SASS, and JavaScript. My experience in web development is limited to creating ' + 
'e-commerce pages';

/*Variables inicializadas que contiene el texto y título PROYECTO1 en español*/
let tituloProyectoE1 = 'Proyecto 1';
let parrafoProyectoE1 = 'Por el momento no hay proyectos para mostrar, a medida que vaya avanzando ' +
'el bootcamp, estas secciones se iran llenado con los desarrollos que se vayan culminando.'

/*Variables inicializadas que contiene el texto y título PROYECTO1 en ingles*/
let tituloProyectoI1 = 'Project 1';
let parrafoProyectoI1 = 'At the moment, there are no projects to display. As the bootcamp ' + 
'progresses, these sections will be filled with the developments as they are completed.';

/*Variables inicializadas que contiene el texto y título reflexión en español*/
let tituloReflexionE = 'Reflexión';
let parrafoReflexionE = 'Actualmente me siento muy conforme con el bootcamp, ya que he aprendido cosas nuevas, he conocido ' +
'personas muy amables e inteligentes que han aportado a mi crecimiento como persona y como programador, sé que debo mejorar ' + 
'o capacitarme más en el front-end, para el mes de febreo me comprometo a entender y aplicar conceptos en los que aún no sé en que '+
'momento debo aplicarlos'
let tituloReflexionI = 'Reflection'
let parrafoReflexionI = 'Currently, I am very satisfied with the bootcamp, as I have learned new things, met very kind and ' + 
'intelligent people who have contributed to my growth as a person and as a programmer. I know that I need to improve or train ' + 
'more in front-end development. For the month of February, I commit myself to understand and apply concepts in areas where I am ' + 
'still unsure when to use them.';

/*Arreglo multidimensional inicializado con los colores aptos para el efecto gradient*/
const colores = 
[
    ["rgb(96,54,142)", "rgb(177,176,112)"],
    ["rgb(219,114,150)", "rgb(162,164,50)"],
    ["rgb(74,82,162)", "rgb(66,162,86)"],
    ["rgb(191,114,140)", "rgb(65,212,64)"],
    ["rgb(83,79,124)", "rgb(165,172,73)"],
    ["rgb(160,71,172)", "rgb(201,155,64)"],
    ["rgb(102,53,157)", "rgb(162,159,99)"],
    ["rgb(212,110,141)", "rgb(141,143,113)"],
    ["rgb(196,51,134)","rgb(117,159,69)"],
    ["rgb(74,50,209)","rgb(200,175,57)"],
    ["rgb(207,104,179)", "rgb(160,136,108)"],
    ["rgb(120,82,216)", "rgb(161,132,119)"],
    ["rgb(154,92,155)", "rgb(87,180,90)"],
    ["rgb(69,82,211)", "rgb(123,208,114)"],
    ["rgb(143,58,200)", "rgb(114,133,86)"],
    ["rgb(147,96,124)", "rgb(200,212,102)"],
    ["rgb(123,76,123)", "rgb(79,130,55)"],
    ["rgb(199,69,167)", "rgb(157,158,112)"],
    ["rgb(187,85,162)", "rgb(207,177,95)"],
    ["rgb(85,82,173)", "rgb(199,192,81)"],
    ["rgb(76,97,183)", "rgb(182,217,85)"],
    ["rgb(155,85,180)", "rgb(202,133,54)"],
    ["rgb(166,96,205)", "rgb(190,138,78)"],
    ["rgb(108,85,177)", "rgb(155,144,120)"],
    ["rgb(205,112,126)", "rgb(151,220,78)"],
    ["rgb(217,66,179)", "rgb(63,202,89)"],
    ["rgb(195,66,155)", "rgb(66,126,54)"],
    ["rgb(157,65,199)", "rgb(167,184,120)"],
    ["rgb(121,95,126)", "rgb(134,171,73)"],
    ["rgb(147,84,160)", "rgb(54,124,75)"],
    ["rgb(220,65,167)", "rgb(118,159,112)"],
    ["rgb(183,86,175)", "rgb(120,193,111)"],
    ["rgb(127,90,143)", "rgb(182,199,55)"],
    ["rgb(57,63,138)", "rgb(121,173,119)"],
    ["rgb(164,68,175)", "rgb(104,214,68)"],
    ["rgb(150,63,166)", "rgb(211,135,96)"],
    ["rgb(202,100,128)", "rgb(113,187,86)"],
    ["rgb(140,61,168)", "rgb(87,124,59)"],
    ["rgb(149,102,170)", "rgb(160,151,65)"],
    ["rgb(134,117,146)", "rgb(76,128,96)"],
    ["rgb(82,54,159)", "rgb(111,153,64)"],
    ["rgb(173,85,210)", "rgb(175,153,99)"],
    ["rgb(146,81,129)", "rgb(116,188,92)"],
    ["rgb(77,87,220)", "rgb(182,127,90)"],
    ["rgb(162,102,218)", "rgb(91,149,68)"],
    ["rgb(147,97,172)", "rgb(215,174,81)"],
    ["rgb(218,119,154)", "rgb(143,198,73)"],
    ["rgb(210,80,158)", "rgb(174,151,53)"],
    ["rgb(77,59,206)", "rgb(93,190,69)"],
    ["rgb(100,94,137)", "rgb(63,125,59)"],
    ["rgb(116,73,157)", "rgb(171,125,62)"],
    ["rgb(104,87,199)", "rgb(93,176,83)"],
    ["rgb(209,54,193)", "rgb(50,153,118)"],
    ["rgb(134,105,186)", "rgb(92,152,50)"],
    ["rgb(83,57,205)", "rgb(220,154,96)"],
    ["rgb(191,106,179)", "rgb(175,214,86)"],
    ["rgb(101,117,166)", "rgb(70,146,115)"],
    ["rgb(90,98,180)", "rgb(173,143,82)"],
    ["rgb(59,115,220)", "rgb(204,139,61)"],
    ["rgb(62,95,171)", "rgb(171,212,74)"],
    ["rgb(208,85,211)", "rgb(114,210,71)"],
    ["rgb(180,112,206)", "rgb(153,183,96)"]
];

/* Efecto para para cambiar las imagenes y span del contenedor derecho*/
function efectoContenedorDerecho(imagenesIn)
{
    imagenesIngresadas = document.getElementById('variasImagenes');
    imagenesIngresadas.classList.add('ocultoContenedorDerecho');

    //Ocultar #proyecto1, palabra que se oculta una vez dan clic en la opción del menú proyecto
    palabra1 = document.getElementById('proyecto1');
    palabra1.classList.add('ocultoContenedorDerechoTextoLineas');

    //Ocultar #lineaProyecto1, palabra que se oculta una vez dan clic en la opción del menú proyecto
    lineaH1 = document.getElementById('lineaProyecto1');
    lineaH1.classList.add('ocultoContenedorDerechoTextoLineas');

    setTimeout(function()
    {
        imagenesIngresadas.style.display = 'block';
        imagenesIngresadas.src = imagenesIn;
        imagenesIngresadas.classList.remove('ocultoContenedorDerecho');

        palabra1.textContent = '';
        palabra1.classList.remove('ocultoContenedorDerechoTextoLineas');

        lineaH1.style.width = '0px';
        lineaH1.style.height = '0px';
        lineaH1.classList.remove('ocultoContenedorDerechoTextoLineas');
    }, 1000)
}

/*Efecto para cambiar el texto del contenedor derecho*/
function efectoContenedorDerechoTextoLineas()
{
    imagenesIngresadas = document.getElementById('variasImagenes');
    imagenesIngresadas.classList.add('ocultoContenedorDerecho');

    palabra1 = document.getElementById('proyecto1');
    palabra1.classList.add('ocultoContenedorDerechoTextoLineas');

    //Mostrar la línea que va acompañada de #lineaProyecto1
    lineaH1 = document.getElementById('lineaProyecto1');
    lineaH1.classList.add('ocultoContenedorDerechoTextoLineas');
    
    setTimeout(function()
    {
        imagenesIngresadas.style.display = 'none';
        imagenesIngresadas.classList.remove('ocultoContenedorDerecho');

        palabra1.textContent = 'Proyecto 1';
        palabra1.classList.remove('ocultoContenedorDerechoTextoLineas');

        lineaH1.style.width = '65px';
        lineaH1.style.height = '4px';
        lineaH1.classList.remove('ocultoContenedorDerechoTextoLineas');
    }, 1000);
}

/* Efecto para para cambiar los parrafos y los títulos del contenedor izquierdo */
function efectoContenedorIzquierdo(tituloA, parrafoA, tituloB, parrafoB)
{
    let tituloTemporalA = document.getElementById('titulo1');
    tituloTemporalA.classList.add('ocultoContenedorIzquierdo');

    let parrafoTemporalA = document.getElementById('parrafo1');
    parrafoTemporalA.classList.add('ocultoContenedorIzquierdo');

    let lineaTemporalA = document.getElementById('lineaVertical1');
    lineaTemporalA.classList.add('ocultoContenedorIzquierdo');

    let tituloTemporalB = document.getElementById('titulo2');
    tituloTemporalB.classList.add('ocultoContenedorIzquierdo');

    let parrafoTemporalB = document.getElementById('parrafo2');
    parrafoTemporalB.classList.add('ocultoContenedorIzquierdo');

    let lineaTemporalB = document.getElementById('lineaVertical2');
    lineaTemporalB.classList.add('ocultoContenedorIzquierdo');

    //Transición para el cambio de contenido
    setTimeout(function()
    {
        tituloTemporalA.textContent = tituloA;
        tituloTemporalA.classList.remove('ocultoContenedorIzquierdo');

        parrafoTemporalA.textContent = parrafoA;
        parrafoTemporalA.classList.remove('ocultoContenedorIzquierdo');

        lineaTemporalA.classList.remove('ocultoContenedorIzquierdo');

        tituloTemporalB.textContent = tituloB;
        tituloTemporalB.classList.remove('ocultoContenedorIzquierdo');

        parrafoTemporalB.textContent = parrafoB;
        parrafoTemporalB.classList.remove('ocultoContenedorIzquierdo');

        lineaTemporalB.classList.remove('ocultoContenedorIzquierdo');
    },1000);
}

/* Función para cambiar de color las líneas verticales y horizontales*/
function aplicarDegradadoLineas()
{
    /*Se seleccionara un número random de acuerdo al tamaño del arreglo actual, que redondee
    al número menos próximo, para que no pueda seleccionar un número que no existe en el arreglo*/
    let indiceAleatorioArreglo = Math.floor(Math.random() * colores.length);

    /*De acuerdo al número seleccionado aleatoriamente, lo va a llamar en el arreglo y lo almacena
    en un variable que va contener los dos colores en dicha posición seleccionada*/
    let coloresSeleccionados = colores[indiceAleatorioArreglo];

    /*Llamamos a todas los selectores por medio del id*/
    let lineasH = document.querySelectorAll('.lineaHorizontal');
    let lineasV = document.querySelectorAll('.lineaVertical');

    /*Llamamos el foreach, para poder recorrer cada uno de los id's e ingresar los colores seleccionados de manera aleatoria*/
    lineasH.forEach(linea => 
        {
            linea.style.background = `linear-gradient(90deg, ${coloresSeleccionados[0]} 0%, ${coloresSeleccionados[1]} 50%, ${coloresSeleccionados[0]} 100%)`;
        });
    
    lineasV.forEach(linea => 
        {
            linea.style.background = `linear-gradient(30deg, ${coloresSeleccionados[0]} 0%, ${coloresSeleccionados[1]} 30%, ${coloresSeleccionados[0]} 70%)`;
        });    
}

/*Al contenido que está cargado en la página,
una vez den clic en cualquiera de los elementos, se podra cambiar el color de los elementos que se llamen, no importa 
si son diferentes clases, los colores se van a cambiar al mismo tiempo*/
document.addEventListener('DOMContentLoaded', () => 
{   
    //Llamamos el id .palabra, para que una vez seleccionen la palabra se cambie el color de la línea que le acompaña
    let palabras = document.querySelectorAll('.palabra');
    palabras.forEach(palabra => 
        {
            palabra.addEventListener('click', aplicarDegradadoLineas);
        });
});


document.addEventListener('DOMContentLoaded', function()
{
    
    /*Llamar a la función para que se vean las líneas iniciales en los parrafos*/
    aplicarDegradadoLineas();

    /* Elementos que se deben mostrar al cargar la página*/
    //Elemento 1, para poder ver el contenido en español
    document.getElementById('titulo1').textContent = sobreMiTituloE;
    document.getElementById('parrafo1').textContent = sobreMiParrafoE;
    //Dar tamaño a las líneas que están al lado izquierdo de los parrafos
    lineaV1 = document.getElementById('lineaVertical1');
    lineaV1.style.width = '5px';
    lineaV1.style.height = '90px';

    //Elemento 1, para poder ver el contenido en ingles
    document.getElementById('titulo2').textContent = sobreMiTituloI;
    document.getElementById('parrafo2').textContent = sobreMiParrafoI;
    lineaV2 = document.getElementById('lineaVertical2');
    lineaV2.style.width = '5px';
    lineaV2.style.height = '90px';

    //Contenedor derecho
    //Mostrar la línea que va acompañada de #lineaProyecto1
    lineaH1 = document.getElementById('lineaProyecto1');
    lineaH1.style.width = '0px';
    lineaH1.style.height = '0px';

    /*Contenedor derecho mostrar foto*/
    document.getElementById('variasImagenes').src = './Imagenes/descarga.jpg';    

    //EVENTOS
    /*Esta primera función es para mostrar el título y párrafo, del contenedor izquierdo
    además de darle la altura y ancho de la línea vertical*/
    document.getElementById('sobreMi').addEventListener('click', function()
    {
        /*realizar efecto para cambio de contenido, mandando como parametro las variables inicializadas*/
        efectoContenedorIzquierdo(sobreMiTituloE, sobreMiParrafoE, sobreMiTituloI, sobreMiParrafoI);
        efectoContenedorDerecho('./Imagenes/descarga.jpg');

        //Elemento 1, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
        lineaV1 = document.getElementById('lineaVertical1');
        lineaV1.style.width = '5px';
        lineaV1.style.height = '90px';
        

        //Elemento 2, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
        lineaV2 = document.getElementById('lineaVertical2');
        lineaV2.style.width = '5px';
        lineaV2.style.height = '90px';

    });

    /*Esta segunda función es para mostrar el título, párrafo, imagenes y líneas verticales
     para la opción de habilidades*/
    document.getElementById('habilidades').addEventListener('click', function()
    {
        //Llamar funciones para generar el efecto
        efectoContenedorIzquierdo(habilidadesTituloE, habilidadesParrafoE, habilidadesTituloI, habilidadesParrafoI);
        efectoContenedorDerecho('./Imagenes/LenguajesDeProgramación.png');
        
        //Elemento 1
        lineaV1 = document.getElementById('lineaVertical1');
        lineaV1.style.width = '5px';
        lineaV1.style.height = '70px';

        //Elemento 2
        lineaV2 = document.getElementById('lineaVertical2');
        lineaV2.style.width = '5px';
        lineaV2.style.height = '70px';

        //document.getElementById('variasImagenes').src = '';
    });

    document.getElementById('proyectos').addEventListener('click', function()
    {
        efectoContenedorIzquierdo(tituloProyectoE1, parrafoProyectoE1, tituloProyectoI1, parrafoProyectoI1);
        efectoContenedorDerechoTextoLineas();
        
        /*Aquí ocultamos las imagenes para poder mostrar los nombres de los proyectos en el contenedor de la derecha*/
        let ocultarImagen = document.getElementById('variasImagenes');
        ocultarImagen.classList.add('ocultoContenedorDerecho');

        //Contenedor izquierdo
        //Elemento 1, para la línea vertical que se encuentra al lado del primer parrafo en el contenedor izquierdo
        lineaV1 = document.getElementById('lineaVertical1');
        lineaV1.style.width = '5px';
        lineaV1.style.height = '30px';

        //Elemento 2, para la línea vertical que se encuentra al lado del segundo parrafo en el contenedor izquierdo
        lineaV2 = document.getElementById('lineaVertical2');
        lineaV2.style.width = '5px';
        lineaV2.style.height = '30px';

    });

    document.getElementById('reflexion').addEventListener('click', function()
    {
        /*Efecto para para cambiar el parrafo del contenedor izquierdo*/
        efectoContenedorIzquierdo(tituloReflexionE, parrafoReflexionE, tituloReflexionI, parrafoReflexionI);
        efectoContenedorDerecho('./Imagenes/Reflexion.jpg');

        /*Contenedor izquierdo, poner el tamaño de las líneas verticales al tamaño actual del parrafo*/
        //Elemento1
        lineaV1 = document.getElementById('lineaVertical1');
        lineaV1.style.width = '5px';
        lineaV1.style.height = '90px';

        //Elemento2
        lineaV2 = document.getElementById('lineaVertical2');
        lineaV2.style.width = '5px';
        lineaV2.style.height = '90px';
    });
});


/*Aquí se pondra las funcionalidades para el modal*/
let modal = document.getElementById('miModal');

//Abrir modal, una vez den clic en la opción Contacto del menú
let abrirModal = document.getElementById('contacto');

//Cerrar el modal
let cerrarModal = document.getElementsByClassName('cerrar')[0];

//Acción onClic para cuando el usuario de clic Contacto, se abra el modal
abrirModal.onclick = function(event)
{
    event.preventDefault();//Prviene la acción por defecto que trae de enlace #Contacto
    modal.style.display = 'block';
}

//Cerrar modal, cuando el usuario oprima (x)
cerrarModal.onclick = function()
{
    modal.style.display = 'none';
}

//Cuando el usuario haga clic fuera del modal, se cierre y muestre la página principal
window.onclick = function(event)
{
    if(event.target == modal)
    {
        modal.style.display = 'none';
    }
}


//Validaciones para el formulario
document.getElementById('FormularioContacto').addEventListener('submit', function(event)
{
    let validarFormulario = true;
    event.preventDefault();//Previene el envío predeterminado del formulario

    //Obtener datos ingresdos por medio de la caja de texto
    let nombreI = document.getElementById('nombre').value;
    let apellidoI = document.getElementById('apellido').value;
    let emailI = document.getElementById('email').value;
    let empresaI = document.getElementById('empresa').value;
    let telefonoI = document.getElementById('telefono').value;
    let mensaje = document.getElementById('mensaje').value;

    if(nombreI === '' || apellidoI === '' || emailI === '' || empresaI === '' || 
    telefonoI === '' || mensaje === '')
    {
        validarFormulario = false;
        //alert('Por favor, complete todos los campos');
        Swal.fire({
            title: "Por favor, complete todos los campos",
            icon: "info"
          });
    }

    //validar si el correo tiene formato de correo
    if(!(validarEmail(emailI)))
    {
        validarFormulario = false;
        Swal.fire({
            title: "Lo siento, la información ingresada no cumple con las caracteristicas de un correo",
            text: "Los unicos dominios admitidos son: gmail, yahoo, hotmail y outlook",
            icon: "error"
          });
    }

    if(!(validarNumeroCelular(telefonoI)))
    {
        validarFormulario = false;
        Swal.fire({
            title: "Lo siento, el número ingresado no cumple con el formato de un celular",
            text: "Debe ingresar con espacios el número de celular tal y como se muestra a continuación: 320 874 9878",
            icon: "error"
          });
    }

    if(validarFormulario)
    {
        Swal.fire({
            title: "La información ingresada es correcta",
            text: "Gracias por tomarte el tiempo de llenar los campos y ver las validaciones aplicadas para este formulario, ¡Buen día!",
            icon: "success"
          });
    }
});

//Validar formato de correo
function validarEmail(emailIngresado)
{
    regexp = /^[a-zA-Z0-9._-]+@(gmail|hotmail|outlook|yahoo)\.com$/;
    return regexp.test(emailIngresado);
}

//Validar formato de número celular
function validarNumeroCelular(emailCelular)
{
    regexp = /^\d{3} \d{3} \d{4}$/;
    return regexp.test(emailCelular);
}


//Menú hambuerguesa
const nav = document.querySelector('.navbar');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

let tituloProyecto1;
let parrafoProyecto1;
let tituloProyecto2;
let parrafoProyecto2;
let tamanioPantalla;
let ocultar = document.getElementById('variasImagenes');

//Ocultar imagen, una vez opriman una opción sobreMiMenu
// const sobreMiMenu = document.querySelector('#sobreMi');
// sobreMiMenu.addEventListener('click', ()=> 
// {
//     nav.classList.remove('visible');
// });

//Ocultar imagen, una vez opriman una opción habilidades
// const habilidades = document.querySelector('#habilidades');
// habilidades.addEventListener('click', ()=> 
// {
//     nav.classList.remove('visible');
// });

//Obtener el tamaño actual de la pantalla
tamanioPantalla = parseInt(window.innerWidth);
// alert(tamanioPantalla);

//Usar el script dependiendo si el ancho de la pantalla es menor a 430
if(tamanioPantalla  <= 430)
{
    document.addEventListener('DOMContentLoaded', function()
    {
        abrir.addEventListener('click', () => 
        {
            nav.classList.add('visible');
            ocultar.style.width = '0px';
            document.getElementById('proyecto1').textContent = '';
        });
        
        cerrar.addEventListener('click', () => 
        {
            nav.classList.remove('visible');
            ocultar.style.width = '100px';
            document.getElementById('proyecto1').textContent = 'Proyecto 1';
        });

            tituloProyecto1 = document.getElementById('titulo1');
            tituloProyecto1.style.marginTop = '-5%';
            tituloProyecto1.style.marginLeft = '5%';

            parrafoProyecto1 = document.getElementById('parrafo1');
            parrafoProyecto1.style.marginTop = '290%';
            parrafoProyecto1.style.marginLeft = '5%';

            tituloProyecto2 = document.getElementById('titulo2');
            tituloProyecto2.style.marginTop = '290%'
            

            parrafoProyecto2 = document.getElementById('parrafo2');
            parrafoProyecto2.style.marginTop = '890%';
            parrafoProyecto2.style.marginLeft = '5%';

            //Elemento 1, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
            lineaV1 = document.getElementById('lineaVertical1');
            lineaV1.style.marginTop = '900%'
            lineaV1.style.width = '5px';
            lineaV1.style.height = '390px';

            //Elemento 2, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
            lineaV2 = document.getElementById('lineaVertical2');
            lineaV2.style.width = '5px';
            lineaV2.style.height = '390px';
            lineaV2.style.marginTop = '280%';

        /*Realizar modificaciones para las líneas verticales, margenes de titulos y parrafos*/
        document.getElementById('sobreMi').addEventListener('click', function()
        {
            tituloProyecto1 = document.getElementById('titulo1');
            tituloProyecto1.style.marginTop = '-5%';
            tituloProyecto1.style.marginLeft = '5%';

            parrafoProyecto1 = document.getElementById('parrafo1');
            parrafoProyecto1.style.marginTop = '290%';
            parrafoProyecto1.style.marginLeft = '5%';

            tituloProyecto2 = document.getElementById('titulo2');
            tituloProyecto2.style.marginTop = '290%'
            

            parrafoProyecto2 = document.getElementById('parrafo2');
            parrafoProyecto2.style.marginTop = '890%';
            parrafoProyecto2.style.marginLeft = '5%';

            //Elemento 1, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
            lineaV1 = document.getElementById('lineaVertical1');
            lineaV1.style.marginTop = '900%'
            lineaV1.style.width = '5px';
            lineaV1.style.height = '390px';

            //Elemento 2, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
            lineaV2 = document.getElementById('lineaVertical2');
            lineaV2.style.width = '5px';
            lineaV2.style.height = '390px';
            lineaV2.style.marginTop = '280%';

            ocultar.style.width = '100px';

            nav.classList.remove('visible');
        });

        document.getElementById('habilidades').addEventListener('click', function()
        {
            tituloProyecto1 = document.getElementById('titulo1');
            tituloProyecto1.style.marginTop = '-5%';
            tituloProyecto1.style.marginLeft = '5%';

            parrafoProyecto1 = document.getElementById('parrafo1');
            parrafoProyecto1.style.marginTop = '260%';
            parrafoProyecto1.style.marginLeft = '5%';

            tituloProyecto2 = document.getElementById('titulo2');
            tituloProyecto2.style.marginTop = '250%'
            

            parrafoProyecto2 = document.getElementById('parrafo2');
            parrafoProyecto2.style.marginTop = '770%';
            parrafoProyecto2.style.marginLeft = '5%';

            //Elemento 1, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
            lineaV1 = document.getElementById('lineaVertical1');
            lineaV1.style.marginTop = '780%'
            lineaV1.style.width = '5px';
            lineaV1.style.height = '320px';

            //Elemento 2, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
            lineaV2 = document.getElementById('lineaVertical2');
            lineaV2.style.width = '5px';
            lineaV2.style.height = '320px';
            lineaV2.style.marginTop = '250%';

            ocultar.style.width = '100px';

            nav.classList.remove('visible');
        });

        document.getElementById('proyectos').addEventListener('click', function()
        {
            tituloProyecto1 = document.getElementById('titulo1');
            tituloProyecto1.style.marginTop = '-5%';
            tituloProyecto1.style.marginLeft = '5%';

            parrafoProyecto1 = document.getElementById('parrafo1');
            parrafoProyecto1.style.marginTop = '150%';
            parrafoProyecto1.style.marginLeft = '5%';

            tituloProyecto2 = document.getElementById('titulo2');
            tituloProyecto2.style.marginTop = '150%'
            tituloProyecto2.style.marginLeft = '5%'

            parrafoProyecto2 = document.getElementById('parrafo2');
            parrafoProyecto2.style.marginTop = '470%';
            parrafoProyecto2.style.marginLeft = '5%';

            //Elemento 1, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
            lineaV1 = document.getElementById('lineaVertical1');
            lineaV1.style.marginTop = '480%'
            lineaV1.style.width = '5px';
            lineaV1.style.height = '140px';

            //Elemento 2, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
            lineaV2 = document.getElementById('lineaVertical2');
            lineaV2.style.width = '5px';
            lineaV2.style.height = '160px';
            lineaV2.style.marginTop = '140%';

            nav.classList.remove('visible');
        });

        document.getElementById('reflexion').addEventListener('click', function()
        {
            tituloProyecto1 = document.getElementById('titulo1');
            tituloProyecto1.style.marginTop = '-5%';
            tituloProyecto1.style.marginLeft = '5%';

            parrafoProyecto1 = document.getElementById('parrafo1');
            parrafoProyecto1.style.marginTop = '290%';
            parrafoProyecto1.style.marginLeft = '5%';

            tituloProyecto2 = document.getElementById('titulo2');
            tituloProyecto2.style.marginTop = '300%'
            tituloProyecto2.style.marginLeft = '5%'

            parrafoProyecto2 = document.getElementById('parrafo2');
            parrafoProyecto2.style.marginTop = '880%';
            parrafoProyecto2.style.marginLeft = '5%';

            //Elemento 1, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
            lineaV1 = document.getElementById('lineaVertical1');
            lineaV1.style.marginTop = '890%'
            lineaV1.style.width = '5px';
            lineaV1.style.height = '340px';

            //Elemento 2, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
            lineaV2 = document.getElementById('lineaVertical2');
            lineaV2.style.width = '5px';
            lineaV2.style.height = '375px';
            lineaV2.style.marginTop = '280%';

            ocultar.style.width = '100px';

            nav.classList.remove('visible');
        });
    });   
}
//Realizar cambios al css si el tamaño de la pantalla está en el rango establecido
else if(tamanioPantalla >= 768 && tamanioPantalla <= 1023)
{
    document.addEventListener('DOMContentLoaded', function()
    {
        tituloProyecto1 = document.getElementById('titulo1');
        tituloProyecto1.style.marginTop = '-5%';
        tituloProyecto1.style.marginLeft = '5%';

        parrafoProyecto1 = document.getElementById('parrafo1');
        parrafoProyecto1.style.marginTop = '210%';
        parrafoProyecto1.style.marginLeft = '5%';

        tituloProyecto2 = document.getElementById('titulo2');
        tituloProyecto2.style.marginTop = '210%'
        

        parrafoProyecto2 = document.getElementById('parrafo2');
        parrafoProyecto2.style.marginTop = '650%';
        parrafoProyecto2.style.marginLeft = '5%';

        //Elemento 1, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
        lineaV1 = document.getElementById('lineaVertical1');
        lineaV1.style.marginTop = '660%'
        lineaV1.style.width = '5px';
        lineaV1.style.height = '600px';

        //Elemento 2, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
        lineaV2 = document.getElementById('lineaVertical2');
        lineaV2.style.width = '5px';
        lineaV2.style.height = '570px';
        lineaV2.style.marginTop = '200%';

        lineaH1 = document.getElementById('lineaProyecto1');
        lineaH1.style.width = '120px';
        lineaH1.style.height = '4px';

        document.getElementById('sobreMi').addEventListener('click', function()
        {
            tituloProyecto1 = document.getElementById('titulo1');
            tituloProyecto1.style.marginTop = '-5%';
            tituloProyecto1.style.marginLeft = '5%';

            parrafoProyecto1 = document.getElementById('parrafo1');
            parrafoProyecto1.style.marginTop = '210%';
            parrafoProyecto1.style.marginLeft = '5%';

            tituloProyecto2 = document.getElementById('titulo2');
            tituloProyecto2.style.marginTop = '210%'
            

            parrafoProyecto2 = document.getElementById('parrafo2');
            parrafoProyecto2.style.marginTop = '650%';
            parrafoProyecto2.style.marginLeft = '5%';

            //Elemento 1, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
            lineaV1 = document.getElementById('lineaVertical1');
            lineaV1.style.marginTop = '660%'
            lineaV1.style.width = '5px';
            lineaV1.style.height = '600px';

            //Elemento 2, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
            lineaV2 = document.getElementById('lineaVertical2');
            lineaV2.style.width = '5px';
            lineaV2.style.height = '570px';
            lineaV2.style.marginTop = '200%';
        });

        document.getElementById('habilidades').addEventListener('click', function()
        {
            tituloProyecto1 = document.getElementById('titulo1');
            tituloProyecto1.style.marginTop = '-5%';
            tituloProyecto1.style.marginLeft = '5%';

            parrafoProyecto1 = document.getElementById('parrafo1');
            parrafoProyecto1.style.marginTop = '190%';
            parrafoProyecto1.style.marginLeft = '5%';

            tituloProyecto2 = document.getElementById('titulo2');
            tituloProyecto2.style.marginTop = '190%'
            

            parrafoProyecto2 = document.getElementById('parrafo2');
            parrafoProyecto2.style.marginTop = '575%';
            parrafoProyecto2.style.marginLeft = '5%';

            //Elemento 1, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
            lineaV1 = document.getElementById('lineaVertical1');
            lineaV1.style.marginTop = '585%'
            lineaV1.style.width = '5px';
            lineaV1.style.height = '465px';

            //Elemento 2, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
            lineaV2 = document.getElementById('lineaVertical2');
            lineaV2.style.width = '5px';
            lineaV2.style.height = '495px';
            lineaV2.style.marginTop = '180%';
        });

        document.getElementById('proyectos').addEventListener('click', function()
        {
            tituloProyecto1 = document.getElementById('titulo1');
            tituloProyecto1.style.marginTop = '-5%';
            tituloProyecto1.style.marginLeft = '5%';

            parrafoProyecto1 = document.getElementById('parrafo1');
            parrafoProyecto1.style.marginTop = '120%';
            parrafoProyecto1.style.marginLeft = '5%';

            tituloProyecto2 = document.getElementById('titulo2');
            tituloProyecto2.style.marginTop = '110%'
            

            parrafoProyecto2 = document.getElementById('parrafo2');
            parrafoProyecto2.style.marginTop = '335%';
            parrafoProyecto2.style.marginLeft = '5%';

            //Elemento 1, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
            lineaV1 = document.getElementById('lineaVertical1');
            lineaV1.style.marginTop = '345%'
            lineaV1.style.width = '5px';
            lineaV1.style.height = '195px';

            //Elemento 2, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
            lineaV2 = document.getElementById('lineaVertical2');
            lineaV2.style.width = '5px';
            lineaV2.style.height = '235px';
            lineaV2.style.marginTop = '110%';
        });

        document.getElementById('reflexion').addEventListener('click', function()
        {
            tituloProyecto1 = document.getElementById('titulo1');
            tituloProyecto1.style.marginTop = '-5%';
            tituloProyecto1.style.marginLeft = '5%';

            parrafoProyecto1 = document.getElementById('parrafo1');
            parrafoProyecto1.style.marginTop = '210%';
            parrafoProyecto1.style.marginLeft = '5%';

            tituloProyecto2 = document.getElementById('titulo2');
            tituloProyecto2.style.marginTop = '210%'
            

            parrafoProyecto2 = document.getElementById('parrafo2');
            parrafoProyecto2.style.marginTop = '650%';
            parrafoProyecto2.style.marginLeft = '5%';

            //Elemento 1, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
            lineaV1 = document.getElementById('lineaVertical1');
            lineaV1.style.marginTop = '660%'
            lineaV1.style.width = '5px';
            lineaV1.style.height = '595px';

            //Elemento 2, dar el ancho y la altura a la línea vertical que acompaña al parrafo en español
            lineaV2 = document.getElementById('lineaVertical2');
            lineaV2.style.width = '5px';
            lineaV2.style.height = '565px';
            lineaV2.style.marginTop = '200%';
        });
    });
}


