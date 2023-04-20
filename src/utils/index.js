
export const randomColor = () => {
  let randomIndex = 0

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

export const upperCaseFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)