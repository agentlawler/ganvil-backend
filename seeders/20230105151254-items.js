'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'items',
      [
        {
          name: 'Broom Of Flying',
          rarity: 'Uncommon',
          type: 'Woundrous Item',
          description: `This wooden broom, which weighs 3 pounds, functions like a mundane broom until you stand astride it and speak its command word. It then hovers beneath you and can be ridden in the air. It has a flying speed of 50 feet. It can carry up to 400 pounds, but its flying speed becomes 30 feet while carrying over 200 pounds. The broom stops hovering when you land.

          You can send the broom to travel alone to a destination within 1 mile of you if you speak the command word, name the location, and are familiar with that place. The broom comes back to you when you speak another command word, provided that the broom is still within 1 mile of you.`,
          price: '500.00',
          attunement: false,
          image: 'https://www.dndbeyond.com/avatars/thumbnails/7/152/1000/1000/636284717908019789.jpeg',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Holy Avenger',
          rarity: 'Legendary',
          type: 'Weapon',
          description: `You gain a +3 bonus to attack and damage rolls made with this magic weapon. When you hit a fiend or an undead with it, that creature takes an extra 2d10 radiant damage.

          While you hold the drawn sword, it creates an aura in a 10-foot radius around you. You and all creatures friendly to you in the aura have advantage on saving throws against spells and other magical effects. If you have 17 or more levels in the paladin class, the radius of the aura increases to 30 feet.`,
          price: '50000.00',
          attunement: true,
          image: 'https://www.dndbeyond.com/avatars/thumbnails/7/253/1000/1000/636284739956618526.jpeg',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('items', null, {})
  }
};
