import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';

const Hero = () => {
  const [activeId, setActiveId] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Auto-rotate testimonials every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => 
        prevIndex === 21 ? 0 : prevIndex + 1
      );
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  // Manual navigation functions
  const goToNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === 21 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === 0 ? 21 : prevIndex - 1
    );
  };

  // Update selected testimonial when index changes
  useEffect(() => {
    const testimonials = [
      { id: 1, name: "Marina Repina", initials: "MR", role: "Peer", institution: "Espoo Career Club", testimonial: "Yassine was our business advisor during a prototyping project at Espoo Career Club. His guidance - especially on launching a customer survey and insights from the market - was key to our project's success. I truly appreciated Yassine's supportive and soft leadership style. He navigated our team in the right direction while giving us the space to make final decisions ourselves. On top of that, Yassine is a very positive, friendly, and approachable person. I would highly recommend Yassine as a mentor or advisor for any innovation or business development project in deep tech, edtech or Saas startups." },
      { id: 2, name: "Petra Paavola", initials: "PP", role: "Peer", institution: "UX/UI Student", testimonial: "Yassine is such a sweet soul! He's truly a pleasure to work with and his outstanding performance doesn't go unnoticed. He's an invaluable asset to any team, consistently demonstrating a strong work ethic and a passion for excellence. Yassine's positive attitude and collaborative spirit create a harmonious work environment, making him not just a colleague but also a friend. His dedication to continuous improvement and willingness to take on challenges make him a standout professional. I highly recommend Yassine for any project or team – a remarkable individual who adds immense value to every endeavor." },
      { id: 3, name: "Marii Juht", initials: "MJ", role: "Peer", institution: "Intero Integration", testimonial: "Yassine has a great ability to create connections and to truly connect with people. He excels in leadership, productivity, and has a great attention to detail. His flexible and human-centric approach makes him an asset to any team. He is an independent thinker with the ability to make decisions, while also being an excellent team player. Yassine is always willing to lend a helping hand. It has been a pleasure working with him!" },
      { id: 4, name: "Svenja Fassbender", initials: "SF", role: "Manager", institution: "Slush 2023", testimonial: "I had the pleasure to work with Yassine at Slush 2023. In his role as Sustainability Group Lead, Yassine's ability to inspire and motivate his group members towards a shared goal was truly commendable. He managed to create a positive and inclusive environment, fostering collaboration and ensuring that each group member felt valued and engaged. Yassine demonstrated a high level of motivation and commitment that inspired those around him. His enthusiasm and genuine belief in the importance of sustainability were contagious, contributing significantly to our team's success. I am confident that Yassine would be a great asset to any team or organisation seeking a dedicated, motivated, and compassionate leader. Thank you for your outstanding performance, Yassine. I look forward to working with you in future projects." },
      { id: 5, name: "Shayaan Ahmed", initials: "SA", role: "Peer", institution: "Junction & Slush 2023", testimonial: "A hardworking and diligent individual who thrives when working in a team. Yassine was a co-group lead during the Junction 2023 and Slush 2023 events and his team-working and collaboration skills definitely shone bright throughout. He is an excellent addition to any team out there!" },
      { id: 6, name: "Regina Ainla", initials: "RA", role: "Mentor", institution: "WorkInFinland", testimonial: "I've had the pleasure to get acquainted with Yassine in various ICT, tech and DEI related networking events. With a warm smile and a passion for development and growth, Yassine will enrich the team he works in." },
      { id: 7, name: "Tamila Gvozdeva", initials: "TG", role: "Peer", institution: "Slush Conference", testimonial: "I had the pleasure of working with Yassine as a group leader at Slush, one of the world's leading startup conferences. Yassine's leadership skills, organizational abilities were instrumental in our successful collaboration." },
      { id: 8, name: "Netsanet Legesse", initials: "NL", role: "Peer", institution: "Slush Sustainability", testimonial: "I had the opportunity to volunteer alongside Yassine on the Slush sustainability team. I wholeheartedly endorse him for his exceptional teamwork. His management skills were apparent throughout our collaboration, and his supportive nature significantly contributed to our team's success. Yassine's commitment and leadership qualities make him a valuable asset to any team or organization." },
      { id: 9, name: "Sophie-Pearl White", initials: "SW", role: "Peer", institution: "Slush Sustainability", testimonial: "Yassine and I worked within the sustainability team, where he consistently exhibited a friendly and proactive approach. He puts himself out there for every opportunity and actively and positively encourages everyone else to take part in everything available. He was such a valuable asset to our brilliant team!" },
      { id: 10, name: "Tai Tran", initials: "TT", role: "Peer", institution: "Aalto Startup Center", testimonial: "Working with Yassine this year has been a great experience. Yassine is proactive, quick at picking up new tasks, which has significantly eased our workflow. Even though our paths didn't cross often, I wholeheartedly recommend Yassine to any company seeking a passionate and skilled teammate." },
      { id: 11, name: "Raimo Ainla", initials: "RA", role: "Mentor", institution: "Espoo Entrypoint", testimonial: "I had the privilege of mentoring Yassine in the Espoo Entrypoint mentoring group. As we went through the career goals and dreams, I saw that Yassine is a very talented, diligent and curious professional, all while maintaining a humble approach. Our communication and mentor-mentee teamwork was conducted seamlessly and Yassine reached all the goals that we set together. He was not shy of learning new technologies or platforms and displayed a commendable level of commitment and can-do attitude. Any company would be lucky to benefit from his open-minded personality and practical way of working. Yassine's communication was always inclusive and empowering. He has shown that he is a brilliant results-oriented individual and an inclusive team player that gets things done." },
      { id: 12, name: "Sinan Saka", initials: "SS", role: "Peer", institution: "Arctic15", testimonial: "I had the pleasure of working with Yassine during the Arctic 15 startup event. Yassine's leadership skills and attention to detail made a positive impact on our team. He effectively tackled challenges and offered creative solutions. His open communication style fostered a productive team environment. I confidently endorse Yassine and hope to work together in the future again." },
      { id: 13, name: "Sabine Werner", initials: "SW", role: "Peer", institution: "Arctic15", testimonial: "I worked with Yassine at the Arctic15 as a volunteer. Yassine is a very helpful and social person. He always gives a helping hand, is very solution orientated, looks outside the box and a very mindful person. Every employer who gets Yassine will have a very loyal and dedicated employee." },
      { id: 14, name: "Hannes Täyrönen", initials: "HT", role: "Peer", institution: "Arctic LP Summit", testimonial: "I worked with Yassine during the 2023 Arctic Startup conference and in particular in the pre-event called Arctic LP Summit. It was a great pleasure to work with him as a volunteer and connect with a person who has recently come to Finland to discover the possibilities." },
      { id: 15, name: "Nihal Koymatli", initials: "NK", role: "Manager", institution: "Arctic15", testimonial: "Yassine was a fantastic volunteer with contagious enthusiasm! He did not only volunteer, but went above and beyond and took part in extra shifts, like helping at the Arctic15 LP Summit. He was easy to communicate with and reliable, and directly impacted the success of the event. I'm looking forward to working with him again in the future!" },
      { id: 16, name: "Elina Kruus", initials: "EK", role: "Mentor", institution: "Arffman", testimonial: "I have done interaction with Yassine as a coach in Arffman. He is talented and has been active and motivated. I warmly recommend him for new assignments." },
      { id: 17, name: "Dalia Allouss", initials: "DA", role: "Peer", institution: "University Studies", testimonial: "We have known each other for almost 8 years now. Dr. Yassine Kaddouri and I graduated from the same university, and I had the pleasure of taking a few classes with him and seeing how brilliant he is in organic chemistry." },
      { id: 18, name: "Lynn Salonen", initials: "LS", role: "Manager", institution: "Kasvuly Marketing", testimonial: "Yassine joined our Brand Ambassador Program in 2021. He was an awesome team player. He was creative, diligent and analytical in solving problems." },
      { id: 19, name: "Afnan Zafar", initials: "AZ", role: "Mentor", institution: "Arffman", testimonial: "I have communicated and worked with Dr Yassine as a coach in Arffman, Finland. In our short interactions, I found Dr Yassine to be very punctual, proactive and a person who is ready to take the initiative. He was very willing to learn new things and not afraid of working hard. I wish him the best of luck in his future jobs; he can be an excellent asset to any organisation." },
      { id: 20, name: "Janne Disko", initials: "JD", role: "Manager", institution: "Snappmeal", testimonial: "I met Yassine back in 2021 when I was putting together an ambassador program for Snappmeal. During our interview I could see that Yassine is intelligent, has good communication skills and is ambitious. He will be the teammate who will make sure that he has tried everything to reach his goals. For that he will utilise his creativity and problem solving skills and make sure that all the teammates are on the same page. Although our work connection was short, then I have kept in contact with Yassine, and would recommend him to any team that appreciates a person who has creativity, not giving up mentality and ambition." },
      { id: 21, name: "Hind Lahrour", initials: "HL", role: "Peer", institution: "AIESEC", testimonial: "Yassine is a hardworker, great team player, and a creative person. We worked together at AIESEC where he showed these skills and proved the spirit of a true leader." },
      { id: 22, name: "El Houcine Rahou", initials: "ER", role: "Peer", institution: "Applied Chemistry", testimonial: "Yassine is a serious, determined and confidential person with passion to science and arts, he is a good listener and he take action in the right time, he know what he is doing, he has a perfect sense of responsibility and good in relationships with others. I recommend him for any post that he may occupied." }
    ];
    setSelectedTestimonial(testimonials[currentTestimonialIndex]);
  }, [currentTestimonialIndex]);

  const lampButtons = [
    { 
      id: 'researcher', 
      emoji: '🔬', 
      label: 'Researcher',
                    roles: [
                'Marie Curie Postdoctoral Fellow',
                'PhD in Organic, medicinal and computational chemistry',
                'Visiting researcher',
                'Review Editor at Frontiers in Pharmacology journal',
                'Teaching Assistant, general chemistry',
                'Trainee, Fish and food products',
                'Master thesis worker'
              ]
    },
    { 
      id: 'leader', 
      emoji: '🌱', 
      label: 'Leader',
      roles: [
        'Sustainability Group Lead',
        'Head of Global Participant Acquisition',
        'Matchmaker & Volunteer',
        'Organizing Committee Member and Moderator',
        'Team Leader, Project Manager and Chief Delegate'
      ]
    },
    { 
      id: 'entrepreneur', 
      emoji: '🎤', 
      label: 'Business',
      roles: [
        'Business Development Manager',
        'Co-Founder and COO',
        'Professional trainer'
      ]
    },
    { 
      id: 'author', 
      emoji: '📖', 
      label: 'Author',
      roles: [
        'Author of "Breeze and Dust"',
        'Research Publications',
        'Blog'
      ]
    }
  ];

  const getRoleDates = (id, index) => {
    const dates = {
      researcher: [
        '17.06.2021 to 28.02.2022',
        '01.12.2016 to 23.11.2020',
        '01.05.2017 to 31.07.2017',
        '01.11.2023 to Present',
        '01.09.2018 to 31.01.2020',
        '01.08.2016 to 30.09.2016',
        '01.02.2016 to 31.08.2016'
      ],
      leader: [
        '01.09.2023 to 31.12.2023',
        '01.09.2023 to 30.11.2023',
        '01.05.2023 to 30.06.2023',
        '01.11.2020 to 30.11.2020',
        '01.09.2017 to 31.12.2018'
      ],
      entrepreneur: [
        '01.04.2024 to 31.12.2024',
        '01.05.2013 to 30.06.2014',
        '01.04.2012 to 31.10.2020'
      ],
      author: [
        '01.01.2010 to 31.12.2012',
        '01.01.2016 to Present',
        '01.01.2020 to Present'
      ]
    };
    
    return dates[id]?.[index] || '';
  };

  const getRoleDetails = (id, index) => {
    const details = {
      researcher: [
        {
          title: "Marie Curie Postdoctoral Fellow at the University of Helsinki",
          period: "17.06.2021 to 28.02.2022",
          description: "Worked as a postdoc in VAHVISTUS Project: Integrative development of smart drug-vector nanostructures for adaptive delivery to target cells.",
          image: "TFPolyamine.png",
          achievements: [
            "Synthesized and analyzed Fluorinated polyamines as new anticancer agents with a yield of +70%",
            "Utilized advanced techniques: Schlenk method, column chromatography, and NMR spectroscopy",
            "Maintained laboratory instruments to ensure +80% proper working order",
            "Assisted an exchange engineer student from France on organic synthesis"
          ]
        },
        {
          title: "PhD in Organic, medicinal and computational chemistry at UMP Oujda",
          period: "01.12.2016 to 23.11.2020",
          description: "Top performing PhD student back then (H-index=9, Number of citations = 264), working on: 'Synthesis, biological evaluation and in Silico modelling studies of N-Alkylated hetero-cyclic compounds as multi-target drug candidates.'",
          image: "PhD.png",
          achievements: [
            "Conducted +150 experiments leading to synthesis of 36 compounds (Mono, Bis and Tetrakis azole ligands) with yield up to 98%",
            "Discovered 30 new compounds in scientific literature (Scifinder) through innovative synthesis approaches",
            "Predicted the reaction mechanism of N-alkylated heterocyclic compounds originally prepared by Willem L. Driessen in 1982",
            "Published 17 research papers (9 as first author, 8 as co-author) in Q1 and Q2 journals with impact factor up to 6.63",
            "Generated 241 citations from published work, demonstrating significant research impact",
            "Worked on diverse projects: antibacterial biofilms, agriculture, corrosion inhibitors, and heavy metal extraction",
            "Collaborated internationally across Morocco, Algeria, and France on multiple research initiatives",
            "Taught general chemistry lab course and co-supervised 4 master students"
          ]
        },
        {
          title: "Visiting researcher at University of Burgundy",
          period: "01.05.2017 to 31.07.2017",
          description: "Secured an internship abroad to work on the synthesis of a molecule not described in the literature (Scifinder): 'Diphosphines amino acids derivatives: Synthesis, Catalysis and bio-organometallic'",
          image: "Diphosphine.png",
          achievements: [
            "Synthesized diphosphines amino acids using Schlenk technique and Huisgen cycloaddition mechanism reaction",
            "Purified products through Column chromatography and Celite filtration techniques",
            "Analyzed compounds using advanced spectroscopy techniques including NMR",
            "Achieved 75% increase in research efficiency within 3 months"
          ]
        },
        {
          title: "Review Editor at Frontiers in Pharmacology journal",
          period: "11.2023 - Present",
          description: "Serving as a Review Editor for Frontiers in Pharmacology, contributing to the peer-review process and maintaining high standards of scientific publication.",
          achievements: [
            "Evaluating and reviewing scientific manuscripts in pharmacology and drug discovery",
            "Ensuring quality and accuracy of published research in the field",
            "Contributing to the advancement of pharmacological sciences through peer review",
            "Maintaining high editorial standards for a leading scientific journal"
          ]
        },
        {
          title: "Teaching Assistant, general chemistry at UMP Oujda",
          period: "Sep 2018 - Jan 2020",
          description: "Served as a Teaching Assistant for General Chemistry, providing hands-on laboratory instruction and developing innovative teaching strategies.",
          achievements: [
            "Trained and supervised 20 students in General Chemistry lab every week",
            "Developed effective teaching strategies for general chemistry, with student retention up to 100% present in all classes",
            "Prepared an online course: 'The major classes of organic reactions' for SMC S6 on the university Mohammed First platform as the only scientific instructor in my promotion"
          ]
        },
        {
          title: "Trainee, Fish and food products at ONSSA",
          period: "Aug 2016 - Sep 2016",
          description: "The Moroccan food safety authority, 'Office National de Sécurité Sanitaire des Produits Alimentaires' (ONSSA) is the national authority responsible for ensuring food safety and food regulations in Morocco. I worked in two projects: 'Analysis of Aflatoxins in Food and Milk' and 'Analysis of Fish, water and food products'.",
          achievements: [
            "Isolate, identify and prepare specimens for examination",
            "Conduct research or assist in the conduct of research, including the collection of information and samples, such as food, water, fish, milk and honey",
            "Monitor laboratory work to ensure compliance with set standards"
          ]
        },
        {
          title: "Master thesis worker at UMP Oujda",
          period: "Feb 2016 - Aug 2016",
          description: "Under project: 'Four new pyrazole ligands of N-C-N junction: Synthesis, characterization, corrosion inhibition of mild steel in HCl (1M) and theoretical study by GAUSSIAN 09W'",
          image: "M2.png",
          achievements: [
            "Synthesized 4 four new N-C linked pyrazole ligands with a yield up to 96%",
            "Prepared excellent inhibitors of Mild steel corrosion in HCl (1M) with efficiency up to 92.4% proved by experimental techniques and DFT calculations ran on a local workstation",
            "Published 3 research papers cited 23 times, leading to urge other master students to publish",
            "Increased research accuracy by 33% in 6 months, leading to improved efficiency and cost savings"
          ]
        }
      ],
      leader: [
        {
          title: "Sustainability Group Lead at Slush",
          period: "09.2023 - 12.2023",
          description: "Led sustainability operations for Slush, one of Europe's largest startup events, managing environmental initiatives for 13,000+ attendees.",
          achievements: [
            "Managed recycling and waste management for 13,000+ event attendees",
            "Led and coached a team of sustainability volunteers",
            "Collaborated with recycling partners and received international praise for standards",
            "Implemented sustainable practices that set new industry benchmarks"
          ]
        },
        {
          title: "Head of Global Participant Acquisition at Junction",
          period: "09.2023 - 11.2023",
          description: "Led international outreach strategy and team coordination for participant recruitment at Junction, Europe's largest hackathon.",
          achievements: [
            "Led global participant outreach and recruitment strategy",
            "Managed international team for participant acquisition",
            "Analyzed data and improved registration processes",
            "Collaborated across departments to optimize participant experience"
          ]
        },
        {
          title: "Matchmaker & Volunteer at Arctic15",
          period: "05.2023 - 06.2023",
          description: "Facilitated connections between startups and investors at Arctic15, one of the leading startup events in the Nordic region.",
          achievements: [
            "Onboarded 600+ startups and investors in 2 days",
            "Facilitated 400+ matchmaking meetings between startups and investors",
            "Represented venue to VIP Limited Partners (LPs)",
            "Ensured successful networking and deal-making opportunities"
          ]
        },
        {
          title: "Organizing Committee Member and Moderator at ICMES2020",
          period: "11.2020",
          description: "Contributed to the organization and moderation of the International Conference on Materials and Environmental Science (ICMES2020) in Saidia, Morocco.",
          achievements: [
            "Participated in conference organization and planning",
            "Moderated scientific sessions and discussions",
            "Facilitated knowledge exchange among researchers",
            "Contributed to the success of an international scientific conference"
          ]
        },
        {
          title: "Team Leader, Project Manager and Chief Delegate at AIESEC",
          period: "09.2017 - 12.2018",
          description: "Led AIESEC operations in Oujda, Morocco, managing projects and representing the organization at national and international levels.",
          achievements: [
            "Led team operations and project management for AIESEC Oujda",
            "Represented the organization as Chief Delegate at conferences",
            "Managed international exchange programs and partnerships",
            "Developed leadership skills through youth organization management"
          ]
        }
      ],
      entrepreneur: [
        {
          title: "Business Development Manager at Yellow Method Oy",
          period: "Apr 2024 - Dec 2024",
          description: "Led business development initiatives for Yellow Method Oy, focusing on investor relations, market research, and strategic partnerships.",
          achievements: [
            "Supported creation of compelling pitch decks for potential investors with focus on market definition and competitive landscape",
            "Conducted comprehensive market research to identify trends, customer needs, and competitive landscape",
            "Gathered and analyzed data on industry trends, market opportunities, and regulatory changes (EU regulations on AI)",
            "Developed and maintained comprehensive database of potential investors, venture capitalists, and strategic partners",
            "Created and continuously updated lead lists based on market trends and company needs",
            "Managed and optimized company's HubSpot usage (guidelines and pipeline) for effective CRM",
            "Contributed to product vision and created tagging system, scientific data, and Q&A for AI agent",
            "Reported website performance metrics (Google Analytics) and oversaw website content updates",
            "Attended industry events, conferences, and networking opportunities to promote company and identify prospects"
          ]
        },
        {
          title: "Co-Founder and COO of Everest center for training, counseling and monitoring",
          period: "May 2013 - Jun 2014",
          description: "Training center offering on site courses in IT skills (Programming, web development, etc), personal development (Personal strategic planning, Self confidence, NLP, Educational animation, etc), and diverse languages (French, English, etc), empowering individuals (students and professionals) to excel both professionally and personally.",
          achievements: [
            "Realized +250 students with 90% retention rate, 85% customer participation and 75% customer pay for extra courses",
            "Adapt teaching methods and instructional materials to meet students' varying needs, abilities, and interests.",
            "Observe and evaluate students' work to determine progress and make suggestions for improvement.",
            "Conduct classes, workshops, and demonstrations to teach principles, techniques, or methods in subjects such as languages, IT, personal development and life skills.",
            "Prepare materials and classrooms for class activities.",
            "Observe students to determine qualifications, limitations, abilities, interests, and other individual characteristics.",
            "Use computers, audio-visual aids, and other equipment and materials to supplement presentations",
            "Plan and conduct activities for a balanced program of instruction, demonstration, and work time that provides students with opportunities to observe, question, and investigate.",
            "Attend professional meetings, conferences, and workshops to maintain and improve professional competence.",
            "Collaborate with other teachers and professionals in the development of instructional programs.",
            "Select and schedule class times to ensure maximum attendance.",
            "Attend staff meetings and serve on committees, as required.",
            "Observe and evaluate the performance of other instructors.",
            "Participate in publicity planning, community awareness efforts, and student recruitment"
          ]
        },
        {
          title: "Professional trainer",
          period: "04.2012 – 10.2020",
          description: "Delivered comprehensive training services across multiple cities and institutions, specializing in personalized training programs for students and professionals.",
          achievements: [
            "Trained 600+ students and professionals in four different cities (High schools, NGOs, and Private centers in Aklim, Oujda, Figuig and Casablanca)",
            "Tailored services to meet customer needs effectively and achieved 95% customer retention using an Excel sheet, online forms/surveys, and feedback"
          ]
        }
      ],
      author: [
        {
          title: "Author of 'Breeze and Dust'",
          period: "2010 - 2012",
          description: "Wrote and published the novel 'Breeze and Dust', a story about love, loss, and the power of human connection.",
          image: "Nassim.jpg",
          achievements: [
            "Completed the novel in 2010",
            "Published in 2012",
            "Received positive reviews from readers and critics"
          ]
        },
        {
          title: "Research Publications",
          period: "2016 - Present",
          description: "Published multiple research papers and articles in scientific journals and online platforms.",
          achievements: [
            "Antioxidant activity: New Heterocyclic Compounds synthesis with computational insights and nano-antioxidant drug delivery systems",
            "Antimicrobial activity: N-Alkylated Heterocyclic Compounds as NDM1 inhibitors with in vitro and in silico properties",
            "Antifungal activity: Small molecules against Fusarium oxysporum f. sp. Albedinis for date palm disease (Bayoud)",
            "Corrosion inhibitors: Organic corrosion inhibitors for stainless steel and mild steel with theoretical studies",
            "Heavy metals extraction: Pyrazole-based ligands for liquid-solid extraction of Pb, Cd, and Cu",
            "Catecholase catalysis: Copper (II) complexes with heterocyclic ligands for catalytic applications",
            "PhenOxazinone synthase catalysis: Tridentate pyrazole compounds for catalytic studies",
            "DFT-IR: Pyrazole compounds with molecular structure and chemical reactivity analysis",
            "Complexes: Crystal structure studies of iron (II) complexes",
            "Organic synthesis: Tridentate pyrazolic ligands synthesis and characterization"
          ],
          publications: [
            { title: "New Heterocyclic Compounds: Synthesis, Antioxidant Activity and Computational Insights of NanoAntioxidant as Ascorbate Peroxidase Inhibitor by Various Cyclodextrins as Drug Delivery Systems", journal: "Current Drug Delivery", date: "2021", url: "https://www.eurekaselect.com/article/110403", tags: ["Antioxidant", "Drug Delivery", "DFT"] },
            { title: "New thiazole, pyridine, and pyrazole derivatives as antioxidant candidates: synthesis, DFT calculations and molecular docking study", journal: "Heliyon", date: "2020", url: "https://www.cell.com/heliyon/fulltext/S2405-8440(20)30030-X?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS240584402030030X%3Fshowall%3Dtrue", tags: ["Antioxidant", "DFT", "Docking"] },
            { title: "New N-Alkylated Heterocyclic Compounds as Prospective NDM1 Inhibitors: Investigation of In Vitro and In Silico Properties", journal: "Pharmaceuticals", date: "2022", url: "https://www.mdpi.com/1424-8247/15/7/803", tags: ["Antimicrobial", "NDM1", "In Silico"] },
            { title: "Synthesis, Molecular Docking, MEP, and SAR Analysis, ADME-Tox Predictions, and Antimicrobial Evaluation of Novel Mono- and Tetra-Alkylated Pyrazole and Triazole Ligands", journal: "Journal of Chemistry", date: "2021", url: "https://onlinelibrary.wiley.com/doi/10.1155/2021/6663245", tags: ["Antimicrobial", "Docking", "SAR"] },
            { title: "An Insight into All Tested Small Molecules against Fusarium oxysporum f. sp. Albedinis: A Comparative Review", journal: "Molecules", date: "2022", url: "https://www.mdpi.com/1420-3049/27/9/2698", tags: ["Antifungal", "Review", "Bayoud"] },
            { title: "Synthesis, characterization, reaction mechanism prediction, and biological study of Mono, Bis, and Tetrakis Pyrazole derivatives against Fusarium oxysporum f. sp. Albedinis with Conceptual DFT and Ligand-protein docking studies", journal: "Bioorganic Chemistry", date: "2021", url: "https://www.sciencedirect.com/science/article/abs/pii/S0045206821000729", tags: ["Antifungal", "DFT", "Docking"] },
            { title: "Mono-Alkylated Ligands Based on Pyrazole and Triazole Derivatives Tested Against Fusarium oxysporum f. sp. albedinis: Synthesis, Characterization, DFT, and Phytase Binding Site Identification Using Blind Docking/Virtual Screening for Potent Fophy Inhibitors", journal: "Frontiers in Chemistry", date: "2020", url: "https://www.frontiersin.org/journals/chemistry/articles/10.3389/fchem.2020.559262/full", tags: ["Antifungal", "Virtual Screening", "DFT"] },
            { title: "Synthesis, experimental and theoretical studies of sesquiterpene thiosemicarbazone and semicarbazone as organic corrosion inhibitors for stainless steel 321 in H2SO4 1M", journal: "Journal of Molecular Structure", date: "2022", url: "https://www.sciencedirect.com/science/article/abs/pii/S0022286021023966", tags: ["Corrosion", "Organic Synthesis", "DFT"] },
            { title: "Metal corrosion inhibition by triazoles: A review", journal: "International Journal of Corrosion and Scale Inhibition", date: "2022", url: "http://ijcsi.pro/wp-content/uploads/2022/04/ijcsi-2022_v11-n2-p4.pdf", tags: ["Corrosion", "Review", "Triazoles"] },
            { title: "Correlation between corrosion inhibition efficiency in sulfuric acid medium and the molecular structures of two newly eco-friendly pyrazole derivatives on iron oxide surface", journal: "Journal of Molecular Liquids", date: "2021", url: "https://www.sciencedirect.com/science/article/abs/pii/S0167732221003810", tags: ["Corrosion", "Eco-friendly", "DFT"] },
            { title: "The inhibition behavior of two pyrimidine-pyrazole derivatives against corrosion in hydrochloric solution: Experimental, surface analysis and in silico approach studies", journal: "Arabian Journal of Chemistry", date: "2020", url: "https://www.sciencedirect.com/science/article/pii/S187853522030143X", tags: ["Corrosion", "Surface Analysis", "In Silico"] },
            { title: "Two tripodal pyrazolic ligands: application against corrosion of mild steel in HCl 1M", journal: "Moroccan Journal of Chemistry", date: "2017", url: "https://revues.imist.ma/index.php/morjchem/article/view/7871", tags: ["Corrosion", "Organic Synthesis", "Ligands"] },
            { title: "Tridentate pyrazole ligands: synthesis, characterization and corrosion inhibition properties with theoretical investigations", journal: "Journal of Materials and Environmental Science", date: "2017", url: "https://www.jmaterenvironsci.com/Document/vol8/vol8_N3/89-JMES-ICMES-Kaddouri.pdf", tags: ["Corrosion", "Organic Synthesis", "DFT"] },
            { title: "Synthesis of two new pyrazole-based ligands for the liquid-solid extraction of heavy metals Pb, Cd, and Cu in the aqueous medium", journal: "Materials Today: Proceedings", date: "2020", url: "https://www.sciencedirect.com/science/article/abs/pii/S2214785320361435", tags: ["Heavy Metals", "Extraction", "Organic Synthesis"] },
            { title: "Catecholase catalytic properties of copper (II) complexes prepared in-situ with heterocyclic ligands: experimental and DFT study", journal: "Moroccan Journal of Chemistry", date: "2020", url: "https://revues.imist.ma/index.php/morjchem/article/view/16657", tags: ["Catalysis", "Copper Complexes", "DFT"] },
            { title: "Study of the catecholase catalytic properties of copper (II) complexes prepared in-situ with monodentate ligands", journal: "Materials Today: Proceedings", date: "2019", url: "https://www.sciencedirect.com/science/article/abs/pii/S221478531930673X", tags: ["Catalysis", "Copper Complexes", "Ligands"] },
            { title: "Tridentate pyrazole compounds: Synthesis, characterization, and catalytic study of phenoxazinone synthase with DFT study", journal: "Journal of Applied Sciences and Environmental Studies", date: "2019", url: "https://revues.imist.ma/index.php/JASES/article/download/16694/9210/42635", tags: ["Catalysis", "Organic Synthesis", "DFT"] },
            { title: "Pyrazole Compounds: Synthesis, molecular structure, chemical reactivity, experimental and theoretical DFT FTIR spectra", journal: "Materials Today: Proceedings", date: "2019", url: "https://www.sciencedirect.com/science/article/abs/pii/S2214785319306522", tags: ["Organic Synthesis", "DFT", "FTIR"] },
            { title: "Crystal structure of fac-bis [bis (pyridin-2-yl) methanamine] iron (II) 1, 1, 3, 3-tetracyano-2- (dicyanomethylidene) propane-1, 3-diide,[Fe (dipa) 2](tcpd)", journal: "Acta Crystallographica E", date: "2018", url: "https://www.sciencedirect.com/org/science/article/pii/S2056989022013391", tags: ["Crystal Structure", "Iron Complexes", "X-ray"] },
            { title: "Synthesis of four new tridentate pyrazolic ligands", journal: "Moroccan Journal of Heterocyclic Chemistry", date: "2017", url: "https://revues.imist.ma/index.php/JMCH/article/download/9510/5397/23018", tags: ["Organic Synthesis", "Ligands", "Heterocycles"] }
          ]
        },
        {
          title: "Blog",
          period: "2020 - Present",
          description: "Creating valuable content and sharing insights through LinkedIn posts focused on career development, networking, and opportunities in Finland for international professionals.",
          achievements: [
            "🌍 International Community Building: Connecting professionals in Finland",
            "🌍 Volunteering Opportunities: Skill development and networking",
            "🌍 Career Advancement: Recruitment events for international talent",
            "🌟 Mentoring Programs: Career development and giving back",
            "🔬 Research Resources: Tools and academies for researchers",
            "🚀 Entrepreneurship: Incubator and accelerator programs",
            "🌟 Personal Achievements: LinkedIn SSI score and networking",
            "🌟 Educational Content: Finnish language learning and job market insights"
          ],
          links: [
            {
              title: "International Community Building",
              url: "https://lnkd.in/dhV4uEzj",
              emoji: "🌍"
            },
            {
              title: "Volunteering Opportunities",
              url: "https://lnkd.in/dsx76gEQ",
              emoji: "🌍"
            },
            {
              title: "Career Advancement Events",
              url: "https://lnkd.in/dD_p6h5T",
              emoji: "🌍"
            },
            {
              title: "Mentoring Programs",
              url: "https://lnkd.in/dj4rUwpY",
              emoji: "🌟"
            },
            {
              title: "Research Resources",
              url: "https://lnkd.in/ds2x6yqE",
              emoji: "🔬"
            },
            {
              title: "Entrepreneurship Programs",
              url: "https://lnkd.in/dTSCnKvQ",
              emoji: "🚀"
            },
            {
              title: "LinkedIn SSI Score",
              url: "https://lnkd.in/d_Qq54T3",
              emoji: "🌟"
            },
            {
              title: "Hive Helsinki Spotlight",
              url: "https://lnkd.in/duR_W-Kn",
              emoji: "🌟"
            },
            {
              title: "Suomen Mestari Meeting",
              url: "https://lnkd.in/dP_X3tXM",
              emoji: "🌟"
            },
            {
              title: "Job Portals Finland",
              url: "https://lnkd.in/dE74Q2Rc",
              emoji: "✨"
            },
            {
              title: "Hidden Job Market",
              url: "https://lnkd.in/de7C9fzm",
              emoji: "🚀"
            }
          ]
        }
      ]
    };
    
    return details[id]?.[index] || null;
  };

  return (
    <motion.div 
      id="hero"
      className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-800 to-black text-white flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/lamps.png" 
          className="w-full h-full object-cover mix-blend-overlay opacity-80"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 via-purple-800/50 to-black/50"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mt-16 sm:mt-20">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <motion.h1
            className="text-3xl sm:text-5xl lg:text-7xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Yassine Kaddouri, Ph.D.
        </motion.h1>

        <motion.p
            className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-200 max-w-3xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
            I turn ideas into MVPs, stories, and impact
        </motion.p>

          <motion.p
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mt-3 sm:mt-4 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Tap on any glowing node to explore my identity as a researcher, leader, business, and author.
          </motion.p>
        </motion.div>

        {/* Glowing Lamp Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {lampButtons.map((lamp, index) => (
          <motion.button
              key={lamp.id}
              onClick={() => setActiveId(activeId === lamp.id ? null : lamp.id)}
              className="group relative cursor-default mobile-touch"
              whileHover={{ 
                scale: 1.1,
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
            whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-60 blur-xl group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>
              
              {/* Lamp Button */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 shadow-2xl flex items-center justify-center border-2 border-yellow-200/50 group-hover:border-yellow-100 transition-all duration-300">
                <span className="text-xl sm:text-2xl lg:text-3xl group-hover:scale-110 transition-transform duration-300">
                  {lamp.emoji}
                </span>
              </div>
              
              {/* Label */}
              <motion.p
                className="text-xs sm:text-sm font-medium text-gray-200 mt-2 sm:mt-3 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.2 + (index * 0.1) }}
              >
                {lamp.label}
              </motion.p>
          </motion.button>
          ))}
        </motion.div>

        {/* Expanded Role Details */}
        <AnimatePresence>
          {activeId && (
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.9 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
              className="mt-2 mb-8 w-full max-w-4xl mx-auto"
            >
              <div className="text-white p-4 sm:p-8 rounded-2xl w-full max-w-8xl mx-auto">
                <div className="flex justify-center gap-2 sm:gap-4 w-full overflow-x-auto pb-4 sm:pb-0">
                  {lampButtons.find(l => l.id === activeId)?.roles.map((role, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="bg-white/5 rounded-lg py-3 sm:py-4 px-3 sm:px-4 border border-white/10 hover:bg-white/10 transition-all duration-300 relative group cursor-pointer w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center flex-shrink-0 mobile-touch mobile-card"
                      onClick={() => setSelectedRole(selectedRole === `${activeId}-${i}` ? null : `${activeId}-${i}`)}
                    >
                      {/* Tooltip for dates */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                        {getRoleDates(activeId, i)}
                        {/* Tooltip arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
      </div>

                      <div className="flex flex-col items-center justify-center space-y-3 text-center w-full h-full px-4">
                        {role.includes('Marie Curie Postdoctoral Fellow') && (
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://flagcdn.com/w40/fi.png" 
                              alt="Finland flag" 
                              className="w-5 h-4 rounded-sm"
                            />
                            <span className="text-blue-300 text-xs font-medium">University of Helsinki</span>
                          </div>
                        )}
                        {role.includes('PhD in Organic, medicinal and computational chemistry') && (
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://flagcdn.com/w40/ma.png" 
                              alt="Morocco flag" 
                              className="w-5 h-4 rounded-sm"
                            />
                            <span className="text-blue-300 text-xs font-medium">UMP Oujda</span>
                          </div>
                        )}
                        {role.includes('Visiting researcher') && (
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://flagcdn.com/w40/fr.png" 
                              alt="France flag" 
                              className="w-5 h-4 rounded-sm"
                            />
                            <span className="text-blue-300 text-xs font-medium">University of Burgundy</span>
                          </div>
                        )}
                        {role.includes('Teaching Assistant') && (
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://flagcdn.com/w40/ma.png" 
                              alt="Morocco flag" 
                              className="w-5 h-4 rounded-sm"
                            />
                            <span className="text-blue-300 text-xs font-medium">UMP Oujda</span>
                          </div>
                        )}
                        {role.includes('Sustainability Group Lead') && (
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://flagcdn.com/w40/fi.png" 
                              alt="Finland flag" 
                              className="w-5 h-4 rounded-sm"
                            />
                            <span className="text-blue-300 text-xs font-medium">Slush</span>
                          </div>
                        )}
                        {role.includes('Head of Global Participant Acquisition') && (
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://flagcdn.com/w40/fi.png" 
                              alt="Finland flag" 
                              className="w-5 h-4 rounded-sm"
                            />
                            <span className="text-blue-300 text-xs font-medium">Junction</span>
                          </div>
                        )}
                        {role.includes('Matchmaker & Volunteer') && (
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://flagcdn.com/w40/fi.png" 
                              alt="Finland flag" 
                              className="w-5 h-4 rounded-sm"
                            />
                            <span className="text-blue-300 text-xs font-medium">Arctic15</span>
                          </div>
                        )}
                        {role.includes('Organizing Committee Member and Moderator') && (
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://flagcdn.com/w40/ma.png" 
                              alt="Morocco flag" 
                              className="w-5 h-4 rounded-sm"
                            />
                            <span className="text-blue-300 text-xs font-medium">ICMES2020</span>
                          </div>
                        )}
                        {role.includes('Team Leader, Project Manager and Chief Delegate') && (
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://flagcdn.com/w40/ma.png" 
                              alt="Morocco flag" 
                              className="w-5 h-4 rounded-sm"
                            />
                            <span className="text-blue-300 text-xs font-medium">AIESEC</span>
                          </div>
                        )}
                        {role.includes('Trainee, Fish and food products') && (
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://flagcdn.com/w40/ma.png" 
                              alt="Morocco flag" 
                              className="w-5 h-4 rounded-sm"
                            />
                            <span className="text-blue-300 text-xs font-medium">ONSSA</span>
                          </div>
                        )}
                        {role.includes('Master thesis worker') && (
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://flagcdn.com/w40/ma.png" 
                              alt="Morocco flag" 
                              className="w-5 h-4 rounded-sm"
                            />
                            <span className="text-blue-300 text-xs font-medium">UMP Oujda</span>
                          </div>
                        )}
                        {role.includes('Co-Founder and COO') && (
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://flagcdn.com/w40/ma.png" 
                              alt="Morocco flag" 
                              className="w-5 h-4 rounded-sm"
                            />
                            <span className="text-blue-300 text-xs font-medium">Everest Center</span>
                          </div>
                        )}
                        {role.includes('Professional trainer') && (
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://flagcdn.com/w40/ma.png" 
                              alt="Morocco flag" 
                              className="w-5 h-4 rounded-sm"
                            />
                            <span className="text-blue-300 text-xs font-medium">Multiple Centers</span>
                          </div>
                        )}
                        {role.includes('Business Development Manager') && (
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://flagcdn.com/w40/fi.png" 
                              alt="Finland flag" 
                              className="w-5 h-4 rounded-sm"
                            />
                            <span className="text-blue-300 text-xs font-medium">Yellow Method Oy</span>
                          </div>
                        )}
                        <p className="text-white font-medium text-sm leading-tight text-center break-words hyphens-none whitespace-normal px-3 flex items-center justify-center min-h-[3rem]">{role.replace('🇫🇮 ', '')}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Detailed Role Information */}
        <AnimatePresence>
          {selectedRole && (
      <motion.div
              key={selectedRole}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.9 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
              className="mt-4 w-full max-w-4xl mx-auto"
            >
              {(() => {
                const [categoryId, roleIndex] = selectedRole.split('-');
                const roleDetails = getRoleDetails(categoryId, parseInt(roleIndex));
                
                if (!roleDetails) return null;
                
                return (
                  <div className="bg-white/10 backdrop-blur-md text-white p-4 sm:p-8 rounded-2xl shadow-2xl border border-white/20">
                    <div className="mb-4 sm:mb-6">
                    </div>
                    
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                      {roleDetails.description}
                    </p>
                    
                    {/* Image for Author section */}
                    {roleDetails.image && (
                      <div className="flex justify-center mb-4 sm:mb-6">
                        <motion.img
                          src={roleDetails.image}
                          alt="Book cover or author image"
                          className="w-full max-w-[700px] h-48 sm:h-80 object-contain rounded-lg shadow-2xl border border-white/20 bg-white/5"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          whileHover={{ scale: 1.05 }}
                        />
                      </div>
                    )}
                    
                    <div>
                      {/* Research Publications - Special layout for publications */}
                      {roleDetails.title.includes('Research Publications') && roleDetails.publications && (
                        <>
                          <h4 className="text-xl font-semibold mb-4 text-blue-200 text-center">Research Publications:</h4>
                          <div className="space-y-3">
                            {roleDetails.publications.map((publication, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="flex flex-col gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                              >
                                <div className="w-full">
                                  <p className="text-gray-200 text-sm leading-relaxed text-left">{publication.title}</p>
                                  {publication.tags && (
                                    <div className="flex flex-wrap gap-1 mt-2">
                                      {publication.tags.map((tag, tagIndex) => (
                                        <span
                                          key={tagIndex}
                                          className="inline-block px-2 py-1 bg-green-600/20 text-green-300 text-xs font-medium rounded-md border border-green-500/30"
                                        >
                                          {tag}
                                        </span>
                                      ))}
                                </div>
                                  )}
                                </div>
                                <div className="flex justify-between items-center w-full">
                                  <div className="text-left">
                                  <p className="text-blue-300 text-xs font-medium">{publication.journal}</p>
                                  <p className="text-gray-400 text-xs">{publication.date}</p>
                                  </div>
                                  {publication.url && (
                                    <motion.a
                                      href={publication.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-block px-3 py-1 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 text-xs font-medium rounded-md border border-blue-500/30 transition-all duration-300 hover:scale-105"
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      Read manuscript
                                    </motion.a>
                                  )}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </>
                      )}
                      
                      {/* Key Achievements - Hide for Blog section and Research Publications */}
                      {!roleDetails.title.includes('Blog') && !roleDetails.title.includes('Research Publications') && (
                        <>
                          <h4 className="text-xl font-semibold mb-4 text-blue-200">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {roleDetails.achievements.map((achievement, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="flex items-start gap-3 text-gray-200"
                              >
                                <span className="text-blue-400 mt-1">•</span>
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </>
                      )}
                      
                      {/* LinkedIn Posts Buttons for Blog section */}
                      {roleDetails.links && (
                        <div className="mt-6">
                          <h4 className="text-xl font-semibold mb-4 text-blue-200">LinkedIn Posts:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {roleDetails.links.map((link, index) => (
                              <motion.a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 p-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg border border-blue-500/30 transition-all duration-300 group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ scale: 1.02 }}
                              >
                                <span className="text-lg">{link.emoji}</span>
                                <span className="text-white text-sm font-medium group-hover:text-blue-200 transition-colors">
                                  {link.title}
                                </span>
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Media Bank Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-4 mb-4 w-full max-w-6xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md text-white p-4 sm:p-8 rounded-2xl shadow-2xl border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-8">Media Bank</h3>
            
            {/* Scrolling Image Gallery */}
            <div className="relative overflow-hidden">
              <div className="flex gap-2 sm:gap-4 animate-scroll sm:animate-scroll animate-scroll-mobile">
                {/* First set of images */}
                <div className="flex gap-2 sm:gap-4 flex-shrink-0">
                  <img src="1744181868427.jpg" alt="Media 1" className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-lg shadow-lg" />
                  <img src="1725215553851.jpg" alt="Media 2" className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-lg shadow-lg" />
                  <img src="1725609815426.jpg" alt="Media 3" className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-lg shadow-lg" />
                  <img src="1725990126678.jpg" alt="Media 4" className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-lg shadow-lg" />
                  <img src="1727288326034.jpg" alt="Media 5" className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-lg shadow-lg" />
                  <img src="IMG_20240718_091808.jpg" alt="Media 6" className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-lg shadow-lg" />
                  <img src="IMG_20240718_091714.jpg" alt="Media 7" className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-lg shadow-lg" />
                  <img src="IMG_20231205_124228_0310.jpg" alt="Media 8" className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-lg shadow-lg" />
                  <img src="IMG_20231203_181003.jpg" alt="Media 9" className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-lg shadow-lg" />
                  <img src="IMG_20231203_180419.jpg" alt="Media 10" className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-lg shadow-lg" />
                </div>
                {/* Duplicate set for seamless scrolling */}
                <div className="flex gap-2 sm:gap-4 flex-shrink-0">
                  <img src="1744181868427.jpg" alt="Media 1" className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-lg shadow-lg" />
                  <img src="1725215553851.jpg" alt="Media 2" className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-lg shadow-lg" />
                  <img src="1725609815426.jpg" alt="Media 3" className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-lg shadow-lg" />
                  <img src="1725990126678.jpg" alt="Media 4" className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-lg shadow-lg" />
                  <img src="1727288326034.jpg" alt="Media 5" className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-lg shadow-lg" />
                  <img src="IMG_20240718_091808.jpg" alt="Media 6" className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-lg shadow-lg" />
                  <img src="IMG_20240718_091714.jpg" alt="Media 7" className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-lg shadow-lg" />
                  <img src="IMG_20231205_124228_0310.jpg" alt="Media 8" className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-lg shadow-lg" />
                  <img src="IMG_20231203_181003.jpg" alt="Media 9" className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-lg shadow-lg" />
                  <img src="IMG_20231203_180419.jpg" alt="Media 10" className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-lg shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills, Tools & Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-4 mb-4 w-full max-w-6xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md text-white p-4 sm:p-8 rounded-2xl shadow-2xl border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-8">Skills, Tools & Certifications</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Skills Section */}
              <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10 relative overflow-visible">
                <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-200 flex items-center gap-2">
                  <span className="text-xl sm:text-2xl">🔬</span>
                  Skills & Expertise
                </h4>
                <div className="space-y-3">
                  {/* Organic Chemistry */}
                  <div className="group relative">
                    <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span className="text-gray-200 font-medium">Organic Chemistry/Synthetic Chemistry</span>
                    </div>
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 bg-black/90 backdrop-blur-md p-4 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-10 min-w-[300px] max-w-[280px]">
                      <h5 className="text-green-300 font-semibold mb-2">Detailed Skills:</h5>
                      <div className="grid grid-cols-1 gap-1 text-xs text-gray-300">
                        <span>• Organic synthesis</span>
                        <span>• Nuclear Magnetic Resonance (NMR)</span>
                        <span>• UV-visible</span>
                        <span>• IR</span>
                        <span>• Liquid-solid extraction</span>
                        <span>• Crystallization</span>
                        <span>• Column chromatography</span>
                        <span>• Celite filtration</span>
                      </div>
                    </div>
                  </div>

                  {/* Computational Chemistry */}
                  <div className="group relative">
                    <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span className="text-gray-200 font-medium">Computational & Medicinal Chemistry</span>
                    </div>
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 bg-black/90 backdrop-blur-md p-4 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-10 min-w-[300px] max-w-[280px]">
                      <h5 className="text-blue-300 font-semibold mb-2">Detailed Skills:</h5>
                      <div className="grid grid-cols-1 gap-1 text-xs text-gray-300">
                        <span>• Ligand-protein docking</span>
                        <span>• Blind docking</span>
                        <span>• Virtual screening</span>
                        <span>• ADME predictions</span>
                        <span>• Homology modeling</span>
                        <span>• Molecular dynamics</span>
                        <span>• Density functional theory (DFT)</span>
                      </div>
                    </div>
                  </div>

                  {/* Bioinformatics */}
                  <div className="group relative">
                    <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span className="text-gray-200 font-medium">Bioinformatics</span>
                    </div>
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 bg-black/90 backdrop-blur-md p-4 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-10 min-w-[300px] max-w-[280px]">
                      <h5 className="text-purple-300 font-semibold mb-2">Detailed Skills:</h5>
                      <div className="grid grid-cols-1 gap-1 text-xs text-gray-300">
                        <span>• Epigenomics and Immunoinformatic</span>
                        <span>• Data Science & Machine Learning with R, Python and GWAS</span>
                        <span>• Plant Genomics and Bioinformatics</span>
                        <span>• Multi-omics Box second edition</span>
                        <span>• Genome Informatics</span>
                      </div>
                    </div>
                  </div>

                  {/* Software/Platform */}
                  <div className="group relative">
                    <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span className="text-gray-200 font-medium">Software/Platform</span>
                    </div>
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 bg-black/90 backdrop-blur-md p-4 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-10 min-w-[350px] max-w-[320px]">
                      <h5 className="text-cyan-300 font-semibold mb-2">Detailed Skills:</h5>
                      <div className="grid grid-cols-1 gap-2 text-xs text-gray-300">
                        <div>
                          <span className="text-cyan-300 font-medium">Scientific Software:</span>
                          <div className="ml-2 mt-1">
                            <span>• GAUSSIAN, MOE, Schrodinger, AutoDock, AutoDock Vina, GROMACS</span>
                            <span>• Modeller, SwissModel, Discovery Studio, Pymol, DataWarrior</span>
                            <span>• GAMESS, Quantum Espresso, VESTA</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-cyan-300 font-medium">Cloud/Programming/Data Tools:</span>
                          <div className="ml-2 mt-1">
                            <span>• Microsoft Azure, Google Cloud, Python, R, SQL</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-cyan-300 font-medium">Productivity & Ops:</span>
                          <div className="ml-2 mt-1">
                            <span>• Office 365, Notion, WordPress, Slack, Telegram, Discord</span>
                            <span>• ChatGPT Plus, Canva, HubSpot</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Business & Management */}
                  <div className="group relative">
                    <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span className="text-gray-200 font-medium">Business & Management</span>
                    </div>
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 bg-black/90 backdrop-blur-md p-4 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-10 min-w-[300px] max-w-[280px]">
                      <h5 className="text-yellow-300 font-semibold mb-2">Detailed Skills:</h5>
                      <div className="grid grid-cols-1 gap-1 text-xs text-gray-300">
                        <span>• Commercialization</span>
                        <span>• Project Management</span>
                        <span>• Portfolio Management</span>
                        <span>• Business Development</span>
                        <span>• Scalability</span>
                        <span>• Market Needs</span>
                        <span>• Resources and Assets management</span>
                        <span>• Co-creation</span>
                        <span>• Time and Program Management</span>
                        <span>• Collaboration</span>
                      </div>
                    </div>
                  </div>

                  {/* Training and Education */}
                  <div className="group relative">
                    <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                      <span className="text-gray-200 font-medium">Training and Education</span>
                    </div>
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 bg-black/90 backdrop-blur-md p-4 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-10 min-w-[300px] max-w-[280px]">
                      <h5 className="text-orange-300 font-semibold mb-2">Detailed Skills:</h5>
                      <div className="grid grid-cols-1 gap-1 text-xs text-gray-300">
                        <span>• Skills in developing, coordinating, and giving technical training</span>
                        <span>• Ability to create engaging training content</span>
                        <span>• Development of technical training materials</span>
                        <span>• E-learning course creation</span>
                        <span>• Teaching and mentoring</span>
                      </div>
                    </div>
                  </div>

                  {/* Soft Skills */}
                  <div className="group relative">
                    <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      <span className="text-gray-200 font-medium">Soft Skills</span>
                    </div>
                    <div className="absolute left-full bottom-0 mb-2 ml-2 bg-black/90 backdrop-blur-md p-4 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-10 min-w-[300px] max-w-[280px]">
                      <h5 className="text-pink-300 font-semibold mb-2">Detailed Skills:</h5>
                      <div className="grid grid-cols-1 gap-1 text-xs text-gray-300">
                        <span>• Leadership</span>
                        <span>• Problem-solving and solution-oriented</span>
                        <span>• Research Skills</span>
                        <span>• Scientific Writing Skills</span>
                        <span>• Teamwork</span>
                        <span>• Time Management</span>
                        <span>• Work Independently</span>
                        <span>• Workplace Safety</span>
                        <span>• Analytical Thinking</span>
                        <span>• Collaboration</span>
                        <span>• Communication Skills</span>
                        <span>• Cross-functional</span>
                        <span>• Organizational Skills</span>
                        <span>• Presentation Skills</span>
                        <span>• Proactivity</span>
                      </div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="group relative">
                    <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                      <span className="text-gray-200 font-medium">Languages</span>
                    </div>
                    <div className="absolute left-full bottom-0 mb-2 ml-2 bg-black/90 backdrop-blur-md p-4 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-10 min-w-[300px] max-w-[280px]">
                      <h5 className="text-indigo-300 font-semibold mb-2">Language Proficiency:</h5>
                      <div className="grid grid-cols-1 gap-2 text-xs text-gray-300">
                        <div>
                          <span className="text-indigo-300 font-medium">Native:</span>
                          <div className="ml-2 mt-1">
                            <span>• Arabic</span>
                            <span>• Moroccan Darija</span>
                            <span>• Amazighia</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-indigo-300 font-medium">Full Professional:</span>
                          <div className="ml-2 mt-1">
                            <span>• English</span>
                            <span>• French</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-indigo-300 font-medium">Beginner:</span>
                          <div className="ml-2 mt-1">
                            <span>• Finnish</span>
                            <span>• Spanish</span>
                            <span>• Chinese (Mandarin)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              {/* Certifications Section */}
              <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
                <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-200 flex items-center gap-2">
                  <span className="text-xl sm:text-2xl">🏆</span>
                  Certifications
                </h4>
                <div className="space-y-2 sm:space-y-3 max-h-80 sm:max-h-96 overflow-y-auto">
                  <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-3 rounded-lg border border-yellow-500/30">
                    <h5 className="font-semibold text-yellow-300 text-sm">Peer Support & Finnish Legal System Advanced Training</h5>
                    <p className="text-gray-300 text-xs">Finnish Refugee Council</p>
                    <p className="text-gray-400 text-xs">06.2024</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3 rounded-lg border border-blue-500/30">
                    <h5 className="font-semibold text-blue-300 text-sm">Customer Success Foundations Professional Certificate</h5>
                    <p className="text-gray-300 text-xs">ChurnZero</p>
                    <p className="text-gray-400 text-xs">03.2025</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 p-3 rounded-lg border border-green-500/30">
                    <h5 className="font-semibold text-green-300 text-sm">Public Speaking Skills Professional Certificate</h5>
                    <p className="text-gray-300 text-xs">Toastmasters International</p>
                    <p className="text-gray-400 text-xs">02.2025</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-lg border border-purple-500/30">
                    <h5 className="font-semibold text-purple-300 text-sm">McKinsey Forward Program</h5>
                    <p className="text-gray-300 text-xs">McKinsey & Company</p>
                    <p className="text-gray-400 text-xs">12.2024</p>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 p-3 rounded-lg border border-indigo-500/30">
                    <h5 className="font-semibold text-indigo-300 text-sm">Enterprise Design Thinking Practitioner</h5>
                    <p className="text-gray-300 text-xs">IBM</p>
                    <p className="text-gray-400 text-xs">06.2024</p>
                  </div>
                  <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 p-3 rounded-lg border border-red-500/30">
                    <h5 className="font-semibold text-red-300 text-sm">Bioinformatics Trainer</h5>
                    <p className="text-gray-300 text-xs">GOBLET-ELIXIR, CSC Finland</p>
                    <p className="text-gray-400 text-xs">Dec 2021 - Present</p>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-3 rounded-lg border border-cyan-500/30">
                    <h5 className="font-semibold text-cyan-300 text-sm">ScRNA-seq Data Analysis Trainer</h5>
                    <p className="text-gray-300 text-xs">GOBLET-ELIXIR, CSC Finland</p>
                    <p className="text-gray-400 text-xs">Nov 2021 - Present</p>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 p-3 rounded-lg border border-emerald-500/30">
                    <h5 className="font-semibold text-emerald-300 text-sm">Professional Trainer in Personal Development</h5>
                    <p className="text-gray-300 text-xs">EFSTC</p>
                    <p className="text-gray-400 text-xs">Jul 2016 - Present</p>
                  </div>
                  <div className="bg-gradient-to-r from-rose-500/20 to-red-500/20 p-3 rounded-lg border border-rose-500/30">
                    <h5 className="font-semibold text-rose-300 text-sm">Rescuer</h5>
                    <p className="text-gray-300 text-xs">Moroccan Red Cross</p>
                    <p className="text-gray-400 text-xs">May 2014 - Present</p>
                  </div>
                  <div className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 p-3 rounded-lg border border-violet-500/30">
                    <h5 className="font-semibold text-violet-300 text-sm">Hypnotherapy Practitioner</h5>
                    <p className="text-gray-300 text-xs">The Mind Care Organization Ltd, Great Britain</p>
                    <p className="text-gray-400 text-xs">Dec 2013 - Present</p>
                  </div>
                  <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 p-3 rounded-lg border border-amber-500/30">
                    <h5 className="font-semibold text-amber-300 text-sm">Professional Trainer in Academic Excellence</h5>
                    <p className="text-gray-300 text-xs">International Academies</p>
                    <p className="text-gray-400 text-xs">Mar 2013 - Present</p>
                  </div>
                  <div className="bg-gradient-to-r from-sky-500/20 to-blue-500/20 p-3 rounded-lg border border-sky-500/30">
                    <h5 className="font-semibold text-sky-300 text-sm">Personal Strategic Planning Trainer</h5>
                    <p className="text-gray-300 text-xs">IAPTLD, Montreal Canada</p>
                    <p className="text-gray-400 text-xs">Apr 2012 - Present</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-4 mb-4 w-full max-w-6xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md text-white p-4 sm:p-8 rounded-2xl shadow-2xl border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-8">Testimonials</h3>
            
            {/* Testimonial Card with Navigation */}
            <div className="relative">
              <AnimatePresence mode="wait">
                {selectedTestimonial && (
                  <motion.div
                    key={selectedTestimonial.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
                    className="bg-white/5 rounded-2xl p-4 sm:p-6 border border-white/10"
                  >
                    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-sm sm:text-lg font-bold text-white flex-shrink-0">
                        {selectedTestimonial.initials}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base sm:text-lg font-bold text-white mb-1">{selectedTestimonial.name}</h4>
                        <p className="text-blue-300 text-xs sm:text-sm mb-2">{selectedTestimonial.institution}</p>
                        <span className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                          selectedTestimonial.role === 'Manager' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                          selectedTestimonial.role === 'Peer' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                          'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        }`}>
                          {selectedTestimonial.role}
                        </span>
                      </div>
                    </div>
                    <blockquote className="text-gray-200 text-sm sm:text-lg leading-relaxed italic">
                      "{selectedTestimonial.testimonial}"
                    </blockquote>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-4 sm:mt-6">
                {/* Back Button */}
                <motion.button
                  onClick={goToPreviousTestimonial}
                  className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 mobile-touch"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm">Back</span>
                </motion.button>

                {/* Testimonial Counter */}
                <div className="text-white/60 text-xs sm:text-sm">
                  {currentTestimonialIndex + 1} / 22
                </div>

                {/* Next Button */}
                <motion.button
                  onClick={goToNextTestimonial}
                  className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 mobile-touch"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm">Next</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* LinkedIn Connection */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-4 mb-8 px-4"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <motion.a
              href="https://linkedin.com/in/dr-yassine92"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 group cursor-default w-full sm:w-80 h-16 sm:h-20 mobile-touch"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-blue-100 text-sm leading-relaxed">
                  Let's connect on LinkedIn
                </p>
              </div>
            </motion.a>

            {/* Instagram Connection */}
            <motion.a
              href="https://www.instagram.com/yassine_nature/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gradient-to-r from-purple-600 to-pink-700 rounded-xl hover:from-purple-700 hover:to-pink-800 transition-all duration-300 group cursor-default w-full sm:w-80 h-16 sm:h-20 mobile-touch"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-purple-100 text-sm leading-relaxed">
                  Follow me on instagram
                </p>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-60"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i * 10)}%`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Hero; 