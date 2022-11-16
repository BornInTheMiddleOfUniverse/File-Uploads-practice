import express from "express";
import path from "path";
import bodyParser from "body-parser";
import multer from "multer";
import { home, getRead, postRead, see } from "./controllers";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));

const txtfileUpload = multer({
    dest: "uploads/"
})

app.route("/").get(home)
app.route("/read").get(getRead).post(txtfileUpload.single("txt"
), postRead);
app.get("/read/:id", see);



// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));
