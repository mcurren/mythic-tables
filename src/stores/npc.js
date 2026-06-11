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

export const squireTable = {
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
  steed: 'Pony (VIG 7, CLA 7, SPI 2, 2GD)',
  flavor: [
    {
      label: 'They brought something with them',
      items: [
        'a somewhat grand helm (A1) that’s a bit too big for them.',
        'they’re always playing a shrill flute.',
        'they have fine clothes and a pouch of coins.',
        'a homemade shield (A1).',
        'a small barrel of low quality mead.',
        'layers and layers of padded clothes (A1).',
        'somehow, they got a crossbow (2d8 slow).',
        'they somehow got hold of some mail (A1). Do they think they’re a Knight already??',
        'a tiny, low quality mirror.',
        'their parents loaded them up with Sustenance.',
        'they’ve foraged enough Stimulant to go around.',
        'a Seer provided them with Sacrament.'
      ]
    },
    {
      label: 'They have an aptitude',
      items: [
        'they can sprint like a horse.',
        'they can climb like a squirrel.',
        'they can sing like a nightingale.',
        'they can swim like a fish.',
        'they can eavesdrop like a bat.',
        'they’re a great judge of character.',
        'they’re a captivating storyteller.',
        'they have a perfect sense of direction.',
        'they were highly educated.',
        'they’re great with horses.',
        'they were an apprentice herbalist.',
        'they’re a decent hunter.'
      ]
    },
    {
      label: 'Their home is notable',
      items: [
        'it’s far away. They only know a language that nobody in this Realm understands.',
        'they’re a middling relative of the Ruler of the Realm.',
        'they’re heir to one of the Holdings.',
        'they’re already a successor to one of the Knights.',
        'they were raised by a Seer of this Realm.',
        'their family sprawls all over this Realm.',
        'they have a secret claim to the Seat of Power.',
        'their family was wiped out for treason, so they use a false name.',
        'they grew up in the wilds, so their snarls are vaguely understood by animals.',
        'they come from the frozen peaks, ignoring any hardship of Winter.',
        'they come from a realm of darkness, ignoring any problems with night.',
        'they floated up from a body of water, not needing air to breathe.'
      ]
    },
    {
      label: 'They’re not alone',
      items: [
        'they have an old but loyal hound (VIG 5, CLA 7, SPI 6, 4gd, d6 bite)',
        'they have a pet rat that they think understands them.',
        'they’re accompanied by an overbearing parent (rolled as another Squire, but they do not get a weapon)',
        'they’re a pair of twins, identical in every way.',
        'they have a kestrel (VIG 4, CLA 15, SPI 5, 3gd, d4 talons)',
        'their pony is especially violent (d6 trample).',
        'they guard a younger sibling (roll as a Squire, but too young to fight or be useful at all)',
        'they carry their mother’s ashes in a wooden urn.',
        'they have an embarrassing cloth doll.',
        'they speak to their father’s skull, kept in secret.',
        'their older sibling is a successful Knight, only occasionally coming by to check on them.',
        'they claim to have an invisible friend. 50% chance of whether this ever manifests into anything.'
      ]
    },
    {
      label: 'They’re not like the other Squires',
      items: [
        'they’re old.',
        'they’re big. Increase VIG to 12.',
        'they’re smart. Increase CLA to 12.',
        'they’re bold. Increase SPI  to 12.',
        'they claim to be a Knight reborn. They can Smite.',
        'they fought from birth. They can Focus.',
        'they cheated death. They can Deny.',
        'they secretly hate the Seers.',
        'they will not eat meat.',
        'they cannot lie.',
        'they hate horses.',
        'they’ve already seen battle. Roll d12 on the Scar table.'
      ]
    },
    {
      label: 'The Seers made a prophecy that must be honoured',
      items: [
        'this Squire must not fight until Knighted.',
        'this Squire must die so that another can rise.',
        'this Squire will find the City.',
        'this Squire must visit every Seer.',
        'this Squire must kill a Knight to become a Knight.',
        'this Squire will become a Seer.',
        'this Squire must kill a Seer.',
        'this Squire will find the next ruler of the Realm.',
        'this Squire must not ride a steed.',
        'this Squire must live in poverty.',
        'this Squire must never be Knighted.',
        'this Squire will achieve nothing of worth.'
      ]
    }
  ]
}
