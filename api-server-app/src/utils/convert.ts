export function convertHourStringToNumber(time: string) {
  const [horas, minutos] = time.split(":").map(Number);
  return horas * 3600 + minutos * 60;
}
