'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'Cassian',
          lastName: 'LaVante',
          username: 'ShadowSlay',
          email: 'F@bul.ous',
          password: 'LonelyInside',
          profilePic: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Thalia',
          lastName: 'Varkus',
          username: 'MountainMomma',
          email: 'Talon@Silverfang.gov',
          password: 'UnderPressure',
          profilePic: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Samuel',
          lastName: 'Buccaneer',
          username: 'SaltySammy',
          email: '7seas@piratebay.com',
          password: 'WhoAmI?',
          profilePic: '',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    
  }
};
