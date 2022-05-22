const numToThousands = (num) => {
  if (num >= 1000) {
    const k = (num / 1000).toFixed(1)
    return `${k}k`
  }
  return num
}

export default numToThousands
