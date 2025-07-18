# WeWeb Liquid Streak Button Component

Un composant Vue 3 pour WeWeb qui affiche un bouton avec animation liquide pour les streaks.

## Fonctionnalités

- ✨ Animation liquide fluide en SVG
- 🔥 Icône de feu animée
- 🎨 Couleurs personnalisables
- 📱 Design responsive
- ⚡ Effet ripple au clic
- 🌐 Support français/anglais

## Installation dans WeWeb

1. Créez un nouveau repo Git public avec ces fichiers
2. Dans WeWeb, allez dans les composants personnalisés
3. Importez le composant depuis votre repo Git
4. Le composant sera disponible dans votre bibliothèque

## Structure des fichiers

```
├── src/
│   └── wwElement.vue     # Composant Vue 3 principal
├── ww-config.js          # Configuration WeWeb
├── package.json          # Dépendances
└── README.md            # Documentation
```

## Propriétés configurables

- **streakCount**: Nombre du streak (0-9999)
- **streakLabel**: Texte du label
- **showIcon**: Afficher/masquer l'icône feu
- **primaryColor**: Couleur primaire du gradient
- **secondaryColor**: Couleur secondaire du gradient
- **textColor**: Couleur du texte
- **buttonWidth**: Largeur du bouton
- **buttonHeight**: Hauteur du bouton
- **animationSpeed**: Vitesse de l'animation (1-10)

## Événements

- **click**: Émis lors du clic avec `streakCount` et `timestamp`

## Utilisation

Une fois importé dans WeWeb, le composant apparaîtra dans votre bibliothèque de composants. Vous pourrez le glisser-déposer dans vos pages et configurer toutes ses propriétés via l'interface WeWeb.