module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define("article", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        heading: {
            type: DataTypes.STRING,
        },
        rating: {
            type: DataTypes.STRING,
        },
        tag: {
            type: DataTypes.STRING,
        },
        prelims: {
            type: DataTypes.STRING,
        },
        mains: {
            type: DataTypes.STRING,
        },
        dataformedit: {
            type: DataTypes.STRING,
        },
        question: {
            type: DataTypes.STRING,
        },
        questionheading: {
            type: DataTypes.STRING,
        },
        option: {
            type: DataTypes.JSON,
        },
        answer: {
            type: DataTypes.STRING,
        },
        subjectmap: {
            type: DataTypes.STRING,
        }
    })
    return Course;
}