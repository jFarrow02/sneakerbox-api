const isNull = (input)=>{
    return isNull(input);
}

const containsWhitespace = (input)=>{
    const whitespaceRegex = /\s*/g;
    return input.match(whitespaceRegex);
}

module.exports = function(){
    return(
        {
            isNull              :   isNull,
            containsWhitespace  :   containsWhitespace,
        }
    );
};
