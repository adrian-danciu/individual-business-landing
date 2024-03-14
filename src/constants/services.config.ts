import image1 from "../assets/item_1.png";
import image2 from "../assets/item_2.png";
import image4 from "../assets/item_4.png";

export const services = [
  {
    name: "Psihoterapie",
    id: "tier-hobby",
    href: "#",
    description:
      "Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.",
    features: [
      { text: "Prima sedinta gratuita", price: "" },
      {
        text: "Psihoterapie individuala online",
        price: "200Ron / sedinta",
      },
      { text: "Psihoterapie de cuplu online", price: "250 Ron / sedinta" },
      { text: "Psihoterapie de familie online", price: "300 Ron / sedinta" },
      {
        text: "Psihoterapie individuala in cabinet",
        price: "250 Ron / sedinta",
      },
      {
        text: "Psihoterapie de cuplu in cabinet",
        price: "300 Ron / sedinta",
      },
      {
        text: "Psihoterapie de familie in cabinet",
        price: "350 Ron / sedinta",
      },
    ],
    image: image2,
  },
  {
    name: "Psihoterapie de grup",
    id: "tier-team",
    href: "#",
    description:
      "Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit sequi.",
    features: [
      { text: "Prima sedinta gratuita.", price: "" },
      { text: "Terapie de grup in cabinet", price: "50 Ron / persoana" },
    ],
    image: image1,
  },
  {
    name: "Psihologie clinica",
    id: "tier-team",
    href: "#",
    description:
      "Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit sequi.",
    features: [
      { text: "Prima sedinta gratuita.", price: "" },
      { text: "Consiliere psihologica online", price: "150 Ron / sedinta" },
      {
        text: "Consiliere psihologica in cabinet",
        price: "200 Ron / sedinta",
      },
      { text: "Evaluarea personalitatii", price: "200 Ron /\n evaluare" },
      { text: "Evaluare cognitiva", price: "200 Ron /\n evaluare" },
    ],
    image: image4,
  },
];
