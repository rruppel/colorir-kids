export type Region = {
  id: string;
  label: string;
  path: string;
  defaultColor?: string;
};

export type Artwork = {
  id: string;
  title: string;
  category: "Animais" | "Dinossauros" | "Princesas" | "Veiculos" | "Natureza" | "Espaco";
  age: string;
  viewBox: string;
  regions: Region[];
};

export const artworks: Artwork[] = [
  {
    id: "gato",
    title: "Gatinho curioso",
    category: "Animais",
    age: "3+",
    viewBox: "0 0 320 320",
    regions: [
      {
        id: "body",
        label: "Corpo",
        path: "M92 178c3-49 38-86 84-86s81 37 84 86c2 35-16 72-84 72s-86-37-84-72Z",
      },
      {
        id: "head",
        label: "Cabeca",
        path: "M91 120 74 62l55 27c14-8 31-12 47-12s33 4 47 12l55-27-17 58c12 14 19 32 19 53 0 52-44 84-104 84S72 225 72 173c0-21 7-39 19-53Z",
      },
      {
        id: "belly",
        label: "Barriga",
        path: "M132 185c0-22 19-40 44-40s44 18 44 40-19 42-44 42-44-20-44-42Z",
        defaultColor: "#fff8ec",
      },
      {
        id: "tail",
        label: "Rabo",
        path: "M250 184c30-5 42 18 31 38-10 18-39 19-47 1 17 5 32-2 32-14 0-10-8-15-20-13Z",
      },
      {
        id: "nose",
        label: "Nariz",
        path: "M166 154c5-6 15-6 20 0-2 8-6 12-10 12s-8-4-10-12Z",
        defaultColor: "#ff8ab3",
      },
    ],
  },
  {
    id: "dino",
    title: "Dino amigavel",
    category: "Dinossauros",
    age: "4+",
    viewBox: "0 0 320 320",
    regions: [
      {
        id: "body",
        label: "Corpo",
        path: "M67 203c0-45 38-81 86-81h43c44 0 78 31 78 70 0 42-39 69-91 69h-40c-43 0-76-22-76-58Z",
      },
      {
        id: "neck",
        label: "Pescoco",
        path: "M177 126c-4-43 15-73 47-73 27 0 48 19 48 45 0 28-24 46-54 43-15-1-28-7-41-15Z",
      },
      {
        id: "head",
        label: "Cabeca",
        path: "M220 44c39 0 67 18 67 43 0 24-24 44-58 44-25 0-46-14-46-36 0-29 13-51 37-51Z",
      },
      {
        id: "spots",
        label: "Manchas",
        path: "M115 181c0-9 8-17 18-17s18 8 18 17-8 17-18 17-18-8-18-17Zm52 33c0-8 7-15 16-15s16 7 16 15-7 15-16 15-16-7-16-15Zm52-40c0-8 7-15 16-15s16 7 16 15-7 15-16 15-16-7-16-15Z",
        defaultColor: "#b8f2a4",
      },
      {
        id: "ground",
        label: "Chao",
        path: "M45 263c39 20 196 21 242 0v23H45Z",
        defaultColor: "#d7f7bc",
      },
    ],
  },
  {
    id: "castelo",
    title: "Castelo encantado",
    category: "Princesas",
    age: "5+",
    viewBox: "0 0 320 320",
    regions: [
      {
        id: "left-tower",
        label: "Torre esquerda",
        path: "M58 117h60v151H58Z",
      },
      {
        id: "right-tower",
        label: "Torre direita",
        path: "M202 117h60v151h-60Z",
      },
      {
        id: "middle",
        label: "Muralha",
        path: "M105 145h110v123H105Z",
      },
      {
        id: "roof-left",
        label: "Telhado esquerdo",
        path: "M49 117 88 52l39 65Z",
        defaultColor: "#ff8ab3",
      },
      {
        id: "roof-right",
        label: "Telhado direito",
        path: "M193 117 232 52l39 65Z",
        defaultColor: "#ff8ab3",
      },
      {
        id: "gate",
        label: "Portao",
        path: "M136 268v-45c0-15 11-27 24-27s24 12 24 27v45Z",
        defaultColor: "#b47b52",
      },
      {
        id: "sky",
        label: "Ceu",
        path: "M35 42h250v75c-6-6-12-10-19-13L232 47l-34 57H122L88 47l-34 57c-7 3-13 7-19 13Z",
        defaultColor: "#dff5ff",
      },
    ],
  },
  {
    id: "foguete",
    title: "Foguete espacial",
    category: "Espaco",
    age: "4+",
    viewBox: "0 0 320 320",
    regions: [
      {
        id: "space",
        label: "Espaco",
        path: "M35 35h250v250H35Z",
        defaultColor: "#e9f0ff",
      },
      {
        id: "body",
        label: "Foguete",
        path: "M160 42c37 30 50 72 45 126l-45 34-45-34c-5-54 8-96 45-126Z",
      },
      {
        id: "window",
        label: "Janela",
        path: "M136 111c0-14 11-25 24-25s24 11 24 25-11 24-24 24-24-10-24-24Z",
        defaultColor: "#a6e9ff",
      },
      {
        id: "left-fin",
        label: "Asa esquerda",
        path: "M115 166 72 222l55-14Z",
        defaultColor: "#ff8f70",
      },
      {
        id: "right-fin",
        label: "Asa direita",
        path: "m205 166 43 56-55-14Z",
        defaultColor: "#ff8f70",
      },
      {
        id: "fire",
        label: "Fogo",
        path: "M136 210h48c-1 33-10 55-24 72-14-17-23-39-24-72Z",
        defaultColor: "#ffd166",
      },
      {
        id: "planet",
        label: "Planeta",
        path: "M55 82c0-15 12-27 27-27s27 12 27 27-12 27-27 27-27-12-27-27Zm-9 8c16 10 43 11 70 0",
        defaultColor: "#cdb4db",
      },
    ],
  },
  {
    id: "floresta",
    title: "Arvore feliz",
    category: "Natureza",
    age: "3+",
    viewBox: "0 0 320 320",
    regions: [
      {
        id: "sky",
        label: "Ceu",
        path: "M35 35h250v250H35Z",
        defaultColor: "#e5f8ff",
      },
      {
        id: "sun",
        label: "Sol",
        path: "M226 72c0-23 18-41 41-41s41 18 41 41-18 41-41 41-41-18-41-41Z",
        defaultColor: "#ffdd57",
      },
      {
        id: "leaves",
        label: "Copa",
        path: "M101 125c-18-2-32-17-32-35 0-20 16-36 36-36 8 0 15 2 21 6 9-19 28-32 50-32 28 0 51 21 54 49 19 3 34 20 34 40 0 22-18 40-40 40H112c-6 0-11-1-16-4-16-7-27-23-27-41 0-5 1-10 3-14 6 14 16 23 29 27Z",
      },
      {
        id: "trunk",
        label: "Tronco",
        path: "M140 154h42v99h-42Z",
        defaultColor: "#b47b52",
      },
      {
        id: "grass",
        label: "Grama",
        path: "M35 242c46-18 190-18 250 0v43H35Z",
        defaultColor: "#b9f6a5",
      },
    ],
  },
  {
    id: "carro",
    title: "Carrinho veloz",
    category: "Veiculos",
    age: "4+",
    viewBox: "0 0 320 320",
    regions: [
      {
        id: "road",
        label: "Rua",
        path: "M35 216h250v58H35Z",
        defaultColor: "#dde3ea",
      },
      {
        id: "body",
        label: "Carroceria",
        path: "M54 177c4-28 25-49 54-49h78c28 0 53 20 62 49h19c12 0 22 10 22 22v24H31v-24c0-12 10-22 23-22Z",
      },
      {
        id: "top",
        label: "Cabine",
        path: "M107 128h79c16 0 31 12 39 36H75c7-22 18-36 32-36Z",
        defaultColor: "#a6e9ff",
      },
      {
        id: "left-wheel",
        label: "Roda esquerda",
        path: "M67 224c0-19 15-34 34-34s34 15 34 34-15 34-34 34-34-15-34-34Z",
        defaultColor: "#2f3437",
      },
      {
        id: "right-wheel",
        label: "Roda direita",
        path: "M188 224c0-19 15-34 34-34s34 15 34 34-15 34-34 34-34-15-34-34Z",
        defaultColor: "#2f3437",
      },
      {
        id: "lights",
        label: "Farois",
        path: "M45 192h31v18H45Zm213 0h24v18h-24Z",
        defaultColor: "#ffe66d",
      },
    ],
  },
];

export const categories = Array.from(new Set(artworks.map((art) => art.category)));
