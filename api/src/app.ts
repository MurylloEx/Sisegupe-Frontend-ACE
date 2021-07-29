import "reflect-metadata";
import colors from "colors";
import { createConnection } from "typeorm";
import fileUpload from "express-fileupload";
import express, { json, urlencoded } from "express";

import ProjectController from "./controllers/Project.Controller";
import DocumentController from "./controllers/Document.Controller";

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(fileUpload({ 
  preserveExtension: true,
  useTempFiles: true,
  tempFileDir: 'temp/',
  limits: { 
    fileSize: 7 * 1024 * 1024 
  } 
}));

createConnection().then(() => {

  app.use('/projects', ProjectController);
  app.use('/documents', DocumentController);

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
