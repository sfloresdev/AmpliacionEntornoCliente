const TiposPeso = { BAJO: "Peso bajo, come mas", NORMAL: "Peso normal, sigue asi campeón", SOBREPESO: "Menos hamburguesas chaval", OBESIDAD: "Diego gordo de mierda" };
export function calculateBmi() {
    const alturaInput = document.getElementById("C_HEIGHT") as HTMLInputElement | null;
    const pesoInput = document.getElementById("C_WEIGHT") as HTMLInputElement | null;

    const alturaStr = alturaInput?.value;
    const pesoStr = pesoInput?.value;

    if (!alturaStr || !pesoStr)
        throw new Error("Por favor introduce valores de peso y altura");

    const altura: number = parseFloat(alturaStr);
    const peso: number = parseFloat(pesoStr);

    const error = validateInput(altura, peso);
    if (error)
        throw new Error(error);

    const alturaEnMetros: number = altura / 100;
    const IMC: number = peso / (alturaEnMetros * alturaEnMetros);
    const categoria: string = determinarTipoPeso(IMC);

    return { imc: IMC, tipo: categoria };
}

function validateInput(altura: number, peso: number) {
    if (isNaN(altura) || isNaN(peso))
        return "Los valores deben ser numeros validos";
    if (altura < 120 || altura > 240)
        return `Enserio mides ${altura}cm?`;
    else if (peso < 12 || peso > 550)
        return `Enserio pesas ${peso}?, deberias ir al medico`;
}

function determinarTipoPeso(IMC: number): string {
    if (IMC < 18.5) return TiposPeso.BAJO;
    else if(IMC >= 18.5 && IMC < 25) return TiposPeso.NORMAL
    else if(IMC >= 25 && IMC < 30) return TiposPeso.SOBREPESO
    else if(IMC >= 30) return TiposPeso.OBESIDAD
    return "Estado no definido";
}