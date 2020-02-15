module.exports=function (sequelize, Datatypes) {
    return sequelize.define ('login', {
        username:DataTypes.STRING,
        passwordhash:DataTypes.STRING
    })
}