module.exports = (sequelize, DataTypes) => {
    const UploadContent = sequelize.define("uploadContent", {
      course: {
        type: DataTypes.STRING,
      },
      subject: {
        type: DataTypes.STRING,
      },
      video: {
        type: DataTypes.JSON,
      },
      author: {
        type: DataTypes.STRING,
      }
    });
    return UploadContent;
  };
  