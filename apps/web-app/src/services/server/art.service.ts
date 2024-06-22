'use server'
import { ArtEntityArray } from "@/models/logic/art.model"
import axios from "axios"

export const getAllArts = async () => {
    const arts = await axios.get<ArtEntityArray>('http://localhost:3001/api/art/')

    return arts.data ?? []
} 