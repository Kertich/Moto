function toRoman(num) {

    var romans = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    var roman = '';

    for (var key in romans){
        if(num >= romans[key]){
            roman += key.repeat(Math.trunc(num / romans[key]));
            num -= romans[key] * Math.trunc(num / romans[key]);
        }
    }

    return roman;
}

function toArabic(roman){
    if(roman == null)
        return -1;
    var totalValue = 0, 
        value = 0, // Initialise!
        prev = 0;
        
    for(var i=0;i<roman.length;i++){
        var current = char_to_int(roman.charAt(i));
        if (current > prev) {
            // Undo the addition that was done, turn it into subtraction
            totalValue -= 2 * value;
        }
        if (current !== prev) { // Different symbol?
            value = 0; // reset the sum for the new symbol
        }
        value += current; // keep adding same symbols
        totalValue += current;
        prev = current;
    }
    return totalValue;
}

function char_to_int(character) {
    switch(character){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
}

function myfunction() {
  var one = document.getElementById("t1").value;
  var rom = toRoman(one);
 document.getElementById("t2").innerHTML = rom;
}