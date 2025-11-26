const DIAS_SEMANA = 7;
const DESCRIPTIONS = { 1: "Una pena, animo para la siguiente semana!", 2: "Te has quedado muy cerca de llegar, sigue asi!", 3: "Inmejorable, muy bien trabajado" };
export function calculateExercises() {
    // Nuestro array de la semana
    let arr = [];
    let diasEntrenados = 0;
    let totalHorasEntrenadas = 0;
    const objetivoUsuario = document.getElementById('T_TARGET');
    const valorObjetivo = parseFloat(objetivoUsuario?.value ?? '');
    if (isNaN(valorObjetivo) || valorObjetivo <= 0)
        throw Error('El objetivo semanal debe ser 1 hora o más');
    // Obtener valores de cada dia
    for (let i = 1; i < DIAS_SEMANA; i++) {
        // Nuestro dia dinamico
        const idDia = `input-${i}`;
        // El elemento html de cada dia
        const indiceDias = document.getElementById(idDia);
        const horasStr = indiceDias?.value ?? '';
        const hora = parseFloat(horasStr);
        if (isNaN(hora) || hora < 0)
            throw Error(`EL ${i}er/o dia de la semana tiene un input no valido`);
        arr.push(hora);
    }
    // En una sola pasada contamos los dias entrenados y horas totales
    arr.forEach((v) => {
        if (v > 0) {
            diasEntrenados++;
            totalHorasEntrenadas += v;
        }
    });
    // Calcular un rating basado en el objetivo semanal
    const finalRate = giveRateBasedOnRating(totalHorasEntrenadas, valorObjetivo);
    return {
        periodLength: DIAS_SEMANA,
        trainedDays: diasEntrenados,
        success: (totalHorasEntrenadas > valorObjetivo) ? true : false,
        rate: finalRate,
        ratingDescription: descriptionBasedOnRating(finalRate),
        target: valorObjetivo,
        average: parseFloat((totalHorasEntrenadas / DIAS_SEMANA).toFixed(2)),
    };
}
function giveRateBasedOnRating(hours, target) {
    if (hours >= target)
        return 3;
    else if (hours >= target * 0.7)
        return 2;
    else
        return 1;
}
function descriptionBasedOnRating(rate) {
    if (rate == 1)
        return DESCRIPTIONS[1];
    else if (rate == 2)
        return DESCRIPTIONS[2];
    else
        return DESCRIPTIONS[3];
}
//# sourceMappingURL=exerciseCalculator.js.map