export const HOME_VIEW: string = `
    <div id="container">
        <label for="opcion">¿Que desea calcular?</label><br>
        <input type="button" value="Masa corporal" class="btn" id="B_IMC"><br><br>
        <input type="button" value="Ejercicio" class="btn" id="B_EXE">
    </div>
`;

export const IMC_VIEW: string = `
<div id="container">
    <label>Calculadora de Masa Corporal (IMC)</label>

    <label for="peso">Peso </label>
    <input type="number" class="text-input" id="C_WEIGHT" placeholder="Por ejemplo: 65">

    <label for="peso">Altura </label>
    <input type="number" class="text-input" id="C_HEIGHT" placeholder="Por ejemplo: 175">

    <input type="button" class="btn" id="T_IMC" value="Calcular"> 
    <p id="IMC_RESULT"></p>
    <input type="button" class="btn" id="B_HOME" value="Volver al inicio">
</div>
`;

export const EXERCISE_VIEW: string = `
    <div id="container">
        <label class="card-title">Calculadora de Ejercicio</label>
        <p>Formulario de Ejercicio en desarrollo...</p>
        <input type="button" class="btn" id="B_HOME" value="Volver al inicio">
    </div>
`;