// Javascript file for cross component simple functions

export function isOdd(n) {
    return Math.abs(n % 2) === 1;
}

export function getAuthDurationLocale(d) {
    switch(d) {
        case "PERMANENT":
            return "Permanente";
        case "WEEK":
            return "Uma semana";
        default:
            return "Um dia";
    }
}

export function getAuthDescriptionLocale(d) {
    switch(d) {
        case "FAMILY":
            return "Família";
        case "PROVIDER":
            return "Prestador de Serviço";
        default:
            return "Visita";
    }
}