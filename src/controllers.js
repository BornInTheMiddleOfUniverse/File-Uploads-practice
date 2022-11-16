import fs from "fs";

export const home = (req, res) => {
  fs.readdir("./uploads", (err, filelist) => {
    const files = filelist;
    return res.render("home", { files });
  });
};

export const getRead = async (req, res) => {
  return res.render("read");
};

export const postRead = (req, res) => {
  const txtFile = req.file;

  try {
    fs.readFile(txtFile.path, "utf8", (err, data) => {
      if (err) throw err;
      return res.render("read", { data });
    });
  } catch (error) {
    return res.render("home", { errorMessage: error._message });
  }
};

export const see = async (req, res) => {
  const { id } = req.params;
  fs.readFile(`./uploads/${id}`, "utf8", (err, data) => {
    if (err) throw err;
    return res.render("see", { data });
  });
};
