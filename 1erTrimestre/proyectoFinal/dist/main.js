import { EXERCISE_VIEW, HOME_VIEW, IMC_VIEW } from "./views.js";
import { calculateBmi } from "./imc.js";
const DIAS_SEMANA = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let horasSemana = [0, 0, 0, 0, 0, 0, 0];
let diaActualIndice = null;
// Elementos del DOM
const appContainer = document.getElementById("app");
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
    let result = document.getElementById("IMC_RESULT");
    if (!result)
        return;
    try {
        const resultadoCalculo = calculateBmi();
        const valorIMC = resultadoCalculo.imc.toFixed(2);
        const categoria = resultadoCalculo.tipo;
        result.innerHTML = `
            Tu IMC es: <strong>${valorIMC}</strong>.<br>
            Categoria: <strong>${categoria}</strong>.
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
        calculateButton.addEventListener('click', renderEXE);
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