import express from 'express';
import { Registration  } from '../models/registrationModel.js';

const router = express.Router();


router.post('/', async (request, response) => {
    try{
        if(
            !request.body.name||
            !request.body.email||
            !request.body.phonenumber||
            !request.body.address||
            !request.body.password
        ){
            return response.status(400).send({
                message: 'Send all required fields: name, email, phonenumber, address, password',
            });
        }
        const newRegistration = {
            name: request.body.name,
            email: request.body.email,
            phonenumber: request.body.phonenumber,
            address: request.body.address,
            password: request.body.password,
        };
  
        const registration = await Registration.create(newRegistration);
     
     return response.status(201).send(registration);
    }catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
  });
  
router.get('/', async (request, response) => {
    try{
        const registration = await Registration.find({})
  
    return response.status(200).json({
      count: registration.length,
      data: registration
    });
      
    }catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });   
    }
  });
  
router.get('/:_id', async (request, response) => {
    try{
  
        const { _id } = request.params;
  
        const registration = await Registration.findById(_id);
  
     return response.status(200).json(registration);
     
    }catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });   
    }
  });
  
router.put('/:_id', async (request, response) => {
    try{
        if(
            !request.body.name||
            !request.body.email||
            !request.body.phonenumber||
            !request.body.address||
            !request.body.password 
        ){
            return response.status(400).send({
                message: 'Send all required fields: name, email, phonenumber, address, password',
            });
        }
  
        const { _id } = request.params;
  
        const result = await Registration.findByIdAndUpdate(_id, request.body);
  
        if (!result) {
            return response.status(404).json({ message: 'Registration not found' });
        }
  
        return response.status(200).json({ message: 'Registration update successfully' });
  
    }catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });   
    }
  });
  
router.delete('/:_id', async (request, response) => {
    try{
        const { _id } = request.params;
  
        const result = await Registration.findByIdAndDelete(_id);
  
        if (!result) {
            return response.status(404).json({ message: 'Registration not found' });
        }
  
        return response.status(200).json({ message: 'Registration deleted successfully' });
  
    }catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });   
    }
  });

export default router;