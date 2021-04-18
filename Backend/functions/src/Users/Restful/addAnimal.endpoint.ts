import { Request, Response } from "express";
import { Endpoint, RequestType } from "firebase-backend";

export default new Endpoint(
  "addAnimal",
  RequestType.POST,
  (req: Request, res: Response) => {
    const { animalType, animalAge } = req.body;
    let animalDesc = `We added a new ${animalType}, it is ${animalAge} years old`;
    return res.status(201).send({
      description: animalDesc,
    });
  }
);
