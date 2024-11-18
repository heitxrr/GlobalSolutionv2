'use client'
import Usuario from "@/types/Usuario"
import { createContext } from "react"

export interface UsuarioContextType { 
    usuario: Usuario | undefined
    setUsuario: (usuario: Usuario) => void
 }

const DrawerContext = createContext<UsuarioContextType | undefined>(undefined)

export default DrawerContext