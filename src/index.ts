import "reflect-metadata";
import colors from "colors";
import { createConnection } from "typeorm";
import fileUpload from "express-fileupload";
import express, { json, urlencoded } from "express";

import ProjectController from "./controllers/Project.Controller";

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(fileUpload({ 
  preserveExtension: true,
  useTempFiles: true,
  tempFileDir: 'docs/',
  limits: { 
    fileSize: 7 * 1024 * 1024 
  } 
}));

createConnection().then(() => {

  app.use('/projects', ProjectController);

  app.listen(14295, () => {
    console.log(
      colors.yellow('[') + 
      colors.red('+') + 
      colors.yellow('] ') + 
      colors.cyan('Server started successfully on port 14295.'));
  });

}).catch((e) => {
  console.log('[+] Error ocurred while establishing connection.\n' + e);
});
