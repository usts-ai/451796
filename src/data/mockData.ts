export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  instructor: string;
  rating: number;
  students: number;
  category: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  type: string;
  link: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export const courses: Course[] = [
  {
    id: "course-1",
    title: "Fondamentaux de l'entrepreneuriat",
    description: "Découvrez les bases essentielles pour lancer votre entreprise avec succès. Ce cours couvre la validation d'idée, l'étude de marché et la proposition de valeur.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    duration: "8 semaines",
    level: "Débutant",
    instructor: "Marie Dubois",
    rating: 4.8,
    students: 1245,
    category: "Entrepreneuriat"
  },
  {
    id: "course-2",
    title: "Business plan efficace",
    description: "Apprenez à créer un business plan solide qui convaincra investisseurs et partenaires. Méthodologie pas à pas et modèles inclus.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    duration: "6 semaines",
    level: "Intermédiaire",
    instructor: "Thomas Martin",
    rating: 4.6,
    students: 978,
    category: "Finance"
  },
  {
    id: "course-3",
    title: "Marketing digital pour entrepreneurs",
    description: "Maîtrisez les stratégies de marketing digital essentielles pour faire croître votre entreprise. SEO, réseaux sociaux, email marketing et plus.",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    duration: "10 semaines",
    level: "Intermédiaire",
    instructor: "Sophie Leroy",
    rating: 4.9,
    students: 1567,
    category: "Marketing"
  },
  {
    id: "course-4",
    title: "Financement de startup",
    description: "Explorez les différentes options de financement pour votre startup. Levée de fonds, business angels, crowdfunding et subventions.",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    duration: "5 semaines",
    level: "Avancé",
    instructor: "Pierre Moreau",
    rating: 4.7,
    students: 823,
    category: "Finance"
  },
  {
    id: "course-5",
    title: "Leadership et gestion d'équipe",
    description: "Développez vos compétences en leadership pour gérer efficacement votre équipe. Communication, motivation et résolution de conflits.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    duration: "7 semaines",
    level: "Intermédiaire",
    instructor: "Julie Blanc",
    rating: 4.5,
    students: 1102,
    category: "Management"
  },
  {
    id: "course-6",
    title: "Stratégie de croissance",
    description: "Élaborez une stratégie de croissance solide pour votre entreprise. Analyse de marché, positionnement et planification stratégique.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    duration: "9 semaines",
    level: "Avancé",
    instructor: "Nicolas Petit",
    rating: 4.8,
    students: 756,
    category: "Stratégie"
  }
];

export const resources: Resource[] = [
  {
    id: "resource-1",
    title: "Guide du statut juridique",
    description: "Comparaison détaillée des différents statuts juridiques pour votre entreprise en France.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Juridique",
    type: "Guide",
    link: "/"
  },
  {
    id: "resource-2",
    title: "Modèles de documents administratifs",
    description: "Collection de modèles prêts à l'emploi pour vos démarches administratives.",
    image: "https://images.unsplash.com/photo-1568290696106-ace229a158a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Administration",
    type: "Templates",
    link: "/"
  },
  {
    id: "resource-3",
    title: "Tendances entrepreneuriales 2025",
    description: "Analyse des tendances et opportunités pour les entrepreneurs dans les années à venir.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Tendances",
    type: "Rapport",
    link: "/"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Alexandre Dupont",
    role: "Fondateur",
    company: "TechInno",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    content: "EntrepreneurConnect a été un tournant dans mon parcours d'entrepreneur. Les formations m'ont permis d'acquérir les compétences nécessaires pour développer mon entreprise, et la communauté est une source constante d'inspiration et de soutien."
  },
  {
    id: "testimonial-2",
    name: "Émilie Laurent",
    role: "CEO",
    company: "GreenStart",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    content: "Grâce aux ressources et aux formations d'EntrepreneurConnect, j'ai pu lever mes premiers fonds et structurer efficacement mon entreprise. Le réseau de mentors est incroyablement précieux pour naviguer dans l'écosystème entrepreneurial."
  },
  {
    id: "testimonial-3",
    name: "Mathieu Bernard",
    role: "Co-fondateur",
    company: "DigitalSolutions",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    content: "Je recommande EntrepreneurConnect à tous les entrepreneurs en herbe. La qualité des formations et l'accompagnement personnalisé m'ont permis de transformer mon idée en une entreprise viable et rentable en moins d'un an."
  }
];

export const statistics: Statistic[] = [
  {
    id: "stat-1",
    value: "10,000+",
    label: "Entrepreneurs accompagnés",
    icon: "users"
  },
  {
    id: "stat-2",
    value: "500+",
    label: "Formations disponibles",
    icon: "book"
  },
  {
    id: "stat-3",
    value: "95%",
    label: "Taux de satisfaction",
    icon: "star"
  },
  {
    id: "stat-4",
    value: "1,200+",
    label: "Entreprises créées",
    icon: "building"
  }
];
