const Entrega = require("../model/entrega");
const Participante = require("./participante");
const express = require("express");
const { connect, sync } = require("../model/sequelize");

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

   const otorgantes = [];
   const receptores = [];

   /*******************************************************************************
   1. We get all the participants for the exchange
   *******************************************************************************/

   await Participante.findAll( id_intercambio )
      .then((instances) => {

         instances.forEach( (instance) => {
            let {id} = instance.get();
            otorgantes.push(id);
            receptores.push(id);
         });
   })
   .catch((error) => {
      console.log(error);
   });


   /*******************************************************************************
   2. We perform the raffle and keep the results in an array
   *******************************************************************************/

   let id_otorgante = 0;
   let id_receptor = 0;
   let parEntregas =[];

   for ( id_otorgante of otorgantes ) {

      let index = 0

      do {
          index = randomNumber(receptores.length);
          id_receptor = receptores[index];
      } while ( id_otorgante == id_receptor && receptores.length > 1 )
      
      if ( id_otorgante != id_receptor ) {
         parEntregas.push( { id_otorgante: id_otorgante, id_receptor: id_receptor} );
         receptores.splice(index, 1);
      }

   }

   // In case that the last participant has himself as his receptor, we exchange receptor with the last registered participant
   if ( id_otorgante == id_receptor ) {
      let id_receptor_temp = parEntregas[parEntregas.length - 1].id_receptor;
      parEntregas[parEntregas.length - 1].id_receptor = id_receptor;
      parEntregas.push( { id_otorgante: id_otorgante, id_receptor: id_receptor_temp} );
      receptores.splice(index, 1);
   }

   /*******************************************************************************
   3. Once we have all the giver-receiver pairs, we proceed to record them in DB
   *******************************************************************************/

   deleteByIntercambio(id_intercambio);
   await sync;

   for ( parEntrega of parEntregas ) {
      Entrega.create({
         id_intercambio,
         id_otorgante: parEntrega.id_otorgante,
         id_receptor: parEntrega.id_receptor,
         id_estado_entrega : PENDIENTE
      });
   }

   await sync;

   return findByIntercambio(id_intercambio);
}

function randomNumber( length ) {
   return Math.floor(Math.random() * length );
}

function findByIntercambio( id_intercambio ) {
	// SELECT * FROM intercambio WHERE id_intercambio = '...';
	return Entrega.findAll({
		where: {
			id_intercambio,
		},
	});
};

async function deleteByIntercambio( id_intercambio ) {
	await Entrega.destroy({
		where: {
			id_intercambio,
		},
	});
};