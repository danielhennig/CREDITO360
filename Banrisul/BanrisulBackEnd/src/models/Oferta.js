module.exports = (sequelize, DataTypes) => {
    const Oferta = sequelize.define('Ofertas', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        nome: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        taxaJuros: DataTypes.FLOAT,
        numeroParcelas: DataTypes.INTEGER,
        valor: DataTypes.FLOAT,
        scoreMinimo: DataTypes.INTEGER
    }, {
        freezeTableName: true
    });

    return Oferta;
};
