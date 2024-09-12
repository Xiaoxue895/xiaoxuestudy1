'use strict';

const musicianInstruments = [
  {
    musician: { firstName: 'Adam', lastName: 'Appleby' },
    instruments: [{ type: 'piano' }, { type: 'guitar' }]
  },
  {
    musician: { firstName: 'Anton', lastName: 'Martinovic' },
    instruments: [{ type: 'piano' }, { type: 'bass' }]
  },
  //... (rest of the data)
];

module.exports = {
  async up(queryInterface, Sequelize) {
    const { Musician, Instrument } = require('../models'); // Import models

    for (const { musician, instruments } of musicianInstruments) {
      const foundMusician = await Musician.findOne({
        where: { firstName: musician.firstName, lastName: musician.lastName }
      });
      for (const instrument of instruments) {
        const foundInstrument = await Instrument.findOne({ where: { type: instrument.type } });
        await foundMusician.addInstrument(foundInstrument); // Use the belongsToMany association
      }
    }
  },

  async down(queryInterface, Sequelize) {
    for (const { musician, instruments } of musicianInstruments) {
      const foundMusician = await Musician.findOne({
        where: { firstName: musician.firstName, lastName: musician.lastName }
      });
      for (const instrument of instruments) {
        const foundInstrument = await Instrument.findOne({ where: { type: instrument.type } });
        await foundMusician.removeInstrument(foundInstrument); // Remove association
      }
    }
  }
};

