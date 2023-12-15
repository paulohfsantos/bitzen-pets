import { api } from "..";
import { AxiosResponse } from "axios";
import { PetRepository } from "../repositories/pet.repository";
import { Pet } from "../models/entities/pet.model";
import { PetCreateDto } from "../models/dtos/createpet.dto";

export class PetService implements PetRepository {
  async createPet(body: PetCreateDto): Promise<AxiosResponse<Pet>> {
    try {
      const response = await api.post('/api/pets', body);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getPetsByUserId(): Promise<AxiosResponse<Pet[]>> {
    try {
      const response = await api.get('/api/pets');

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getPetById(id: number): Promise<AxiosResponse<Pet>> {
    try {
      const response = await api.get(`/api/pets/${id}`);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async updatePetById(id: number, body: any): Promise<AxiosResponse<Pet>> {
    try {
      const response = await api.put(`/api/pets/${id}`, body);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async deletePetById(id: number): Promise<void> {
    try {
      const response = await api.delete(`/api/pets/${id}`);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
