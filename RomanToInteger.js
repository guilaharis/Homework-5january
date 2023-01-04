//version 4
function romanToInteger(s) {
    var roman = 0
    for (i = 0; i < s.length; i++) {
        var next = s[i + 1]
        if (s[i] == "I") {
            if (next == "V") {
                roman += 4
                i = i + 1
            } else if (next == "X") {
                roman += 9
                i = i + 1
            } else {
                roman += 1
            }
        } else if (s[i] == "V") {
            roman += 5
        } else if (s[i] == "X") {
            if (next == "L") {
                roman += 40
                i = i + 1
            } else if (next == "C") {
                roman += 90
                i = i + 1
            } else {
                roman += 10
            }
        } else if (s[i] == "L") {
            roman += 50
        } else if (s[i] == "C") {
            if (next == "D") {
                roman += 400
                i = i + 1
            } else if (next == "M") {
                roman += 900
                i = i + 1
            } else {
                roman += 100
            }
        } else if (s[i] == "D") {
            roman += 500
        } else if (s[i] == "M") {
            roman += 1000
        }
    }
    return roman
}

romanToInteger()



