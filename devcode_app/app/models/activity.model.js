module.exports = (sequelize, Sequelize) => {
  const Activity = sequelize.define("activity", {
    email: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
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

  Activity.associate = function(models) {
    Activity.hasMany(models.Todo, {as: 'todo_items'})
  };
  
  return Activity;
};