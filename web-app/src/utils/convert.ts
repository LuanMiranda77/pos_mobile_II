export function segundosParaHorasMinutos(segundos: number) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    return horas + ":" + (minutos < 10 ? "0" : "") + minutos;
  }
  