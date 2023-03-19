const SHOW_MESSAGE = true

export const generateAccountNumber = () => Math.floor(Math.random() * 1000000000) + 1000000000;

export const generateRandNumber = (len: number = 3) => Math.floor(Math.random() * (10 ** len - 1)) + (10 ** len - 1)

export const generateDate = (len: number = 3) => {
  const today = new Date()
  return Date.parse(`${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear() + len}`)
}

const getPercentage = (amount: number, percent: number): number => (amount * percent) / 100

export const logger = (...message: unknown[]) => SHOW_MESSAGE && console.log(...message)

export const getTime = (num: number, format: string): number => {
  format = format.toLowerCase()
  const SECOND = 1000
  const MINUTE = SECOND * 60
  const HOUR = MINUTE * 60
  const DAY = HOUR * 24

  if(format.startsWith("d")) return num * DAY
  if(format.startsWith("h")) return num * HOUR
  if(format.startsWith("m")) return num * MINUTE

  return num * SECOND
}

export const except = (obj: any, ...props: string[]) => {
  props.forEach(prop => {
    if(prop in obj) delete obj[prop]
  }) 
  return obj
}

export const generateInterest = (amount: number, income: number): number => {
  let interest
  if(income >= 2000 && income <= 5000) {
    interest = getPercentage(amount, 0.5)
  }
  else if(income >= 6000 && income <= 10000) {
    interest = getPercentage(amount, 1)
  }
  else if(income >= 11000 && income <= 20000) {
    interest = getPercentage(amount, 1.5)
  }
  else if(income >= 21000 && income <= 50000){
    interest = getPercentage(amount, 2.5)
  }
  else {
    interest = getPercentage(amount, 4.5)
  }

  return interest + amount
}