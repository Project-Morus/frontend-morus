export const date = new Date()

export function formatDate(date: string) {
  const convertDate = new Date(date)

  return new Intl.DateTimeFormat('pt-BR').format(convertDate)
}

export function currentDateFormatted() {
  return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(date)
}