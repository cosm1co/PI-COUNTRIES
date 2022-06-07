export  function validate(input){
    var errors = {}
    /*if(!input.name){
      errors.name = "This box needs to be filled with an activity name";
    } else*/ if(input.name.length < 3){
      errors.name = "Minumum of 3 characters"
    }else if (input.name.length > 25){
      errors.name = "Maximum of 25 characters"
    }else if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(input.name)){
      errors.name = "The activity name must not contain numbers or special characters"
     }//else if(input.difficulty === 'difficulty'){
    //   errors.difficulty = "You need to chose a level of difficulty."
    // } else if(input.duration === 'duration'){
    //   errors.duration = "You need to chose a time duration."
    // } else if(input.season === 'season'){
    //   errors.season = "You need to chose a season."
    // } else if(!input.countries){
    //   errors.countries = "You need to chose at least one country."
    // }
    return errors
  }

export function validateForm(form){
  var errors = {}
  if(!form.name){
    errors.name = "This box needs to be filled with an activity name";
  } else if(form.difficulty === ''){
    errors.difficulty = "You need to chose a level of difficulty."
  } else if(form.duration === ''){
    errors.duration = "You need to chose a time duration."
  } else if(form.season === ''){
    errors.season = "You need to chose a season."
  } else if(!form.countries){
    errors.countries = "You need to chose at least one country."
  }
  return errors
}