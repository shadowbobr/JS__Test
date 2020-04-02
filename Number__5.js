var line__Correct = "(())";

var line = "(())(())(())(())(())(())(())";

var total = false;

for (var i = 0; i < line.length; i = i + line__Correct.length) {

    var line__Part = line.substr(i, line__Correct.length);

    if (line__Part === line__Correct && line__Part.length == line__Correct.length) {

        total = true;

    } else {

        total = false;

    }

}

console.log(total);