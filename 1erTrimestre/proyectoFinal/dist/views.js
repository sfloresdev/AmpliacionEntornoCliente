export const HOME_VIEW = `
    <div id="container">
        <label for="opcion">¿Que desea calcular?</label><br>
        <input type="button" value="Masa corporal" class="btn" id="B_IMC"><br><br>
        <input type="button" value="Ejercicio" class="btn" id="B_EXE">
    </div>
`;
export const IMC_VIEW = `
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
export const EXERCISE_VIEW = `
    <div id="container">
        <label class="card-title">Calculadora de Ejercicio</label>

        <label for="T_TARGET">Objetivo semanal (Horas totales)</label>
        <input type="number" class="text-input" id="T_TARGET" placeholder="Ej: 10">
        
        <label style="margin-top: 15px;">Horas entrenadas por día:</label>

        <div id="day-inputs">
            <div class="day-input-group">
                <label for="input-L">L</label>
                <input type="number" class="text-input day-time-input" id="input-L">
            </div>
            <div class="day-input-group">
                <label for="input-M">M</label>
                <input type="number" class="text-input day-time-input" id="input-M">
            </div>
            <div class="day-input-group">
                <label for="input-X">X</label>
                <input type="number" class="text-input day-time-input" id="input-X">
            </div>
            <div class="day-input-group">
                <label for="input-J">J</label>
                <input type="number" class="text-input day-time-input" id="input-J">
            </div>
            <div class="day-input-group">
                <label for="input-V">V</label>
                <input type="number" class="text-input day-time-input" id="input-V">
            </div>
            <div class="day-input-group">
                <label for="input-S">S</label>
                <input type="number" class="text-input day-time-input" id="input-S">
            </div>
            <div class="day-input-group">
                <label for="input-D">D</label>
                <input type="number" class="text-input day-time-input" id="input-D">
            </div>
        </div>
        
        <div id="EXE_RESULT" style="margin-top: 15px;"></div>

        <div style="height: 20px;"></div>

        <input type="button" class="btn" id="T_EXE" value="Calcular resumen">
        <input type="button" class="btn" id="B_HOME" value="Volver al inicio">
    </div>
`;
//# sourceMappingURL=views.js.map