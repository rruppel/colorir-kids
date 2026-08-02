export type Region = {
  id: string;
  label: string;
  lineLayer?: "under" | "over";
  path: string;
};

export type Detail = {
  id: string;
  path: string;
  width?: number;
};

export type Artwork = {
  id: string;
  title: string;
  category: "Animais" | "Dinossauros" | "Princesas" | "Veiculos" | "Natureza" | "Espaco";
  age: string;
  viewBox: string;
  regions: Region[];
  details?: Detail[];
};

export const artworks: Artwork[] = [
  {
    id: "gato",
    title: "Gatinho com jardim",
    category: "Animais",
    age: "3+",
    viewBox: "0 0 320 320",
    regions: [
      { id: "sky", label: "Fundo", path: "M24 24h272v272H24Z" },
      { id: "tail", label: "Rabo", path: "M234 173c42-13 70 12 55 44-13 27-56 29-73 5 30 7 48-2 50-18 2-15-11-24-34-17Z" },
      { id: "body", label: "Corpo", path: "M89 181c4-48 39-82 87-82s84 34 88 82c4 45-25 78-88 78s-91-33-87-78Z" },
      { id: "head", label: "Cabeca", path: "M85 124 69 62l58 31c15-10 31-15 49-15s35 5 50 15l57-31-16 62c13 15 20 34 20 56 0 52-44 86-111 86S65 232 65 180c0-22 7-41 20-56Z" },
      { id: "belly", label: "Barriga", path: "M130 184c0-25 20-45 46-45s46 20 46 45c0 27-20 49-46 49s-46-22-46-49Z" },
      { id: "left-eye", label: "Olho esquerdo", path: "M129 151c0-8 6-14 14-14s14 6 14 14-6 14-14 14-14-6-14-14Z" },
      { id: "right-eye", label: "Olho direito", path: "M195 151c0-8 6-14 14-14s14 6 14 14-6 14-14 14-14-6-14-14Z" },
      { id: "nose", label: "Nariz", path: "M166 169c6-6 16-6 22 0-2 9-7 14-11 14s-9-5-11-14Z" },
      { id: "flower-a", label: "Flor esquerda", path: "M48 248c0-8 7-15 15-15s15 7 15 15-7 15-15 15-15-7-15-15Z" },
      { id: "flower-b", label: "Flor direita", path: "M249 248c0-8 7-15 15-15s15 7 15 15-7 15-15 15-15-7-15-15Z" },
      { id: "grass", label: "Grama", path: "M24 258c43-18 222-18 272 0v38H24Z" },
    ],
    details: [
      { id: "mouth", path: "M177 182c-8 11-21 11-29 0M177 182c8 11 21 11 29 0", width: 4 },
      { id: "whiskers-left", path: "M144 177 91 166M145 187 89 190M148 197 96 215", width: 4 },
      { id: "whiskers-right", path: "M207 177 260 166M207 187 263 190M204 197 256 215", width: 4 },
      { id: "ears", path: "M104 111c12-5 23-6 34-2M213 109c12-4 25-3 36 2", width: 4 },
      { id: "paws", path: "M137 250c7-12 20-16 39-16s32 4 39 16M125 214c12 9 28 13 51 13s39-4 51-13", width: 4 },
      { id: "flowers", path: "M63 233v-25M264 233v-25M49 248H31M77 248h18M250 248h-19M278 248h18", width: 4 },
      { id: "grass-lines", path: "M43 276l9-20M72 281l13-23M230 281l-12-23M270 276l-9-19", width: 4 },
    ],
  },
  {
    id: "dino",
    title: "Dino no vulcao",
    category: "Dinossauros",
    age: "4+",
    viewBox: "0 0 320 320",
    regions: [
      { id: "sky", label: "Ceu", path: "M22 22h276v276H22Z" },
      { id: "volcano", label: "Vulcao", lineLayer: "under", path: "M185 159 232 64l50 95Z" },
      { id: "crater", label: "Cratera", lineLayer: "under", path: "M216 81c10-8 22-8 32 0l-9 18c-5-5-9-8-14-8s-9 3-14 8Z" },
      { id: "lava", label: "Lava", lineLayer: "under", path: "M221 99c4-5 8-8 13-8s8 3 12 8l-8 34-11-14-11 14Z" },
      { id: "cloud", label: "Nuvem", lineLayer: "under", path: "M50 66c6-14 20-20 34-16 7-11 23-13 33-3 15-2 27 9 27 23 0 15-12 26-27 26H69c-14 0-23-11-19-30Z" },
      { id: "ground", label: "Chao", lineLayer: "under", path: "M22 267c44 13 230 13 276 0v31H22Z" },
      { id: "dino-body", label: "Dino", path: "M52 207c18-22 47-27 80-12 14-34 48-58 89-55 14-17 38-26 62-18 26 9 39 31 30 50-9 20-35 29-64 22-2 40-37 68-82 68-40 0-73-22-82-53-14 3-25 2-33-2Z" },
      { id: "belly", label: "Barriga", path: "M121 219c14-23 35-36 62-36 24 0 44 11 58 31-13 22-35 34-64 34-25 0-44-10-56-29Z" },
      { id: "leg-left", label: "Perna esquerda", path: "M120 255h35v30h-52c1-14 7-24 17-30Z" },
      { id: "leg-right", label: "Perna direita", path: "M197 255h34c10 6 16 16 17 30h-51Z" },
      { id: "spot-a", label: "Mancha pequena", path: "M130 202c0-8 7-15 15-15s15 7 15 15-7 15-15 15-15-7-15-15Z" },
      { id: "spot-b", label: "Mancha media", path: "M181 225c0-8 7-14 15-14s15 6 15 14-7 14-15 14-15-6-15-14Z" },
      { id: "spot-c", label: "Mancha grande", path: "M253 160c0-7 6-13 13-13s13 6 13 13-6 13-13 13-13-6-13-13Z" },
    ],
    details: [
      { id: "face", path: "M262 151c0-3 2-5 5-5s5 2 5 5M248 169c10 7 27 7 38 0", width: 2 },
      { id: "nostril", path: "M291 157c0-3 2-5 5-5", width: 2 },
      { id: "toes", path: "M116 285h42M198 285h42M130 285l-7 7M145 285l7 7M204 285l-7 7M222 285l7 7", width: 2 },
      { id: "plants", path: "M48 267c6-14 13-14 20 0M274 267c-7-14-15-14-22 0", width: 2.1 },
      { id: "bubbles", path: "M165 70c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9ZM64 118c0-4 3-7 7-7s7 3 7 7-3 7-7 7-7-3-7-7ZM286 45c0-4 3-7 7-7s7 3 7 7-3 7-7 7-7-3-7-7Z", width: 1.9 },
    ],
  },
  {
    id: "castelo",
    title: "Castelo de princesa",
    category: "Princesas",
    age: "5+",
    viewBox: "0 0 320 320",
    regions: [
      { id: "sky", label: "Ceu", path: "M25 25h270v270H25Z" },
      { id: "left-tower", label: "Torre esquerda", path: "M52 120h63v148H52Z" },
      { id: "right-tower", label: "Torre direita", path: "M205 120h63v148h-63Z" },
      { id: "middle", label: "Muralha", path: "M103 150h114v118H103Z" },
      { id: "roof-left", label: "Telhado esquerdo", path: "M42 120 84 48l42 72Z" },
      { id: "roof-right", label: "Telhado direito", path: "M194 120 236 48l42 72Z" },
      { id: "roof-center", label: "Telhado central", path: "M112 150 160 66l48 84Z" },
      { id: "gate", label: "Portao", path: "M133 268v-45c0-17 12-30 27-30s27 13 27 30v45Z" },
      { id: "window-left", label: "Janela esquerda", path: "M72 155c0-10 8-18 18-18s18 8 18 18v28H72Z" },
      { id: "window-right", label: "Janela direita", path: "M212 155c0-10 8-18 18-18s18 8 18 18v28h-36Z" },
      { id: "garden", label: "Jardim", path: "M25 252c49-16 216-16 270 0v43H25Z" },
      { id: "moon", label: "Lua", path: "M61 70c18-13 40 1 40 22 0 19-19 34-38 27 13-8 18-22 12-35-3-7-8-11-14-14Z" },
    ],
    details: [
      { id: "bricks", path: "M63 144h40M58 177h50M61 211h42M215 144h40M211 177h50M215 211h42M115 169h34M170 169h34M116 203h88M121 237h31M169 237h31", width: 4 },
      { id: "flags", path: "M84 48V23l42 13-42 12M236 48V23l42 13-42 12M160 66V36l45 13-45 14", width: 4 },
      { id: "gate-lines", path: "M160 194v74M133 226h54M145 207c9 8 21 8 30 0", width: 4 },
      { id: "stars", path: "M51 47l5 10 10 5-10 5-5 10-5-10-10-5 10-5ZM254 78l4 8 8 4-8 4-4 8-4-8-8-4 8-4Z", width: 3 },
      { id: "flowers", path: "M69 259v-21M62 248h14M229 259v-21M222 248h14M255 265v-19M248 255h14", width: 4 },
    ],
  },
  {
    id: "foguete",
    title: "Foguete e planetas",
    category: "Espaco",
    age: "4+",
    viewBox: "0 0 320 320",
    regions: [
      { id: "space", label: "Espaco", path: "M24 24h272v272H24Z" },
      { id: "planet-left", label: "Planeta esquerdo", path: "M44 92c0-20 16-36 36-36s36 16 36 36-16 36-36 36-36-16-36-36Z" },
      { id: "planet-right", label: "Planeta direito", path: "M229 223c0-22 18-40 40-40s40 18 40 40-18 40-40 40-40-18-40-40Z" },
      { id: "body", label: "Foguete", path: "M160 38c39 33 54 78 48 137l-48 36-48-36c-6-59 9-104 48-137Z" },
      { id: "window", label: "Janela", path: "M133 111c0-15 12-27 27-27s27 12 27 27-12 27-27 27-27-12-27-27Z" },
      { id: "left-fin", label: "Asa esquerda", path: "M112 169 66 232l59-17Z" },
      { id: "right-fin", label: "Asa direita", path: "m208 169 46 63-59-17Z" },
      { id: "fire", label: "Fogo", path: "M132 212h56c-2 37-13 62-28 82-15-20-26-45-28-82Z" },
      { id: "trail", label: "Rastro", path: "M108 244c21 12 83 12 104 0-2 24-22 42-52 42s-50-18-52-42Z" },
      { id: "star-a", label: "Estrela grande", path: "M257 70l9 20 21 9-21 9-9 20-9-20-21-9 21-9Z" },
    ],
    details: [
      { id: "rings", path: "M31 99c24 13 72 13 98 0M218 226c26 14 76 14 102 0", width: 4 },
      { id: "rocket-panels", path: "M122 160h76M132 190c19 11 37 11 56 0M160 38v173", width: 4 },
      { id: "stars", path: "M55 45l4 8 8 4-8 4-4 8-4-8-8-4 8-4ZM213 49l5 10 10 5-10 5-5 10-5-10-10-5 10-5ZM83 178l4 8 8 4-8 4-4 8-4-8-8-4 8-4Z", width: 3 },
      { id: "flames", path: "M145 226c2 24 7 39 15 53M175 226c-2 24-7 39-15 53", width: 4 },
      { id: "craters", path: "M70 83c0-6 5-11 11-11M93 103c0-5 4-9 9-9M257 209c0-7 6-13 13-13M280 234c0-5 4-9 9-9", width: 4 },
    ],
  },
  {
    id: "floresta",
    title: "Casa na arvore",
    category: "Natureza",
    age: "4+",
    viewBox: "0 0 320 320",
    regions: [
      { id: "sky", label: "Ceu", path: "M24 24h272v272H24Z" },
      { id: "sun", label: "Sol", path: "M234 73c0-24 19-43 43-43s43 19 43 43-19 43-43 43-43-19-43-43Z" },
      { id: "cloud", label: "Nuvem", path: "M45 83c5-19 22-31 42-26 9-16 33-18 45-3 20-3 36 12 36 30 0 19-15 34-35 34H70c-18 0-30-14-25-35Z" },
      { id: "leaves", label: "Copa da arvore", path: "M76 133c-22-5-37-24-34-45 4-27 31-44 56-34 13-26 44-42 78-34 35 8 57 36 55 70 24 7 40 28 37 51-4 29-30 48-60 42H94c-14 0-28-4-38-13-13-11-19-25-17-42 10 7 22 8 37 5Z" },
      { id: "trunk", label: "Tronco", path: "M137 162h48v101h-48Z" },
      { id: "house", label: "Casinha", path: "M104 143h113v70H104Z" },
      { id: "roof", label: "Telhado", path: "M92 143 160 91l68 52Z" },
      { id: "door", label: "Porta", path: "M145 213v-38h30v38Z" },
      { id: "grass", label: "Grama", path: "M24 252c43-17 221-17 272 0v44H24Z" },
      { id: "path", label: "Caminho", path: "M133 296c7-34 16-58 27-75 12 17 21 41 27 75Z" },
    ],
    details: [
      { id: "rays", path: "M277 18v22M277 106v25M231 73h-24M320 73h-22M244 40l-17-17M310 106l-16-16M310 40l16-17M244 106l-17 17", width: 4 },
      { id: "bark", path: "M151 174c13 18 10 39-7 62M173 170c-14 23-11 48 9 75", width: 4 },
      { id: "house-details", path: "M104 166h113M124 176h18v18h-18ZM180 176h18v18h-18ZM160 91v52", width: 4 },
      { id: "ladder", path: "M93 213h134M112 213l-21 73M208 213l21 73M101 246h118M96 267h128", width: 4 },
      { id: "leaf-lines", path: "M82 112c25-10 42-25 54-47M181 43c8 31 23 52 49 63M105 160c37-16 72-15 107 0", width: 4 },
    ],
  },
  {
    id: "carro",
    title: "Carro de corrida",
    category: "Veiculos",
    age: "4+",
    viewBox: "0 0 320 320",
    regions: [
      { id: "sky", label: "Ceu", path: "M24 24h272v272H24Z" },
      { id: "road", label: "Rua", path: "M24 215h272v59H24Z" },
      { id: "hills", label: "Colinas", path: "M24 180c45-43 87-44 128-3 51-47 98-46 144 3v35H24Z" },
      { id: "body", label: "Carroceria", path: "M50 177c7-30 32-51 67-51h67c34 0 61 20 74 51h22c13 0 24 11 24 24v27H30v-27c0-13 9-24 20-24Z" },
      { id: "top", label: "Cabine", path: "M109 126h75c18 0 35 13 46 39H78c8-24 19-39 31-39Z" },
      { id: "stripe", label: "Faixa", path: "M78 184h194v21H67Z" },
      { id: "left-wheel", label: "Roda esquerda", path: "M63 224c0-22 18-40 40-40s40 18 40 40-18 40-40 40-40-18-40-40Z" },
      { id: "right-wheel", label: "Roda direita", path: "M194 224c0-22 18-40 40-40s40 18 40 40-18 40-40 40-40-18-40-40Z" },
      { id: "left-hub", label: "Calota esquerda", path: "M89 224c0-8 6-14 14-14s14 6 14 14-6 14-14 14-14-6-14-14Z" },
      { id: "right-hub", label: "Calota direita", path: "M220 224c0-8 6-14 14-14s14 6 14 14-6 14-14 14-14-6-14-14Z" },
      { id: "lights", label: "Farois", path: "M43 194h33v18H43Zm267 0h-36v18h36Z" },
      { id: "flag", label: "Bandeira", path: "M247 87h45v38h-45Z" },
    ],
    details: [
      { id: "windows", path: "M113 134v31M159 126v39M90 165h139", width: 4 },
      { id: "grille", path: "M136 195h54M144 205h39", width: 4 },
      { id: "wheels", path: "M103 184v80M63 224h80M234 184v80M194 224h80", width: 4 },
      { id: "road-lines", path: "M45 245h56M135 245h61M229 245h55", width: 4 },
      { id: "flagpole", path: "M247 87v92M247 106h45M270 87v38", width: 4 },
      { id: "speed", path: "M35 152h46M24 168h32M270 152h30", width: 4 },
    ],
  },
];

export const categories = Array.from(new Set(artworks.map((art) => art.category)));
