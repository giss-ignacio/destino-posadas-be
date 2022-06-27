const fs = require('fs');

function procesarDatos() {
    let rawdata = fs.readFileSync('./data/data.json');
    let hoteles = JSON.parse(rawdata); 


    return hoteles.filter(e => {
      return e.Ciudad && e.Ciudad.value == "Posadas"
    })

}

let resultado = JSON.stringify(procesarDatos());
fs.writeFile('out.json', resultado, err => {
    if (err) {
      console.error(err);
    }
});