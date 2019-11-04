/**
 * @fileoverview This file defines various helper functions for validating input received from the client.
 * It exports a function via 'module.exports'. The function returns an object whose keys match the
 * properties of the same names contained within this file. The function may be imported and its return
 * value may be bound to a variable/constant in any file where input validation is needed.
 *
 * Each helper function in the file should accept a single parameter that is an Object with a 'name'{String}
 * and 'value'{String} property. It should return a Boolean indicating whether the 'value' propery is
 * valid or invalid per its internal business logic.
 */

/**
 * @param {Object} input Object representing user input, e.g. from a form field. The function expects the
 * object to have the following properties: name{String} and value{String | Number | Boolean}
 * @returns {Object} inputObj
 */

const createInputObj = (input)=>{
    let inputObj = {...input};
    inputObj.isValid = false;
    return inputObj;
}

/**
 *
 * @param {Object} inputObj
 * @returns {Boolean} Returns true if inputObj.value is neither null NOR undefined, false otherwise
 */
const isNullOrUndefined = function (inputObj){
    return inputObj.value !== null && inputObj.value !== undefined;
}

/**
 *
 * @param {Object} inputObj
 * @returns {Boolean} Returns true if inputObj.value contains at least ONE character after leading and trailing
 * whitespace is trimmed, false otherwise
 */
const allWhiteSpace = (inputObj)=>{
   return inputObj.value.trim().length !== 0;
}

/**
 *
 * @param {Object} inputObj
 */
const isNotANumber = (inputObj)=>!isNaN(inputObj.value);

const isLessThanMax = (inputObj, max)=>inputObj.value > max;

const isGreaterThanMin = (inputObj, min)=>inputObj.value < min;

/**
 *
 * @param {[Function]} validatorsArray
 * @param {Object} inputObj
 * This helper function accepts an array of validator functions, and an Object representing
 * client input to be validated. NOTE: This is NOT a 'pure' function, as it modifies the inputObj
 * parameter as follows: If the input is VALID
 */
const runValidatorFunctions = (validatorsArray, inputObj)=>{
    for(let validator of validatorsArray){
        let result = validator(inputObj);
        if(result){
            inputObj.isValid = true;
        }
        else{
            inputObj.validator = validator.name;
            break;
        }
    }
}

module.exports = function(){
    return(
        {
            allWhiteSpace           :   allWhiteSpace,
            createInputObj          :   createInputObj,
            isGreaterThanMin        :   isGreaterThanMin,
            isLessThanMax           :   isLessThanMax,
            isNotANumber            :   isNotANumber,
            isNullOrUndefined       :   isNullOrUndefined,
            runValidatorFunctions   :   runValidatorFunctions,
        }
    );
};
