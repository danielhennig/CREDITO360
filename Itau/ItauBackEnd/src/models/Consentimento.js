module.exports = (sequelize, DataTypes) => {
  const Consentimento = sequelize.define('Consentimento', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    contaId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    escopo: DataTypes.STRING,
    validade: DataTypes.DATE,
    autorizado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    freezeTableName: true
  });

  return Consentimento;
};
