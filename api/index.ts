const app = require("./src/app").default;
const { conn } = require("./src/db");
const { Port } = require("./src/utils/config");

(async () => {
  try {
    await conn.sync({ force: false });
    console.log("All models were synchronized successfully.");
    app.listen(Port, () => {
      console.log("Server listening at port", Port);
    });
  } catch (error) {
    console.log("Error:", error);
  }
})(); 