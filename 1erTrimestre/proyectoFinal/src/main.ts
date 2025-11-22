import { EXERCISE_VIEW, HOME_VIEW, IMC_VIEW } from "./views.js";
import { calculateBmi } from "./imc.js";
import { calculateExercises } from "./exerciseCalculator.js";

const appContainer = document.getElementById("app");

function renderView(content: string, listeners: () => void) {
    if (!appContainer)
        throw new Error("Error al cargar la pagina");
    appContainer.innerHTML = content;
    listeners();
}

function renderHome() {
    renderView(HOME_VIEW, addEventHome);
}

function renderIMC() {
    renderView(IMC_VIEW, addEventHome);
    const calcuteButton = document.getElementById("T_IMC");
    const homeButton = document.getElementById("B_HOME");

    if (calcuteButton)
        calcuteButton.addEventListener('click', calcularYMostrarResultado);
    if (homeButton)
        homeButton.addEventListener('click', renderHome);
}

function calcularYMostrarResultado() {
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
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Error no definido";
        result.innerText = `Error: ${errorMessage}`;
        result.style.color = '#ff4444';
    }
}

function renderEXE() {
    renderView(EXERCISE_VIEW, addEventHome);
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
        homeButton.addEventListener('click', renderHome)
}

window.addEventListener('DOMContentLoaded', renderHome);