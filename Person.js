  class Person {
    
    constructor(sex, hairColor, eyeColor, noseSize, earSize, cute, height){
      this.sex       = sex       || this.getSex();
      this.hairColor = hairColor || this.getHairColor();
      this.eyeColor  = eyeColor  || this.getEyeColor();
      this.noseSize  = noseSize  || this.getNoseSize();
      this.earSize   = earSize   || this.getEarSize();
      this.cute      = cute      || this.isCute();
      this.height    = height    || this.getHeight();  
    }
  
    getSex() {
      return randomIntFromInterval(0,1) ? "Male" : "Female"
    }
  
    getHairColor() {
      return HAIR_COLORS[randomIntFromInterval(0,5)]
    }
  
    getEyeColor() {
      return EYE_COLORS[randomIntFromInterval(0,5)]
    }
  
    getNoseSize() {
      return SIZE[randomIntFromInterval(0,2)]
    }
  
    getEarSize() {
      return SIZE[randomIntFromInterval(0,2)]
    }
  
    isCute() {
      return randomIntFromInterval(0,1) == 0
    }
  
    getHeight() {
      return `${randomIntFromInterval(4,6)}'${randomIntFromInterval(0,11)}"`
    }
  
    clone() {
      return new Person (
        this.sex,
        this.hairColor,
        this.eyeColor,
        this.noseSize,
        this.earSize,
        this.cute,
        this.height
      )
    }
  
  }
  
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const HAIR_COLORS = ["BLOND", "RED", "BROWN", "BLACK", "LIGHT_BROWN","GREY", getRandomColor()]
  const EYE_COLORS  = ["BLUE", "GREEN", "GREY", "BROWN", "HAZEL", getRandomColor()]
  const SIZE        = ["SMALL", "NORMAL", "LARGE"]

  module.exports = function() { 
    this.Person = new Person;
 }