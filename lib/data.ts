import { Experience, Publication, Project, Award } from './types';

export const experiences: Experience[] = [
  {
    id: 'pvx-partners',
    company: 'PVX Partners',
    role: 'Senior ML Engineer',
    type: 'Full Time',
    location: 'Singapore',
    startDate: 'Apr. 2025',
    endDate: 'Present',
    description: [
      'Researching and developing multimodal AI agents capable of generating real-time commentary for mobile game ads by interpreting video, audio, and on-screen text signals.',
      'Leveraging vision-language models (VLMs) and LLMs in a coordinated agentic framework to describe gameplay events and player actions with contextual flair.',
      'Designed a reinforcement-feedback loop for evaluating commentary quality using engagement and semantic coherence metrics, enabling continuous model refinement.',
      'Optimizing the agent pipeline for low-latency, on-device inference, allowing scalable deployment across diverse ad formats and geographies.',
    ],
    technologies: ['LLMs', 'VLMs', 'Reinforcement Learning', 'Computer Vision', 'Python', 'PyTorch'],
  },
  {
    id: 'maxim-ai',
    company: 'Maxim AI',
    role: 'Applied LLM Engineer',
    type: 'Full Time',
    location: 'Bangalore, India',
    startDate: 'Mar. 2024',
    endDate: 'Apr. 2025',
    description: [
      'Developed LLM-based evaluators for automated assessment using optimized Chain-of-Thought prompting and adaptive LangChain callback mechanisms for efficient token utilization.',
      'Fine-tuned a LLaMA model on the AI4Privacy dataset integrated with Presidio, achieving enhanced detection and anonymization of PII in textual data.',
      'Authored the maxim-py SDK, enabling structured logging and quantitative evaluation of LLM workflows for reproducible AI research.',
      'Developed autonomous AI red-teaming agents using the Garak framework to simulate vulnerability assessments in generative AI systems.',
    ],
    technologies: ['LLMs', 'LangChain', 'LLaMA', 'Python', 'AI Safety', 'NLP'],
  },
  {
    id: 'ab-inbev',
    company: 'AB InBev',
    role: 'Data Scientist',
    type: 'Full Time',
    location: 'Bangalore, India',
    startDate: 'Aug. 2022',
    endDate: 'Mar. 2024',
    description: [
      'Researched and deployed unsupervised clustering models across six European markets, informing strategic segmentation worth $2M+.',
      'Developed delay-risk prediction models for US and Canada logistics, improving forecast precision and operational reliability.',
      'Enhanced existing ML pipelines, achieving a 25% F1-score gain and demonstrating significant EBITDA uplift.',
      'Awarded the 2023 Pint Award for excellence in data science research and impact delivery.',
    ],
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'SQL', 'Data Analysis', 'ML Pipelines'],
  },
  {
    id: 'turn-the-bus',
    company: 'Turn The Bus, NGO',
    role: 'Lead ML Engineer',
    type: 'Volunteer',
    location: 'Remote',
    startDate: 'Nov. 2022',
    endDate: 'Present',
    description: [
      'Led research on multimodal retrieval-augmented generation (RAG) using ColPali over NCERT textbooks for automated doubt resolution.',
      'Designed the full RAG pipeline and model-serving stack using Flask backends and React/Kotlin interfaces.',
      'Integrated OpenEDX and Django resources to improve educational content accessibility and evaluation workflows.',
    ],
    technologies: ['RAG', 'ColPali', 'Flask', 'React', 'Kotlin', 'OpenEDX', 'Django'],
  },
];

export const publications: Publication[] = [
  {
    id: 'nesy-2025',
    title: 'Metatuning: A Novel Lightweight Adaptation Framework for Aligning Large Language Models',
    authors: ['Aniruddha Chattopadhyay', 'Kaushik Roy (Asst. prof University of Alabama)'],
    venue: 'Neurosymbolic Learning and Reasoning Conference (NeSy 2025)',
    year: 2025,
    month: 'May',
    abstract: 'First-author long paper on Metatuning, a novel lightweight adaptation framework for aligning large language models (LLMs) with symbolic reasoning objectives. Introduces metatuning as a middle ground between few-shot prompting and full fine-tuning, enabling efficient structural alignment on consumer hardware.',
    links: {
      paper: '#',
    },
    award: 'Accepted at NeSy 2025; proceedings to appear in the Journal of Machine Learning Research (JMLR)',
  },
  {
    id: 'jcdl-2020',
    title: 'EduTree: An Academic Genealogy Graph (AGG) Modeling Mentorship Lineages',
    authors: ['Aniruddha Chattopadhyay', 'et al.'],
    venue: 'ACM/IEEE Joint Conference on Digital Libraries (JCDL 2020)',
    year: 2020,
    month: 'Aug.',
    abstract: 'Presented EduTree, an academic genealogy graph (AGG) modeling mentorship lineages and institutional influence within the field of education. Applied graph-theoretic centrality measures and topic modeling to quantify researcher impact and trace the evolution of research clusters. Identified high-centrality mentors, pioneering institutions, and thematic trajectories shaping the discipline\'s academic network.',
    links: {
      paper: '#',
    },
    award: 'Best M.Tech Thesis Project for contributions to network science and machine learning',
  },
];

