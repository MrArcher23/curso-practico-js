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

function calcPerimetroCuadrado(lado) {
    perimetro = lado * 4;
    return `El perimetro del cuadrado es: ${perimetro}cm`;
};

function calcAreaCuadrado(lado) {
    area = lado * lado;
    return `El area del cuadrado es: ${area}cm^2`
}




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

function calcPerimetroTriangulo(ladoA, ladoB, base) {
    perimetro = ladoA + ladoB + base;
    return `El perimetro del triangulo es: ${perimetro}cm`;
};

function calcAreaTriangulo(base, altura) {
    area = (base * altura) / 2;
    return `El Area del triangulo es: ${area}cm^2`;
}


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







