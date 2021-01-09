import express, { Router, Response, Request} from 'express';
import  bodyParser from 'body-parser';

import {Car,cars as cars_list} from './cars';

(async () => {
  let cars:Car[] = cars_list;
   
  //create an express application;
  const app = express();
  //default port to listen
  const port = 8082;

  // Root URI call
  app.get("/",(req: Request,res: Response) => {
      res.status(200).send("welcome to cloud!");
  });


//Start the server
app.listen(port,()=>{
    console.log(`server running http://localhost:${ port }`);
    console.log( `press CTRL+C to stop server` );
});
})();