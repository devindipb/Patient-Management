import express from 'express';
import { Pet  } from '../models/petModel.js';

const router = express.Router();


router.post('/', async (request, response) => {
    try{
        if(
            !request.body.petname||
            !request.body.breed||
            !request.body.pettype||
            !request.body.gender||
            !request.body.age
        ){
            return response.status(400).send({
                message: 'Send all required fields: petname, breed, pettype, gender, age',
            });
        }
        const newPet = {
            petname: request.body.petname,
            breed: request.body.breed,
            pettype: request.body.pettype,
            gender: request.body.gender,
            age: request.body.age,
        };
  
        const pet = await Pet.create(newPet);
     
     return response.status(201).send(pet);
    }catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
  });
  
router.get('/', async (request, response) => {
    try{
        const pet = await Pet.find({})
  
    return response.status(200).json({
      count: pet.length,
      data: pet
    });
      
    }catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });   
    }
  });
  
router.get('/:_id', async (request, response) => {
    try{
  
        const { _id } = request.params;
  
        const pet = await Pet.findById(_id);
  
     return response.status(200).json(pet);
     
    }catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });   
    }
  });
  
router.put('/:_id', async (request, response) => {
    try{
        if(
            !request.body.petname||
            !request.body.breed||
            !request.body.pettype||
            !request.body.gender||
            !request.body.age
        ){
            return response.status(400).send({
                message: 'Send all required fields: petname, breed, pettype, gender, age',
            });
        }
  
        const { _id } = request.params;
  
        const result = await Pet.findByIdAndUpdate(_id, request.body);
  
        if (!result) {
            return response.status(404).json({ message: 'Pet Registration not found' });
        }
  
        return response.status(200).json({ message: 'Pet Registration update successfully' });
  
    }catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });   
    }
  });
  
router.delete('/:_id', async (request, response) => {
    try{
        const { _id } = request.params;
  
        const result = await Pet.findByIdAndDelete(_id);
  
        if (!result) {
            return response.status(404).json({ message: 'Pet Registration not found' });
        }
  
        return response.status(200).json({ message: 'Pet Registration deleted successfully' });
  
    }catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });   
    }
  });

export default router;