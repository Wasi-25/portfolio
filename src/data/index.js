export const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Testimonials', 'Contact']

export const SKILLS = [
  { category: 'Frontend', items: ['React.js', 'Vue.js', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Auth'] },
  { category: 'Database', items: ['MongoDB'] },
  { category: 'Mobile', items: ['React Native'] },
  { category: 'Automation & AI', items: ['n8n', 'AI Voice Agents', 'AI Form Automation'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'NPM', 'JavaScript', 'TypeScript'] },
]

export const PROJECTS = [
  {
  title: 'Kagaj Wala — CSC Service Platform',
  description: 'A full-stack platform connecting citizens with local CSC agents for government services like PAN Card, Ration Card, and Farmer Registration. Users upload documents, CSC agents get notified, handle the process, and mark completion — with real-time chat, attachments, payout management, and email notifications. Hosted on Railway to keep costs low during active development.',
  tags: ['React.js', 'Node.js','Express.js','MongoDB', 'Socket.io', 'Cloudinary', 'Tailwind CSS'],
  link: 'https://kagaj-wala-production.up.railway.app/',
  year: '2026',
  modal: false,
},
{
  title: 'Cloth Supplier Inventory Manager',
  description: 'A private inventory management web app built for a UAE-based cloth supplier to track design distribution across hundreds of showrooms — replacing a manual paper-based IN/OUT system with a clean digital workflow. Hosted on Railway per client preference for free-tier hosting.',
  tags: ['React.js', 'Node.js','Express.js','MongoDB', 'Tailwind CSS', 'Cloudinary'],
  link: 'https://wd-app-production.up.railway.app/',
  year: '2025',
  modal: false,
},
  {
    title: 'Affverify - Affiliate Marketing Platform',
    description: 'Led frontend development for Affverify, delivering scalable web solutions for affiliate marketing with a seamless cross-device experience.',
    tags: ['React.js', 'JavaScript', 'Responsive Design'], link: 'https://affverify.com/', year: '2023', modal: false,
  },
{
  title: 'Singlepoint AI — Form Automation Platform',
  description: 'Built the frontend for Singlepoint AI MVP, a form automation platform serving USA clients across multiple government and business services. Worked as the sole frontend developer delivering a complete, production-ready interface.',
  tags: ['Vue.js', 'JavaScript', 'Vue Forms', 'Responsive Design'], link: '#', year: '2024', modal: true, modalMessage: 'Live demo unavailable — backend APIs have been shut down. Code available on request.',
},
{
  title: 'AWS Content & Design — dE Elite Concepts',
  description: 'Developed 30+ responsive web pages for AWS from Adobe XD designs using HTML, CSS, JavaScript. Also automated the publishing pipeline for eBooks and videos on the Uberflip platform, significantly reducing manual content management effort.',
  tags: ['HTML/CSS', 'JavaScript', 'Adobe XD', 'Uberflip'],
  link: '#', year: '2023', modal: true,
  modalMessage: 'Developed multiple pages across different AWS domains under dE Elite Concepts. A few examples:',
  modalLinks: [
    { label: 'ExecLeaders - Industry Perspectives', href: 'https://aws.amazon.com/execleaders/apj/industry-perspectives/' },
    { label: 'AWS Innovate: Migrate and Modernize', href: 'https://aws.amazon.com/events/aws-innovate/apj/migrate-and-modernize/' },
    { label: 'AWS Innovate - Generative AI and Data | Asia Pacific & Japan', href: 'https://aws.amazon.com/events/aws-innovate/apj/aiml-data/' },
  ],
},
  {
  title: 'Chrome Extension — Workflow Automation',
  description: 'Built a Chrome Extension that automated key workflows for the Affverify platform, reducing manual effort and improving team productivity significantly.',
  tags: ['JavaScript', 'Chrome Extension', 'Affverify'], link: '#', year: '2022', modal: true, modalMessage: 'This project is not publicly available — it was built for internal use at Affverify. Code available on request.',
},
  {
    title: 'AI Voice Agent',
    description: 'Developed AI voice agents for automated call handling, appointment scheduling, and business process automation for clients across industries.',
    tags: ['n8n', 'Twilio', 'Automation'], link: '#', year: '2024', modal: true, modalMessage: 'Built and deployed AI voice agents as a service offering for business clients. Not open-source — available for demonstration on request.',
  },
]

export const EXPERIENCE = [
  {
    role: 'Software Developer (Freelance)', company: 'Self-Employed · Remote', period: 'Jan 2024 – Present',
    description: 'Delivered multiple freelance projects as a Frontend, Full-Stack, and Automation Developer. Built MVPs for international clients including AI-powered platforms, voice agents, and scalable web apps for government service delivery.',
    tags: ['React.js', 'Node.js','Express.js','MongoDB','Vue.js', 'Socket.io', 'Tailwind CSS', 'n8n'], current: true,
  },
  {
    role: 'Frontend Developer', company: 'dE Elite Concepts · Gurugram, India', period: 'Jul 2022 – Jan 2024',
    description: 'Led frontend development for Affverify. Built a Chrome Extension automating key workflows. Developed 30+ responsive web pages for AWS projects from Adobe XD designs and automated content management through Uberflip.',
    tags: ['React.js', 'JavaScript', 'HTML/CSS', 'Adobe XD', 'Uberflip'], current: false,
  },
]

export const EDUCATION = [
  {
    degree: 'Bachelor of Technology',
    field: 'Cloud Technology & Information Security (Computer Science)',
    institution: 'Integral University', location: 'Lucknow, India', period: '2018 – 2022',
  },
  {
    degree: 'Senior Secondary School', field: '',
    institution: 'Techno Academic Sr. Sec. School', location: 'Lucknow, India', period: '2016 – 2018',
  },
  {
    degree: 'Secondary School', field: '',
    institution: 'St. Joseph Sr. Sec. School', location: 'Jaunpur, India', period: '2015',
  },
]

export const TESTIMONIALS = [
  {
  name: 'Tahir Imran', role: 'CEO, Intuitive Solution · Bangalore',
  text: 'Wasiullah handled the entire frontend of our AI-powered form automation platform and delivered a polished, production-ready interface for our international clients. He understood the product requirements quickly and translated complex workflows into a clean, user-friendly experience.',
  initials: 'TI',
},
  {
    name: 'Wahid', role: 'WD Cloth Supplier · UAE',
    text: 'I needed something simple that only I and my team could use — no complicated apps, just a clean way to track which designs went to which showrooms. Wasi built exactly that. It replaced our paper system completely and works without any issues.',
    initials: 'W',
  },
  {
    name: 'Mahesh Kumar', role: 'Client · Kagaj Wala Platform',
    text: 'The platform Wasi built for my YouTube community is exactly what CSC agents and users needed. Everything from document uploads to real-time chat and payment is handled in one place. My audience loves it and it has genuinely made government services more accessible.',
    initials: 'MK',
  },
  {
  name: 'Ayush Bhatnagar', role: 'Founder, dE Elite Concepts · Gurugram',
  text: 'Wasi was a reliable and skilled frontend developer during his time with us. He led the frontend for Affverify, built a Chrome Extension that meaningfully reduced manual workflows, and single-handedly developed 30+ responsive pages for AWS projects from Adobe XD designs. Consistent, clean code and great attention to detail.',
  initials: 'AB',
},
]

export const CONTACT_LINKS = [
  { label: 'GitHub', icon: 'ti-brand-github', href: 'https://github.com/Wasi-25' },
  { label: 'LinkedIn', icon: 'ti-brand-linkedin', href: 'https://linkedin.com/in/wasiullah-khalique' },
  { label: 'wasiullahkhalique25@gmail.com', icon: 'ti-mail', href: 'mailto:wasiullahkhalique25@gmail.com' },
  { label: '+971 50 382 4902', icon: 'ti-phone', href: 'tel:+971503824902' },
]
