const TiposPeso = { BAJO: "Peso bajo, busca una nutrición que te fortalezca!", NORMAL: "Peso normal, Tienes un excelente equilibrio, sigue así!", SOBREPESO: "Sobrepeso, Estás a tiempo de hacer pequeños cambios positivos!", OBESIDAD: "Obesidad, Tu bienestar es prioridad!" };
export function calculateBmi() {
    // Inputs del DOM
    const alturaInput = document.getElementById("C_HEIGHT");
    const pesoInput = document.getElementById("C_WEIGHT");
    const alturaStr = alturaInput?.value;
    const pesoStr = pesoInput?.value;
    if (!alturaStr || !pesoStr)
        throw new Error("Por favor introduce valores de peso y altura");
    const altura = parseFloat(alturaStr);
    const peso = parseFloat(pesoStr);
    const error = validateInput(altura, peso);
    if (error)
        throw new Error(error);
    // Calculo del IMC
    const alturaEnMetros = altura / 100;
    const IMC = peso / (alturaEnMetros * alturaEnMetros);
    const categoria = determinarTipoPeso(IMC);
    return { imc: IMC, tipo: categoria };
}
function validateInput(altura, peso) {
    if (isNaN(altura) || isNaN(peso))
        return "Los valores deben ser numeros validos";
    if (altura < 120 || altura > 240)
        return `Enserio mides ${altura}cm?`;
    else if (peso < 12 || peso > 550)
        return `Enserio pesas ${peso}?, deberias ir al medico`;
}
function determinarTipoPeso(IMC) {
    if (IMC < 18.5)
        return TiposPeso.BAJO;
    else if (IMC >= 18.5 && IMC < 25)
        return TiposPeso.NORMAL;
    else if (IMC >= 25 && IMC < 30)
        return TiposPeso.SOBREPESO;
    else if (IMC >= 30)
        return TiposPeso.OBESIDAD;
    return "Estado no definido";
}
//# sourceMappingURL=imc.js.map