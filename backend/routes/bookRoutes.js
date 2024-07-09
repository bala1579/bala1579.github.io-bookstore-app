
import express from 'express'


import {Book} from '../models/bookmodel.js'



const router = express.Router();           // this is variable 











// routes for save new book   use post method to create new data

router.post("/" , async(req , res )=>
    {
      try {
         if (!req.body.title || !req.body.author || !req.body.publishYear)
          {
            return res.status(400).send({message : " send all required field: title , author , publishYear"});
          }
    
          const newBook = {
            title : req.body.title,
            author : req.body.author,
            publishYear : req.body.publishYear,
          }
    
          const book = await Book.create(newBook);
          return res.status(201).send(book);
        
      }
       catch (error) 
      {
        console.log(error);
        res.status(500).send({message : error.message})
      }
    
    })
    
    
    //    Route for get all saved books from database
    
    router.get("/", async(req,res)=>
    {
      try {
    
        const books = await Book.find({});
       res.status(200).json(
        {
          count : books.length,                    // this is structred the json value
          data : books
        }
       );
        
      }
       catch (error)
        {
          
          res.status(500).send({message : error.message})
        
      }
    })
    
    
    // Routes for get data by id from database
    
    router.get("/:id", async(req ,res)=>
    {
      try {
         const {id} = req.params;
         const books = await Book.findById(id);
         res.status(200).json(books);
        
      }
      
      catch (error) {
    
        res.status(500).send({message : error.message})
        
      }
    })
    
    //    Routes for Update the book
    
    router.put("/:id" , async(req , res)=>
      {
        try {
    
          if (!req.body.title || !req.body.author ||  !req.body.publishYear)
            {
              res.status(400).send({message : "send all required field"})
            }
           const {id}= req.params;
           const result = await Book.findByIdAndUpdate(id , req.body)
    
           if (!result)
            {
              res.status(404).json({message : "book not found"});
            }
    
            res.status(200).json({message : "book update succesfully"})
        } 
        
        
        catch (error) {
          res.status(500).send({message : error.message})
          
        }
      }
    )
    
    router.delete("/:id" , async(req , res)=>
    {
      try {
        const {id} = req.params;
         const result = await Book.findByIdAndDelete(id)
    
         if(!result)
          {
            res.status(404).json({message : "book not found"})
          }
    
          res.status(200).json({message : "book delete succesfully"})
      } 
      catch (error)
       {
        res.status(500).send({message :  error.message})
        
      }
    })


    export default router;
    
    
    
    
    
    
    