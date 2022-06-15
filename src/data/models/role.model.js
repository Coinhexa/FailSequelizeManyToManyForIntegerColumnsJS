import { DataTypes } from 'sequelize';

const roleModel = (sequelize) => {
  const Role = sequelize.define(
    'Role',
    {
      roleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 255],
        },
      },
    },
    {
      freezeTableName: true,
    }
  );
  Role.associate = (models) => {
    Role.belongsToMany(models.User, { as: 'users', through: 'RoleUser' });
  };
};

export { roleModel };
