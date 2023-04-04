class Formatter {
  //add static methods here
  static capitalize(string){
    return '' + string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, "")
  }
  static titleize(string){
    string = this.capitalize(string) //capitalize first word
    const dontCapitalize = ['a', 'an', 'at', 'but', 'of', 'and', 'for', 'the', 'from','by'] //don't capitalize these words
    const stringArr = string.split(" ")
    const titleizedArr = stringArr.map((word) => { //cycle through each word, if it isn't in the dontCapitalize array, then capitalize it
      if(!dontCapitalize.includes(word)) word = this.capitalize(word)
      return word
    })
    return titleizedArr.join(" ")//turn it back to a string
  }
}