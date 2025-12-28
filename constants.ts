
export const COURSE_TEXT = `
LA PRATIQUE RÉFLEXIVE CHEZ LES ENSEIGNANTS
Philippe CLAUZARD - MCF Université de La Réunion
ESPE / ICARE - Février-Mars 2019
Document de travail - Synthèse des concepts clés

Professionnalisation en milieu enseignant
Selon Philippe Perrenoud, la question de professionnalisation en milieu enseignant est une expression ambiguë parce qu'elle pourrait laisser entendre qu'il s'agit de faire enfin accéder l'activité d'enseignant au statut de métier alors que cette évolution est accomplie depuis le 19e siècle.
En fait, cette expression tient plutôt à un recentrage de la formation : dans un premier temps la formation s'est centrée essentiellement sur la maîtrise des savoirs à enseigner, seulement depuis peu qu'on accorde inégalement selon le niveau d'enseignement une certaine importance à la maîtrise théorique et pratique des processus d'enseignement et d'apprentissage.
La professionnalisation du métier d'enseignant pourrait s'entendre comme une forte accentuation de la part professionnellement pragmatique (qui ne va pas pour autant sans théorie de l'activité et de la tâche).
La formation des enseignants est censée aller au-delà de la simple maîtrise des contenus enseignés.
Un professionnel de l'enseignement-apprentissage est censé désormais réunir les compétences du concepteur et d'exécutant/animateur de la formation. Il identifie le problème, le pose et imagine, met en œuvre une solution. Il assure ensuite le suivi.
"Il ne connaît pas d'avance la solution des problèmes qui se présenteront dans sa pratique. Il doit chaque fois la construire sur le vif, parfois dans le stress et sans disposer de toutes les données nécessaires à une décision éclairée et non contestable." - Philippe Perrenoud

La pratique réflexive : fondements et concepts
En dépit de ses nombreuses ressources professionnelles, les situations complexes apparaissent toujours pour le professionnel comme singulières. Elles exigent une démarche de résolution de problèmes, une forme d'invention, plutôt que l'application d'un répertoire de recettes toutes prêtes.
Jobert explique que la compétence professionnelle peut se concevoir comme la capacité de gérer l'écart entre travail prescrit et travail réel.
Autonomie et prescription dans les métiers de l'humain
Perrenoud nous explique que dans les métiers de l'humain, la part du prescriptible est plus faible que dans les métiers techniques. L'autonomie et la responsabilité d'un professionnel qui forment la professionnalisation ne vont pas sans une forte capacité de réfléchir dans et sur son action.

Le praticien réflexif : un paradigme intégrateur
C'est ainsi que la figure du praticien réflexif est au cœur de la professionnalisation, considérée sous l'angle de l'expertise et de l'intelligence au travail.
Il faut distinguer la posture réflexive du professionnel d'une réflexion épisodique de chacun sur ce qu'il fait. Une véritable pratique réflexive exige que cette posture devienne quasi permanente.
Schon a conceptualisé plus explicitement la figure du praticien réflexif en proposant dès 1978, une véritable épistémologie de la pratique.

Réflexion dans l'action vs Réflexion sur l'action
La réflexion dans le feu de l'action : microdécisions rapides, souvent pré-réfléchies, à la limite de la conscience.
La réflexion hors du feu de l'action : rétrospective (bilan de ce qui a fonctionné) et prospective (planification, anticipation).

De la réflexion occasionnelle à la pratique réflexive
Un praticien réflexif ne se contente pas de ce qu'il a appris en formation initiale. Il réexamine constamment ses objectifs, ses démarches, ses évidences, ses savoirs.
Il entre dans une boucle sans fin de perfectionnement parce qu'il théorise lui-même sa pratique.
`;

export const SYSTEM_INSTRUCTION = `
Tu es un expert en sciences de l'éducation, chargé d'évaluer les connaissances d'un étudiant sur le cours "La Pratique Réflexive chez les Enseignants" de Philippe Clauzard.

Tes objectifs :
1. Saluer l'étudiant et commencer par une première question pertinente basée sur le texte fourni.
2. Poser une seule question à la fois.
3. Après chaque réponse de l'étudiant :
   - Évaluer la précision et la profondeur de sa réponse par rapport aux concepts du cours (Perrenoud, Schon, Jobert, réflexion dans/sur l'action, etc.).
   - Donner un feedback constructif : corriger si nécessaire, compléter les manques, ou féliciter pour la pertinence.
   - Poser la question suivante pour explorer un autre concept clé.
4. Après environ 5 à 6 questions, fais une synthèse finale du niveau de compréhension de l'étudiant et mets fin à l'évaluation.

Ton ton doit être pédagogique, professionnel et encourageant.
Utilise exclusivement le contenu du texte fourni pour tes questions et évaluations.
Réponds toujours en français.
`;
