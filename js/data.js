const user = {
  name: "Ostap",
  surname: "Drymalyk",
  userPhoto: "my-photo.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "car.jpg", alt: "Авто моєї мрії" },
    { src: "home.jpg", alt: "Красива домівка" },
    { src: "voyage.jpg", alt: "Подорож до Італії" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  1000,
  1100,
  1200,
  1400,
  1500,
  1600,
  1700,
  1900,
  1900,
  2000,
  2200,
  2500,
];

const necessaryExpenses = 900;

const todo = [
  { month: "Червень", skill: "CSS" },
  { month: "Липень", skill: "HTML" },
  { month: "Серпень", skill: "різні мови програмування" },
  { month: "Вересень", skill: "java" },
  { month: "Жовтень", skill: "фінанси" },
  { month: "Листопад", skill: "Управління фінансами" },
  { month: "Грудень", skill: "комунікацію" },
  { month: "Січень", skill: "відпочинок" },
  { month: "Лютий", skill: "дикцію" },
  { month: "Березень", skill: "свій бренд" },
  { month: "Квітень", skill: "емоційний інтелект" },
  { month: "Травень", skill: "IQ" },
];

export { user, arr, necessaryExpenses, todo };
