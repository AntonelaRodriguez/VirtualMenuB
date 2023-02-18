const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const {
  dbUser,
  dbPassword,
  dbHost,
  dbName,
  dbPort,
} = require("./utils/config");


let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: dbName,
        dialect: "postgres",
        host: dbHost,
        port: dbPort,
        username: dbUser,
        password: dbPassword,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`,
        { logging: false, native: false }
      );

(async () => {
    try {
      await sequelize.authenticate();
      console.log(
        "The connection to the database has been established successfully."
      );
    } catch (error) {
      console.log("Unable to connect to the database:", error);
    }
  })();

const basename = path.basename(__filename);
const modelDefiners:any[] = [];
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file: any) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
  )
  .forEach((file:any) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model: any) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Menu, Category, User, Review, Image } = sequelize.models;

Menu.belongsToMany(Category, { through: "Menu_Category" });
Category.belongsToMany(Menu, { through: "Menu_Category" });

User.hasMany(Review); 
Review.belongsTo(User);

Menu.hasMany(Review); 
Review.belongsTo(Menu);

Menu.hasMany(Image);
Image.belongsTo(Menu);

export = {
  ...sequelize.models,
  conn: sequelize,
};
