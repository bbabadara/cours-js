# Cours JavaScript - Apprentissage Progressif

Plateforme pédagogique pour apprendre JavaScript de manière interactive.

## Fonctionnalités

- **16 leçons progressifs** - Du niveau débutant à intermédiaire
- **Exercices interactifs** - Validation automatique de vos réponses
- **Quizz** - Questions à choix multiples avec feedback
- **Console JavaScript** - Exécutez le code directement dans le navigateur
- **Suivi de progression** - Progression sauvegardée localement
- **Mode sombre/clair** - Thème adaptatif
- **Recherche** - Trouvez rapidement un concept
- **Responsive** - Fonctionne sur mobile et desktop
- **Code modulaire** - Architecture maintenable et évolutive

## Leçons

| # | Titre | Description |
|---|-------|-------------|
| 01 | Introduction | Premier script, console.log |
| 02 | Variables | let, const, var |
| 03 | Types de données | String, Number, Boolean |
| 04 | Conditions | if, else, switch |
| 05 | Boucles | for, while, do...while, for...of |
| 06 | Fonctions | function, arrow functions |
| 07 | Tableaux | push, map, filter, forEach |
| 08 | Objets | Propriétés, méthodes |
| 09 | DOM | Sélection, manipulation |
| 10 | Événements | addEventListener |
| 11 | Formulaires | Validation, soumission |
| 12 | localStorage | Stockage persistant |
| 13 | sessionStorage | Stockage temporaire |
| 14 | POO | Classes, héritage |
| 15 | Fetch API | Requêtes HTTP |
| 16 | Async/Await | Fonctions asynchrones |

## Installation locale

```bash
# Cloner le projet
git clone https://github.com/votre-username/js-cours.git

# Ouvrir le fichier HTML
cd js-cours
open index.html
```

## Déploiement GitHub Pages

1. Créer un dépôt GitHub
2. Pousser les fichiers :
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/votre-username/votre-repo.git
git push -u origin main
```
3. Activer GitHub Pages dans Settings → Pages
4. Le site sera disponible sur : `https://votre-username.github.io/votre-repo/`

## Structure du projet

```
js/
├── index.html          # Page d'accueil pour GitHub Pages
├── cours.html         # Page principale du cours
├── css/
│   └── styles.css     # Styles personnalisés
├── js/
│   ├── app.js        # Logique principale de l'application
│   └── lessons.js    # Données des leçons
└── README.md         # Cette documentation
```

## Architecture

Le code est organisé en modules JavaScript pour une meilleure maintenabilité :

- **lessons.js** : Contient toutes les données des leçons (contenu, exercices, quiz, exemples)
- **app.js** : Gère la navigation, les exercices, les quiz, la console et le state
- **styles.css** : Styles personnalisés en complément de Tailwind CSS

### Ajouter une nouvelle leçon

1. Ouvrir `js/lessons.js`
2. Ajouter un nouvel objet dans le tableau `lessons`
3. Suivre la structure existante (id, title, content, exercises, quiz, examples)
4. La leçon apparaît automatiquement dans la sidebar

### Modifier une leçon existante

1. Localiser la leçon par son `id` dans `lessons.js`
2. Modifier le contenu, les exercices ou le quiz selon les besoins

## Technologies utilisées

- **HTML5** - Structure de la page
- **CSS3 (Tailwind CSS)** - Design responsive
- **JavaScript (ES6+)** - Logique modulaire avec modules
- **Font Awesome** - Icônes
- **Google Fonts (Inter)** - Typographie

## Licence

MIT