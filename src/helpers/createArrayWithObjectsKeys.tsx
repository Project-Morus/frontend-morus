export const createArrayWithObjectsKeys = (quantity: number) => {
  const dotsKeys = []

  for (let i = 1; i <= quantity; i++) {
    [...dotsKeys, dotsKeys.push({ key: i })]
  }

  return dotsKeys
}