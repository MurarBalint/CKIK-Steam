/*
-Users
-Games
-Achievements
-Workshop

Users <> Games = N:M
Achievements <> Games = 1:N
Workshop <> Games = 1:N
Users <> Workshop = 1:N
*/

const User = require("./User");

module.exports = (sequelize) =>
{
    const Users = require("./User")(sequelize);
    
    const Games = require("./Game")(sequelize);

    // TODO: N:M games users (library)

    Users.belongsToMany(Games, {
        through: "Library",
        foreignKey: "user_id"
    })

    Games.belongsToMany(Users, {
        through: "Library",
        foreignKey: "game_id"
    })


    return { Users, Games };
}