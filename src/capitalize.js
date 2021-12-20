function capitalize(string) {
    let arr = string.split(' ');
    let newArr = arr.map(function(item){
        let word =item.slice(1);
        let result = item[0].toUpperCase();
        return `${result}${word}`
    })
    return newArr.join(' ')
}


module.exports = capitalize;
