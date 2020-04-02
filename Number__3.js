var lol = "Как, переделать чтобы, вывести только, те слова, которые встречаются, в Как слова слова тексте, ровно слова один раз";

var words = lol.replace(/, /g, ' ').split(' ');

var total = [];

for (var i = 0; i < words.length; i++) {

    var count = 0;

    for (var j = 0; j < words.length; j++) {

        if (words[i] === words[j]) {
            count = count + 1;
        }
    }

    if (count === 1) {
        total.push(words[i]);
    }

}

console.log(total);
