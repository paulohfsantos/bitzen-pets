import { AxiosResponse } from "axios";
import { PetCreateDto } from "../models/dtos/createpet.dto";
import { PetUpdateDto } from "../models/dtos/petupdate.dto";
import { Pet } from "../models/entities/pet.model";

export interface PetRepository {
  createPet(pet: PetCreateDto): Promise<AxiosResponse<Pet>>;
  getPetById(id: number): Promise<AxiosResponse<Pet>>;
  getPetsByUserId(userId: number): Promise<AxiosResponse<Pet[]>>;
  updatePetById(id: number, pet: PetUpdateDto): Promise<AxiosResponse<Pet>>;
  deletePetById(id: number): Promise<void>;
}
