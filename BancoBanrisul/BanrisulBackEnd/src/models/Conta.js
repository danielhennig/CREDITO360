module.exports = (sequelize, DataTypes) => {
  const Conta = sequelize.define('Conta', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    nome: DataTypes.STRING,
    cpf: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isNumeric: {
          msg: 'O CPF deve conter apenas números.'
        },
        len: {
          args: [11, 11],
          msg: 'O CPF deve conter exatamente 11 dígitos.'
        }
      }
    }
    ,
    email: { type: DataTypes.STRING, unique: true },
    senha: DataTypes.STRING,
    numeroConta: { type: DataTypes.STRING, unique: true },
    saldo: { type: DataTypes.FLOAT, defaultValue: 0 }
  },
    {
      freezeTableName: true
    });

  return Conta;
};
