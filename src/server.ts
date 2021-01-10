import express, { Router, Response, Request} from 'express';
import  bodyParser from 'body-parser';


import {Car,cars as cars_list} from './cars';


(async () => {
  let cars:Car[] = cars_list;
  
  //create an express application;
  const app = express();
  //default port to listen
  const port = 8082;

  //use middleware so post bodies 
  //are accessable as req.body.{{variable}}
  app.use(bodyParser.json());
 
  

  // Root URI call
  app.get("/",(req: Request,res: Response) => {
      res.status(200).send("welcome to cloud!");
  });

  //checking get request for name
  app.get("/api/:name",(req: Request,res: Response)=>{
      let {name} = req.params;
  //400 Bad request
      if(!name){
          return res.status(400)
                    .send(`name is required`);
      }
      
      return res.status(200)
                .send(`welcome to cloud, ${name}!`);

      
  });
  //post endpoint for cars.
  app.post('/api/cars',(req,res)=>{
    
     
      
      const car = {
        id: cars.length+1,
        make: req.body.make,
        type: req.body.type,
        modelyrno: req.body.modelyrno,
        cost: req.body.cost,
        class: req.body.class

    }
    let sample = req.body.make;
    
     if(!req.body.name||req.body.name.length<3){
         res.status(400).send(`Name is required and should be minium 3 characters`);
         return;
     }
      cars.push(car);
      res.send(cars);
  })


//Start the server
app.listen(port,()=>{
    console.log(`server running http://localhost:${ port }`);
    console.log( `press CTRL+C to stop server` );
});
})();