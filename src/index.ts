import "reflect-metadata";
import colors from "colors";
import { createConnection } from "typeorm";
import express, { json, urlencoded } from "express";

import ProjectController from "./controllers/Project.Controller";

const app = express();

app.use(json());
app.use(urlencoded());

createConnection().then(() => {

  app.use('/projects', ProjectController);

  app.listen(14295, () => {
    console.log(
      colors.yellow('[') + 
      colors.red('+') + 
      colors.yellow('] ') + 
      colors.cyan('Server started successfully on port 14295.'));
  });

}).catch(() => {
  console.log('[+] Error ocurred while establishing connection.');
});

