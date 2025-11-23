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
    <label>Calculadora de Ejercicio</label>

    <label for="objetivo">Objetivo de horas semanales</label>
    <input type="number" class="text-input" id="T_TARGET" placeholder="Ej: 10">
    
    <label style="margin-top: 15px;">Registro diario</label>
    <div id="day-selector">
        <div class="day-toggle">L</div>
        <div class="day-toggle">M</div>
        <div class="day-toggle">X</div>
        <div class="day-toggle">J</div>
        <div class="day-toggle">V</div>
        <div class="day-toggle">S</div>
        <div class="day-toggle">D</div>
    </div>

    <div id="day-editor" style="display: none; animation: fadeIn 0.3s;">
        <label id="day-label-dynamic" style="color: #0072f5;">Horas del Lunes</label>
        <input type="number" class="text-input" id="day-hours-input" placeholder="0">
    </div>

    <div style="height: 20px;"></div>

    <input type="button" class="btn" id="T_EXE" value="Calcular resumen">
    <input type="button" class="btn" id="B_HOME" value="Volver al inicio">
    </div>
`;