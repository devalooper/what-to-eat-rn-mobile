
export const randomColor = () => {
  let randomIndex = 0

  const colors = [
    "#FF597B",
    "#FF8E9E",
    "#F9B5D0",
    "#FD5D5D",
    "#98D8AA",
    "#C0EDA6",
    "#F7D060",
  ];

  if (!randomIndex) randomIndex = Math.floor(Math.random() * colors.length)

  return colors[randomIndex]
}

export const upperCaseFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)