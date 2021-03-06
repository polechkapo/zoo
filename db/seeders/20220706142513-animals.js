'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Animals', [{
      name: 'Собакотелые',
      desc: '"Кроло-дог", "Какаду-бигль", "Шарпогусь", "Ястребопесель" являются - лишь малая доля представителей собакотелых, которых вы сможете встретить в Урюпинском зоопарке.',
      admin_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Оленеподобные',
      desc: 'Не всегда то, что не похоже на Оленя им не является, если присмотреться внимательнее то можно разглятьдеть Оленя',
      admin_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Крылатое',
      desc: 'В Урюпинском зоопарке летают самые необычные представители "крылатых" существ. У нас вы сможете встретить "Волка-колибри","Птыцо-аллигатора","Сова-пса","Синице-барана"',
      admin_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Кошачевидные',
      desc: 'Кошки бывают разных видов. В нашем зоопарке вы сможете встретить уникальные экземпляры кошачевидных представителей, умеющих как летать, так и плавать, а также издавать различные звуки от "мяу" до "гав"',
      admin_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Конеутки',
      desc: 'Представители этого вида млекопитающих имеют много сходств с конями и утками. Могут свободно передвигаться по озерам и прудам вплавь, а также бегать голопом по полям.',
      admin_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Нюхль',
      desc: 'Проказливый нюхль – маленький пушистый чёрный зверёк с вытянутой закругленной мордочкой, похож на помесь крота и утконоса. Падок на всё блестящее: это землеройное, но при этом удивительно быстрое и проворное создание украдёт или стянет любой сверкающий предмет, который попадёт ему на глаза. Свои сокровища он хранит в сумке на брюхе, куда более вместительной, чем это представляется возможным. Дружелюбные и даже ласковые нюхли могут оказаться весьма разрушительными в погоне за блестяшками, поэтому мотайте на ус – не стоит заводить их в качестве домашних питомцев.',
      admin_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Тигр',
      desc: 'Тигров отличает гибкое, мускулистое тело и круглая голова с выпуклым лбом, выразительными глазами и небольшими, но чуткими к звукам ушами. Тигры прекрасно видят в темноте, а по утверждению ученых, могут различать цвета. Бенгальский и амурский тигры являются самыми крупными в своем виде.',
      admin_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Горилла',
      desc: 'Самый крупный вид приматов. Выглядят эти обезьяны весьма устрашающе: самцы достигают 250 кг веса при росте около 2 метров (самки, правда, почти в два раза мельче.) Тем не менее, все исследователи, наблюдавшие горилл в природе, отмечают, что они отличаются довольно миролюбивым нравом',
      admin_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Пингвин',
      desc: 'Все пингвины умеют плавать и превосходно ныряют, а вот летать совершенно не могут. На суше птица выглядит довольно неуклюже из-за особенностей строения тела и конечностей. У пингвина обтекаемая форма тела с сильно развитой мускулатурой грудного киля, которая нередко составляет четверть от общей массы. Тело пингвина довольно упитанное, чуть сжатое с боков и покрыто перьями. Не слишком крупная голова находится на подвижной, гибкой и довольно короткой шее. Клюв пингвина сильный и очень острый.',
      admin_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Animals', null, {});
  }
};
