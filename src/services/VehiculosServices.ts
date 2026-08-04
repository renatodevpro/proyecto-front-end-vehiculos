import type { DummyAuth } from "../module/dummyJson";
import type { Vehiculo, Vehiculos } from "../module/vehiculosTipo";

const API = 'https://dummyjson.com';

export async function getVehiculos() {
  const response = await fetch("/data/ClaudeAutos.json");
  if (!response.ok) {
    throw new Error("Error al obtener la lista de vehículos");
  }
  const data = await response.json();
  return data as Vehiculos;
}

export async function getVehicleById(id: number) {
  const vehiculos = await getVehiculos();
  const encontrado: Vehiculo | undefined = vehiculos.find(item => Number(item.id) === id);
  return encontrado;
}

export async function signIn(username: string, password: string) {
  const response = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const data = await response.json();

  if (!response.ok) {
    if (data.message === "Invalid credentials") {
      throw new Error("Usuario o contraseña incorrectos.");
    }
  }
  return data as DummyAuth;
}