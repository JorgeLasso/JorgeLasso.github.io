const randomWords: string[] = [
  "MANZANA",
  "PERA",
  "BANANA",
  "PERRO",
  "GATO",
  "CABALLO",
  "CASA",
  "CARRO",
  "MOTO",
  "BICICLETA",
  "AVION",
  "HELICOPTERO",
  "ESTERNOCLEIDOMASTOIDEO",
  "CABEZA",
  "HOMBRO",
  "RODILLA",
  "PIE",
  "MANO",
  "AGUA",
  "FUEGO",
  "TIERRA",
  "AIRE",
  "AGUACATE",
  "MANGO",
  "COCO",
  "CEREZA",
  "FRESA",
  "NARANJA",
  "SILLA",
  "MESA",
  "COMPUTADORA",
  "TELEFONO",
  "CELULAR",
  "TELEVISION",
  "RADIO",
  "CAMA",
  "CARTERA",
  "BILLETERA",
  "DINERO",
  "BANCO",
  "BANCA",
  "BANQUERO",
  "BANQUETA",
  "VAJIILLA",
  "CUBIERTOS",
  "CUCHARA",
  "TENEDOR",
  "CUCHILLO",
  "PLATO",
  "VASO",
  "TASA",
  "LAMPARA",
  "FOCO",
  "BOMBILLO",
  "BOMBILLA",
  "LAMPARITA",
  "LAMPARON",
  "CAMILO",
  "JUAN",
  "PEDRO",
  "MARIA",
  "JULIANA",
  "JULIAN",
  "JORGE",
  "SERGIO",
  "SANTIAGO",
  "SEBASTIAN",
  "JHON",
  "JHONATAN",
  "OSCAR",
  "SONIDO",
  "MUSICA",
  "CANCION",
  "CANTANTE",
  "REPISA",
  "ESTANTE",
  "LIBRO",
  "CUADERNO",
  "LAPIZ",
  "RECIBO",
  "FACTURA",
  "MONITOR",
  "TECLADO",
  "MOUSE",
  "PANTALLA",
  "PANTALON",
  "CAMISA",
  "CAMISETA",
  "ZAPATOS",
  "TENIS",
  "SANDALIAS",
  "ZAPATILLAS",
  "CHOCOLATE",
  "GALLETAS",
  "PAN",
  "ARROZ",
  "FRIJOLES",
  "LENTEJAS",
  "GARBANZOS",
  "HABICHUELAS",
];

export default function getRandomWord(): string {
  return randomWords[Math.floor(Math.random() * randomWords.length)];
}
