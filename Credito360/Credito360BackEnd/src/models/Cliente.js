module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        nome: DataTypes.STRING,
        cpf: {
            type: DataTypes.STRING,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        senha: DataTypes.STRING,
        criadoEm: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        atualizadoEm: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return Cliente;
};
