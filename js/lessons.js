// =============================================================================
// COURS JAVASCRIPT - DONNÉES DES LEÇONS
// =============================================================================
// Ce fichier contient toutes les données des leçons de manière structurée
// =============================================================================

export const lessons = [
    // =============================================================================
    // LEÇON 1: INTRODUCTION
    // =============================================================================
    {
        id: 'intro',
        title: 'Introduction à JavaScript',
        number: 1,
        duration: '10 min',
        objectives: [
            'Comprendre ce qu\'est JavaScript',
            'Savoir où placer le code JavaScript',
            'Écrire votre premier script',
            'Utiliser la console du navigateur'
        ],
        content: `
            <h3 class="text-2xl font-bold mb-4">Qu\'est-ce que JavaScript ?</h3>
            <p class="mb-4">JavaScript est un langage de programmation <strong>interprété</strong>, c'est-à-dire qu'il est exécuté directement par le navigateur sans compilation préalable. Il a été créé en 1995 par Brendan Eich.</p>
            
            <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6">
                <h4 class="font-semibold text-blue-600 dark:text-blue-400 mb-2">💡 Point clé</h4>
                <p>JavaScript est le seul langage de programmation exécuté nativement dans les navigateurs web. C'est un pilier du développement web alongside HTML et CSS.</p>
            </div>

            <h3 class="text-2xl font-bold mb-4">À quoi sert JavaScript ?</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
                <li>Rendre les pages web <strong>interactives</strong></li>
                <li>Créer des applications web modernes (SPA)</li>
                <li>Développer des applications mobiles (React Native, Cordova)</li>
                <li>Programmer côté serveur (Node.js)</li>
                <li>Créer des jeux et animations</li>
            </ul>

            <h3 class="text-2xl font-bold mb-4">Où placer le code JavaScript ?</h3>
            
            <div class="space-y-4">
                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <h4 class="font-medium text-yellow-500 mb-2">1. Dans une balise &lt;script&gt;</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Placez le code directement dans votre fichier HTML.</p>
                    <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-html"><!DOCTYPE html>
<html>
<head>
    <title>Ma page</title>
</head>
<body>
    <h1>Bonjour</h1>
    <script>
        console.log("Mon premier script!");
    </script>
</body>
</html></code></pre>
                </div>

                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <h4 class="font-medium text-yellow-500 mb-2">2. Dans un fichier externe</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Meilleure pratique pour organiser votre code.</p>
                    <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-html"><script src="js/script.js"></script></code></pre>
                </div>

                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <h4 class="font-medium text-yellow-500 mb-2">3. Dans la console du navigateur</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Utile pour tester rapidement du code.</p>
                    <ol class="list-decimal list-inside text-sm text-gray-600 dark:text-gray-400">
                        <li>Appuyez sur <kbd>F12</kbd> ou <kbd>Ctrl+Shift+I</kbd></li>
                        <li>Allez dans l'onglet "Console"</li>
                        <li>Tapez votre code et appuyez sur Entrée</li>
                    </ol>
                </div>
            </div>

            <h3 class="text-2xl font-bold mb-4 mt-6">La console JavaScript</h3>
            <p class="mb-4">La console est un outil essentiel pour le développeur. Elle permet d'afficher des messages et de déboguer votre code.</p>
            
            <div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h4 class="font-semibold text-green-600 dark:text-green-400 mb-2">console.log()</h4>
                <p>Affiche un message dans la console. C'est la méthode la plus utilisée pour le débogage.</p>
                <pre class="bg-gray-900 p-3 rounded text-sm mt-2"><code class="language-javascript">console.log("Hello World!");
console.log(42);
console.log(["pomme", "banane"]);</code></pre>
            </div>
        `,
        exercises: [
            {
                id: 'intro-ex1',
                question: 'Écrivez le code pour afficher "Bonjour" dans la console',
                answer: 'console.log("Bonjour")',
                hint: 'Utilisez la fonction console.log()'
            },
            {
                id: 'intro-ex2',
                question: 'Créez une variable "message" contenant "Bienvenue" et affichez-la',
                answer: 'let message = "Bienvenue"; console.log(message)',
                hint: 'Déclarez d\'abord une variable avec let, puis affichez-la'
            }
        ],
        quiz: [
            {
                id: 'intro-q1',
                question: 'Quelle fonction permet d\'afficher un message dans la console ?',
                options: ['console.log()', 'print()', 'echo()', 'write()'],
                correct: 'console.log()'
            },
            {
                id: 'intro-q2',
                question: 'Où peut-on placer le code JavaScript ?',
                options: ['Dans une balise <script>', 'Dans un fichier .js externe', 'Dans la console du navigateur', 'Toutes les réponses'],
                correct: 'Toutes les réponses'
            }
        ],
        examples: [
            {
                title: 'Premier script',
                code: 'console.log("Hello World !");'
            }
        ]
    },

    // =============================================================================
    // LEÇON 2: VARIABLES
    // =============================================================================
    {
        id: 'variables',
        title: 'Les Variables',
        number: 2,
        duration: '15 min',
        objectives: [
            'Comprendre ce qu\'est une variable',
            'Savoir déclarer une variable avec let, const et var',
            'Connaître la différence entre ces trois méthodes',
            'Bonnes pratiques de nommage'
        ],
        content: `
            <h3 class="text-2xl font-bold mb-4">Qu\'est-ce qu\'une variable ?</h3>
            <p class="mb-4">Une variable est un <strong>conteneur</strong> qui permet de stocker une donnée en mémoire. On peut la voir comme une boîte étiquetée qui contient une valeur.</p>
            
            <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6">
                <h4 class="font-semibold text-blue-600 dark:text-blue-400 mb-2">📦 Analogie</h4>
                <p>Imaginez une variable comme une boîte postale. La boîte a un numéro (le nom de la variable) et peut contenir une lettre (la valeur).</p>
            </div>

            <h3 class="text-2xl font-bold mb-4">Déclarer une variable</h3>
            
            <div class="space-y-4">
                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <h4 class="font-medium text-yellow-500 mb-2">let - Variable modifiable</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Utilisé pour des valeurs qui peuvent changer.</p>
                    <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">let nom = "Alice";  // Déclaration avec initialisation
let age;             // Déclaration sans valeur (undefined)
age = 25;            // Attribution ultérieure</code></pre>
                    <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="let nom = 'Alice'; let age = 25; console.log('Nom:', nom); console.log('Age:', age);">
                        <i class="fas fa-play mr-1"></i>Exécuter
                    </button>
                </div>

                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <h4 class="font-medium text-yellow-500 mb-2">const - Constante</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Utilisé pour des valeurs qui ne changent pas.</p>
                    <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">const PI = 3.14159;      // Doit être initialisée
const NOM = "MonApp";    // Convention: majuscules
// const URL;  ERREUR: doit être initialisée</code></pre>
                    <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="const PI = 3.14159; const NOM = 'MonApp'; console.log('PI:', PI); console.log('NOM:', NOM);">
                        <i class="fas fa-play mr-1"></i>Exécuter
                    </button>
                </div>

                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <h4 class="font-medium text-yellow-500 mb-2">var - Ancien style (éviter)</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Ancienne méthode, privilégier let et const.</p>
                    <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">var ancienStyle = "à éviter";</code></pre>
                </div>
            </div>

            <h3 class="text-2xl font-bold mb-4 mt-6">Portée des variables (Scope)</h3>
            
            <div class="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mb-6">
                <h4 class="font-semibold text-yellow-600 dark:text-yellow-400 mb-2">⚠️ Différence importante</h4>
                <ul class="list-disc list-inside space-y-1">
                    <li><code class="text-yellow-500">let</code> et <code class="text-yellow-500">const</code> sont des variables de <strong>bloc</strong> (block-scoped)</li>
                    <li><code class="text-yellow-500">var</code> est une variable de <strong>fonction</strong> (function-scoped)</li>
                </ul>
            </div>

            <h3 class="text-2xl font-bold mb-4">Bonnes pratiques de nommage</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
                <li>Utiliser des noms <strong>descriptifs</strong></li>
                <li>Commencer par une <strong>lettre</strong> (ou $, _)</li>
                <li> camelCase pour les noms composé</li>
                <li>Éviter les mots réservés</li>
                <li>CONSTANTES en MAJUSCULES</li>
            </ul>

            <div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h4 class="font-semibold text-green-600 dark:text-green-400 mb-2">✅ Bonnes pratiques</h4>
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">// ✅ Bon
let userName = "Alice";
const MAX_SIZE = 100;
let isActive = true;

// ❌ À éviter
let x = "Alice";
let a = 25;
let Daten = "données";</code></pre>
            </div>
        `,
        exercises: [
            {
                id: 'var-ex1',
                question: 'Déclarez une variable "prenom" contenant "Marie" avec const',
                answer: 'const prenom = "Marie"',
                hint: 'Utilisez const pour déclarer une constante'
            },
            {
                id: 'var-ex2',
                question: 'Créez une variable "age" avec let et attribuez la valeur 18',
                answer: 'let age = 18',
                hint: 'let permet de modifier la valeur'
            }
        ],
        quiz: [
            {
                id: 'var-q1',
                question: 'Quelle est la différence entre let et const ?',
                options: ['let peut être modifié, const non', 'const est plus rapide', 'let est plus sécurisé', 'Aucune différence'],
                correct: 'let peut être modifié, const non'
            },
            {
                id: 'var-q2',
                question: 'Lequel doit-on préférer nowadays ?',
                options: ['var', 'let', 'const', 'let et const'],
                correct: 'let et const'
            }
        ],
        examples: [
            {
                title: 'Déclaration avec let',
                code: `let nom = "Alice";
let age = 25;
console.log(nom, age);`
            },
            {
                title: 'Déclaration avec const',
                code: `const PI = 3.14159;
const URL = "https://site.com";
console.log(PI, URL);`
            }
        ]
    },

    // =============================================================================
    // LEÇON 3: TYPES DE DONNÉES
    // =============================================================================
    {
        id: 'types',
        title: 'Types de Données',
        number: 3,
        duration: '15 min',
        objectives: [
            'Connaître les types primitifs en JavaScript',
            'Comprendre la différence entre types',
            'Savoir utiliser typeof',
            'Comprendre null et undefined'
        ],
        content: `
            <h3 class="text-2xl font-bold mb-4">Les types primitifs</h3>
            <p class="mb-4">JavaScript dispose de <strong>8 types primitifs</strong>. Contrairement aux objets, ils sont immuables et représentent des valeurs simples.</p>

            <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div class="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                    <h4 class="font-semibold text-purple-500 mb-2">String (Texte)</h4>
                    <p>Chaînes de caractères</p>
                    <code class="text-sm">"Bonjour", 'Alice', \`Template\`</code>
                </div>
                <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                    <h4 class="font-semibold text-blue-500 mb-2">Number (Nombre)</h4>
                    <p>Nombres entiers et décimaux</p>
                    <code class="text-sm">42, 3.14, -10</code>
                </div>
                <div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                    <h4 class="font-semibold text-green-500 mb-2">Boolean</h4>
                    <p>Vrai ou faux</p>
                    <code class="text-sm">true, false</code>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <h4 class="font-semibold text-gray-500 mb-2">Undefined</h4>
                    <p>Valeur non définie</p>
                    <code class="text-sm">let x;</code>
                </div>
            </div>

            <h3 class="text-2xl font-bold mb-4">String (Chaînes de caractères)</h3>
            <p class="mb-4">Les chaînes peuvent être définies avec des guillemets simples, doubles, ou des backticks.</p>
            
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">// Trois façons de créer une chaîne
let simple = 'Guillemets simples';
let double = "Guillemets doubles";
let template = \`Backticks (interpolation)\`;

// Interpolation avec \${}
let nom = "Alice";
let message = \`Bonjour \${nom} !\`;
console.log(message); // "Bonjour Alice !"</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="let nom = 'Alice'; let message = 'Bonjour ' + nom + ' !'; console.log('Message:', message);">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-2xl font-bold mb-4">Number (Nombres)</h3>
            <p class="mb-4">JavaScript utilise le format <strong>IEEE 754</strong> pour les nombres. Un seul type pour tous les nombres.</p>
            
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">let entier = 42;
let decimal = 3.14159;
let negatif = -10;
let scientifique = 2.5e6; // 2,500,000

// Opérations arithmétiques
console.log(10 + 5);   // Addition
console.log(10 - 5);   // Soustraction
console.log(10 * 5);   // Multiplication
console.log(10 / 5);   // Division
console.log(10 % 3);   // Modulo (reste)</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="console.log('10 + 5 =', 10 + 5); console.log('10 - 5 =', 10 - 5); console.log('10 * 5 =', 10 * 5); console.log('10 / 5 =', 10 / 5); console.log('10 % 3 =', 10 % 3);">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-2xl font-bold mb-4">Boolean</h3>
            <p class="mb-4">Type binaire avec seulement deux valeurs possibles.</p>
            
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">let estActif = true;
let estMineur = false;

// Opérateurs de comparaison
console.log(10 > 5);    // true
console.log(10 === 5);   // false
console.log(10 !== 5);   // true</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="console.log('10 > 5:', 10 > 5); console.log('10 === 5:', 10 === 5); console.log('10 !== 5:', 10 !== 5);">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-2xl font-bold mb-4">null vs undefined</h3>
            <div class="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mb-4">
                <ul class="list-disc list-inside space-y-2">
                    <li><strong>undefined</strong> : Variable déclarée mais pas encore assignée</li>
                    <li><strong>null</strong> : Absence intentionnelle de valeur</li>
                </ul>
            </div>

            <h3 class="text-2xl font-bold mb-4">Vérifier le type avec typeof</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">console.log(typeof "Bonjour"); // "string"
console.log(typeof 42);       // "number"
console.log(typeof true);     // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);     // "object" (bizarrerie JS)</code></pre>
            </div>
        `,
        exercises: [
            {
                id: 'type-ex1',
                question: 'Créez une variable "temperature" contenant le nombre 25',
                answer: 'let temperature = 25',
                hint: 'Utilisez let et un nombre sans guillemets'
            },
            {
                id: 'type-ex2',
                question: 'Créez une variable "est majeur" avec la valeur true',
                answer: 'let estMajeur = true',
                hint: 'Les booléens s\'écrivent sans guillemets'
            }
        ],
        quiz: [
            {
                id: 'type-q1',
                question: 'Quel est le type de "42" (avec guillemets) ?',
                options: ['number', 'string', 'boolean', 'object'],
                correct: 'string'
            },
            {
                id: 'type-q2',
                question: 'Quelle fonction permet de connaître le type d\'une variable ?',
                options: ['typeof', 'type()', 'getType()', 'isType()'],
                correct: 'typeof'
            }
        ],
        examples: [
            {
                title: 'String',
                code: `let prenom = "Alice";
let message = \`Bonjour \${prenom}!\`;`
            },
            {
                title: 'Number',
                code: `let a = 10;
let b = 3;
console.log(a + b, a - b, a * b);`
            }
        ]
    },

    // =============================================================================
    // LEÇON 4: CONDITIONS
    // =============================================================================
    {
        id: 'conditions',
        title: 'Conditions',
        number: 4,
        duration: '15 min',
        objectives: [
            'Maîtriser les structures conditionnelles if/else',
            'Utiliser les opérateurs de comparaison',
            'Comprendre switch',
            'Utiliser les opérateurs logiques'
        ],
        content: `
            <h3 class="text-2xl font-bold mb-4">Les conditions</h3>
            <p class="mb-4">Les conditions permettent d'exécuter du code <strong>différemment</strong> selon une situation.</p>

            <h3 class="text-xl font-bold mb-4">if / else if / else</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">let age = 18;

if (age >= 18) {
    console.log("Vous êtes majeur");
} else if (age >= 16) {
    console.log("Vous êtes adolescent");
} else {
    console.log("Vous êtes mineur");
}</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="let age = 18; if (age >= 18) { console.log('Vous êtes majeur'); } else if (age >= 16) { console.log('Vous êtes adolescent'); } else { console.log('Vous êtes mineur'); }">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-2xl font-bold mb-4">Opérateurs de comparaison</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div class="bg-gray-50 dark:bg-gray-700/30 p-3 rounded">
                    <code class="text-yellow-500">==</code> <span class="text-sm">Égal (valeur)</span>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/30 p-3 rounded">
                    <code class="text-yellow-500">===</code> <span class="text-sm">Strict (valeur + type)</span>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/30 p-3 rounded">
                    <code class="text-yellow-500">!=</code> <span class="text-sm">Différent</span>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/30 p-3 rounded">
                    <code class="text-yellow-500">!==</code> <span class="text-sm">Strict différent</span>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/30 p-3 rounded">
                    <code class="text-yellow-500">&gt;</code> <span class="text-sm">Supérieur</span>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/30 p-3 rounded">
                    <code class="text-yellow-500">&lt;</code> <span class="text-sm">Inférieur</span>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/30 p-3 rounded">
                    <code class="text-yellow-500">&gt;=</code> <span class="text-sm">Supérieur ou égal</span>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/30 p-3 rounded">
                    <code class="text-yellow-500">&lt;=</code> <span class="text-sm">Inférieur ou égal</span>
                </div>
            </div>

            <div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg mb-6">
                <h4 class="font-semibold text-green-600 dark:text-green-400 mb-2">✅ Bonne pratique</h4>
                <p>Utilisez toujours <code class="text-yellow-500">===</code> et <code class="text-yellow-500">!==</code> pour comparer valeur ET type.</p>
            </div>

            <h3 class="text-2xl font-bold mb-4">Opérateurs logiques</h3>
            <div class="grid grid-cols-3 gap-3 mb-6">
                <div class="bg-gray-50 dark:bg-gray-700/30 p-3 rounded text-center">
                    <code class="text-yellow-500">&&</code> <span class="text-sm block">ET (AND)</span>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/30 p-3 rounded text-center">
                    <code class="text-yellow-500">||</code> <span class="text-sm block">OU (OR)</span>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/30 p-3 rounded text-center">
                    <code class="text-yellow-500">!</code> <span class="text-sm block">NON (NOT)</span>
                </div>
            </div>

            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">let age = 25;
let carte = true;

// && - Les deux conditions vraies
if (age >= 18 && carte) {
    console.log("Accès autorisé");
}

// || - Au moins une condition vraie
if (age >= 18 || carte) {
    console.log("Réduction applicable");
}

// ! - Inverser le booléen
if (!carte) {
    console.log("Acheter une carte");
}</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="let age = 25; let carte = true; if (age >= 18 && carte) { console.log('Accès autorisé'); } if (age >= 18 || carte) { console.log('Réduction applicable'); } if (!carte) { console.log('Acheter une carte'); }">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-2xl font-bold mb-4">switch</h3>
            <p class="mb-4">Alternative à plusieurs else if pour comparer une valeur contre plusieurs cas.</p>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">let jour = 2;

switch(jour) {
    case 1:
        console.log("Lundi");
        break;
    case 2:
        console.log("Mardi");
        break;
    case 3:
        console.log("Mercredi");
        break;
    default:
        console.log("Autre jour");
}</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="let jour = 2; switch(jour) { case 1: console.log('Lundi'); break; case 2: console.log('Mardi'); break; case 3: console.log('Mercredi'); break; default: console.log('Autre jour'); }">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>
        `,
        exercises: [
            {
                id: 'cond-ex1',
                question: 'Créez une condition qui affiche "Adulte" si age >= 18',
                answer: 'if (age >= 18) { console.log("Adulte") }',
                hint: 'Utilisez if et l\'opérateur >='
            }
        ],
        quiz: [
            {
                id: 'cond-q1',
                question: 'Quel opérateur vérifie l\'égalité en valeur ET en type ?',
                options: ['==', '===', '=', '!='],
                correct: '==='
            },
            {
                id: 'cond-q2',
                question: 'Que retourne (true && false) ?',
                options: ['true', 'false', 'undefined', 'null'],
                correct: 'false'
            }
        ],
        examples: [
            {
                title: 'Condition simple',
                code: `let age = 20;
if (age >= 18) {
    console.log("Majeur");
}`
            },
            {
                title: 'Switch',
                code: `let jour = 1;
switch(jour) {
    case 1: console.log("Lundi"); break;
    default: console.log("Autre");
}`
            }
        ]
    },

    // =============================================================================
    // LEÇON 5: BOUCLES
    // =============================================================================
    {
        id: 'boucles',
        title: 'Boucles',
        number: 5,
        duration: '20 min',
        objectives: [
            'Maîtriser la boucle for',
            'Utiliser while et do...while',
            'Comprendre for...of et for...in',
            'Savoir quand utiliser quelle boucle'
        ],
        content: `
            <h3 class="text-2xl font-bold mb-4">Les boucles</h3>
            <p class="mb-4">Les boucles permettent de <strong>répéter</strong> du code plusieurs fois.</p>

            <h3 class="text-xl font-bold mb-4">for - Nombre d'itérations connu</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">// for (initialisation; condition; incrémentation)
for (let i = 0; i < 5; i++) {
    console.log("Itération " + i);
}

// i++ = i + 1
// i-- = i - 1</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="for (let i = 0; i < 5; i++) { console.log('Itération ' + i); }">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-xl font-bold mb-4">while - Condition unknown</h3>
            <p class="mb-4">Répète tant que la condition est vraie.</p>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">let i = 0;
while (i < 3) {
    console.log("Compteur: " + i);
    i++; // Ne pas oublier l'incrémentation!
}</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="let i = 0; while (i < 3) { console.log('Compteur: ' + i); i++; }">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-xl font-bold mb-4">do...while - Au moins une exécution</h3>
            <p class="mb-4">Le bloc s'exécute <strong>au moins une fois</strong> avant de tester la condition.</p>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">let i = 0;
do {
    console.log("Valeur: " + i);
    i++;
} while (i < 3);</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="let i = 0; do { console.log('Valeur: ' + i); i++; } while (i < 3);">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-xl font-bold mb-4">for...of - Tableaux</h3>
            <p class="mb-4">Itère sur les <strong>valeurs</strong> d'un tableau ou objet itérable.</p>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">let fruits = ["pomme", "banane", "orange"];

for (let fruit of fruits) {
    console.log(fruit);
}</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="let fruits = ['pomme', 'banane', 'orange']; for (let fruit of fruits) { console.log(fruit); }">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-xl font-bold mb-4">for...in - Objets</h3>
            <p class="mb-4">Itère sur les <strong>clés</strong> d'un objet.</p>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">let personne = { nom: "Alice", age: 25 };

for (let cle in personne) {
    console.log(cle + ": " + personne[cle]);
}</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="let personne = { nom: 'Alice', age: 25 }; for (let cle in personne) { console.log(cle + ': ' + personne[cle]); }">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h4 class="font-semibold text-blue-600 dark:text-blue-400 mb-2">Tableau récapitulatif</h4>
                <table class="w-full text-sm">
                    <tr class="border-b">
                        <th class="p-2 text-left">Boucle</th>
                        <th class="p-2 text-left">Utilisation</th>
                    </tr>
                    <tr class="border-b">
                        <td class="p-2">for</td>
                        <td class="p-2">Nombre d'itérations connu</td>
                    </tr>
                    <tr class="border-b">
                        <td class="p-2">while</td>
                        <td class="p-2">Condition à évaluer avant</td>
                    </tr>
                    <tr class="border-b">
                        <td class="p-2">do...while</td>
                        <td class="p-2">Au moins une itération</td>
                    </tr>
                    <tr class="border-b">
                        <td class="p-2">for...of</td>
                        <td class="p-2">Tableau (valeurs)</td>
                    </tr>
                    <tr>
                        <td class="p-2">for...in</td>
                        <td class="p-2">Objet (clés)</td>
                    </tr>
                </table>
            </div>
        `,
        exercises: [
            {
                id: 'boucle-ex1',
                question: 'Créez une boucle for qui affiche 0, 1, 2',
                answer: 'for (let i = 0; i < 3; i++) { console.log(i) }',
                hint: 'Commencez à 0 et arrêtez avant 3'
            }
        ],
        quiz: [
            {
                id: 'boucle-q1',
                question: 'Quelle boucle s\'exécute au moins une fois ?',
                options: ['for', 'while', 'do...while', 'for...of'],
                correct: 'do...while'
            },
            {
                id: 'boucle-q2',
                question: 'Quelle boucle utiliser pour un tableau ?',
                options: ['for...in', 'for...of', 'while', 'for'},
                correct: 'for...of'
            }
        ],
        examples: [
            {
                title: 'Boucle for',
                code: `for (let i = 0; i < 5; i++) {
    console.log(i);
}`
            },
            {
                title: 'for...of',
                code: `let couleurs = ['rouge', 'vert'];
for (let couleur of couleurs) {
    console.log(couleur);
}`
            }
        ]
    },

    // =============================================================================
    // LEÇON 6: FONCTIONS
    // =============================================================================
    {
        id: 'fonctions',
        title: 'Fonctions',
        number: 6,
        duration: '20 min',
        objectives: [
            'Créer des fonctions nommées',
            'Maîtriser les fonctions fléchées',
            'Comprendre les paramètres et返回值',
            'Connaître les paramètres par défaut'
        ],
        content: `
            <h3 class="text-2xl font-bold mb-4">Les fonctions</h3>
            <p class="mb-4">Une fonction est un <strong>bloc de code réutilisable</strong> qui effectue une tâche spécifique.</p>

            <h3 class="text-xl font-bold mb-4">Fonction nommée</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">function saluer(nom) {
    return "Bonjour " + nom + " !";
}

// Appel de la fonction
let message = saluer("Alice");
console.log(message);</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="function saluer(nom) { return 'Bonjour ' + nom + ' !'; } let message = saluer('Alice'); console.log(message);">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-xl font-bold mb-4">Fonction fléchée (Arrow Function)</h3>
            <p class="mb-4">Syntaxe plus concise, très utilisée en JavaScript moderne.</p>
            
            <div class="space-y-4 mb-4">
                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <h4 class="font-medium text-yellow-500 mb-2">Syntaxe complète</h4>
                    <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">const addition = (a, b) => {
    let resultat = a + b;
    return resultat;
};</code></pre>
                    <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="const addition = (a, b) => { let resultat = a + b; return resultat; }; console.log(addition(5, 3));">
                        <i class="fas fa-play mr-1"></i>Exécuter
                    </button>
                </div>

                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <h4 class="font-medium text-yellow-500 mb-2">Syntaxe courte (un seul paramètre)</h4>
                    <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">const carre = x => x * x;
console.log(carre(4)); // 16</code></pre>
                    <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="const carre = x => x * x; console.log(carre(4));">
                        <i class="fas fa-play mr-1"></i>Exécuter
                    </button>
                </div>

                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <h4 class="font-medium text-yellow-500 mb-2">Syntaxe courte (plusieurs paramètres)</h4>
                    <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">const addition = (a, b) => a + b;
console.log(addition(3, 2));</code></pre>
                    <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="const addition = (a, b) => a + b; console.log(addition(3, 2));">
                        <i class="fas fa-play mr-1"></i>Exécuter
                    </button>
                </div>
            </div>

            <h3 class="text-xl font-bold mb-4">Paramètres par défaut</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">function dire(nom = "Inconnu") {
    return "Bonjour " + nom;
}

console.log(dire());           // Bonjour Inconnu
console.log(dire("Alice"));   // Bonjour Alice</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="function dire(nom = 'Inconnu') { return 'Bonjour ' + nom; } console.log(dire()); console.log(dire('Alice'));">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-xl font-bold mb-4">Fonction anonyme</h3>
            <p class="mb-4">Fonction sans nom, souvent utilisée comme callback.</p>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">const direBonjour = function(nom) {
    return "Salut " + nom;
};

console.log(direBonjour("Bob"));</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="const direBonjour = function(nom) { return 'Salut ' + nom; }; console.log(direBonjour('Bob'));">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>
        `,
        exercises: [
            {
                id: 'func-ex1',
                question: 'Créez une fonction "doubler" qui multiplie par 2',
                answer: 'const doubler = x => x * 2',
                hint: 'Utilisez une arrow function'
            }
        ],
        quiz: [
            {
                id: 'func-q1',
                question: 'Quelle est la syntaxe correcte d\'une arrow function ?',
                options: ['const f = () => {}', 'function => ()', '=> function()', 'const f = function=>'],
                correct: 'const f = () => {}'
            },
            {
                id: 'func-q2',
                question: 'Que retourne une fonction sans return ?',
                options: ['undefined', 'null', '0', 'false'],
                correct: 'undefined'
            }
        ],
        examples: [
            {
                title: 'Fonction nommée',
                code: `function saluer(nom) {
    return "Bonjour " + nom;
}`
            },
            {
                title: 'Arrow function',
                code: `const carre = x => x * x;
const addition = (a, b) => a + b;`
            }
        ]
    },

    // =============================================================================
    // LEÇON 7: TABLEAUX
    // =============================================================================
    {
        id: 'tableaux',
        title: 'Tableaux',
        number: 7,
        duration: '25 min',
        objectives: [
            'Créer et manipuler des tableaux',
            'Maîtriser les méthodes de base (push, pop, shift)',
            'Utiliser map, filter, reduce',
            'Parcourir un tableau avec forEach'
        ],
        content: `
            <h3 class="text-2xl font-bold mb-4">Les tableaux (Array)</h3>
            <p class="mb-4">Un tableau est une <strong>liste ordonnée</strong> de valeurs. Il peut contenir des éléments de tout type.</p>

            <h3 class="text-xl font-bold mb-4">Créer un tableau</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">let fruits = ["pomme", "banane", "orange"];

// Accéder aux éléments (index commence à 0)
console.log(fruits[0]);  // pomme
console.log(fruits[2]);  // orange
console.log(fruits.length); // 3</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="let fruits = ['pomme', 'banane', 'orange']; console.log('Premier:', fruits[0]); console.log('Troisième:', fruits[2]); console.log('Longueur:', fruits.length);">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-xl font-bold mb-4">Méthodes de modification</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <h4 class="font-medium text-yellow-500 mb-2">push() - Ajouter à la fin</h4>
                    <pre class="bg-gray-900 p-2 rounded text-sm"><code class="language-javascript">let arr = [1, 2];
arr.push(3);
// [1, 2, 3]</code></pre>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <h4 class="font-medium text-yellow-500 mb-2">pop() - Retirer dernier</h4>
                    <pre class="bg-gray-900 p-2 rounded text-sm"><code class="language-javascript">let arr = [1, 2, 3];
arr.pop();
// [1, 2]</code></pre>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <h4 class="font-medium text-yellow-500 mb-2">unshift() - Ajouter au début</h4>
                    <pre class="bg-gray-900 p-2 rounded text-sm"><code class="language-javascript">let arr = [2, 3];
arr.unshift(1);
// [1, 2, 3]</code></pre>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <h4 class="font-medium text-yellow-500 mb-2">shift() - Retirer premier</h4>
                    <pre class="bg-gray-900 p-2 rounded text-sm"><code class="language-javascript">let arr = [1, 2, 3];
arr.shift();
// [2, 3]</code></pre>
                </div>
            </div>

            <h3 class="text-xl font-bold mb-4">forEach() - Parcourir</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">let couleurs = ["rouge", "vert", "bleu"];

couleurs.forEach((couleur, index) => {
    console.log(index + ": " + couleur);
});</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="let couleurs = ['rouge', 'vert', 'bleu']; couleurs.forEach((couleur, index) => { console.log(index + ': ' + couleur); });">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-xl font-bold mb-4">map() - Transformer</h3>
            <p class="mb-2">Crée un nouveau tableau en transformant chaque élément.</p>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">let nombres = [1, 2, 3, 4];
let doublés = nombres.map(n => n * 2);

console.log(doublés); // [2, 4, 6, 8]</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="let nombres = [1, 2, 3, 4]; let doublés = nombres.map(n => n * 2); console.log(doublés);">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-xl font-bold mb-4">filter() - Filtrer</h3>
            <p class="mb-2">Crée un nouveau tableau avec les éléments qui passent le test.</p>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">let nombres = [1, 2, 3, 4, 5, 6];
let pairs = nombres.filter(n => n % 2 === 0);

console.log(pairs); // [2, 4, 6]</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="let nombres = [1, 2, 3, 4, 5, 6]; let pairs = nombres.filter(n => n % 2 === 0); console.log(pairs);">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-xl font-bold mb-4">reduce() - Réduire</h3>
            <p class="mb-2">Réduit le tableau à une seule valeur.</p>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">let nombres = [1, 2, 3, 4];
let somme = nombres.reduce((acc, n) => acc + n, 0);

console.log(somme); // 10</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="let nombres = [1, 2, 3, 4]; let somme = nombres.reduce((acc, n) => acc + n, 0); console.log('Somme:', somme);">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>
        `,
        exercises: [
            {
                id: 'tab-ex1',
                question: 'Ajoutez "kiwi" au tableau fruits avec push',
                answer: 'fruits.push("kiwi")',
                hint: 'Utilisez la méthode push()'
            }
        ],
        quiz: [
            {
                id: 'tab-q1',
                question: 'Quelle méthode ajoute un élément à la fin ?',
                options: ['push()', 'pop()', 'shift()', 'unshift()'],
                correct: 'push()'
            },
            {
                id: 'tab-q2',
                question: 'Quelle méthode crée un nouveau tableau ?',
                options: ['map()', 'push()', 'pop()', 'shift()'],
                correct: 'map()'
            }
        ],
        examples: [
            {
                title: 'Créer et modifier',
                code: `let fruits = ['pomme', 'banane'];
fruits.push('orange');
console.log(fruits);`
            },
            {
                title: 'map et filter',
                code: `let nums = [1,2,3,4,5];
let pairs = nums.filter(n => n%2===0);
let doublés = pairs.map(n => n*2);`
            }
        ]
    },

    // =============================================================================
    // LEÇON 8: OBJETS
    // =============================================================================
    {
        id: 'objets',
        title: 'Objets',
        number: 8,
        duration: '20 min',
        objectives: [
            'Créer des objets',
            'Accéder aux propriétés',
            'Ajouter des méthodes',
            'Parcourir un objet'
        ],
        content: `
            <h3 class="text-2xl font-bold mb-4">Les objets</h3>
            <p class="mb-4">Un objet est une <strong>collection de propriétés</strong> clé-valeur. C'est la base de JavaScript.</p>

            <h3 class="text-xl font-bold mb-4">Créer un objet</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">let personne = {
    nom: "Alice",
    age: 25,
    ville: "Paris"
};

console.log(personne.nom);
console.log(personne["age"]);</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="let personne = { nom: 'Alice', age: 25, ville: 'Paris' }; console.log('Nom:', personne.nom); console.log('Age:', personne['age']);">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-xl font-bold mb-4">Méthodes dans un objet</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">let personne = {
    nom: "Alice",
    saluer: function() {
        return "Bonjour, je suis " + this.nom;
    }
};

console.log(personne.saluer());</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="let personne = { nom: 'Alice', saluer: function() { return 'Bonjour, je suis ' + this.nom; } }; console.log(personne.saluer());">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-xl font-bold mb-4">Parcourir un objet</h3>
            <div class="space-y-4 mb-4">
                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <h4 class="font-medium text-yellow-500 mb-2">for...in</h4>
                    <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">let personne = { nom: "Bob", age: 30 };

for (let cle in personne) {
    console.log(cle + ": " + personne[cle]);
}</code></pre>
                    <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="let personne = { nom: 'Bob', age: 30 }; for (let cle in personne) { console.log(cle + ': ' + personne[cle]); }">
                        <i class="fas fa-play mr-1"></i>Exécuter
                    </button>
                </div>

                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <h4 class="font-medium text-yellow-500 mb-2">Object.keys() / Object.values()</h4>
                    <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">let personne = { nom: "Bob", age: 30 };

console.log(Object.keys(personne));
console.log(Object.values(personne));</code></pre>
                    <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="let personne = { nom: 'Bob', age: 30 }; console.log('Clés:', Object.keys(personne)); console.log('Valeurs:', Object.values(personne));">
                        <i class="fas fa-play mr-1"></i>Exécuter
                    </button>
                </div>
            </div>

            <h3 class="text-xl font-bold mb-4">Spread operator (...)</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };

console.log(obj2); // { a: 1, b: 2, c: 3 }</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="let obj1 = { a: 1, b: 2 }; let obj2 = { ...obj1, c: 3 }; console.log(obj2);">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>
        `,
        exercises: [
            {
                id: 'obj-ex1',
                question: 'Créez un objet "voiture" avec marque et couleur',
                answer: 'let voiture = { marque: "Tesla", couleur: "rouge" }',
                hint: 'Utilisez les accolades et les deux-points'
            }
        ],
        quiz: [
            {
                id: 'obj-q1',
                question: 'Comment accéder à la propriété "nom" ?',
                options: ['objet.nom', 'objet["nom"]', 'Les deux', 'objet->nom'],
                correct: 'Les deux'
            }
        ],
        examples: [
            {
                title: 'Objet simple',
                code: `let personne = {
    nom: "Alice",
    age: 25
};`
            },
            {
                title: 'Objet avec méthode',
                code: `let calc = {
    a: 5, b: 3,
    addition: function() { 
        return this.a + this.b; 
    }
};`
            }
        ]
    },

    // =============================================================================
    // LEÇON 9: DOM
    // =============================================================================
    {
        id: 'dom',
        title: 'DOM',
        number: 9,
        duration: '25 min',
        objectives: [
            'Sélectionner des éléments',
            'Modifier le contenu et les attributs',
            'Manipuler le CSS',
            'Créer de nouveaux éléments'
        ],
        content: `
            <h3 class="text-2xl font-bold mb-4">Le DOM (Document Object Model)</h3>
            <p class="mb-4">Le DOM est une représentation de votre page HTML que JavaScript peut manipuler.</p>

            <h3 class="text-xl font-bold mb-4">Sélectionner des éléments</h3>
            <div class="space-y-3 mb-6">
                <div class="bg-gray-50 dark:bg-gray-700/50 p-3 rounded">
                    <code class="text-yellow-500">document.getElementById("id")</code> - Un élément par ID
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/50 p-3 rounded">
                    <code class="text-yellow-500">document.querySelector(".classe")</code> - Premier élément
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/50 p-3 rounded">
                    <code class="text-yellow-500">document.querySelectorAll("p")</code> - Tous les éléments
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/50 p-3 rounded">
                    <code class="text-yellow-500">document.getElementsByClassName("classe")</code> - Par classe
                </div>
            </div>

            <h3 class="text-xl font-bold mb-4">Modifier le contenu</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">// innerHTML - Interprète le HTML
element.innerHTML = "<b>Gras</b>";

// textContent - Texte brut
element.textContent = "Texte brut";

// value - Pour les formulaires
let input = document.querySelector("input");
console.log(input.value);</code></pre>
            </div>

            <h3 class="text-xl font-bold mb-4">Modifier les attributs</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">// Lire
let src = img.getAttribute("src");

// Modifier
element.setAttribute("alt", "Description");

// Supprimer
element.removeAttribute("disabled");</code></pre>
            </div>

            <h3 class="text-xl font-bold mb-4">Modifier le style CSS</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">element.style.color = "blue";
element.style.backgroundColor = "#fff";
element.style.display = "none";

// Classes CSS
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("selected");</code></pre>
            </div>

            <h3 class="text-xl font-bold mb-4">Créer des éléments</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">// Créer
let div = document.createElement("div");
div.textContent = "Nouveau";

// Ajouter
document.body.appendChild(div);

// Supprimer
div.remove();</code></pre>
            </div>
        `,
        exercises: [
            {
                id: 'dom-ex1',
                question: 'Sélectionnez l\'élément avec l\'id "titre"',
                answer: 'document.getElementById("titre")',
                hint: 'Utilisez getElementById'
            }
        ],
        quiz: [
            {
                id: 'dom-q1',
                question: 'Quelle méthode retourne tous les éléments d\'une classe ?',
                options: ['querySelectorAll', 'getElementsByClassName', 'getElementById', 'querySelector'],
                correct: 'querySelectorAll'
            }
        ],
        examples: [
            {
                title: 'Sélection et modification',
                code: `let titre = document.getElementById('titre');
titre.textContent = 'Nouveau titre';`
            },
            {
                title: 'Créer un élément',
                code: `let p = document.createElement('p');
p.textContent = 'Paragraphe';
document.body.appendChild(p);`
            }
        ]
    },

    // =============================================================================
    // LEÇON 10: ÉVÉNEMENTS
    // =============================================================================
    {
        id: 'events',
        title: 'Événements',
        number: 10,
        duration: '20 min',
        objectives: [
            'Comprendre les événements',
            'Utiliser addEventListener',
            'Connaître les principaux types',
            'Utiliser l\'objet Event'
        ],
        content: `
            <h3 class="text-2xl font-bold mb-4">Les événements</h3>
            <p class="mb-4">Les événements permettent de <strong>réagir</strong> aux actions de l'utilisateur.</p>

            <h3 class="text-xl font-bold mb-4">Types d'événements</h3>
            <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                    <h4 class="font-semibold text-purple-500 mb-2">Souris</h4>
                    <code class="text-sm">click, dblclick, mouseover, mouseout, mousemove</code>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                    <h4 class="font-semibold text-purple-500 mb-2">Clavier</h4>
                    <code class="text-sm">keydown, keyup, keypress</code>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                    <h4 class="font-semibold text-purple-500 mb-2">Formulaire</h4>
                    <code class="text-sm">submit, focus, blur, input, change</code>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                    <h4 class="font-semibold text-purple-500 mb-2">Fenêtre</h4>
                    <code class="text-sm">load, resize, scroll</code>
                </div>
            </div>

            <h3 class="text-xl font-bold mb-4">addEventListener</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">// Méthode recommandée
element.addEventListener("click", function() {
    console.log("Clic détecté !");
});

// Avec fonction fléchée
element.addEventListener("click", () => {
    console.log("Clic !");
});</code></pre>
            </div>

            <h3 class="text-xl font-bold mb-4">Objet Event</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">element.addEventListener("click", function(e) {
    console.log(e.target);    // Élément cliqué
    console.log(e.type);     // "click"
    console.log(e.clientX); // Coordonnée X
    console.log(e.clientY); // Coordonnée Y
});</code></pre>
            </div>

            <h3 class="text-xl font-bold mb-4">Supprimer un écouteur</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">function maFonction() {
    console.log("Clic");
}

element.addEventListener("click", maFonction);
// Plus tard...
element.removeEventListener("click", maFonction);</code></pre>
            </div>
        `,
        exercises: [
            {
                id: 'event-ex1',
                question: 'Ajoutez un écouteur click à un bouton',
                answer: 'bouton.addEventListener("click", () => {})',
                hint: 'Utilisez addEventListener'
            }
        ],
        quiz: [
            {
                id: 'event-q1',
                question: 'Quelle méthode permet d\'écouter un événement ?',
                options: ['addEventListener', 'onEvent', 'addListener', 'onClick'],
                correct: 'addEventListener'
            }
        ],
        examples: [
            {
                title: 'Click handler',
                code: `btn.addEventListener('click', () => {
    console.log('Clic!');
});`
            },
            {
                title: 'Objet event',
                code: `element.addEventListener('click', (e) => {
    console.log(e.target);
});`
            }
        ]
    },

    // =============================================================================
    // LEÇON 11: FORMULAIRES
    // =============================================================================
    {
        id: 'formulaires',
        title: 'Formulaires',
        number: 11,
        duration: '20 min',
        objectives: [
            'Récupérer les valeurs d\'un formulaire',
            'Valider les données',
            'Gérer la soumission',
            'Utiliser les événements de formulaire'
        ],
        content: `
            <h3 class="text-2xl font-bold mb-4">Les formulaires</h3>
            <p class="mb-4">Les formulaires permettent de <strong>collecter</strong> des données utilisateur.</p>

            <h3 class="text-xl font-bold mb-4">Événements de formulaire</h3>
            <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6">
                <ul class="list-disc list-inside space-y-2">
                    <li><code class="text-yellow-500">submit</code> - Soumission du formulaire</li>
                    <li><code class="text-yellow-500">input</code> - Modification en temps réel</li>
                    <li><code class="text-yellow-500">change</code> - Changement de valeur</li>
                    <li><code class="text-yellow-500">focus</code> - Focus sur un champ</li>
                    <li><code class="text-yellow-500">blur</code> - Perte du focus</li>
                </ul>
            </div>

            <h3 class="text-xl font-bold mb-4">Récupérer les valeurs</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">// Via FormData
const form = document.getElementById("monForm");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    console.log(data.get("nom"));
    console.log(data.get("email"));
});

// Directement
const email = document.getElementById("email").value;</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="const form = { nom: 'Alice', email: 'alice@email.com' }; console.log('Nom:', form.nom); console.log('Email:', form.email);">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-xl font-bold mb-4">Validation</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">// Vérifier si un champ est rempli
if (nom.value === "") {
    alert("Le nom est requis");
}

// Vérifier le format email
const email = "test@email.com";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test(email));</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="const email = 'test@email.com'; const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/; console.log('Email valide:', emailRegex.test(email));">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-xl font-bold mb-4">Exemple complet</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    console.log("Soumis:", nom, email);
});</code></pre>
            </div>
        `,
        exercises: [
            {
                id: 'form-ex1',
                question: 'Empêchez la soumission par défaut d\'un formulaire',
                answer: 'e.preventDefault()',
                hint: 'Utilisez preventDefault() sur l\'event'
            }
        ],
        quiz: [
            {
                id: 'form-q1',
                question: 'Quel événement se déclenche à la soumission ?',
                options: ['submit', 'send', 'click', 'post'],
                correct: 'submit'
            }
        ],
        examples: [
            {
                title: 'Soumission',
                code: `form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Soumis!');
});`
            }
        ]
    },

    // =============================================================================
    // LEÇON 12: LOCALSTORAGE
    // =============================================================================
    {
        id: 'localstorage',
        title: 'localStorage',
        number: 12,
        duration: '15 min',
        objectives: [
            'Comprendre le stockage local',
            'Sauvegarder et récupérer des données',
            'Stocker des objets (JSON)',
            'Gérer les erreurs'
        ],
        content: `
            <h3 class="text-2xl font-bold mb-4">localStorage</h3>
            <p class="mb-4">localStorage permet de <strong>stocker des données</strong> persistantes dans le navigateur.</p>

            <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6">
                <ul class="list-disc list-inside space-y-2">
                    <li>Données persistantes (jamais expirées)</li>
                    <li>Stockage maximal ~5MB</li>
                    <li>Stocke uniquement des chaînes</li>
                    <li>Accessible depuis le même domaine</li>
                </ul>
            </div>

            <h3 class="text-xl font-bold mb-4">Méthodes</h3>
            <div class="space-y-4 mb-6">
                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <h4 class="font-medium text-yellow-500 mb-2">setItem() - Sauvegarder</h4>
                    <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">localStorage.setItem("nom", "Alice");
localStorage.setItem("age", "25");</code></pre>
                    <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="localStorage.setItem('nom', 'Alice'); localStorage.setItem('age', '25'); console.log('Données sauvegardées'); console.log('Nom:', localStorage.getItem('nom'));">
                        <i class="fas fa-play mr-1"></i>Exécuter
                    </button>
                </div>

                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <h4 class="font-medium text-yellow-500 mb-2">getItem() - Récupérer</h4>
                    <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">const nom = localStorage.getItem("nom");
console.log(nom);</code></pre>
                </div>

                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <h4 class="font-medium text-yellow-500 mb-2">removeItem() / clear()</h4>
                    <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">localStorage.removeItem("nom");
localStorage.clear(); // Tout effacer</code></pre>
                </div>
            </div>

            <h3 class="text-xl font-bold mb-4">Stocker des objets</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">const utilisateur = {
    nom: "Alice",
    age: 25,
    ville: "Paris"
};

// Sauvegarder (convertir en JSON)
localStorage.setItem("utilisateur", JSON.stringify(utilisateur));

// Récupérer (convertir en objet)
const data = JSON.parse(localStorage.getItem("utilisateur"));
console.log(data.nom);</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="const utilisateur = { nom: 'Alice', age: 25, ville: 'Paris' }; localStorage.setItem('utilisateur', JSON.stringify(utilisateur)); const data = JSON.parse(localStorage.getItem('utilisateur')); console.log('Nom:', data.nom);">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>
        `,
        exercises: [
            {
                id: 'local-ex1',
                question: 'Sauvegardez "valeur123" avec la clé "data"',
                answer: 'localStorage.setItem("data", "valeur123")',
                hint: 'Utilisez setItem'
            }
        ],
        quiz: [
            {
                id: 'local-q1',
                question: 'Quelle méthode permet de sauvegarder ?',
                options: ['setItem()', 'save()', 'write()', 'store()'],
                correct: 'setItem()'
            }
        ],
        examples: [
            {
                title: 'Sauvegarder un objet',
                code: `localStorage.setItem('user', 
    JSON.stringify({name: 'Alice'}));`
            }
        ]
    },

    // =============================================================================
    // LEÇON 13: SESSIONSTORAGE
    // =============================================================================
    {
        id: 'sessionstorage',
        title: 'sessionStorage',
        number: 13,
        duration: '10 min',
        objectives: [
            'Comprendre la différence avec localStorage',
            'Utiliser sessionStorage',
            'Savoir quand l\'utiliser'
        ],
        content: `
            <h3 class="text-2xl font-bold mb-4">sessionStorage</h3>
            <p class="mb-4">sessionStorage fonctionne comme localStorage mais les données sont <strong>effacées à la fermeture de l'onglet</strong>.</p>

            <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6">
                <h4 class="font-semibold text-blue-600 dark:text-blue-400 mb-2">Différence avec localStorage</h4>
                <ul class="list-disc list-inside space-y-2">
                    <li>Données effacées à la fermeture de l'onglet</li>
                    <li>Méthodes identiques (setItem, getItem, removeItem)</li>
                    <li>Utile pour des données temporaires</li>
                </ul>
            </div>

            <h3 class="text-xl font-bold mb-4">Utilisation</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">// Même syntaxe que localStorage
sessionStorage.setItem("token", "abc123");
sessionStorage.setItem("panier", JSON.stringify([
    { produit: "Livre", prix: 15 },
    { produit: "Cahier", prix: 5 }
]));

const token = sessionStorage.getItem("token");
const panier = JSON.parse(sessionStorage.getItem("panier"));

console.log("Token:", token);
console.log("Panier:", panier);</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="sessionStorage.setItem('token', 'abc123'); sessionStorage.setItem('panier', JSON.stringify([{produit: 'Livre', prix: 15}])); const token = sessionStorage.getItem('token'); console.log('Token:', token);">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <div class="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg">
                <h4 class="font-semibold text-orange-600 dark:text-orange-400 mb-2">Quand utiliser sessionStorage ?</h4>
                <ul class="list-disc list-inside space-y-2">
                    <li>Panier d'achat temporaire</li>
                    <li>Token de session</li>
                    <li>Données de formulaire non soumises</li>
                    <li>State temporaire d'une application</li>
                </ul>
            </div>
        `,
        exercises: [],
        quiz: [
            {
                id: 'session-q1',
                question: 'Quand les données sont-elles effacées dans sessionStorage ?',
                options: ['À la fermeture de l\'onglet', 'Jamais', 'Après 24h', 'À la fermeture du navigateur'],
                correct: 'À la fermeture de l\'onglet'
            }
        ],
        examples: [
            {
                title: 'Session token',
                code: `sessionStorage.setItem('token', 'abc');`
            }
        ]
    },

    // =============================================================================
    // LEÇON 14: POO
    // =============================================================================
    {
        id: 'poo',
        title: 'POO - Classes',
        number: 14,
        duration: '25 min',
        objectives: [
            'Comprendre les classes',
            'Créer des objets avec constructor',
            'Maîtriser l\'héritage',
            'Utiliser getters et setters'
        ],
        content: `
            <h3 class="text-2xl font-bold mb-4">Programmation Orientée Objet</h3>
            <p class="mb-4">La POO permet de structurer le code autour d'<strong>objets</strong>.</p>

            <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6">
                <ul class="list-disc list-inside space-y-2">
                    <li><code class="text-yellow-500">Classe</code> - Plan de construction</li>
                    <li><code class="text-yellow-500">Objet</code> - Instance d'une classe</li>
                    <li><code class="text-yellow-500">Héritage</code> - Réutiliser le code</li>
                    <li><code class="text-yellow-500">Encapsulation</code> - Cacher les données</li>
                </ul>
            </div>

            <h3 class="text-xl font-bold mb-4">Créer une classe</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    
    saluer() {
        return "Bonjour, je suis " + this.nom;
    }
}

// Créer un objet
const alice = new Personne("Alice", 25);
console.log(alice.nom);
console.log(alice.saluer());</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="class Personne { constructor(nom, age) { this.nom = nom; this.age = age; } saluer() { return 'Bonjour, je suis ' + this.nom; } } const alice = new Personne('Alice', 25); console.log('Nom:', alice.nom); console.log('Salutation:', alice.saluer());">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-xl font-bold mb-4">Héritage</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">class Animal {
    constructor(nom) {
        this.nom = nom;
    }
    
    parler() {
        return "...";
    }
}

class Chien extends Animal {
    constructor(nom, race) {
        super(nom); // Appeler le constructeur parent
        this.race = race;
    }
    
    parler() {
        return "Woof !";
    }
}

const medor = new Chien("Médor", "Labrador");
console.log(medor.nom);
console.log(medor.parler());</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="class Animal { constructor(nom) { this.nom = nom; } parler() { return '...'; } } class Chien extends Animal { constructor(nom, race) { super(nom); this.race = race; } parler() { return 'Woof !'; } } const medor = new Chien('Médor', 'Labrador'); console.log('Nom:', medor.nom); console.log('Son:', medor.parler());">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-xl font-bold mb-4">Getters et Setters</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">class Rectangle {
    constructor(largeur, hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    
    // Getter
    get surface() {
        return this.largeur * this.hauteur;
    }
    
    // Setter
    set dimensions({largeur, hauteur}) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
}

const rect = new Rectangle(10, 5);
console.log("Surface:", rect.surface);

rect.dimensions = {largeur: 20, hauteur: 10};
console.log("Nouvelle surface:", rect.surface);</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="class Rectangle { constructor(largeur, hauteur) { this.largeur = largeur; this.hauteur = hauteur; } get surface() { return this.largeur * this.hauteur; } set dimensions({largeur, hauteur}) { this.largeur = largeur; this.hauteur = hauteur; } } const rect = new Rectangle(10, 5); console.log('Surface:', rect.surface);">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>
        `,
        exercises: [
            {
                id: 'poo-ex1',
                question: 'Créez une classe "Voiture" avec marque et couleur',
                answer: 'class Voiture { constructor(marque, couleur) { this.marque = marque; this.couleur = couleur; } }',
                hint: 'Utilisez class et constructor'
            }
        ],
        quiz: [
            {
                id: 'poo-q1',
                question: 'Quel mot-clé permet d\'hériter ?',
                options: ['extends', 'inherits', 'super', 'class'],
                correct: 'extends'
            }
        ],
        examples: [
            {
                title: 'Classe simple',
                code: `class Voiture {
    constructor(marque) {
        this.marque = marque;
    }
}`
            },
            {
                title: 'Héritage',
                code: `class Chien extends Animal {
    constructor(nom, race) {
        super(nom);
        this.race = race;
    }
}`
            }
        ]
    },

    // =============================================================================
    // LEÇON 15: FETCH API
    // =============================================================================
    {
        id: 'fetch',
        title: 'Fetch API',
        number: 15,
        duration: '25 min',
        objectives: [
            'Comprendre les requêtes HTTP',
            'Utiliser fetch()',
            'Gérer les réponses',
            'Envoyer des données'
        ],
        content: `
            <h3 class="text-2xl font-bold mb-4">Fetch API</h3>
            <p class="mb-4">Fetch API permet de faire des requêtes <strong>HTTP</strong> pour récupérer ou envoyer des données.</p>

            <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6">
                <ul class="list-disc list-inside space-y-2">
                    <li>Récupérer des données d'une API</li>
                    <li>Envoyer des données au serveur</li>
                    <li>Plus moderne que XMLHttpRequest</li>
                    <li>Basé sur les Promises</li>
                </ul>
            </div>

            <h3 class="text-xl font-bold mb-4">fetch() - Requête GET</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">// Requête GET simple
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erreur:', error));</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="const data = { users: [{ name: 'Alice', age: 25 }] }; console.log('Données reçues:', data);">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-xl font-bold mb-4">fetch() - Requête POST</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        nom: 'Alice',
        email: 'alice@email.com'
    })
})
    .then(response => response.json())
    .then(data => console.log(data));</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="const newUser = { nom: 'Alice', email: 'alice@email.com' }; const jsonData = JSON.stringify(newUser); console.log('Données envoyées:', jsonData);">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-xl font-bold mb-4">Options de fetch</h3>
            <div class="grid grid-cols-2 gap-3 text-sm mb-6">
                <div class="bg-gray-50 dark:bg-gray-700/30 p-3 rounded">
                    <code class="text-yellow-500">method</code> <span class="text-gray-400">GET, POST, PUT, DELETE</span>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/30 p-3 rounded">
                    <code class="text-yellow-500">headers</code> <span class="text-gray-400">En-têtes HTTP</span>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/30 p-3 rounded">
                    <code class="text-yellow-500">body</code> <span class="text-gray-400">Données à envoyer</span>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700/30 p-3 rounded">
                    <code class="text-yellow-500">mode</code> <span class="text-gray-400">cors, no-cors</span>
                </div>
            </div>

            <div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h4 class="font-semibold text-green-600 dark:text-green-400 mb-2">💡 Astuce</h4>
                <p>Vérifiez toujours <code class="text-yellow-500">response.ok</code> pour vous assurer que la requête a réussi.</p>
            </div>
        `,
        exercises: [
            {
                id: 'fetch-ex1',
                question: 'Faites une requête GET vers /api/users',
                answer: 'fetch("/api/users")',
                hint: 'Utilisez fetch() avec l\'URL'
            }
        ],
        quiz: [
            {
                id: 'fetch-q1',
                question: 'Quelle méthode convertit la réponse en JSON ?',
                options: ['response.json()', 'response.text()', 'JSON.parse()', 'response.toJSON()'],
                correct: 'response.json()'
            }
        ],
        examples: [
            {
                title: 'GET request',
                code: `fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(data => console.log(data));`
            },
            {
                title: 'POST request',
                code: `fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Alice' })
});`
            }
        ]
    },

    // =============================================================================
    // LEÇON 16: ASYNC/AWAIT
    // =============================================================================
    {
        id: 'async',
        title: 'Async / Await',
        number: 16,
        duration: '20 min',
        objectives: [
            'Comprendre async/await',
            'Créer des fonctions asynchrones',
            'Gérer les erreurs avec try/catch',
            'Exécuter plusieurs requêtes en parallèle'
        ],
        content: `
            <h3 class="text-2xl font-bold mb-4">Async / Await</h3>
            <p class="mb-4">Async/Await est une syntaxe plus <strong>élégante</strong> pour gérer les opérations asynchrones.</p>

            <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6">
                <ul class="list-disc list-inside space-y-2">
                    <li>Plus lisible que les .then()</li>
                    <li>Gestion d'erreurs simplifiée avec try/catch</li>
                    <li>Code qui ressemble à du code synchrone</li>
                </ul>
            </div>

            <h3 class="text-xl font-bold mb-4">async function</h3>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">async function recupererDonnees() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

// Appeler la fonction
recupererDonnees().then(data => console.log(data));</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="async function recupererDonnees() { const data = { message: 'Données simulées' }; return data; } recupererDonnees().then(data => console.log(data.message));">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-xl font-bold mb-4">try / catch</h3>
            <p class="mb-2">Pour gérer les erreurs.</p>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">async function recupererDonnees() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Erreur HTTP');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur:', error);
    }
}</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="async function test() { try { const data = { user: 'Alice' }; if (!data) throw new Error('Pas de données'); return data; } catch (error) { return { erreur: error.message }; } } test().then(result => console.log('Résultat:', result));">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>

            <h3 class="text-xl font-bold mb-4">await avec Promise.all()</h3>
            <p class="mb-2">Pour exécuter plusieurs requêtes en parallèle.</p>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <pre class="bg-gray-900 p-3 rounded text-sm"><code class="language-javascript">async function chargerTout() {
    const [users, posts] = await Promise.all([
        fetch('/api/users').then(r => r.json()),
        fetch('/api/posts').then(r => r.json())
    ]);
    
    console.log('Users:', users);
    console.log('Posts:', posts);
}</code></pre>
                <button class="run-btn mt-2 px-3 py-1 bg-primary hover:bg-emerald-600 rounded text-sm" data-code="async function chargerTout() { const users = [{ name: 'Alice' }]; const posts = [{ title: 'Post 1' }]; console.log('Users:', users); console.log('Posts:', posts); } chargerTout();">
                    <i class="fas fa-play mr-1"></i>Exécuter
                </button>
            </div>
        `,
        exercises: [
            {
                id: 'async-ex1',
                question: 'Créez une fonction async "charger" qui retourne "chargé"',
                answer: 'async function charger() { return "chargé" }',
                hint: 'Utilisez async avant function'
            }
        ],
        quiz: [
            {
                id: 'async-q1',
                question: 'Quel mot-clé permet d\'attendre une Promise ?',
                options: ['await', 'then', 'async', 'wait'],
                correct: 'await'
            }
        ],
        examples: [
            {
                title: 'async function',
                code: `async function getData() {
    const res = await fetch('/api');
    return res.json();
}`
            },
            {
                title: 'try/catch',
                code: `async function getData() {
    try {
        const res = await fetch('/api');
        return await res.json();
    } catch (e) {
        console.error(e);
    }
}`
            }
        ]
    }
];

export default lessons;
