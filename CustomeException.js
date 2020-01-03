

const message = 'User Created Exception'
//console.log(" Outside Exception "+message);

function CustomException(message) {
    //console.log(message);
    const error = new Error(message);
   // const error = new Error(msg);
   //const error = new Error();
    console.log(message);
    //console.log(error.name);
    //console.log(error.message)
    return error;
  }
  
  CustomException.prototype = Object.create(Error.prototype);

  try {
    //var value = Number(10)
    var value = 'hello'
    if (isNaN(value))

      //  throw new CustomException(message);
        throw new CustomException(value);

    else
    console.log('No Exception or Given value is Number')
  }

  catch (e) {
    if (!e) {
        console.log("not a number");
        console.log();
    }
    else
    console.log('not a part of Custom Exception')
}