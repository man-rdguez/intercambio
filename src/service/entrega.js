const Entrega = require("../model/entrega");
const Participante = require("./participante");
const express = require("express");

const PENDIENTE = 1;

exports.findByOtorgante = function (id_otorgante) {
	// SELECT * FROM entrega WHERE id_otorgante = '...';
	return Entrega.findOne({
		where: {
			id_otorgante,
		},
	});
};

exports.raffle = function (id_intercambio) {
	return performRaffle( id_intercambio );
};

async function performRaffle( id_intercambio ) {

   const ids = [];
   const opciones = [];

let participanteData = [];
await Participante.findAll(id_intercambio)
    /* same code with above code block */
.then((particInsts) => {
    console.log( particInsts);
    particInsts.forEach((particInst) => {
      let particData = particInst.get();
      console.log(particData);
      let {id} = particData;
   ids.push(id);
   opciones.push(id);
      return id;
    });
   })
.then( (result) => {
   console.log('result = ' + result);
})
.catch((error) => {
    console.log(error);
});

console.log( '--------------------------------------------------------------------------------' );
console.log( 'participanteData' + participanteData );
console.log( '--------------------------------------------------------------------------------' );

   console.log( 'ids: ' + ids );
   console.log( 'opciones: ' + opciones );

   for ( id_otorgante of ids ) {
      console.log('opciones before' + opciones);
      let length = opciones.length;
      console.log('length: ' + length );
      let choice = -1;

      let index = 0

      let id_receptor = 0;
      do {
          index = ramdomNumber(length);
          console.log('index:' + index );
          id_receptor = opciones[ index];
          console.log('opciones' + opciones);
      } while ( id_otorgante == id_receptor && index >= 0 )
      
      const entrega = Entrega.create( {id_intercambio, id_otorgante, id_receptor, id_estado_entrega : PENDIENTE } );

      opciones.splice(index, 1);
      console.log('opciones after' + opciones);

   }

   return findByIntercambio(id_intercambio);
}

function ramdomNumber( length ) {
   aleatorio = Math.round(Math.random() * length );

   console.log( 'length: ' + length );
   console.log( 'aleatorio: ' + aleatorio );

   return aleatorio
}

//exports.findByIntercambio = function (id_intercambio) {
function findByIntercambio(id_intercambio) {
	// SELECT * FROM intercambio WHERE id_intercambio = '...';
	return Entrega.findAll({
		where: {
			id_intercambio,
		},
	});
};