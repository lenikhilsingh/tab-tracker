// bookmark.associate is function that takes a list of models
// bookmark .belongs to used to build an association between the users and the songs
module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define("Bookmark", {});

  Bookmark.associate = function(models) {
    Bookmark.belongsTo(models.User);
    Bookmark.belongsTo(models.Song);
  };

  return Bookmark;
};
