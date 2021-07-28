import "reflect-metadata";
import express from "express";
import colors from "colors";

const app = express();

/* Rotas a serem adicionadas */

app.listen(14295, () => {
  console.log(
    colors.yellow('[') + 
    colors.red('+') + 
    colors.yellow('] ') + 
    colors.cyan('Server started successfully on port 14295.'));
});
