var nameList = ["Emily", "Hannah", "Madison", "Ashley", "Sarah", "Alexis", "Samantha", "Jessica", "Elizabeth", "Taylor", "Lauren", "Alyssa", "Kayla", "Abigail", "Brianna", "Olivia", "Emma", "Megan", "Grace", "Victoria", "Rachel", "Anna", "Sydney", "Destiny", "Morgan"]

export function generateRandomName() {
    console.log("GENERATE NAME .......")
  return nameList[Math.floor(Math.random() * nameList.length)]
}

export function generateRandomMessage(length) {
  let result = ""
  // const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const characters = "abcdefghijklmnopqrstuvwxyz"
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}