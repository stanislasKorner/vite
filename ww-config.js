export default {
  editor: {
    label: {
      en: 'Liquid Streak Button',
      fr: 'Bouton Streak Liquide'
    },
    icon: 'fontawesome/solid/fire',
    customStylePropertiesOrder: [
      'primaryColor',
      'secondaryColor',
      'textColor',
      'buttonWidth',
      'buttonHeight',
      'animationSpeed'
    ],
    customSettingsPropertiesOrder: [
      'streakCount',
      'streakLabel',
      'showIcon'
    ]
  },
  triggerEvents: [
    {
      name: 'click',
      label: { en: 'On click', fr: 'Au clic' },
      event: {
        streakCount: Number,
        timestamp: String
      }
    }
  ],
  properties: {
    streakCount: {
      label: {
        en: 'Streak Count',
        fr: 'Nombre de Streak'
      },
      type: 'Number',
      options: {
        min: 0,
        max: 9999,
        step: 1
      },
      defaultValue: 7,
      bindable: true,
      section: 'settings'
    },
    streakLabel: {
      label: {
        en: 'Streak Label',
        fr: 'Label du Streak'
      },
      type: 'Text',
      defaultValue: 'Day Streak',
      bindable: true,
      section: 'settings'
    },
    showIcon: {
      label: {
        en: 'Show Fire Icon',
        fr: 'Afficher Icône Feu'
      },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'settings'
    },
    primaryColor: {
      label: {
        en: 'Primary Color',
        fr: 'Couleur Primaire'
      },
      type: 'Color',
      defaultValue: '#ff6b6b',
      bindable: true,
      section: 'style'
    },
    secondaryColor: {
      label: {
        en: 'Secondary Color', 
        fr: 'Couleur Secondaire'
      },
      type: 'Color',
      defaultValue: '#ff8e8e',
      bindable: true,
      section: 'style'
    },
    textColor: {
      label: {
        en: 'Text Color',
        fr: 'Couleur du Texte'
      },
      type: 'Color',
      defaultValue: '#ffffff',
      bindable: true,
      section: 'style'
    },
    buttonWidth: {
      label: {
        en: 'Button Width',
        fr: 'Largeur du Bouton'
      },
      type: 'Length',
      defaultValue: '200px',
      bindable: true,
      section: 'style'
    },
    buttonHeight: {
      label: {
        en: 'Button Height',
        fr: 'Hauteur du Bouton'
      },
      type: 'Length',
      defaultValue: '60px',
      bindable: true,
      section: 'style'
    },
    animationSpeed: {
      label: {
        en: 'Animation Speed',
        fr: 'Vitesse Animation'
      },
      type: 'Number',
      options: {
        min: 1,
        max: 10,
        step: 0.5
      },
      defaultValue: 3,
      bindable: true,
      section: 'style'
    }
  }
}