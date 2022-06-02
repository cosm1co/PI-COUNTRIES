export default function validate(input){
    let errors = {};
    if(!input.name){
      errors.name = "This box needs to be filled with an activity name";
    } else if(input.name.length < 3){
      errors.name = "Minumum of 3 characters"
    }else if (input.name.length > 25){
      errors.name = "Maximum of 25 characters"
    }else if(!/^[A-Za-z]+$/.test(input.name)){
        errors.name = "The activity name must not contain numbers or special characters"
    }else if(!input.difficulty){
      errors.difficulty = "You need to chose a level of difficulty."
    } else if(!input.duration){
      errors.duration = "You need to chose a time duration."
    } else if(!input.season || input.season === 'Season'){
      errors.season = "You need to chose a season."
    } else if(!input.countries){
      errors.countries = "You need to chose at least one country."
    }
    return errors
  }