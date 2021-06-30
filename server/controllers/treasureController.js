module.exports = {
    dragonTreasure: async (req, res) => {
      const treasure = await req.app.get('db').get_dragon_treasure(1);
      console.log(treasure);
      return res.status(200).send(treasure);
    },
  };