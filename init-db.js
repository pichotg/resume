db.formation.insert({
    "formation": "BAC STI2D",
    "detail": "Sciences et technologies de l'industrie et du développement durable",
    "periode": "2014 - 2016",
    "description": "Option Systèmes d'information et numérique (SIN)",
    "tags" : [
        "javascript",
        "html",
        "css",
        "C",
        "Arduino",
    ]
});
db.formation.insert({
    "formation": "BTS SIO",
    "detail": "Services informatiques aux organisations",
    "periode": "2016 - 2018",
    "description": "Option Solutions logicielles et applications métiers (SLAM)",
    "tags" : [
        "silex",
        "mysql",
        "Plsql",
        "MongoDB",
        "bootsrap",
        "jquery",
        "Android"
    ]
});

db.formation.insert({
    "formation": "ENI CDA",
    "detail": "Concepteur Développeur d'Applications",
    "periode": "2018 - 2020",
    "description": "formation en alternant alternant à Strigi-form",
    "programme": [
        "Le langage de requête SQL avec SQL Server",
        "Les procédures stockées avec PL-SQL",
        "La Programmation Orientée Objet (POO) avec Java",
        "Le développement en couches et la persistance des données avec Java SE",
        "Le développement web côté serveur - BackEnd avec Java EE",
        "Projet 1 - Développement d'une application structurée en couches",
        "Analyse et conception d'une application JavaScript",
        "Le développement web côté serveur - BackEnd avec PHP et Symfony",
        "Projet 2 - Développement d'une application web",
        "Développement d'application à l'aide d'un CMS",
        "Le développement d'une application mobile avec Android",
        "L'utilisation de frameworks pour le développement avec Java EE",
        "La conduite et la gestion de projets",
        "L'administration d'un serveur Apache sous Linux",
        "Le développement web côté serveur - BackEnd avec ASP.Net",
        "Le développement cross plateforme"
    ],
    "tags" : [
        "symfony 3.4",
        "Java Spring",
        "Android",
    ],
});

db.experience.insert({
    "entreprise" : "Strigi-Form",
    "poste": "Dévlopper full-stack",
    "periode": "2018 - 2020",
    "description": "réaslisaion doc",
    "adresse" : "futuroscop Centre des entreprise innovantes",
    "tags" : [
        "golang",
        "react.js",
        "webpack",
        "node.js",
        "influxDB",
        "sass",
        "raspberry pi",
        "python"
    ],
});

db.experience.insert({
    "entreprise" : "IANESCO SAS",
    "poste": "Dévlopper full-stack",
    "periode": "5 semaines - 2017",
    "description": "Adaptation des outils pour mise en place d’un SIRH de gestion des absences synchronisé avec le système de paye réalisé avec node.js et electronjs",
    "adresse" : " 6 Rue Carol Heitz, 86000 Poitiers",
    "tags" : [
        "electron.js",
        "node.js",
    ],
});
db.experience.insert({
    "entreprise" : "Cabinet Sorgniard",
    "poste": "Dévlopper web",
    "periode": "5 semaines - 2016",
    "description": "Réalisation du site du restaurant « la crêperie Chaperon rouge »comportant un système d’actualité, une carte des plats et une page contact comportant un formulaire d’envoi de mail et de demande de réservation avec WordPress",
    "adresse" : "Tours",
    "tags" : [
        "wordpress",
    ],
});

db.experience.insert({
    "entreprise" : "Arch Services",
    "poste": "Technicien de Maintenance Industrielle",
    "periode": "ETE 2016/2017",
    "description": "Intervention chez Valéo...",
    "adresse" : "4 Avenue de l'Europe, 86360 Chasseneuil-du-Poitou",
    "tags" : [
        "electrique",
        "mecanique",
        "usinage",
        "mécanique des fluides",
    ],
});


db.technologie.insert({
    "name": "Go",
    "details": "An open source programming language that makes it easy to build simple and efficient software."
});
db.technologie.insert({
    "name": "MongoDB",
    "details": "A general purpose, document-based, distributed database."
});
db.technologie.insert({
    "name": "React",
    "details": "A Js library for building user interfaces."
});
db.technologie.insert({
    "name": "Axios.js",
    "details": "A Js library for Promise based HTTP client"
});

db.technologie.insert({
    "name": "Vanta.js",
    "details": "Animated website backgrounds"
});

db.technologie.insert({
    "name": "Ant Design React",
    "details": "React UI components library"
});

db.technologie.insert({
    "name": "Docker",
    "details": "virtualization software"
});