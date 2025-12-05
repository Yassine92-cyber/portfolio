export interface Publication {
  year: number;
  title: string;
  journal: string;
  authors: string;
  link?: string; // Optional: Add DOI link, journal URL, ResearchGate, etc.
}

/**
 * To add a link to a publication:
 * 1. Find the publication's DOI, journal URL, or ResearchGate link
 * 2. Add the `link` property to the publication object
 * 3. Example: link: "https://doi.org/10.1038/s41598-024-xxxxx"
 * 
 * See PUBLICATIONS_LINKS_GUIDE.md for detailed instructions
 */
export const PUBLICATIONS: Publication[] = [
  {
    year: 2025,
    title: "Experimental and computational approach on the corrosion inhibition properties of two newly pyrazole derivatives on carbon steel in acid medium",
    journal: "Scientific Reports 15:3631",
    authors: "Setti N, Barrahi A, Maatallah M, Kaddouri Y, et al.",
    link: "https://www.nature.com/articles/s41598-025-87564-w",
  },
  {
    year: 2025,
    title: "Structural effect of bipyrazole derivatives on corrosion inhibition of carbon steel in 1 M HCl: weight loss, electrochemical measurements, XPS/SEM surface analysis, DFT and MC simulations",
    journal: "Physical Chemistry Chemical Physics 27:5371–5394",
    authors: "Setti N, Barrahi A, Maatallah M, Kaddouri Y, et al.",
    link: "https://pubs.rsc.org/en/content/articlelanding/2025/cp/d4cp02946a/unauth",
  },
  {
    year: 2022,
    title: "Synthesis, experimental and theoretical studies of sesquiterpenic thiosemicarbazone and semicarbazone as organic corrosion inhibitors for stainless steel 321 in H2SO4 1M",
    journal: "Journal of Molecular Structure",
    authors: "Bimoussa A, Koumya Y, Oubella A, Kaddouri Y, et al.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0022286021023966",
  },
  {
    year: 2022,
    title: "Metal corrosion inhibition by triazoles: A review",
    journal: "International Journal of Corrosion and Scale Inhibition",
    authors: "Merimi I, Bitari A, Kaddouri Y, et al.",
    link: "https://ijcsi.pro/wp-content/uploads/2022/04/ijcsi-2022_v11-n2-p4.pdf",
  },
  {
    year: 2022,
    title: "New N-alkylated heterocyclic compounds as prospective NDM1 inhibitors: Investigation of in vitro and in silico properties",
    journal: "Pharmaceuticals",
    authors: "Kaddouri Y, Bouchal B, Abrigach F, et al.",
    link: "https://www.mdpi.com/1424-8247/15/7/803",
  },
  {
    year: 2022,
    title: "An Insight into All Tested Small Molecules against Fusarium oxysporum f. sp. Albedinis: A Comparative Review",
    journal: "Molecules",
    authors: "Kaddouri Y, Benabbes R, Ouahhoud S, et al.",
    link: "https://www.mdpi.com/1420-3049/27/9/2698",
  },
  {
    year: 2021,
    title: "Correlation between corrosion inhibition efficiency in sulfuric acid medium and the molecular structures of two newly eco-friendly pyrazole derivatives on iron oxide surface",
    journal: "Journal of Molecular Liquids",
    authors: "Mechbal N, Belghiti ME, Benzbiria N, Kaddouri Y, et al.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0167732221003810",
  },
  {
    year: 2021,
    title: "Synthesis, characterization, reaction mechanism prediction and biological study of mono, bis and tetrakis pyrazole derivatives against Fusarium oxysporum f. sp. Albedinis with computational insights",
    journal: "Journal of Chemistry",
    authors: "Kaddouri Y, Bouchal B, Abrigach F, et al.",
    link: "https://onlinelibrary.wiley.com/doi/full/10.1155/2021/6663245",
  },
  {
    year: 2021,
    title: "New heterocyclic compounds: synthesis, antioxidant activity and computational insights of nano-antioxidant as ascorbate peroxidase inhibitor by various cyclodextrins as drug carriers",
    journal: "Current Drug Delivery",
    authors: "Kaddouri Y, Abrigach F, Yousfi EB, et al.",
    link: "https://www.sciencedirect.com/science/article/pii/S240584402030030X",
  },
  {
    year: 2021,
    title: "Rosemary essential oils: Extraction, GC/MS analysis, antioxidant activity with dft and in silico insights of prospective nano-antioxidants",
    journal: "Journal of Applied Science and Environmental Studies",
    authors: "Oualdi I, Diass K, Azizi S, Kaddouri Y, et al.",
    link: "https://revues.imist.ma/index.php/JASES/article/view/43183",
  },
  {
    year: 2021,
    title: "Synthetic Nitrogen Compounds as Efficient Corrosion Inhibitors for Metallic Materials in Aggressif Medium",
    journal: "Journal of Applied Science and Environmental Studies",
    authors: "Kaddouri Y, Titi A, Oualdi I, et al.",
    link: "https://revues.imist.ma/index.php/JASES/article/view/43268",
  },
  {
    year: 2020,
    title: "The inhibition behavior of two pyrimidine-pyrazole derivatives against corrosion in hydrochloric solution: Experimental, surface analysis and in silico approach studies",
    journal: "Arabian Journal of Chemistry",
    authors: "Arrousse N, Salim R, Kaddouri Y, et al.",
    link: "https://www.sciencedirect.com/science/article/pii/S187853522030143X",
  },
  {
    year: 2020,
    title: "New thiazole, pyridine and pyrazole derivatives as antioxidant candidates: synthesis, DFT calculations and molecular docking study",
    journal: "Heliyon",
    authors: "Kaddouri Y, Abrigach F, Yousfi EB, et al.",
    link: "https://www.cell.com/heliyon/fulltext/S2405-8440(20)30030-X?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS240584402030030X%3Fshowall%3Dtrue",
  },
  {
    year: 2020,
    title: "Catecholase catalytic properties of copper (II) complexes prepared in-situ with heterocyclic ligands: Experimental and DFT study",
    journal: "Moroccan Journal of Chemistry",
    authors: "Kaddouri Y, Haddari H, et al.",
    link: "https://revues.imist.ma/index.php/morjchem/article/view/16657",
  },
  {
    year: 2020,
    title: "Mono-Alkylated Ligands Based on Pyrazole and Triazole Derivatives Tested Against Fusarium oxysporum f. sp. albedinis: Synthesis, Characterization, DFT, and computational insights",
    journal: "Frontiers in Chemistry",
    authors: "Kaddouri Y, Abrigach F, Ouahhoud S, et al.",
    link: "https://www.frontiersin.org/journals/chemistry/articles/10.3389/fchem.2020.559262/full",
  },
  {
    year: 2020,
    title: "Synthesis of two new pyrazole based ligands for the liquid–solid extraction of heavy metals Pb, Cd and Cu in the aqueous medium",
    journal: "Materials Today Proceedings",
    authors: "Boulouiz A, Hajji I, Kaddouri Y, et al.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S2214785320361435",
  },
  {
    year: 2019,
    title: "Pyrazole Compounds: Synthesis, molecular structure, chemical reactivity, experimental and theoretical DFT FTIR spectra",
    journal: "Materials Today Proceedings",
    authors: "Kaddouri Y, Abrigach F, Mechbal N, et al.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S2214785319306522",
  },
  {
    year: 2019,
    title: "Study of the catecholase catalytic properties of copper (II) complexes prepared in-situ with monodentate ligands",
    journal: "Materials Today Proceedings",
    authors: "Titi A, Al Noaimi M, Kaddouri Y, et al.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S221478531930673X",
  },
  {
    year: 2017,
    title: "Tridentate pyrazole ligands: synthesis, characterization and corrosion inhibition properties with theoretical investigations",
    journal: "Journal of Materials and Environmental Science",
    authors: "Kaddouri Y, Takfaoui A, et al.",
    link: "https://www.jmaterenvironsci.com/Document/vol8/vol8_N3/89-JMES-ICMES-Kaddouri.pdf",
  },
  {
    year: 2017,
    title: "Synthesis of new tridentate pyrazolic ligands",
    journal: "Moroccan Journal of Heterocyclic Chemistry",
    authors: "Kaddouri Y.",
    link: "https://revues.imist.ma/index.php/JMCH/article/download/9510/5397",
  },
  {
    year: 2017,
    title: "Two tripodal pyrazolic ligands: application against corrosion of mild steel in HCl 1M",
    journal: "Moroccan Journal of Chemistry",
    authors: "Kaddouri Y, Takfaoui A, et al.",
    link: "https://revues.imist.ma/index.php/morjchem/article/view/7871",
  },
];

