import { PetCreateDto } from "../models/dtos/createpet.dto";
import { PetUpdateDto } from "../models/dtos/petupdate.dto";
import { Pet } from "../models/entities/pet.model";

export interface PetRepository {
  createPet(pet: PetCreateDto): Promise<Pet>;
  getPetById(id: number): Promise<Pet>;
  getPetsByUserId(userId: number): Promise<Pet[]>;
  updatePetById(id: number, pet: PetUpdateDto): Promise<Pet>;
  deletePetById(id: number): Promise<void>;
}
