const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://gsusupreme.github.io/portfolio-xd',
  title: '',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jesus Polanco',
  role: 'Front End Engineer',
  description:
    '"I wish i was dead tomorrow"',
  resume: '',
  social: {
    facebook: 'https://facebook.com/J1SUS2013',
    github: 'https://github.com/gsuSUPREME',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Windhand',
    description:
      'Mauqetación de página web responsive a partir de diseño',
    stack: ['CSS', 'React'],
    sourceCode: 'https://github.com/gsuSUPREME/Winhand-vite',
    livePreview: 'https://gsusupreme.github.io/Winhand-vite',
  },
  {
    name: 'Xd-Store',
    description:
      'E-Commerce de prueba',
    stack: ['Tailwindcss', 'NextJS', 'React'],
    sourceCode: 'https://github.com/gsuSUPREME/xd-store',
    livePreview: 'https://xd-store.vercel.app/',
  },
  {
    name: 'Landing page',
    description:
      'Landing page creada para prueba',
    stack: ['CSS', 'HTML'],
    sourceCode: 'https://github.com/gsuSUPREME/fuck',
    livePreview: 'https://gsusupreme.github.io/fuck/',
  },
  {
    name: 'Notes App',
    description:
      'WebApp de notasw FullStack sin estilos',
    stack: ['React', 'Express', 'NodeJS', 'MongoDB'],
    sourceCode: 'https://github.com/gsuSUPREME/Notes-XD',
    livePreview: 'https://gsusupreme.github.io/Notes-XD/',
  },
  {
    name: 'componente tarjeta de visualizacion de estados',
    description:
      'Componente de tarjeta responsive',
    stack: ['CSS', 'HTML', 'Typescript', 'React'],
    sourceCode: 'https://github.com/gsuSUPREME/stats-preview-card-component/',
    livePreview: 'https://stats-preview-card-01.herokuapp.com/',
  },
  {
    name: 'Sumario de ordenes',
    description:
      'Componente de Sumario de ordenes responsive',
    stack: ['CSS', 'HTML', 'Typescript', 'React'],
    sourceCode: 'https://github.com/gsuSUPREME/Order-summary',
    livePreview: 'https://order-summary1415.netlify.app/',
  },
  {
    name: 'Calculadora de MRU',
    description:
      'WebApp calculadora sin estilos que resuelve problemas de mru poniendo los datos',
    stack: ['CSS', 'HTML', 'Typescript', 'React'],
    sourceCode: 'https://github.com/gsuSUPREME/Calculadora-MRU',
    livePreview: 'https://gsusupreme.github.io/Calculadora-MRU',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Git',
  'Flutter',
  'Dart'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jesusmanuelpolancogarcia51@gmail.com',
}

export { header, about, projects, skills, contact }
