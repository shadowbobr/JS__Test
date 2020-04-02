var nador = "2, 33, 5, 8, 10, 22";

var massiv__nabort = nador.split(', ');

massiv__nabort.sort(function(a, b) {
    return a - b;
});

console.log(massiv__nabort);