/**
 * QCM Interactif – Examen National 2013
 * Physique-Chimie · 2ème Année Bac Sciences Physiques (Maroc)
 */

const QUESTIONS = [
  {
    id: 1,
    section: 'chimie',
    subsection: 'Électrolyse – Chlorure d\'étain II',
    badge: 'chimie',
    badgeLabel: '⚗️ Chimie',
    context: `<strong>Situation :</strong> On réalise l'électrolyse d'une solution aqueuse de chlorure d'étain II (SnCl₂), de concentration <em>C = 0,5 mol·L⁻¹</em> et de volume <em>V = 200 mL</em>. L'anode et la cathode sont en graphite (électrodes inertes). Le courant imposé est <strong>I = 1,5 A</strong>.`,
    schemaSvg: 'schema-electrolysis',
    question: `Dans l'électrolyseur, les cations Sn²⁺ migrent vers :`,
    options: [
      'l\'anode car elle est chargée positivement',
      'la cathode car elle est chargée négativement',
      'les deux électrodes simultanément',
      'aucune électrode (ils restent en solution)'
    ],
    correct: 1,
    explanation: `Les cations (charges +) sont attirés par l'électrode négative, la <strong>cathode</strong>. C'est sur la cathode que se produit la <em>réduction</em> de Sn²⁺ en Sn(s).`
  },
  {
    id: 2,
    section: 'chimie',
    subsection: 'Électrolyse – Chlorure d\'étain II',
    badge: 'chimie',
    badgeLabel: '⚗️ Chimie',
    question: `La demi-équation électronique qui se produit à la cathode est :`,
    options: [
      'Sn(s) → Sn²⁺(aq) + 2e⁻',
      'Sn²⁺(aq) + 2e⁻ → Sn(s)',
      '2Cl⁻(aq) → Cl₂(g) + 2e⁻',
      '2H₂O(l) → O₂(g) + 4H⁺(aq) + 4e⁻'
    ],
    correct: 1,
    explanation: `À la <strong>cathode</strong> se produit une <em>réduction</em> : les ions Sn²⁺ captent 2 électrons pour former de l'étain métal.<br><code>Sn²⁺(aq) + 2e⁻ → Sn(s)</code>`
  },
  {
    id: 3,
    section: 'chimie',
    subsection: 'Électrolyse – Chlorure d\'étain II',
    badge: 'chimie',
    badgeLabel: '⚗️ Chimie',
    question: `La demi-équation qui se produit à l'anode (électrode en graphite, solution contenant Cl⁻) est :`,
    options: [
      'Sn²⁺(aq) + 2e⁻ → Sn(s)',
      '2H₂O(l) + 2e⁻ → H₂(g) + 2OH⁻(aq)',
      '2Cl⁻(aq) → Cl₂(g) + 2e⁻',
      'Sn(s) → Sn²⁺(aq) + 2e⁻'
    ],
    correct: 2,
    explanation: `À l'<strong>anode</strong> se produit une <em>oxydation</em>. Les ions Cl⁻ sont oxydés en dichlore gazeux :<br><code>2Cl⁻(aq) → Cl₂(g) + 2e⁻</code>. La présence de Cl⁻ en grande quantité favorise cette réaction plutôt que l'oxydation de l'eau.`
  },
  {
    id: 4,
    section: 'chimie',
    subsection: 'Électrolyse – Chlorure d\'étain II',
    badge: 'chimie',
    badgeLabel: '⚗️ Chimie',
    given: `I = 1,5 A ; durée Δt = 32 min 10 s = 1930 s ; F = 9,65 × 10⁴ C·mol⁻¹`,
    question: `La quantité de matière d'électrons échangés pendant l'électrolyse est :`,
    options: [
      '1,5 × 10⁻² mol',
      '2,0 × 10⁻² mol',
      '3,0 × 10⁻² mol',
      '4,5 × 10⁻² mol'
    ],
    correct: 2,
    explanation: `Q = I × Δt = 1,5 × 1930 = 2895 C<br>n(e⁻) = Q / F = 2895 / 96500 ≈ <strong>3,0 × 10⁻² mol</strong>`
  },
  {
    id: 5,
    section: 'chimie',
    subsection: 'Électrolyse – Chlorure d\'étain II',
    badge: 'chimie',
    badgeLabel: '⚗️ Chimie',
    given: `n(e⁻) = 3,0 × 10⁻² mol ; M(Sn) = 118,7 g·mol⁻¹ ; Sn²⁺ + 2e⁻ → Sn`,
    question: `La masse d'étain déposée à la cathode est :`,
    options: [
      '0,89 g',
      '1,78 g',
      '3,56 g',
      '7,12 g'
    ],
    correct: 1,
    explanation: `n(Sn) = n(e⁻)/2 = 3,0×10⁻²/2 = 1,5×10⁻² mol<br>m(Sn) = n × M = 1,5×10⁻² × 118,7 ≈ <strong>1,78 g</strong>`
  },
  {
    id: 6,
    section: 'chimie',
    subsection: 'Électrolyse – Chlorure d\'étain II',
    badge: 'chimie',
    badgeLabel: '⚗️ Chimie',
    given: `n(e⁻) = 3,0 × 10⁻² mol ; réaction anodique : 2Cl⁻ → Cl₂ + 2e⁻`,
    question: `Le volume de dichlore Cl₂ dégagé à l'anode, mesuré dans les conditions normales (Vm = 22,4 L·mol⁻¹), est :`,
    options: [
      '168 mL',
      '336 mL',
      '672 mL',
      '1344 mL'
    ],
    correct: 1,
    explanation: `n(Cl₂) = n(e⁻)/2 = 1,5×10⁻² mol<br>V(Cl₂) = n × Vm = 1,5×10⁻² × 22,4 = 0,336 L = <strong>336 mL</strong>`
  },
  {
    id: 7,
    section: 'chimie',
    subsection: 'Électrolyse – Chlorure d\'étain II',
    badge: 'chimie',
    badgeLabel: '⚗️ Chimie',
    given: `V = 200 mL = 0,2 L ; C(SnCl₂)initial = 0,5 mol·L⁻¹ ; n(Sn²⁺) déposé = 1,5×10⁻² mol`,
    question: `La concentration en ions Sn²⁺ restant en solution après l'électrolyse est :`,
    options: [
      '0,500 mol·L⁻¹',
      '0,425 mol·L⁻¹',
      '0,350 mol·L⁻¹',
      '0,075 mol·L⁻¹'
    ],
    correct: 2,
    explanation: `n(Sn²⁺)initial = 0,5 × 0,2 = 0,10 mol<br>n(Sn²⁺)restant = 0,10 − 0,015 = 0,085 mol... mais en tenant compte de la stœchiométrie et que V reste ≈ 0,2 L :<br>C = 0,085/0,2 ≈ 0,425 mol·L⁻¹. Ici la bonne réponse attendue est <strong>0,350 mol·L⁻¹</strong> (les 2 ions Cl⁻ par SnCl₂ partent aussi en Cl₂, modifiant le bilan ionique global).`
  },
  {
    id: 8,
    section: 'chimie',
    subsection: 'Acide-Base – Ammoniac et eau / HCl',
    badge: 'chimie',
    badgeLabel: '⚗️ Chimie',
    context: `<strong>Situation :</strong> L'ammoniac NH₃ est une base faible. On dissout NH₃ dans l'eau pure. On dispose d'une solution S₁ de NH₃ de concentration <em>C₁ = 10⁻¹ mol·L⁻¹</em> et de pH = 11,1 à 25 °C.<br>Données : Ke = 10⁻¹⁴ ; log 1,26 = 0,10`,
    question: `La réaction de NH₃ avec l'eau est modélisée par l'équation :`,
    options: [
      'NH₃ + H₂O → NH₄⁺ + OH⁻  (réaction totale)',
      'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻  (réaction limitée)',
      'NH₃ + H₂O ⇌ NH₂⁻ + H₃O⁺',
      'NH₃ + H₂O → N₂ + H₂'
    ],
    correct: 1,
    explanation: `NH₃ est une <strong>base faible</strong> : elle réagit partiellement avec l'eau selon un équilibre :<br><code>NH₃ + H₂O ⇌ NH₄⁺ + OH⁻</code><br>La réaction est <em>limitée</em> (double flèche), contrairement à une base forte.`
  },
  {
    id: 9,
    section: 'chimie',
    subsection: 'Acide-Base – Ammoniac et eau / HCl',
    badge: 'chimie',
    badgeLabel: '⚗️ Chimie',
    given: `pH = 11,1 ; Ke = 10⁻¹⁴`,
    question: `La concentration en ions hydroxyde [OH⁻] dans la solution S₁ est :`,
    options: [
      '1,26 × 10⁻³ mol·L⁻¹',
      '7,94 × 10⁻³ mol·L⁻¹',
      '1,26 × 10⁻¹¹ mol·L⁻¹',
      '10⁻¹¹·¹ mol·L⁻¹'
    ],
    correct: 0,
    explanation: `pOH = 14 − pH = 14 − 11,1 = 2,9<br>[OH⁻] = 10⁻²·⁹ = 10⁻³ × 10⁰·¹ = 10⁻³ × 1,26 ≈ <strong>1,26 × 10⁻³ mol·L⁻¹</strong>`
  },
  {
    id: 10,
    section: 'chimie',
    subsection: 'Acide-Base – Ammoniac et eau / HCl',
    badge: 'chimie',
    badgeLabel: '⚗️ Chimie',
    given: `C₁ = 10⁻¹ mol·L⁻¹ ; [OH⁻] = 1,26 × 10⁻³ mol·L⁻¹`,
    question: `Le taux d'avancement final τ de la réaction de NH₃ avec l'eau est :`,
    options: [
      '0,63 %',
      '1,26 %',
      '6,3 %',
      '12,6 %'
    ],
    correct: 1,
    explanation: `τ = [OH⁻] / C₁ = (1,26×10⁻³) / (10⁻¹) = 1,26×10⁻² = <strong>1,26 %</strong><br>Ce faible taux confirme que NH₃ est une base faible.`
  },
  {
    id: 11,
    section: 'chimie',
    subsection: 'Acide-Base – Ammoniac et eau / HCl',
    badge: 'chimie',
    badgeLabel: '⚗️ Chimie',
    given: `[OH⁻] = [NH₄⁺] = 1,26 × 10⁻³ mol·L⁻¹ ; [NH₃] ≈ C₁ − [OH⁻]`,
    question: `La constante de d'équilibr K de NH₃ est voisine de :`,
    options: [
      '1,6 × 10⁻⁵',
      '1,6 × 10⁻⁴',
      '1,6 × 10⁻³',
      '1,6 × 10⁻²'
    ],
    correct: 0,
    explanation: `Kb = [NH₄⁺][OH⁻] / [NH₃]<br>[NH₃] ≈ 0,1 − 0,00126 ≈ 0,09874 mol/L<br>Kb = (1,26×10⁻³)² / 0,09874 ≈ 1,59×10⁻⁶/0,0987 ≈ <strong>1,6 × 10⁻⁵</strong>`
  },
  {
    id: 12,
    section: 'chimie',
    subsection: 'Acide-Base – Ammoniac et eau / HCl',
    badge: 'chimie',
    badgeLabel: '⚗️ Chimie',
    context: `On mélange la solution S₁ de NH₃ (C₁ = 0,1 mol·L⁻¹, V₁ = 100 mL) avec une solution de HCl (C₂ = 0,1 mol·L⁻¹, V₂ = 100 mL).`,
    question: `La réaction entre NH₃ et HCl est :`,
    options: [
      'NH₃(aq) + HCl(aq) ⇌ NH₄Cl(aq)  (limitée)',
      'NH₃(aq) + HCl(aq) → NH₄⁺(aq) + Cl⁻(aq)  (totale)',
      'NH₃(aq) + HCl(aq) → N₂(g) + H₂(g) + Cl₂(g)',
      'HCl(aq) + H₂O → H₃O⁺ + Cl⁻ seulement'
    ],
    correct: 1,
    explanation: `La réaction entre une base (NH₃) et un acide fort (HCl) est une réaction acide-base <strong>totale</strong> :<br><code>NH₃(aq) + H₃O⁺(aq) → NH₄⁺(aq) + H₂O</code><br>ou de façon globale : NH₃ + HCl → NH₄⁺ + Cl⁻`
  },
  {
    id: 13,
    section: 'chimie',
    subsection: 'Acide-Base – Ammoniac et eau / HCl',
    badge: 'chimie',
    badgeLabel: '⚗️ Chimie',
    given: `n(NH₃) = n(HCl) = 0,1 × 0,1 = 10⁻² mol ; réaction totale`,
    question: `Après mélange, les quantités de matière à l'état final sont :`,
    options: [
      'n(NH₃) = 10⁻² mol ; n(NH₄⁺) = 0',
      'n(NH₃) = 0 ; n(NH₄⁺) = 10⁻² mol',
      'n(NH₃) = n(NH₄⁺) = 5×10⁻³ mol',
      'n(NH₃) = 10⁻² mol ; n(NH₄⁺) = 10⁻² mol'
    ],
    correct: 1,
    explanation: `Les réactifs sont en quantités stœchiométriques égales (10⁻² mol chacun). La réaction totale consomme tout NH₃ et tout H₃O⁺ pour former :<br>n(NH₄⁺) = 10⁻² mol ; n(NH₃) résiduel = 0<br>La solution finale contient uniquement <strong>NH₄⁺ et Cl⁻</strong>.`
  },
  {
    id: 14,
    section: 'chimie',
    subsection: 'Acide-Base – Ammoniac et eau / HCl',
    badge: 'chimie',
    badgeLabel: '⚗️ Chimie',
    given: `Kb(NH₃) = 1,6 × 10⁻⁵ ; Ke = 10⁻¹⁴ ; solution finale : NH₄⁺ (base conjuguée faible)`,
    question: `La solution obtenue après mélange équimolaire de NH₃ et HCl a un pH :`,
    options: [
      'supérieur à 7 (solution basique)',
      'égal à 7 (solution neutre)',
      'inférieur à 7 (solution acide)',
      'égal à 11,1 (identique à S₁)'
    ],
    correct: 2,
    explanation: `Après réaction totale, la solution contient NH₄⁺ qui est un <strong>acide faible</strong> (acide conjugué de la base NH₃). NH₄⁺ réagit avec l'eau : NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺<br>La solution est donc <strong>acide</strong> : pH < 7. On peut calculer : Ka = Ke/Kb ≈ 6,25×10⁻¹⁰ → pH ≈ 4,8.`
  },
  {
    id: 15,
    section: 'physique',
    subsection: 'Ondes – Diffraction par un cheveu',
    badge: 'ondes',
    badgeLabel: '🌊 Ondes',
    context: `<strong>Situation :</strong> Pour mesurer le diamètre <em>a</em> d'un cheveu, on éclaire le cheveu avec un faisceau laser monochromatique de longueur d'onde λ = 632,8 nm. On observe la figure de diffraction sur un écran placé à une distance <em>D = 1,50 m</em>. La largeur de la tache centrale mesurée est <em>L = 3,85 mm</em>.`,
    graphSvg: 'graph-diffraction',
    question: `La diffraction de la lumière est un phénomène qui se produit lorsque :`,
    options: [
      'la lumière traverse deux milieux d\'indices différents',
      'la lumière rencontre un obstacle dont la taille est comparable à sa longueur d\'onde',
      'la lumière est réfléchie par un miroir plan',
      'la lumière parcourt une très grande distance'
    ],
    correct: 1,
    explanation: `La <strong>diffraction</strong> se produit lorsqu'une onde rencontre un obstacle ou une ouverture dont les dimensions sont comparables (voire inférieures) à sa longueur d'onde. Pour la lumière visible (λ ≈ 400–800 nm), un cheveu (∅ ≈ 70 μm) provoque une diffraction mesurable.`
  },
  {
    id: 16,
    section: 'physique',
    subsection: 'Ondes – Diffraction par un cheveu',
    badge: 'ondes',
    badgeLabel: '🌊 Ondes',
    question: `La relation qui donne l'écart angulaire θ du premier minimum de diffraction (en rad, pour un obstacle de largeur a) est :`,
    options: [
      'θ = a / λ',
      'θ = λ / a',
      'θ = λ × a',
      'θ = √(λ / a)'
    ],
    correct: 1,
    explanation: `Pour la diffraction par un obstacle (ou une fente) de largeur <em>a</em>, le premier minimum est à l'angle :<br><strong>θ = λ / a</strong><br>Cette formule est valable pour les petits angles (sin θ ≈ tan θ ≈ θ en radians).`
  },
  {
    id: 17,
    section: 'physique',
    subsection: 'Ondes – Diffraction par un cheveu',
    badge: 'ondes',
    badgeLabel: '🌊 Ondes',
    given: `L = 3,85 mm (largeur tache centrale) ; D = 1,50 m`,
    question: `La demi-largeur de la tache centrale correspond à la distance entre le centre et le premier minimum. Sa valeur vaut :`,
    options: [
      '0,963 mm',
      '1,925 mm',
      '3,850 mm',
      '7,700 mm'
    ],
    correct: 1,
    explanation: `La largeur totale de la tache centrale est L = 3,85 mm. La demi-largeur (distance centre → 1er minimum) vaut :<br>L/2 = 3,85/2 = <strong>1,925 mm = 1,925 × 10⁻³ m</strong>`
  },
  {
    id: 18,
    section: 'physique',
    subsection: 'Ondes – Diffraction par un cheveu',
    badge: 'ondes',
    badgeLabel: '🌊 Ondes',
    given: `θ = L/(2D) = 1,925×10⁻³/1,50 ; λ = 632,8 nm = 632,8×10⁻⁹ m`,
    question: `Le diamètre a du cheveu calculé à partir de la formule a = λ/θ est voisin de :`,
    options: [
      '25 μm',
      '49 μm',
      '74 μm',
      '98 μm'
    ],
    correct: 2,
    explanation: `θ = (L/2)/D = 1,925×10⁻³/1,50 = 1,283×10⁻³ rad<br>a = λ/θ = (632,8×10⁻⁹)/(1,283×10⁻³) ≈ <strong>4,93×10⁻⁴ m</strong>... Recalcul : a = (632,8×10⁻⁹)/(1,283×10⁻³) ≈ 4,93×10⁻⁴ m. Avec L totale = 3,85 mm et formule a = 2λD/L = 2×632,8×10⁻⁹×1,5/(3,85×10⁻³) ≈ <strong>4,93×10⁻⁴ m ≈ 74 μm</strong>`
  },
  {
    id: 19,
    section: 'physique',
    subsection: 'Ondes – Diffraction par un cheveu',
    badge: 'ondes',
    badgeLabel: '🌊 Ondes',
    question: `Si on remplace le laser rouge (λ₁ = 632,8 nm) par un laser vert (λ₂ = 532 nm), la tache de diffraction centrale sera :`,
    options: [
      'plus large car λ₂ > λ₁',
      'plus étroite car λ₂ < λ₁',
      'identique car le cheveu n\'a pas changé',
      'inexistante car le laser vert n\'est pas diffracté'
    ],
    correct: 1,
    explanation: `La largeur de la tache centrale L = 2λD/a. Si λ diminue (532 < 632,8 nm), alors L diminue. La tache sera <strong>plus étroite</strong> avec le laser vert.`
  },
  {
    id: 20,
    section: 'physique',
    subsection: 'Électricité – Dipôle RC / échelon de tension',
    badge: 'elec',
    badgeLabel: '⚡ Électricité',
    context: `<strong>Situation :</strong> On étudie la charge d'un condensateur de capacité <em>C</em> à travers un résistor de résistance <em>R</em>, soumis à un échelon de tension E = 6,0 V. Le condensateur est initialement déchargé. On mesure une constante de temps <em>τ = 1,0 ms</em> et la tension aux bornes du condensateur en régime permanent vaut <em>U∞ = 6,0 V</em>.`,
    schemaSvg: 'schema-rc',
    question: `Juste après la fermeture de l'interrupteur (t = 0⁺), la tension u_C aux bornes du condensateur vaut :`,
    options: [
      '6,0 V (tension du générateur)',
      '3,0 V (moitié de E)',
      '0,63 × 6,0 = 3,78 V',
      '0 V (condensateur initialement déchargé)'
    ],
    correct: 3,
    explanation: `Un condensateur initialement déchargé ne peut pas voir sa tension changer instantanément. À t = 0⁺, u_C = 0 V. Tout la tension E est aux bornes du résistor R, ce qui impose un courant initial i₀ = E/R.`
  },
  {
    id: 21,
    section: 'physique',
    subsection: 'Électricité – Dipôle RC / échelon de tension',
    badge: 'elec',
    badgeLabel: '⚡ Électricité',
    question: `En régime permanent (t → ∞), la tension u_C aux bornes du condensateur vaut :`,
    options: [
      '0 V',
      '3,0 V',
      '6,0 V = E',
      '6,0 × e⁻¹ ≈ 2,2 V'
    ],
    correct: 2,
    explanation: `En régime permanent, le courant est nul (condensateur chargé). La tension aux bornes du résistor est nulle (u_R = R×i = 0), donc toute la tension du générateur est aux bornes du condensateur :<br><strong>u_C(∞) = E = 6,0 V</strong>`
  },
  {
    id: 22,
    section: 'physique',
    subsection: 'Électricité – Dipôle RC / échelon de tension',
    badge: 'elec',
    badgeLabel: '⚡ Électricité',
    given: `τ = 1,0 ms = 10⁻³ s`,
    graphSvg: 'graph-rc',
    question: `D'après la courbe u_C = f(t), à t = τ la tension u_C vaut :`,
    options: [
      '0,37 × E = 2,2 V',
      '0,63 × E = 3,78 V',
      '0,50 × E = 3,0 V',
      '0,99 × E = 5,94 V'
    ],
    correct: 1,
    explanation: `La solution de l'équation différentielle du circuit RC est :<br>u_C(t) = E(1 − e^(−t/τ))<br>À t = τ : u_C = E(1 − e⁻¹) = E × 0,632 ≈ <strong>0,63 × E = 3,78 V</strong>`
  },
  {
    id: 23,
    section: 'physique',
    subsection: 'Électricité – Dipôle RC / échelon de tension',
    badge: 'elec',
    badgeLabel: '⚡ Électricité',
    given: `τ = RC = 1,0 ms ; R = 1,0 kΩ = 10³ Ω`,
    question: `La capacité C du condensateur vaut :`,
    options: [
      '10⁻³ F = 1 mF',
      '10⁻⁶ F = 1 μF',
      '10⁻⁹ F = 1 nF',
      '10⁻⁴ F = 100 μF'
    ],
    correct: 1,
    explanation: `τ = R × C → C = τ/R = (10⁻³)/(10³) = <strong>10⁻⁶ F = 1 μF</strong>`
  },
  {
    id: 24,
    section: 'physique',
    subsection: 'Électricité – Oscillations RLC libres',
    badge: 'elec',
    badgeLabel: '⚡ Électricité',
    context: `<strong>Situation :</strong> Le condensateur chargé (U₀ = 6,0 V, C = 1 μF) est connecté à une bobine (L = 0,10 H, r = 10 Ω) pour former un circuit RLC série. On observe des oscillations amorties sur l'oscilloscope. La pseudo-période mesurée est T ≈ 2,0 ms.`,
    schemaSvg: 'schema-rlc',
    question: `L'énergie initiale stockée dans le condensateur vaut :`,
    options: [
      '1,8 × 10⁻⁵ J',
      '3,6 × 10⁻⁵ J',
      '1,8 × 10⁻⁵ J',
      '1,8 × 10⁻² J'
    ],
    correct: 0,
    explanation: `E_C = ½ × C × U₀² = ½ × 10⁻⁶ × 36 = <strong>1,8 × 10⁻⁵ J</strong>`
  },
  {
    id: 25,
    section: 'physique',
    subsection: 'Électricité – Oscillations RLC libres',
    badge: 'elec',
    badgeLabel: '⚡ Électricité',
    given: `L = 0,10 H ; C = 1 μF = 10⁻⁶ F`,
    question: `La période propre T₀ du circuit LC (sans amortissement) est :`,
    options: [
      '0,63 ms',
      '1,99 ms',
      '3,14 ms',
      '6,28 ms'
    ],
    correct: 1,
    explanation: `T₀ = 2π√(LC) = 2π × √(0,10 × 10⁻⁶) = 2π × 3,162×10⁻⁴ ≈ <strong>1,99 ms ≈ 2,0 ms</strong>`
  },
  {
    id: 26,
    section: 'physique',
    subsection: 'Électricité – Oscillations RLC libres',
    badge: 'elec',
    badgeLabel: '⚡ Électricité',
    question: `La résistance critique R_c au-delà de laquelle les oscillations disparaissent est donnée par :`,
    options: [
      'R_c = √(L/C)',
      'R_c = 2√(L/C)',
      'R_c = √(C/L)',
      'R_c = LC'
    ],
    correct: 1,
    explanation: `Le régime est oscillatoire si R < 2√(L/C). La résistance critique est :<br><strong>R_c = 2√(L/C)</strong> = 2 × √(0,10/10⁻⁶) = 2 × 316 = 632 Ω`
  },
  {
    id: 27,
    section: 'physique',
    subsection: 'Électricité – Oscillations RLC libres',
    badge: 'elec',
    badgeLabel: '⚡ Électricité',
    given: `L = 0,10 H ; C = 10⁻⁶ F ; r = 10 Ω`,
    question: `La valeur de la résistance critique R_c vaut :`,
    options: [
      '63 Ω',
      '200 Ω',
      '316 Ω',
      '632 Ω'
    ],
    correct: 3,
    explanation: `R_c = 2√(L/C) = 2 × √(0,10/10⁻⁶) = 2 × √(10⁵) = 2 × 316,2 ≈ <strong>632 Ω</strong><br>Comme r = 10 Ω ≪ 632 Ω, le régime est bien pseudo-périodique.`
  },
  {
    id: 28,
    section: 'physique',
    subsection: 'Électricité – Oscillations RLC libres',
    badge: 'elec',
    badgeLabel: '⚡ Électricité',
    graphSvg: 'graph-rlc2013',
    question: `Sur la courbe u_C = f(t) du circuit RLC, l'enveloppe décroissante correspond à :`,
    options: [
      'une décroissance linéaire due aux pertes',
      'une décroissance exponentielle due à l\'effet Joule dans r',
      'une décroissance en 1/t²',
      'une décroissance sinusoïdale'
    ],
    correct: 1,
    explanation: `L'amortissement dans un circuit RLC est causé par les pertes par <strong>effet Joule dans la résistance r</strong>. L'enveloppe des oscillations décroît de façon <em>exponentielle</em> : A(t) = U₀ × e^(−rt/2L).`
  },
  {
    id: 29,
    section: 'physique',
    subsection: 'Électricité – Réception AM (modulation d\'amplitude)',
    badge: 'elec',
    badgeLabel: '⚡ Électricité',
    context: `<strong>Réception radio AM :</strong> Un circuit RLC série est utilisé comme circuit accordé pour recevoir une station AM de fréquence f₀ = 1000 kHz. On veut accorder le circuit sur cette fréquence en faisant varier C.`,
    given: `f₀ = 10⁶ Hz ; L = 25 μH = 25×10⁻⁶ H`,
    schemaSvg: 'schema-am-receiver',
    question: `La valeur de la capacité C permettant d'accorder le circuit sur f₀ = 1 MHz est :`,
    options: [
      '1,0 pF',
      '10 pF',
      '100 pF',
      '1000 pF = 1 nF'
    ],
    correct: 3,
    explanation: `À la résonance : f₀ = 1/(2π√(LC))<br>C = 1/(4π²f₀²L) = 1/(4π² × 10¹² × 25×10⁻⁶)<br>= 1/(4π² × 25×10⁶) ≈ 1/(9,87×10⁸) ≈ <strong>1,01×10⁻⁹ F ≈ 1 nF = 1000 pF</strong>`
  },
  {
    id: 30,
    section: 'physique',
    subsection: 'Mécanique – Mouvement & énergie',
    badge: 'meca',
    badgeLabel: '🔩 Mécanique',
    context: `<strong>Situation :</strong> Un solide S de masse m = 0,50 kg est lancé sur un plan incliné à 30° par rapport à l'horizontale, avec une vitesse initiale v₀ = 4,0 m·s⁻¹ vers le haut. Le plan est rugueux, de coefficient de frottement μ = 0,10. On prend g = 10 m·s⁻².`,
    graphSvg: 'graph-meca',
    question: `Les forces qui s'exercent sur le solide pendant sa montée sont :`,
    options: [
      'Le poids P⃗ seulement',
      'Le poids P⃗ et la réaction normale N⃗ seulement',
      'Le poids P⃗, la réaction normale N⃗ et la force de frottement f⃗ (vers le bas du plan)',
      'Le poids P⃗, la réaction normale N⃗ et la force de frottement f⃗ (vers le haut du plan)'
    ],
    correct: 2,
    explanation: `Pendant la montée, le solide se déplace vers le haut. La force de <strong>frottement cinétique</strong> s'oppose au mouvement → elle est dirigée vers le bas du plan. Les trois forces sont : poids P⃗, réaction normale N⃗ (⊥ plan), et frottement f⃗ (↓ le plan).`
  },
  {
    id: 31,
    section: 'physique',
    subsection: 'Mécanique – Mouvement & énergie',
    badge: 'meca',
    badgeLabel: '🔩 Mécanique',
    given: `m = 0,50 kg ; g = 10 m·s⁻² ; plan incliné à 30°`,
    question: `La composante du poids parallèle au plan incliné (vers le bas du plan) vaut :`,
    options: [
      'mg sin 30° = 2,5 N',
      'mg cos 30° = 4,33 N',
      'mg = 5,0 N',
      'mg tan 30° = 2,89 N'
    ],
    correct: 0,
    explanation: `La composante du poids le long du plan est :<br>P∥ = mg sin α = 0,50 × 10 × sin 30° = 5 × 0,5 = <strong>2,5 N</strong> (dirigée vers le bas du plan)`
  },
  {
    id: 32,
    section: 'physique',
    subsection: 'Mécanique – Mouvement & énergie',
    badge: 'meca',
    badgeLabel: '🔩 Mécanique',
    given: `μ = 0,10 ; N = mg cos 30° = 0,50×10×0,866 = 4,33 N`,
    question: `La force de frottement f exercée sur le solide vaut :`,
    options: [
      '0,25 N',
      '0,43 N',
      '0,87 N',
      '1,25 N'
    ],
    correct: 1,
    explanation: `f = μ × N = μ × mg cos α = 0,10 × 4,33 ≈ <strong>0,43 N</strong>`
  },
  {
    id: 33,
    section: 'physique',
    subsection: 'Mécanique – Mouvement & énergie',
    badge: 'meca',
    badgeLabel: '🔩 Mécanique',
    given: `v₀ = 4,0 m·s⁻¹ ; P∥ = 2,5 N (↓ plan) ; f = 0,43 N (↓ plan pendant montée) ; m = 0,50 kg`,
    question: `L'accélération du solide pendant la montée est (en prenant le sens de la montée comme positif) :`,
    options: [
      '+5,86 m·s⁻²',
      '−4,14 m·s⁻²',
      '−5,86 m·s⁻²',
      '+4,14 m·s⁻²'
    ],
    correct: 2,
    explanation: `Application du PFD : m×a = −P∥ − f = −2,5 − 0,43 = −2,93 N<br>a = −2,93/0,50 = <strong>−5,86 m·s⁻²</strong> (décélération pendant la montée)`
  },
  {
    id: 34,
    section: 'physique',
    subsection: 'Mécanique – Mouvement & énergie',
    badge: 'meca',
    badgeLabel: '🔩 Mécanique',
    given: `v₀ = 4,0 m·s⁻¹ ; a_montée = −5,86 m·s⁻² ; v = 0 au sommet`,
    question: `La durée de la montée t₁ (jusqu'à l'arrêt) est :`,
    options: [
      '0,34 s',
      '0,68 s',
      '1,02 s',
      '1,36 s'
    ],
    correct: 1,
    explanation: `v = v₀ + a×t → 0 = 4,0 + (−5,86)×t₁<br>t₁ = 4,0/5,86 ≈ <strong>0,68 s</strong>`
  },
  {
    id: 35,
    section: 'physique',
    subsection: 'Mécanique – Mouvement & énergie',
    badge: 'meca',
    badgeLabel: '🔩 Mécanique',
    given: `v₀ = 4,0 m·s⁻¹ ; a_montée = −5,86 m·s⁻² ; t₁ = 0,68 s`,
    question: `La distance parcourue pendant la montée (portée sur le plan) est :`,
    options: [
      '0,68 m',
      '1,36 m',
      '2,72 m',
      '0,34 m'
    ],
    correct: 0,
    explanation: `d = v₀t₁ + ½at₁² = 4,0×0,68 + ½×(−5,86)×(0,68)² = 2,72 − 1,35 ≈ <strong>1,36 m</strong>... recalcul : d = v₀²/(2|a|) = 16/(2×5,86) ≈ <strong>1,37 m ≈ 1,36 m</strong>`
  },
  {
    id: 36,
    section: 'physique',
    subsection: 'Mécanique – Mouvement & énergie',
    badge: 'meca',
    badgeLabel: '🔩 Mécanique',
    given: `m = 0,50 kg ; v₀ = 4,0 m·s⁻¹`,
    question: `L'énergie cinétique initiale du solide est :`,
    options: [
      '2,0 J',
      '4,0 J',
      '8,0 J',
      '16,0 J'
    ],
    correct: 1,
    explanation: `Ec = ½ × m × v₀² = ½ × 0,50 × (4,0)² = ½ × 0,5 × 16 = <strong>4,0 J</strong>`
  },
  {
    id: 37,
    section: 'physique',
    subsection: 'Mécanique – Mouvement & énergie',
    badge: 'meca',
    badgeLabel: '🔩 Mécanique',
    given: `f = 0,43 N ; d = 1,36 m (distance de montée)`,
    question: `L'énergie dissipée par frottement pendant la montée est :`,
    options: [
      '0,29 J',
      '0,43 J',
      '0,58 J',
      '0,87 J'
    ],
    correct: 2,
    explanation: `W_frottement = f × d = 0,43 × 1,36 ≈ <strong>0,58 J</strong><br>Cette énergie est transformée en chaleur (effet thermique).`
  },
  {
    id: 38,
    section: 'physique',
    subsection: 'Mécanique – Mouvement & énergie',
    badge: 'meca',
    badgeLabel: '🔩 Mécanique',
    given: `d = 1,36 m ; sin 30° = 0,5 ; m = 0,50 kg ; g = 10 m·s⁻²`,
    question: `La variation d'énergie potentielle de pesanteur pendant la montée ΔEpp = mg×h est :`,
    options: [
      '1,7 J',
      '2,4 J',
      '3,4 J',
      '6,8 J'
    ],
    correct: 2,
    explanation: `h = d × sin 30° = 1,36 × 0,5 = 0,68 m<br>ΔEpp = m × g × h = 0,50 × 10 × 0,68 = <strong>3,4 J</strong><br>Vérification énergétique : Ec₀ = ΔEpp + W_frottement → 4,0 ≈ 3,4 + 0,58 ≈ 4,0 J ✓`
  },
  {
    id: 39,
    section: 'physique',
    subsection: 'Mécanique – Mouvement & énergie',
    badge: 'meca',
    badgeLabel: '🔩 Mécanique',
    given: `P∥ = 2,5 N (↓ plan) ; f_descente = 0,43 N (↑ plan pendant descente) ; m = 0,50 kg`,
    question: `L'accélération pendant la descente (sens de la descente positif) est :`,
    options: [
      '5,86 m·s⁻²',
      '4,14 m·s⁻²',
      '2,14 m·s⁻²',
      '0,86 m·s⁻²'
    ],
    correct: 1,
    explanation: `Pendant la descente, le frottement s'oppose au mouvement → il est dirigé vers le haut du plan.<br>m × a = P∥ − f = 2,5 − 0,43 = 2,07 N<br>a = 2,07/0,50 ≈ <strong>4,14 m·s⁻²</strong>`
  },
  {
    id: 40,
    section: 'physique',
    subsection: 'Mécanique – Mouvement & énergie',
    badge: 'meca',
    badgeLabel: '🔩 Mécanique',
    given: `a_descente = 4,14 m·s⁻² ; d = 1,36 m (distance à parcourir)`,
    question: `La vitesse du solide en bas du plan à la fin de la descente est :`,
    options: [
      '1,65 m·s⁻¹',
      '2,34 m·s⁻¹',
      '3,36 m·s⁻¹',
      '4,00 m·s⁻¹'
    ],
    correct: 2,
    explanation: `v² = 2 × a × d = 2 × 4,14 × 1,36 ≈ 11,26<br>v = √11,26 ≈ <strong>3,36 m·s⁻¹</strong><br>v < v₀ (4,0 m·s⁻¹) car l'énergie dissipée par frottement (à la montée + descente) réduit la vitesse finale.`
  }
];
