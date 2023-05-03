const coolNum = 42

const hello = () => {
  console.log('Hello!')
}

class dx {
  constructor() {}
  day = 29

  printDay = () => {
    console.log('The day today is: ', this.day)
  }
}

export { coolNum, hello, dx }