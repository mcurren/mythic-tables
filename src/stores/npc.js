export const npcTable = [
  {
    label: 'Common',
    name: 'common',
    virtues: 'd12+d6',
    items: [
      {
        label: 'Servant',
        name: 'servant',
        guard: '2',
        description: 'Single duty with little expertise.'
      },
      {
        label: 'Guide',
        name: 'guide',
        guard: '4',
        description: 'Handaxe (d6), javelin (d6), local knowledge.'
      },
      {
        label: 'Sentry',
        name: 'sentry',
        guard: '3',
        description: 'Billhook (d10 long), little appetite for combat.'
      }
    ]
  },
  {
    label: 'Uncommon',
    name: 'uncommon',
    virtues: 'd12+d6',
    items: [
      {
        label: 'Herbalist',
        name: 'herbalist',
        guard: '2',
        description: 'Knows treatments, not cures'
      },
      {
        label: 'Soldier-at-Arms',
        name: 'soldier-at-arms',
        guard: '6',
        description: 'A2 (helm, shield), Spear (d6 hefty), shield (d4), battle worn.'
      },
      {
        label: 'Archer',
        name: 'archer',
        guard: '3',
        description: 'Shortbow (d6 long).'
      }
    ]
  },
  {
    label: 'Rare',
    name: 'rare',
    virtues: 'd12+d6',
    items: [
      {
        label: 'Sage',
        name: 'sage',
        guard: '2',
        description: 'Holds immense knowledge in a particular area of expertise.'
      },
      {
        label: 'Alchemist',
        name: 'alchemist',
        guard: '2',
        description: 'Creates poisons or quasi-medicinal potions.'
      },
      {
        label: 'Sellsword',
        name: 'sellsword',
        guard: '7',
        description:
          'A4 (coat, plates, helm, shield), Longsword (2d8 hefty), shield (d4), Generally only agrees to fights that they are confident they can win.'
      }
    ]
  }
]

export const squireTable = [
  {
    label: 'Squire',
    name: 'squire',
    virtues: '2d6',
    guard: '1',
    equipment: 'Dagger (d6)',
    items: [
      'Cudgel (d8 hefty)',
      'Axe (d8 hefty)',
      'Hatchet (d6)',
      'Shortbow (d6 long)',
      'Shield (d4, A1)',
      'Three Javelins (d6)'
    ],
    steed: 'Pony (VIG 7, CLA 7, SPI 2, 2GD)'
  }
]
