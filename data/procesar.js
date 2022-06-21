const fs = require('fs');

function procesarDatos() {
    let rawdata = fs.readFileSync('./data/todos.json');
    let hoteles = JSON.parse(rawdata); 


    // const entities = [
    //     {
    //       type: "Hotel",
    //       Mes: "Noviembre",
    //       Año: "2021",
    //       País: "Argentina",
    //       Ciudad: "Posadas",
    //       Tipo: "Hotel",
    //       Categoría: "4",
    //       Nombre: "HA Urbano Posadas",
    //       Fuente: "Booking",
    //       Concepto: "Calificación",
    //       Valor: "Muy bueno.",
    //       FechadeConsultadeTarifa: "11/18/21"
    //     },
    //     {
    //       Mes: "Noviembre",
    //       Año: "2021",
    //       País: "Argentina",
    //       Ciudad: "Posadas",
    //       Tipo: "Hotel",
    //       Categoría: "4",
    //       Nombre: "HA Urbano Posadas",
    //       Fuente: "Booking",
    //       Concepto: "Puntuación",
    //       Valor: "8.5",
    //       FechadeConsultadeTarifa: "11/18/21"
    //     }
    //   ];
      
      const formattedEntity = (entity) => {
        const entries = Object.entries(entity);
        const formattedEntity = {};
        entries.forEach((entry) => {
          formattedEntity[entry[0]] = {
            type: entry[0] == "Año" || entry[0] == "Categoría" ? "Integer" : isNaN(entry[1]) ? "String" : "Float",
            value: entry[1]
          };
        });
        return formattedEntity;
      };
      
      let i = 0;
      const formattedEntities = hoteles.entities.map((entity) => {
        i++;
        return {...formattedEntity(entity), id:i};
    });
      
      //console.log(formattedEntities);

    return formattedEntities;
}

let resultado = JSON.stringify(procesarDatos());
console.log(resultado);

fs.writeFile('out.json', resultado, err => {
    if (err) {
      console.error(err);
    }
});