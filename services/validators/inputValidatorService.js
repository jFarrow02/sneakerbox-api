/**
 * @fileoverview This file defines various helper functions for validating input received from the client.
 * It exports a function via 'module.exports'. The function returns an object whose keys match the
 * properties of the same names contained within this file. The function may be imported and its return
 * value may be bound to a variable/constant in any file where input validation is needed.
 */


/**
 * @param {Object} input Object representing user input, e.g. from a form field. The function expects the
 * object to have the following properties: name{String} and value{String}
 * @returns {Object} inputObj
 */

const createInputObj = (input)=>{
    let inputObj = {...input};
    inputObj.isValid = false;
    return inputObj;
}

const isNullOrUndefined = function (inputObj){
    return inputObj.value !== null && inputObj.value !== undefined;
}

const allWhiteSpace = (input)=>{
   return input.trim().length === 0;
}

const runValidatorFunctions = (validatorsArray, inputObj)=>{
    validatorsArray.forEach((validator)=>{
        let result = validator(inputObj);
        if(result){
            inputObj.isValid = true;
        }
        else{
            inputObj.validator = validator.name;
        }
    });
    // validatorsArray.map((validator)=>{
    //     let result = validator(inputObj);
    //     if(result){
    //         inputObj.isValid = true;
    //     }
    //     else{
    //         inputObj.validator = validator.name;
    //     }
    //     return inputObj;
    // });
}

module.exports = function(){
    return(
        {
            allWhiteSpace           :   allWhiteSpace,
            createInputObj          :   createInputObj,
            isNullOrUndefined       :   isNullOrUndefined,
            runValidatorFunctions   :   runValidatorFunctions,
        }
    );
};
