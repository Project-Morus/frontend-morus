export const date = new Date()

export function formatDate(date: string) {
  const convertDate = new Date(date)

  return new Intl.DateTimeFormat('pt-BR').format(convertDate)
}

export function currentDateFormatted() {
  return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(date)
}

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const hours = String(date.getUTCHours()).padStart(2, '0');
const minutes = String(date.getUTCMinutes()).padStart(2, '0');
const seconds = String(date.getUTCSeconds()).padStart(2, '0');
const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');

export const completedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;