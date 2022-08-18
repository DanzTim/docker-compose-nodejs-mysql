module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define("todo", {
    title: {
      type: Sequelize.STRING
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    priority: {
      type: Sequelize.ENUM("very-high", "high", "normal", "low", "very-low"),
      defaultValue: "very-high"
    },
    activity_group_id: {
      type: Sequelize.INTEGER
    },
    created_at: {
      type: "TIMESTAMP",
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    updated_at: {
      type: "TIMESTAMP",
      defaultValue: sequelize.literal(
        "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
      ),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  });

  Todo.associate = function(models) {
    Todo.belongsTo(models.Activity, {foreignKey: 'activity_group_id', as: 'activity'})
  };
  
  return Todo;
};
