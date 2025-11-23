export type Horas = number[];
export interface Result {
    diasEntrenados: number;
    horasPorDia: Horas;
    objetivoSemanal: number;
    totalHoras: number;
    tiempoMedio: number;
    objetivoAlcanzado: boolean;
    nota: 1 | 2 | 3;
}

export function calculateExercises(): Result {

    let arr: Horas = [];



    return {
        diasEntrenados: 0,
        horasPorDia: arr,
        objetivoSemanal: 0,
        totalHoras: 0,
        tiempoMedio: 0,
        objetivoAlcanzado: false,
        nota: 1
    }
}
