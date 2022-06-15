import { DataTypes } from 'sequelize';

const userModel = (sequelize) => {
  const User = sequelize.define(
    'User',
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      freezeTableName: true,
    }
  );
  User.associate = (models) => {
    User.belongsToMany(models.Role, { as: 'roles', through: 'RoleUser' });
  };
};

export { userModel };
