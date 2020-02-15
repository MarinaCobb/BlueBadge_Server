module.exports= function (sequelize, DataTypes) {
    return sequelize.define('card',{
        concept:DataTypes.STRING,
        definition:DataTypes.STRING,
        example:DataTypes.STRING,
        // images:DataTypes.BLOB('long'),
        owner:DataTypes.INTEGER
    })
}