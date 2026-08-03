import type { DummyAuth } from "../module/dummyJson"
import type { Vehiculos } from "../module/vehiculosTipo"

const API = 'https://dummyjson.com'

export const getVehiculos = async () => {
    console.log("me ejecuté")
    const response = await fetch("/data/ClaudeAutos.json")
    const data = await response.json() as Vehiculos
    console.log(data)

    return data
}

export const signIn = async (username: string, password: string) => {
    const response = await fetch(`${API}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })

    const data = await response.json() as DummyAuth
    return data
}

export const getVehicleById = async (id:number) => {
    const response = await fetch("/data/ClaudeAutos.json")
    const data = await response.json() as Vehiculos
    const auto = data.find((vehiculoIndividual) => vehiculoIndividual.id == id )

    return auto }