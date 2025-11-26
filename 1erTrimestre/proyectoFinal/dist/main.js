import { EXERCISE_VIEW, HOME_VIEW, IMC_VIEW } from "./views.js";
import { calculateBmi } from "./imc.js";
import { calculateExercises } from "./exerciseCalculator.js";
// Elementos del DOM
const appContainer = document.getElementById("app");
// Funcion general para renderizar cada vista
function renderView(content, listeners) {
    if (!appContainer)
        throw new Error("Error al cargar la pagina");
    appContainer.innerHTML = content;
    listeners();
}
// Bloque para el indice de masa corporal
function renderIMC() {
    renderView(IMC_VIEW, addEventHome);
    const calcuteButton = document.getElementById("T_IMC");
    const homeButton = document.getElementById("B_HOME");
    if (calcuteButton)
        calcuteButton.addEventListener('click', calcularYMostrarResultadoIMC);
    if (homeButton)
        homeButton.addEventListener('click', renderHome);
}
function calcularYMostrarResultadoIMC() {
    const result = document.getElementById("IMC_RESULT");
    if (!result)
        return;
    try {
        const resultadoCalculo = calculateBmi();
        // Desestructuración del IMC
        const valorIMC = resultadoCalculo.imc.toFixed(2);
        const categoria = resultadoCalculo.tipo;
        result.innerHTML = `
         <p style="color: #fff">
            Tu IMC es: <strong>${valorIMC}</strong>.<br>
            Categoria: <strong>${categoria}</strong>.
         </p>
        `;
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Error no definido";
        result.innerText = `Error: ${errorMessage}`;
        result.style.color = '#ff4444';
    }
}
// Bloque para el calculo de ejercicio semanal
function renderEXE() {
    renderView(EXERCISE_VIEW, addEventHome);
    const homeButton = document.getElementById("B_HOME");
    const calculateButton = document.getElementById("T_EXE");
    if (homeButton)
        homeButton.addEventListener('click', renderHome);
    if (calculateButton)
        calculateButton.addEventListener('click', calcularYMostrarResultadoEXE);
}
function calcularYMostrarResultadoEXE() {
    const result = document.getElementById('EXE_RESULT');
    if (!result)
        return;
    try {
        const resultadosUsuario = calculateExercises();
        // Desestructuración del objeto/interfaz.
        const diasEntrenados = resultadosUsuario.trainedDays;
        const conseguido = resultadosUsuario.success;
        const calificacion = resultadosUsuario.rate;
        const descripcion = resultadosUsuario.ratingDescription;
        const objetivo = resultadosUsuario.target;
        const media = resultadosUsuario.average;
        result.innerHTML = `
            <p style="color: #fff">
            Dias entrenados: <strong>${diasEntrenados}</strong><br>
            ¿Objetivo conseguido?: <strong> ${conseguido ? "Si" : "No"} </strong><br>
            Objetivo semanal: <strong>${objetivo}</strong><br>
            Media calculada: <strong>${media}</strong><br>
            Descripción : <strong>${descripcion}</strong><br><br>

            Calificación : <strong style="color: #0072f5">${calificacion}</strong><br>
            </p>
        `;
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Error no definido";
        result.innerHTML = `Error: ${errorMessage}`;
        result.style.color = '#ff4444';
    }
}
// Bloque para añadir los eventos al cargar la Home
function renderHome() {
    renderView(HOME_VIEW, addEventHome);
}
function addEventHome() {
    const imcButton = document.getElementById("B_IMC");
    const exeButton = document.getElementById("B_EXE");
    const homeButton = document.getElementById("B_HOME");
    if (imcButton)
        imcButton.addEventListener('click', renderIMC);
    if (exeButton)
        exeButton.addEventListener('click', renderEXE);
    if (homeButton)
        homeButton.addEventListener('click', renderHome);
}
window.addEventListener('DOMContentLoaded', renderHome);
//# sourceMappingURL=main.js.map