//Codigo Cuadrado
// console.group('Cuadrados');
// const ladoCuadrado = 5;
// const perimetroCuadrado = ladoCuadrado * 4;
// const areaCuadrada = ladoCuadrado * ladoCuadrado;

// console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);
// console.log(`el perimetro del cuadrado es: ${perimetroCuadrado}cm`);
// console.log(`El area del cuadrado es: ${areaCuadrada}cm^2`);
// console.groupEnd();

// function calcularCuadrado(lado) {
//     perimetro = lado * 4;
//     area = lado * lado;
//     console.log(`Los lados del cuadrado miden: ${lado}cm`);
//     console.log(`El perimetro del cuadrado es: ${perimetro}cm`);
//     console.log(`El area del cuadrado es: ${area}cm^2`);
// }

//funcion que hace operacion para calcular perimetro.
function perimetroCuadrado(lado) {
    perimetro = lado * 4;
    return `El perimetro del cuadrado es: ${perimetro}cm`;
};
function calcAreaCuadrado(lado) {
    area = lado * lado;
    return `El area del cuadrado es: ${area}cm^2`
};
//funciones que interactuan en el html
function calcPerimetroCuadro() {
        const d = document;
        const resultado = d.getElementById('resultadoC');
        const inputCuadrado = d.getElementById('InputCuadrado').value;
        const perimetro = perimetroCuadrado(inputCuadrado);        
        resultado.innerHTML = perimetro;
        //limpiar input 
        document.getElementById('InputCuadrado').value = "";
};
function calcAreaCuadro() {
    const d = document;
    const resultado = d.getElementById('resultadoC');
    const inputCuadrado = d.getElementById('InputCuadrado').value;
    const area = calcAreaCuadrado(inputCuadrado);
    resultado.innerHTML = area;
    //limpiar input 
    document.getElementById('InputCuadrado').value = "";

};

// calcularCuadrado(5);


//Codigo Triangulo
// console.group('Triangulos');
// const ladoA = 6;
// const ladoB = 6;
// const base = 4;
// const altura = 5.5;
// const perimteroTriangulo = ladoA + ladoB + base;
// const areaTriangulo = (base * altura) / 2;

// console.log(`Los lados del triangulo miden ${ladoA}cm, ${ladoB}cm y ${base}cm`);
// console.log(`La altura del triangulo mide ${altura}cm`);
// console.log(`El perimetro del triangulo es: ${perimteroTriangulo}cm`);
// console.log(`El Area del triangulo es: ${areaTriangulo}cm^2`);
// console.groupEnd();

// function calcularTriangulo(ladoA, ladoB, base, altura) {
//     perimetro = ladoA + ladoB + base;
//     area = (base * altura) / 2;
//     console.log(`Los lados del triangulo miden ${ladoA}cm, ${ladoB}cm y ${base}cm`);
//     console.log(`La altura del triangulo mide ${altura}cm`);
//     console.log(`El perimetro del triangulo es: ${perimetro}cm`);
//     console.log(`El Area del triangulo es: ${area}cm^2`);    
// }

function perimetroTriangulo(ladoA, ladoB, base) {
    perimetro = ladoA + ladoB + base;
    return `El perimetro del triangulo es: ${perimetro}cm`;
};

function areaTriangulo(base, altura) {
    area = (base * altura) / 2;
    return `El Area del triangulo es: ${area}cm^2`;
};

function calcPerimetroTrian() {
    const d = document;
    const resultado = d.getElementById('resultadoT');
    const InputTriangulo1 = d.getElementById('InputTriangulo1').value;
    const InputTriangulo2 = d.getElementById('InputTriangulo2').value;
    const InputTriangulo3 = d.getElementById('InputTriangulo3').value;
    const perimetro = perimetroTriangulo(parseInt(InputTriangulo1), parseInt(InputTriangulo2), parseInt(InputTriangulo3));        
    resultado.innerHTML = perimetro;
    //limpiar input 
    document.getElementById('InputTriangulo1').value = "";
    document.getElementById('InputTriangulo2').value = "";
    document.getElementById('InputTriangulo3').value = "";
};

function calcAreaTrian() {
    const d = document;
    const resultado = d.getElementById('resultadoT2');
    const InputTriangulo4 = d.getElementById('InputTriangulo4').value;
    const InputTriangulo5 = d.getElementById('InputTriangulo5').value;    
    const area = areaTriangulo(parseInt(InputTriangulo4), parseInt(InputTriangulo5));
    resultado.innerHTML = area;
    //limpiar input 
    document.getElementById('InputTriangulo4').value = "";
    document.getElementById('InputTriangulo5').value = "";
    
};



//funcion calcular perimetro y area de triangulo ingresar datos en el siguiente orden
//ladoA, ladoB, base, altura
// calcularTriangulo(6, 6, 4, 5.5);

//Codigo Circulo
// console.group('Circulo');
// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
// const piCirculo = Math.PI;
// const perimetroCirculo = diametroCirculo * piCirculo;
// const areaCirculo = (radioCirculo * radioCirculo) * piCirculo;

// console.log(`El radio del circulo es: ${radioCirculo}cm`);
// console.log(`El diametro del circulo es: ${diametroCirculo}cm`);
// console.log(`PI es: ${piCirculo}`);
// console.log(`El perimetro del circulo es: ${perimetroCirculo}cm`);
// console.log(`El area del circulo es: ${areaCirculo}cm`);
// console.groupEnd();

const PI = Math.PI;

function calcDiametroCirculo(radio) {
    
    return radio * 2;
};

function calcPerimetroCirculo(radio) {
    const diametro = calcDiametroCirculo(radio);
    perimetro = diametro * PI;
    return `El perimetro del circulo es: ${perimetro}cm`;
}


function calcAreaCirculo(radio) {
    area = (radio * radio) * PI;
    return `El area del circulo es: ${area}cm`;
}


// function calcularCirculo(radio) {
//     diametro = radio * 2;
//     perimetro = diametro * Math.PI;
//     area = (radio * radio) * Math.PI;
//     console.log(`El radio del circulo es: ${radio}cm`);
//     console.log(`El diametro del circulo es: ${diametro}cm`);
//     console.log(`El perimetro del circulo es: ${perimetro}cm`);
//     console.log(`El area del circulo es: ${area}cm`);
// };
//funcion calcular diametro y perimetro y area del circulo ingresarsolo el radio del circulo
// calcularCirculo(4);