export const featuredProjects: Project[] = [
  {
    id: '2vid',
    title: '2Vid - AI Video Generation Platform',
    description: 'UGC video generation platform with AI-powered storyboarding, text-to-speech, face-swapping, and lip-syncing.',
    longDescription: 'Developed a UGC video generation platform enabling AI-created content through automated storyboarding, text-to-speech, face-swapping, lip-syncing, and compositing. Designed and implemented AI-driven video pipelines using DeepFaceLab, Wav2Lip, and OpenCV for seamless facial animation and synchronization. Built an automated B-roll generation system leveraging web scraping, video understanding models (Qwen2.5-VL, Video-LLaMA), and Unreal Engine for physics-based storytelling. Optimized GPU-accelerated microservices for text-to-speech and face-swapping, achieving fast, scalable video synthesis.',
    technologies: ['DeepFaceLab', 'Wav2Lip', 'OpenCV', 'Qwen2.5-VL', 'Video-LLaMA', 'Unreal Engine', 'Python', 'Microservices'],
    category: 'entrepreneurship',
    date: '2023',
    featured: true,
    links: {
      website: '#',
    },
  },
  {
    id: 'care4u',
    title: 'Care4U - AI Healthcare App',
    description: 'AI-driven elderly healthcare app with fall detection using TensorFlow Lite. Acquired by Govt. of West Bengal.',
    longDescription: 'Built an AI-driven elderly healthcare app using TensorFlow Lite for on-device fall detection. Developed an LSTM model leveraging accelerometer and gyroscope data to detect falls in real time. Integrated emotion recognition, medicine reminders, and caregiver connectivity modules. App gained national media coverage, later acquired by Govt. of West Bengal, now serving 1M+ elderly users.',
    technologies: ['TensorFlow Lite', 'LSTM', 'Android', 'IoT', 'Mobile ML', 'Python'],
    category: 'entrepreneurship',
    date: '2017-2019',
    featured: true,
  },
  {
    id: 'bookopedia',
    title: 'Bookopedia - Online Book Marketplace',
    description: 'Founded online marketplace for used books, scaled to $750K ARR by third year.',
    longDescription: 'Founded an online marketplace for buying and selling used books. Onboarded 300+ sellers from College Street, Kolkata — Asia\'s largest used books hub. Scaled operations to an annual recurring revenue (ARR) of $750K by third year of undergrad. Authored and published Sharp Cookie, a curated collection of previous-year IIT Kharagpur question papers and solutions. Distributed 5000+ copies; project now maintained as open-source and archived in the National Digital Library of India.',
    technologies: ['E-commerce', 'Web Development', 'Business', 'Operations'],
    category: 'entrepreneurship',
    date: '2018-2020',
    featured: true,
  },
];

export const awards: Award[] = [
  {
    id: 'dafi-daytona',
    title: 'Dafi-Daytona Hackathon - First Prize',
    organization: 'International Hackathon',
    date: '2025',
    description: 'Built an AI agent for interior design using Gemini nano Banana and Nano VLM, enabling layout-preserving redesigns; won First Prize.',
    category: 'international',
  },
  {
    id: 'neo4j-samba',
    title: 'Neo4J × SambaNova Hacknight - Winner',
    organization: 'International Hackathon',
    date: '2024',
    description: 'Created a persistent memory system for coding agents using Neo4J and SambaNova, winning the SambaNova Track.',
    category: 'international',
  },
  {
    id: 'yc-overnight',
    title: 'Y Combinator Overnight Hackathon - Invited Participant',
    organization: 'Y Combinator',
    date: '2024',
    description: 'Invited participant at the prestigious Y Combinator Overnight Hackathon in San Francisco.',
    category: 'international',
  },
  {
    id: 'ef-genai-2023',
    title: 'EF GenAI Hackathon - Winner',
    organization: 'National Hackathon',
    date: '2023',
    description: 'Built a prompt-to-video engine with intelligent image selection, sentiment-based BGM, and multilingual support; winner from 200+ participants.',
    category: 'national',
  },
  {
    id: 'hsbc-ai-2018',
    title: 'HSBC AI Hackathon - Winner',
    organization: 'National Hackathon',
    date: '2018',
    description: 'Built a conversational AI using tfidf and MLP networks mapping symptoms to diseases via Neo4J; 1st among 98 teams.',
    category: 'national',
  },
  {
    id: 'vesaithon-2019',
    title: 'vesAIthon - Winner',
    organization: 'National Hackathon',
    date: '2019',
    description: 'Created Care4U, an AI-driven elderly healthcare app with fall detection, mood recognition, and chatbot; later acquired by Govt. of West Bengal.',
    category: 'national',
  },
];

