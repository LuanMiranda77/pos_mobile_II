export function convertHourStringToNumber(time: string) {
  const [horas, minutos] = time.split(":").map(Number);
  return horas * 3600 + minutos * 60;
}

export function segundosParaHorasMinutos(segundos: number) {
  var horas = Math.floor(segundos / 3600);
  var minutos = Math.floor((segundos % 3600) / 60);
  return horas + ":" + (minutos < 10 ? "0" : "") + minutos;
}
