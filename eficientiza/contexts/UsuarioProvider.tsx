'use client'
import { PropsWithChildren, useState } from "react";
import Usuario from "@/types/Usuario";
import UsuarioContext from "./UsuarioContext";

export interface UsuarioProviderProps extends PropsWithChildren { }

const UsuarioProvider = ({ children }: UsuarioProviderProps) => {
    const [usuario, setUsuario] = useState<Usuario>()

    return (
        <UsuarioContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioProvider