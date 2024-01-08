const words = ["reservoir", "engineering", "geologie", "PVT", "description", "methode", "nom", "utilisation", "puits", "prtrole", "température", "laboratoire",
        "huile", "gaz", "petrophesique", "carrote", "lecture", "mesure", "develeppement", "un", "une", "le", "la", "toujours", "pression", "débit", "echelle",
        "possible", "module", "logiciel", "simulation", "export", "demande", "estimation", "production", "sismique", "interpretation", "test", "grand", "petit"]
function randV(v = words){return v[Math.floor(Math.random() * v.length)]}
function randN(n){return Math.floor(Math.random() * n)}
const 
    constStatus = ["En attente", "En cours", "Réalisé", "Annulé"],
    constPhase = [["Avant-projet", "Expression d'une idee R&D", "Evaluation et selection preliminaire", "Montage du projet et redaction du Canevas de soumission", "Validation du projet R&D "], 
        ["Planification et lancement", "Elaboration d'un plan d'action detaille", "Examen scientifique et technique", " Affectation d'un compte analytique au projet R&D", "Etablissement des KPls", "Signature des engagements et lancement du projet R&D"], 
        ["Execution et suivi-evaluation", "Etape des Travaux d'etude bibliographique", "Travaux de modelisation, de simulation et/ou tests laboratoire", "Test pilote ", "Processus de suivi-evaluation", "Rapport final des travaux"], 
        ["cloture du projet et valorisation des resultats", "Cloture du projet", "Valorisation scientifique, technique et economique", "Capitalisation des experiences", "Reporting au CST", "Valorisation post-cloture du projet"]],
    constDivisionName = [["ped", "exp", "lab", "pr", "for", "ast"],
        ["Dévision Petroleum Engineering & Development", "Dévision Exploration", "Dévision Laboratoires", "Dévision Production", "Dévision Forage", "Dévision Assosiations"]],
    constAbbreviation = [
        ["CEVT", "Comite d'Expertise et de Validation Technique permanent, institue par la DC R&D selon notamment les domaines de recherche lies a la biotechnologie petroliere et environnement, recherche materiaux, corrosion et inspection, recherche simulation numerique, modelisation et optimisation et recherche EOR/IOR (enhanced oil recovery/improved oil recovery). Preside par le Directeur des projets de recherche du domaine concerne, ii est compose notamment d'experts internes de SONATRACH, d'experts externes de l'universite et/ou de centres de recherche ou de partenaires nationaux ou internationaux, d'un relais operationnel et un representant du client. Les attributions, les missions ainsi que le reglement interieur du CEVT sont fixes par des decisions approuvees par le Directeur Central Recherche & Developpement."],
        ["Chef de projet", "Personne physique chargee notamment de constituer et d'animer l'equipe de projet R&D. Le chef de projet peut etre un chercheur de la DC R&D, OU issu des structures de SONATRACH, de ses fil iales, d'un centre de recherche, de l'universite ou d'un organisme SCientifique/industriel national OU etranger."],
        ["Client", "Le client est une entite interne ou externe a SONATRACH recevant un produit ou un service issu de la realisation d'un projet R&D en accord avec les exigences du besoin exprime. Le client est dit « client sponsor » s'il est externe a SONATRACH et en charge du sponsoring du projet R&D."],
        ["EPT", "Acronyme pour Equivalent Plein Temps"],
        ["Equipe de projet", "Groupe de travail selectionne par le chef de projet sur la base des competences requises. L'equipe doit inclure dans sa composition notamment un representant du client, un relais et un representant du partenaire (le cas echeant)."],
        ["Gantt Chart", "Outil de planification indispensable en gestion de projet. II permet de planifier efficacement le projet et de visualiser rapidement l'avancement des différentes tâches à accomplir."],
        ["Gestion d'un projet R&D", "La gestion de projet R&D est l'ensemble des activités visant à organiser le bon déroulement d'un projet et atteindre ses objectifs. Elle consiste à appliquer les méthodes, techniques et outils de gestion spécifiques aux différentes étapes du projet, de l'évaluation de l'opportunité jusqu'à l'achèvement du projet."],
        ["Idée R&D", "L'idée peut être soit un nouveau concept, soit l'accomplissement d'un préexistant pour en faire d'une idée d'un projet R&D, un bien réel. "],
        ["Initiateur de projet", "Personne physique ou morale qui propose une idee exploitable pour initier un projet R&D. II peut etre un chercheur issu de la DC R&D, une structure SONATRACH, une filiale SONATRACH ou toute entite externe, nationale ou internationale. "],
        ["KPI", "Acronyme pour Key Performance Indication. Ce sont des indicateurs clés de performance, permettant de mesurer la performance des projets. Ils doivent être SMART (Spécifique, Mesurable, Atteignable, Réaliste et Temporellement défini)."],
        ["KPl-EPT", "Outil d'evaluation et de suivi des performances des membres de l'equipe de projet en tenant compte de leurs implications dans les taches du projet et de leurs travaux hors projet."],
        ["Partenaire", "Une entité externe a SONATRACH, avec laquelle on s'associe ou on s'allie pour réaliser une action commune dans un projet R&D."],
        ["Parties prenantes", "C'est un acteur individuel, un groupe de personnes, une structure interne ou une organisation externe a SONATRACH, directement ou indirectement concernée par les retombées et les interactions sur les différentes étapes de réalisation du projet. Les parties prenantes dans la présente procédure regroupent: le porteur du projet, le chef de projet, l'équipe de projet, le client, la DC R&D, le partenaire et le CST."],
        ["Porteur de projet", "Personne physique chargée de la définition des objectifs du projet R&D. Le porteur du projet peut être un chercheur de la DC R&D, ou issu des structures SONATRACH, de ses filiales, d'un centre de recherche, de l'université ou d'un organisme scientifique/industriel national OU étranger."],
        ["Projet R&D", "Est considéré comme projet R&D, tout projet qui s'inscrit dans les types d'activités de recherche appliquée et/ou de développement expérimental."],
        ["Relais", "Représentant désigné par chaque structure de SONATRACH en sa qualité de vis-à-vis avec la DC R&D. II est charge notamment de collecter et diffuser les propositions des idées des projets R&D, émanant de sa structure. II participe également dans le processus de suivi-évaluation des performances des projets R&D."],
        ["Structure PR", "Représente une des directions de la DC R&D à laquelle le Projet de Recherche sera affecté, selon le domaine de recherche du projet concerne. "]],
    constResearchAxe = ["Geosciences et energies nouvelles", "Forage, production et reservoir engineering", "EOR/IOR", "Modelisation, Simulation et optimisation", "Biotechnologie petroliere et environnement", "Materiaux, corrosion et inspection", "Raffinage, petrochimie, catalyse et liquefaction", "Energies renouvelables et efficacite energetique", "Maitrise technologique et developpement", "Autres"]
class projectSheet {
    constructor(x0, x00, x1, x2, x3, x4 = [], x5 = [], x6, x7, x8 = [], x9, x10, x11, x12, x13, x14 = [], x15 = [], x16 = [], x17, x18, x19, x20, x21, x22, x23 = [], x24 = [], x25 =[]){
        this.projectAnalyticalCode = x0;
        this.state = x00,
        this.researchAxe = x1; //1. IDENFICATION DU PROJET: Intitulé de l'axe de recherche
        this.projectTitle = x2; //1. IDENFICATION DU PROJET: Intitulé du projet de recherche
        this.laboratory = x3; //1. IDENFICATION DU PROJET: Laboratoire R&D
        this.client = x4; //1. IDENFICATION DU PROJET: Clients
        this.keyword = x5; //1. IDENFICATION DU PROJET: Mots Clés
        this.projectHolder = x6; //1. IDENFICATION DU PROJET: Porteur de projet
        this.partner = x7; //1. IDENFICATION DU PROJET: partenaires National/Etranger
        this.projectTeam = x8; //1. IDENFICATION DU PROJET: Mombres de projet R&D
        this.summary = x9; //2. DECREPTION DU PROJET: RESUME 
        this.ProjectObjectif = x10; //2. DECREPTION DU PROJET: OBJECTIFS DU PROJET 
        this.StateOfArt = x11; //2. DECREPTION DU PROJET: ETAT DE L'ART ET TRAVAUX ANTERIEURS
        this.approachMetgodology = x12; //2. DECREPTION DU PROJET: APPROCHE ET METHODOLOGIE
        this.expectedResults = x13; //2. DECREPTION DU PROJET: RESULTATS ATTENDUS
        this.projectImplimentationTeam = x14; //2. DECREPTION DU PROJET: EQUIPE EN CHARGE DE L'EXECUTION DU PROJET
        this.chartGantt = x15; //2. DECREPTION DU PROJET: DISTRIBUTIONS DES TACHES ET ACTIVITES (DIAGRAMME DE GANTT)
        this.taskAssignement = x16; //2. DECREPTION DU PROJET: PLANNING DES T ACHES A ENTREPRENDRE. TACHES ASSIGNEES Aux INTERVENANTS
        this.exestingEquipement = x17; //3. MOYENS MATERIELS: EQUIPEMENTS EXISTANTS
        this.acquiredEquipement = x18; //3. MOYENS MATERIELS: EQUIPEMENTS A ACQUERIR
        this.consumable = x19; //3. MOYENS MATERIELS: CONSOMMABLES
        this.trainingNeed = x20; //4. FORMATION ET ASSISTANCE : BESOINS EN FORMATiON
        this.assistanceNeed = x21; //4. FORMATION ET ASSISTANCE : BESOINS EN ASSISTANCE
        this.DocumentaryResource = x22; //5. RESSOURCES DOCUMENTAIRES DISPONIBLES SUR LE PROJET
        this.budjetExpense = x23; //6. BUDJET (PLAN 01: FINANCEMENT PREVISIONNEL): Dépenses
        this.budjetResource = x24; //6. BUDJET (PLAN 01: FINANCEMENT PREVISIONNEL): Resources
        this.bibliography = x25; //7. Références BiBLIOGRAPHIQUES    
    }
}

class sonaUserInfo{
    constructor(x1, x2, x3, x4, x5, x6, x7, x8){
        this.sona = x1;
        this.email = x2;
        this.firstName = x3;
        this.familyName = x4;
        this.password = x5;
        this.jobTitle = x6;
        this.jobGrade = x7;
        this.organism = x8;
    }
}

var sonaUserList = [], nUsers = 100
for(let i = 0; i < nUsers; i++){
    var sona = "sona" + ("000" + i).slice(-4),
    firstName = randV() + randV(),
    familyName = randV() + randV(),
    email = firstName + "." + familyName + "@sonatrach.dz",
    password = randV() + randV() + randV() + randV() + randV()
    sonaUserList[i] = new sonaUserInfo(sona, email, firstName, familyName, password, "", "", "");
}
class taskAssignement{
    constructor(x1, x2 = [], x3 =[]){
        this.sona = x1;
        this.engagementRate = x2;
        this.task = x3;
    }
}

class chartGantt{
    constructor(x1, x2, x3, x4, x5){
        this.task = x1;
        this.yearStart = x2;
        this.quarterStart = x3;
        this.yearEnd = x4;
        this.quarterEnd = x5;
    }
}

class evaluationSheet{
    constructor(x1, x2, x3, x4){
        this.researcher = x1;
        this.evaluator = x2;
        this.date = x3;
        this.rate = x4;
    }
}

class evaluationGrid{
    constructor(x0, x1, x2, x3, x4){
        this.indicatorClass = x0;
        this.indicator = x1;
        this.low = x2;
        this.medium = x3;
        this.high = x4;
    }
}

class satisfactionQuiz{
    constructor(x1, x2 = []){
        this.question = x1;
        this.answer = x2;
    }
}

const 
    evaluationProjectManager = [new evaluationGrid(1, "Respect des delais", 4, 7, 10), new evaluationGrid(1, "Efficacite dans le travail", 4, 7, 10),
        new evaluationGrid(1, "Importance de chaque tache (mission d'echantillonnage, voyage, manipulation ... )", 4, 9, 15),
        new evaluationGrid(1, "Initiative scientifique", 4, 7, 10), new evaluationGrid(1, "Resultats livrés", 4, 9, 15), new evaluationGrid(1, "Discipline", 4, 7, 10)],
    evaluationRDProjectsManager = [new evaluationGrid(1, "La capacite d'assurer plusieurs taches dans les projets federateurs", 4, 7, 10), 
        new evaluationGrid(1, "Etat d'avancement des taches planifiees et respect des delais fixes", 4, 7, 10), new evaluationGrid(1, "Position dans les pro jets (Porteur, membre, collaborateur)", 4, 7, 10),
        new evaluationGrid(1, "La relevance du projet avec les besoins", 4, 7, 10), new evaluationGrid(1, "Importance du projet et confidentialite", 4, 7, 10), 
        new evaluationGrid(2, "Publication indexee", 9, 9, 15), new evaluationGrid(2, "Publication non indexee", 9, 9, 10), new evaluationGrid(2, "Position d'auteur dans la publication", 0, 0, 5), 
        new evaluationGrid(2, "Brevets", -1, -1, 10), new evaluationGrid(2, "Communication internationale ( orale ou poster)", -1, -1, 10), new evaluationGrid(2, "Communication nationale", -1, -1, 5), 
        new evaluationGrid(2, "Ouvrage scientifique", -1, -1, 10), new evaluationGrid(2, "Contribution d'encadrement PhD, PFE ou Licence", -1, -1, 10), new evaluationGrid(2, "Participation dans les soutenances", -1, -1, 10), 
        new evaluationGrid(2, "Participation dans l'organisation des conferences techniques et scientifiques.", -1, -1, 10), new evaluationGrid(2, "Membre de comite de lecture dans une revue scientifique", -1, -1, 10), new evaluationGrid(2, "Conventions et collaborations scientifiques", -1, -1, 10), 
        new evaluationGrid(3, "Participation dans des comites scientifique et technique et CEVT", -1, -1, 5), new evaluationGrid(3, "Participation dans un comite technique : Achat, inspection", -1, -1, 10), new evaluationGrid(3, "Reunions", -1, -1, 5), 
        new evaluationGrid(4, "Respect du budget associe a chaque tache", -1, -1, 10), new evaluationGrid(4, "L' importance du gain financiere rapporte (repartition)", -1, -1, 10)],
    evaluationClient = [new evaluationGrid(1, "Satisfaction du client", 4, 7, 10), new evaluationGrid(1, "Respect des delais", 4, 7, 10),
        new evaluationGrid(1, "Satisfaction apres les seances de travail", 4, 5, 10), new evaluationGrid(1, "Serieux et respect professionnel", 2, 4, 5), new evaluationGrid(1, "Citation scientifique", 2, 4, 5)],
    clientSatisfactionQuiz = [new satisfactionQuiz("C'est la 1ere fois que vous beneficiez d'un projet de recherche applique realise par la DC R&D?", ["Oui", "Non"]), 
        new satisfactionQuiz("L'initiateur de ce projet de recherche applique c'est :", ["DC R&D", "Votre Structure", "Autre"]), 
        new satisfactionQuiz("Ce projet repond-il a VOS attentes?", ["Au-dela de mes attentes", "Qui tout a fait", "Partiellemen", "Pas du tout"]), 
        new satisfactionQuiz("Pensez-vous que ce projet permettra d'atteindre l'objectif pratique recherche?", ["Oui", "Non"]), 
        new satisfactionQuiz("Degre de satisfaction : Qualite des etudes de recherches fournies", ["10%", "30%", "50%", "70%", "80%", "90%", "100%"]), 
        new satisfactionQuiz("Degre de satisfaction : Competences techniques du personnel dtid ie ace projet", ["10%", "30%", "50%", "70%", "80%", "90%", "100%"]), 
        new satisfactionQuiz("Degre de satisfaction : Expertise des chercheurs", ["10%", "30%", "50%", "70%", "80%", "90%", "100%"]), 
        new satisfactionQuiz("Degre de satisfaction : Respect des dtilais (etudes et livraison projet)", ["10%", "30%", "50%", "70%", "80%", "90%", "100%"]), 
        new satisfactionQuiz("Degre de satisfaction : Performance de la solution", ["10%", "30%", "50%", "70%", "80%", "90%", "100%"]), 
        new satisfactionQuiz("Degre de satisfaction : Relationnel, rtiactivite et communication avec la structure btineficiaire", ["10%", "30%", "50%", "70%", "80%", "90%", "100%"]), 
        new satisfactionQuiz("Degre de satisfaction : Organisation et Planification du projet", ["10%", "30%", "50%", "70%", "80%", "90%", "100%"]), 
        new satisfactionQuiz("Degre de satisfaction : Capacites deployties pour ce projet", ["10%", "30%", "50%", "70%", "80%", "90%", "100%"]), 
        new satisfactionQuiz("Degre de satisfaction : Collaboration entre les differentes acteurs du projet", ["10%", "30%", "50%", "70%", "80%", "90%", "100%"]), 
        new satisfactionQuiz("Degre de satisfaction : Satisfaction globale", ["10%", "30%", "50%", "70%", "80%", "90%", "100%"]), 
        new satisfactionQuiz("Pensez-vous que les contraintes rencontrees son! reglees en temps opportun", ["Oui", "Non"]), 
        new satisfactionQuiz("Pensez-vous que les reunions tenues avec votre equipe son! assez regulieres et structurees pour resoudre les problemes poses et eviler les retards significatifs?", ["Oui", "Non"]), 
        new satisfactionQuiz("Comment noire equipe de chercheurs interagit-elle avec votre equipe operationnelle durant toutes les phases du projet?", ["Peu ou pas d'interactions", "Reunions regulieres", "Reunions conduites pour resoudre les problemes rencontrees"]), 
        new satisfactionQuiz("Pensez-vous que votre equipe est suffisamment impliquee lors de la phase finale du projet pour se familiariser avec l'equipemenUSolution coni;:u ?", ["Peu ou pas impliquee", "Bien impliquee", "Une formation in situe de noire equipe est recommandee"]), 
        new satisfactionQuiz("Que pensez-vous de noire equipe dediee au projet?", ["Manque de Competences necessaires", "Competences elevees dans certains domaines", "Competences exceptionnelles"]), 
        new satisfactionQuiz("Avez-vous des suggestions pour ameliorer noire Technicite/recherche?", ["Oui", "Non"])]


var totalProjectsNumber = 10, projectSheetList = []

for(let i = 0; i < totalProjectsNumber; i++){
    var projectAnalyticalCode = "code projet " + i, 
    state = randV(constStatus),
    researchAxe = randV(constResearchAxe), 
    projectTitle = "Intitulé du projet de recherche : " + randV() + " " + randV() + " " + randV() + " " + randV() + " " + randV() + " " + randV() + " " + randV() + " " + randV() + " " + randV(),
    laboratory = "laboratoire " + randV() + " " + randV() + " " + randV() + " " + randV() + " " + randV(), 
    nClient   = randN(constDivisionName[0].length) + 1, client = [],
    nKeywords = randN(11), keyword = [],
    projectHolder = sonaUserList[randN(sonaUserList.length)].sona,
    partner = randV() + " " + randV(),
    nTeam = randN(11), projectTeam = [],
    summary = "Résumé : ",
    ProjectObjectif = "Objectifs de projet : ",
    StateOfArt = "2tat de l'art : ",
    approachMetgodology = "Approche et méthodologie : ",
    expectedResults = "Résultats attendus : ",
    nITeam = randN(11), projectImplimentationTeam = [],
    nTaches = randN(21), chartGantts = [], 
    taskAssignements = [],
    exestingEquipement = "equipement existant : ",
    acquiredEquipement = "Equipement à acquillir : ",
    consumable = "Consommables : ",
    trainingNeed = "Besoin en formation : ",
    assistanceNeed = "Besoin en assistance : ",
    DocumentaryResource = "Resources documentaires disponibles : ",
    nExpences = randN(21), budjetExpense = [],
    nResources = randN(21), budjetResource = [],
    nBiblio = randN(100); bibliography = [],
    startDate = [2015 + randN(9), 1],
    endDate = [startDate[0] + 4, 4] 
    if (endDate[1] > 4){endDate[1] = 4};
    for(let j = 1; j < 100; j++){summary = summary + randV() + " ";}   
    for(let j = 1; j < 50; j++){ProjectObjectif = ProjectObjectif + randV() + " ";}
    for(let j = 1; j < 200; j++){StateOfArt = StateOfArt + randV() + " ";}
    for(let j = 1; j < 100; j++){approachMetgodology = approachMetgodology + randV() + " ";}   
    for(let j = 1; j < 20; j++){expectedResults = expectedResults + randV() + " ";}
    for(let j = 1; j < 30; j++){exestingEquipement = exestingEquipement + randV() + " ";}
    for(let j = 1; j < 30; j++){acquiredEquipement = acquiredEquipement + randV() + " ";}   
    for(let j = 1; j < 30; j++){consumable = consumable + randV() + " ";}
    for(let j = 1; j < 100; j++){trainingNeed = trainingNeed + randV() + " ";}
    for(let j = 1; j < 100; j++){assistanceNeed = assistanceNeed + randV() + " ";}     
    for(let j = 1; j < 100; j++){DocumentaryResource = DocumentaryResource + randV() + " ";}
    for(let j = 1; j < nTeam; j++){projectTeam[j] = sonaUserList[randN( sonaUserList.length)].sona;}
    for(let j = 1; j < nITeam; j++){projectImplimentationTeam[j] = sonaUserList[randN(sonaUserList.length)].sona;}
    for(let j = 1; j < nExpences; j++){budjetExpense[j] = randN(1000);}
    for(let j = 1; j < nResources; j++){budjetResource[j] = randN(1000);}  
    for(let j = 0; j < nClient; j++){client[j] = randV(constDivisionName[0]);}   
    for(let j = 1; j < nBiblio; j++){bibliography[j] = "auteures" + j + ", titre de référence " + j + ". éditeurs " + j + j + ", Date (" + j + ")";}

    chartGantts[0] = new chartGantt(projectAnalyticalCode, startDate[0], startDate[1], endDate[0], endDate[1]);

    for(let j = 1; j <= nTaches; j++){
        chartGantts[j] = new chartGantt();
        chartGantts[j].task = randV() + " " + randV() + " " + randV() + " " + randV() + " " + randV();
        chartGantts[j].yearStart = startDate[0] + randN(3);
        chartGantts[j].quarterStart = 1 + randN(4);
        var taskLength = randN(4)
        chartGantts[j].quarterEnd = chartGantts[j].quarterStart + taskLength;    
        chartGantts[j].yearEnd = chartGantts[j].yearStart;
        if(chartGantts[j].quarterEnd > 4){
            chartGantts[j].quarterEnd = chartGantts[j].quarterEnd - 4;    
            chartGantts[j].yearEnd = chartGantts[j].yearEnd + 1;
        }
    }
    for(let j = 0; j < nTeam; j++){
        taskAssignements[j] = new taskAssignement();
        ntsk = randN(5);
        for(let k = 0; k < ntsk; k++){
            taskAssignements[j].task[k] = chartGantts[randN(chartGantts.length)].task;
            taskAssignements[j].engagementRate[k] = randN(100);
        }
        taskAssignements[j].sona = randV(projectTeam);
    }
    projectSheetList[i] = new projectSheet(projectAnalyticalCode, state, researchAxe, projectTitle, laboratory, client, keyword, projectHolder, partner, 
        projectTeam, summary, ProjectObjectif, StateOfArt, approachMetgodology, expectedResults, projectImplimentationTeam, chartGantts, taskAssignements, 
        exestingEquipement, acquiredEquipement, consumable, trainingNeed, assistanceNeed, DocumentaryResource, budjetExpense, budjetResource, bibliography);
}   
var nProjPED = nProjPr = nProjExp = nProjLab = nProjAst = nProjFor = 0,
    nProjPED1 = nProjPr1 = nProjExp1 = nProjLab1 = nProjAst1 = nProjFor1 = 0,
    nProjPED2 = nProjPr2 = nProjExp2 = nProjLab2 = nProjAst2 = nProjFor2 = 0
    nProjPED3 = nProjPr3 = nProjExp3 = nProjLab3 = nProjAst3 = nProjFor3 = 0
    nProjPED4 = nProjPr4 = nProjExp4 = nProjLab4 = nProjAst4 = nProjFor4 = 0
for(let i = 0; i < totalProjectsNumber; i++){
    if(projectSheetList[i].client.includes("ped")){
        nProjPED = nProjPED + 1
        if(projectSheetList[i].state.includes("En attente")){nProjPED1 = nProjPED1 + 1}
        if(projectSheetList[i].state.includes("En cours")){nProjPED2 = nProjPED2 + 1}
        if(projectSheetList[i].state.includes("Réalisé")){nProjPED3 = nProjPED3 + 1}
        if(projectSheetList[i].state.includes("Annulé")){nProjPED4 = nProjPED4 + 1}
    }
    if(projectSheetList[i].client.includes("exp")){
        nProjExp = nProjExp + 1
        if(projectSheetList[i].state.includes("En attente")){nProjExp1 = nProjExp1 + 1}
        if(projectSheetList[i].state.includes("En cours")){nProjExp2 = nProjExp2 + 1}
        if(projectSheetList[i].state.includes("Réalisé")){nProjExp3 = nProjExp3 + 1}
        if(projectSheetList[i].state.includes("Annulé")){nProjExp4 = nProjExp4 + 1}
    }
    if(projectSheetList[i].client.includes("pr")) {
        nProjPr  = nProjPr + 1
        if(projectSheetList[i].state.includes("En attente")){nProjPr1 = nProjPr1 + 1}
        if(projectSheetList[i].state.includes("En cours")){nProjPr2 = nProjPr2 + 1}
        if(projectSheetList[i].state.includes("Réalisé")){nProjPr3 = nProjPr3 + 1}
        if(projectSheetList[i].state.includes("Annulé")){nProjPr4 = nProjPr4 + 1}
    }
    if(projectSheetList[i].client.includes("for")){
        nProjFor = nProjFor + 1
        if(projectSheetList[i].state.includes("En attente")){nProjFor1 = nProjFor1 + 1}
        if(projectSheetList[i].state.includes("En cours")){nProjFor2 = nProjFor2 + 1}
        if(projectSheetList[i].state.includes("Réalisé")){nProjFor3 = nProjFor3 + 1}
        if(projectSheetList[i].state.includes("Annulé")){nProjFor4 = nProjFor4 + 1}
    }
    if(projectSheetList[i].client.includes("ast")){
        nProjAst = nProjAst + 1
        if(projectSheetList[i].state.includes("En attente")){nProjAst1 = nProjAst1 + 1}
        if(projectSheetList[i].state.includes("En cours")){nProjAst2 = nProjAst2 + 1}
        if(projectSheetList[i].state.includes("Réalisé")){nProjAst3 = nProjAst3 + 1}
        if(projectSheetList[i].state.includes("Annulé")){nProjAst4 = nProjAst4 + 1}
    }
    if(projectSheetList[i].client.includes("lab")){
        nProjLab = nProjLab + 1
        if(projectSheetList[i].state.includes("En attente")){nProjLab1 = nProjLab1 + 1}
        if(projectSheetList[i].state.includes("En cours")){nProjLab2 = nProjLab2 + 1}
        if(projectSheetList[i].state.includes("Réalisé")){nProjLab3 = nProjLab3 + 1}
        if(projectSheetList[i].state.includes("Annulé")){nProjLab4 = nProjLab4 + 1}
    }
}

class projectsByYear{
    constructor(x1, x2 = [], x3 = [], x4 = []){
        this.year = x1;
        this.totalProj = x2;
        this.endedProj = x3;
        this.newProj = x4;
    }
}

var yearlyProjets = [], nProjYear = [[], [], [], [], [], []]
for(let k = 2015; k <= 2023; k++){
    nProjYear[0][k - 2015] = k;
    nProjYear[1][k - 2015] = 0;
    nProjYear[2][k - 2015] = 0;
    nProjYear[3][k - 2015] = 0;
}
for(let k = 2015; k <= 2023; k++){
    j1 = j2 = j3 = 0;
    yearlyProjets[k - 2015] = new projectsByYear();
    yearlyProjets[k - 2015].year = k;
    for(let i = 0; i < totalProjectsNumber; i++){
        if(k >= projectSheetList[i].chartGantt[0].yearStart && k <= projectSheetList[i].chartGantt[0].yearEnd){
            yearlyProjets[k - 2015].totalProj[j1] = projectSheetList[i];
            j1 = j1 + 1;
            nProjYear[1][k - 2015] = nProjYear[1][k - 2015] + 1;
        }
        if(k == projectSheetList[i].chartGantt[0].yearEnd){
            yearlyProjets[k - 2015].endedProj[j2] = projectSheetList[i];
            j2 = j2 + 1;
            nProjYear[2][k - 2015] = nProjYear[2][k - 2015] + 1;
        }
        if(k == projectSheetList[i].chartGantt[0].yearStart){
            yearlyProjets[k - 2015].newProj[j3] = projectSheetList[i];
            j3 = j3 + 1;
            nProjYear[3][k - 2015] = nProjYear[3][k - 2015] + 1; 
        }          
    }  
}
nProjYear[4][0] = nProjYear[3][0];
nProjYear[5][0] = nProjYear[2][0];
for(k = 2016; k <= 2023; k++){
    nProjYear[4][k - 2015] = nProjYear[4][k - 2015 - 1] + nProjYear[3][k - 2015];
    nProjYear[5][k - 2015] = nProjYear[5][k - 2015 - 1] + nProjYear[2][k - 2015];
}
var kpi1 = []
for(let i = 0; i < totalProjectsNumber; i++){
    if(projectSheetList[i].chartGantt[0].yearEnd < 2023) {kpi1 = 100} else{kpi = randN(100)}
}


