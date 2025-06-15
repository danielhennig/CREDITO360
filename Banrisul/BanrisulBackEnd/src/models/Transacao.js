module.exports = (sequelize, DataTypes) => {
    const Transacao = sequelize.define('Transacao', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        numeroConta: {
            type: DataTypes.STRING,     // Correto: é uma string visível (ex: "123456")
            allowNull: false
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        valor: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        contaId: {
            type: DataTypes.UUID,       // Chave estrangeira
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    // Associação com Conta
    Transacao.associate = (models) => {
        Transacao.belongsTo(models.Conta, { foreignKey: 'contaId' });
    };

    return Transacao;
};
