
export const randomColor = (): string => {
  let randomIndex: number = 0

  const colors = [
    "red",
    "pink",
    "purple",
    "blue",
    "teal",
    "green",
    "orange",
  ];

  if (!randomIndex) randomIndex = Math.floor(Math.random() * colors.length)

  return colors[randomIndex]
}