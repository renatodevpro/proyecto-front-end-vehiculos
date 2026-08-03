import type { DummyAuth } from "../module/dummyJson";
import type { Vehiculos } from "../module/vehiculosTipo";

const API = 'https://dummyjson.com';

export const getVehiculos = async (): Promise<Vehiculos> => {
    const response = await fetch("/data/ClaudeAutos.json");
    if (!response.ok) {
        throw new Error("Error al obtener la lista de vehículos");
    }
    const data = await response.json() as Vehiculos;
    return data;
};

export const signIn = async (username: string, password: string): Promise<DummyAuth> => {
    const response = await fetch(`${API}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (!response.ok) {
        // colocamos mensaje de error cuando se ingresa mal el usuario o contraseña
        if (data.message === "Invalid credentials") {
            throw new Error("Usuario o contraseña incorrectos.");
        }
        
    }
    return data as DummyAuth;
};