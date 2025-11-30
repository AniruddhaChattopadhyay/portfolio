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
  {
    id: 'bluebeak-ai',
    company: 'bluebeak.ai',
    role: 'MLOps Platform Engineering Intern',
    type: 'Internship',
    location: 'Remote',
    startDate: 'Dec. 2021',
    endDate: 'Feb. 2022',
    description: [
      'Built command-line ETL tool capable of streaming data using Kafka stream from a source database to a sink database.',
      'Deployed the solution using Docker and Kubernetes pipeline.',
      'Studied different frameworks like Gradio and Streamlit and recommended their use based on the use-case at hand.',
    ],
    technologies: ['Kafka', 'Docker', 'Kubernetes', 'ETL', 'Gradio', 'Streamlit', 'Python'],
  },
  {
    id: 'hsbc-intern',
    company: 'HSBC',
    role: 'Research & Development Intern',
    type: 'Internship',
    location: 'Kolkata, India',
    startDate: 'Jun. 2020',
    endDate: 'Jul. 2020',
    description: [
      'Predicted stock option prices using Monte Carlo simulations in a quantum computer using Qiskit Framework.',
      'Achieved quadratic speed up on error convergence of Monte Carlo thus showing potential for huge cost cutting.',
      'Used the algorithm to simulate stock price and validated the result using the BlackScholes-Merton model.',
    ],
    technologies: ['Qiskit', 'Quantum Computing', 'Monte Carlo Simulation', 'Python', 'Financial Modeling'],
  },
  {
    id: 'stepswatch',
    company: 'StepsWatch',
    role: 'Machine Learning Engineer Intern',
    type: 'Internship',
    location: 'Remote',
    startDate: 'May. 2020',
    endDate: 'Jun. 2020',
    description: [
      'Built a Python backend in Flask that delivers visual graphs based on analysed data to a React Native front end.',
      'Created a pipeline for facial recognition and face masking (Gaussian Blur) on videos built using Dlib library.',
    ],
    technologies: ['Flask', 'Python', 'React Native', 'Dlib', 'Computer Vision', 'Facial Recognition'],
  },
  {
    id: 'lubble',
    company: 'Lubble Technology',
    role: 'Full Stack Android and Django Developer Intern',
    type: 'Internship',
    location: 'Remote',
    startDate: 'Oct. 2019',
    endDate: 'Aug. 2022',
    description: [
      'Built an Android app with frontend in Java and backend using Django, Node.js and Firebase.',
      'Built and maintained multiple REST APIs in Django and wrote cloud functions for Firebase in Node.js.',
      'Maintained database of the users using MySQL and used technologies like Celery and RabbitMQ.',
    ],
    technologies: ['Java', 'Android', 'Django', 'Node.js', 'Firebase', 'REST APIs', 'MySQL', 'Celery', 'RabbitMQ'],
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
      paper: 'https://arxiv.org/abs/2507.09854',
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
      paper: 'https://dl.acm.org/doi/abs/10.1145/3383583.3398595',
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
    id: 'daft-daytona',
    title: 'Daft-Daytona Hackathon - First Prize',
    organization: 'International Hackathon',
    date: '2025',
    description: 'Built an AI agent for interior design using Gemini nano Banana and Nano VLM, enabling layout-preserving redesigns; won First Prize.',
    longDescription: `At the Daft-Daytona Hackathon 2025, our team tackled the challenge of AI-powered interior design with a unique approach. We built an intelligent agent that could understand room layouts and suggest redesigns while preserving the fundamental structure and flow of the space.

The core innovation was using Gemini Nano Banana combined with Nano VLM (Vision-Language Model) to process room images and generate contextually aware design suggestions. The system could:

• Analyze existing room layouts and identify furniture, fixtures, and spatial relationships
• Generate redesign proposals that maintain the room's usability and flow
• Provide multiple style options (modern, minimalist, bohemian, etc.) while keeping the layout intact
• Offer budget-conscious alternatives by suggesting similar furniture pieces

What made our solution stand out was the emphasis on "layout-preserving" redesigns—rather than generating completely new room configurations, our agent understood that users often want to refresh their space without major structural changes. This practical approach resonated with the judges and earned us the First Prize.`,
    category: 'international',
    images: [
      '/images/projects/daft/1756530217488.jpeg',
      '/images/projects/daft/1756530217571.jpeg',
      '/images/projects/daft/1756737458305.jpeg',
      '/images/projects/daft/1756737469161.jpeg',
    ],
    technologies: ['Gemini Nano', 'Nano VLM', 'Python', 'Computer Vision', 'AI Agents'],
  },
  {
    id: 'neo4j-samba',
    title: 'Neo4J × SambaNova Hacknight - Winner',
    organization: 'International Hackathon',
    date: '2024',
    description: 'Created a persistent memory system for coding agents using Neo4J and SambaNova, winning the SambaNova Track.',
    longDescription: `The Neo4J × SambaNova Hacknight brought together developers passionate about graph databases and high-performance AI inference. Our winning project addressed a critical challenge in AI coding assistants: the lack of persistent, contextual memory.

Traditional coding agents suffer from "context amnesia"—they can't remember previous sessions, user preferences, or project-specific patterns. We built a solution that combines:

**Neo4J Graph Database** for storing:
• Code relationships and dependencies as connected nodes
• User interaction patterns and preferences
• Project-specific conventions and style guides
• Historical context from previous coding sessions

**SambaNova's Ultra-Fast Inference** for:
• Real-time memory retrieval during coding assistance
• Dynamic graph traversal to find relevant context
• Generating responses that incorporate historical knowledge

The system creates a "memory graph" for each user/project combination, growing smarter over time. When a developer asks for help, the agent queries the graph to understand not just the current code, but the project's history, the developer's coding style, and relevant past decisions.

This approach won us the SambaNova Track, with judges highlighting the practical applicability and the elegant combination of graph-based memory with high-speed inference.`,
    category: 'international',
    images: [
      '/images/projects/sambanova/1756368045795.jpeg',
      '/images/projects/sambanova/1756368045839.jpeg',
      '/images/projects/sambanova/1756368045893.jpeg',
    ],
    technologies: ['Neo4J', 'SambaNova', 'Python', 'Graph Databases', 'LLMs', 'AI Agents'],
  },
  {
    id: 'yc-overnight',
    title: 'Y Combinator Overnight Hackathon - Invited Participant',
    organization: 'Y Combinator',
    date: '2024',
    description: 'Invited participant at the prestigious Y Combinator Overnight Hackathon in San Francisco.',
    longDescription: `Being invited to the Y Combinator Overnight Hackathon in San Francisco was an incredible honor. This exclusive event brought together some of the most talented builders and entrepreneurs from around the world, all under one roof at YC's headquarters.

The overnight format created an intense, high-energy environment where teams had roughly 12 hours to conceptualize, build, and present a working prototype. The atmosphere was electric—surrounded by fellow hackers, YC partners offering advice, and the legacy of companies that had been built in the same space.

**The Experience:**
• Collaborated with brilliant minds from diverse backgrounds
• Received real-time feedback from YC partners and alumni
• Networked with founders of successful startups
• Experienced the legendary YC culture firsthand

**Key Takeaways:**
• The importance of rapid iteration and MVP thinking
• How to pitch effectively under time pressure
• Building relationships with the broader YC community
• Understanding what YC looks for in founders and ideas

This hackathon reinforced my belief in the power of building quickly and learning from real users. The connections made during that night continue to be valuable, and the experience shaped how I approach hackathons and product development.`,
    category: 'international',
    images: [
      '/images/projects/YC/1756005798547.jpeg',
    ],
    technologies: ['Rapid Prototyping', 'Product Development', 'Entrepreneurship'],
  },
  {
    id: 'ef-genai-2023',
    title: 'EF GenAI Hackathon - Winner',
    organization: 'National Hackathon',
    date: '2023',
    description: 'Built a prompt-to-video engine with intelligent image selection, sentiment-based BGM, and multilingual support; winner from 200+ participants.',
    longDescription: `The EF GenAI Hackathon 2023 challenged participants to push the boundaries of generative AI. Our winning project was a comprehensive prompt-to-video engine that could transform text descriptions into engaging video content.

**Core Features:**

*Intelligent Image Selection:*
The system analyzed prompts to understand visual requirements and automatically sourced or generated appropriate imagery. Using a combination of image databases and AI generation, it could match the tone and subject matter of any given prompt.

*Sentiment-Based Background Music:*
Perhaps the most innovative feature was our BGM system. By analyzing the emotional arc of the input text, the engine would:
• Detect sentiment changes throughout the narrative
• Select music tracks that matched the emotional tone
• Dynamically adjust tempo and intensity to match scene transitions

*Multilingual Support:*
We built the engine to handle multiple languages from the ground up, enabling:
• Text-to-speech in various languages
• Culturally appropriate visual selections
• Subtitle generation for accessibility

**Technical Implementation:**
• Custom prompt engineering for consistent visual outputs
• Audio analysis pipeline for music-mood matching
• Modular architecture allowing easy language additions

Winning against 200+ participants validated our approach of focusing on the complete user experience rather than just technical novelty. The judges particularly appreciated how the different AI components worked together seamlessly.`,
    category: 'national',
    technologies: ['Generative AI', 'Computer Vision', 'NLP', 'Audio Processing', 'Python'],
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
  {
    id: 'best-mtech-thesis',
    title: 'Best M.Tech Thesis Project Award',
    organization: 'IIT Kharagpur',
    date: '2020',
    description: 'Awarded Best M.Tech Thesis Project for contributions to network science and machine learning. Presented EduTree, an academic genealogy graph modeling mentorship lineages.',
    category: 'academic',
  },
  {
    id: 'dept-rank-2',
    title: 'Department Rank 2',
    organization: 'IIT Kharagpur',
    date: '2019',
    description: 'Secured Department Rank 2 at IIT Kharagpur, demonstrating consistent academic excellence throughout the program.',
    category: 'academic',
  },
  {
    id: 'dept-change-top-10',
    title: 'Department Change Achievement',
    organization: 'IIT Kharagpur',
    date: '2018',
    description: 'Successfully secured a department change at IIT Kharagpur by being in the top 10% of students, demonstrating exceptional academic performance.',
    category: 'academic',
  },
  {
    id: 'isc-12th-excellence',
    title: 'ISC 12th Board Examination - 97.5%',
    organization: 'Council for the Indian School Certificate Examinations',
    date: '2016',
    description: 'Secured 97.5% in ISC 12th Board Examination. Ranked 1st in District, 3rd in State (West Bengal), and All India Rank 8.',
    category: 'academic',
  },
];

