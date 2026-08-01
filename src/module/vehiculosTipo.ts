// Tipado TypeScript para los vehículos de lujo (vehiculos_lujo.json)

export type TipoGasolina =
  | "Gasolina Premium 95"
  | "Gasolina Premium 98"
  | "Hibrido"
  | "Electrico"
  | "Diesel Premium";

export type Transmision =
  | "Automatica 8 velocidades"
  | "Automatica 9 velocidades"
  | "Doble Embrague 7 velocidades"
  | "Automatica CVT"
  | "Manual 6 velocidades"
  | "Automatica 10 velocidades";

export type Traccion =
  | "Trasera (RWD)"
  | "Delantera (FWD)"
  | "Integral (AWD)"
  | "Integral Quattro"
  | "Integral 4MATIC";

export type TipoCarroceria =
  | "Coupe"
  | "Sedan"
  | "SUV"
  | "Convertible"
  | "Roadster"
  | "Fastback"
  | "Hatchback deportivo";

export type Condicion = "Nuevo" | "Seminuevo Certificado";

export type Disponibilidad = "En stock" | "Bajo pedido" | "Ultima unidad";

export type Moneda = "USD";

export interface Dimensiones {
  largoM: number;
  anchoM: number;
  altoM: number;
}

export interface Vehiculo {
  id: number;
  marca: string;
  modelo: string;
  anio: number;
  color: string;
  colorInterior: string;
  motor: string;
  tipoGasolina: TipoGasolina;
  capacidadPersonas: number;
  numeroPuertas: number;
  transmision: Transmision;
  traccion: Traccion;
  tipoCarroceria: TipoCarroceria;
  potenciaHP: number;
  torqueNm: number;
  aceleracion0a100: number;
  velocidadMaximaKmh: number;
  consumoCombustibleL100km: number;
  pesoKg: number;
  maleteroLitros: number;
  dimensiones: Dimensiones;
  precio: number;
  moneda: Moneda;
  descuentoPorcentaje: number;
  precioFinal: number;
  financiamientoDisponible: boolean;
  cuotaMensualEstimada: number;
  garantiaAnios: number;
  kilometraje: number;
  condicion: Condicion;
  disponibilidad: Disponibilidad;
  stockUnidades: number;
  ubicacion: string;
  vendedor: string;
  calificacion: number;
  numeroResenas: number;
  caracteristicas: string[];
  descripcion: string;
  foto: string;
  galeria: string[];
}

export type Vehiculos = Vehiculo[];