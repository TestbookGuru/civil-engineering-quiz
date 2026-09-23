import { Question } from '../types';

export const QUESTION_CATEGORIES = [
  'Building Materials & Construction',
  'Strength of Materials',
  'Structural Analysis',
  'RCC & Steel',
  'Geotechnical',
  'Fluid Mechanics',
  'Environmental',
  'Transportation',
  'Surveying',
  'Engineering Mechanics',
  'Irrigation & Hydrology',
  'Estimation & Management',
] as const;

export const questionBank: Question[] = [
  /* =========================================================
     BUILDING MATERIALS & CONSTRUCTION (15)
  ========================================================= */
  {
    q: 'The main constituent of ordinary Portland cement is:',
    o: ['Silica', 'Lime', 'Alumina', 'Iron oxide'],
    a: 1,
    category: 'Building Materials & Construction',
    explanation: 'Lime (CaO) constitutes roughly 60% to 67% of ordinary Portland cement and imparts strength and soundness.'
  },
  {
    q: 'The initial setting time of ordinary Portland cement should not be less than:',
    o: ['10 minutes', '20 minutes', '30 minutes', '60 minutes'],
    a: 2,
    category: 'Building Materials & Construction',
    explanation: 'As per IS 269 / IS 456 standards, the initial setting time of OPC must not be less than 30 minutes.'
  },
  {
    q: 'The final setting time of ordinary Portland cement should not exceed:',
    o: ['5 hours', '10 hours', '15 hours', '24 hours'],
    a: 1,
    category: 'Building Materials & Construction',
    explanation: 'The final setting time of OPC should not exceed 10 hours (600 minutes) to allow early hardening.'
  },
  {
    q: 'The process of adding water to cement to form a paste is called:',
    o: ['Hydration', 'Calcination', 'Aggregation', 'Carbonation'],
    a: 0,
    category: 'Building Materials & Construction',
    explanation: 'Hydration is the exothermic chemical reaction between water and cement compounds resulting in binding crystals.'
  },
  {
    q: 'The specific gravity of ordinary Portland cement is approximately:',
    o: ['2.15', '2.65', '3.15', '3.65'],
    a: 2,
    category: 'Building Materials & Construction',
    explanation: 'The standard specific gravity of OPC is around 3.15 g/cm³, typically measured using Le Chatelier\'s flask with kerosene.'
  },
  {
    q: 'The slump test is used to determine the:',
    o: ['Strength of concrete', 'Workability of concrete', 'Durability of concrete', 'Density of concrete'],
    a: 1,
    category: 'Building Materials & Construction',
    explanation: 'The slump cone test measures consistency and workability of fresh concrete mix.'
  },
  {
    q: 'The nominal maximum size of aggregate generally used in RCC is:',
    o: ['10 mm', '20 mm', '40 mm', '80 mm'],
    a: 1,
    category: 'Building Materials & Construction',
    explanation: '20 mm is the most common coarse aggregate size in reinforced concrete work to pass between rebar bars easily.'
  },
  {
    q: 'The process of removing entrapped air from freshly placed concrete is called:',
    o: ['Curing', 'Compaction', 'Hydration', 'Segregation'],
    a: 1,
    category: 'Building Materials & Construction',
    explanation: 'Compaction (via vibrators or tamping) eliminates trapped air voids to achieve maximum density and strength.'
  },
  {
    q: 'The water-cement ratio primarily affects the:',
    o: ['Colour of concrete', 'Strength and workability', 'Shape of aggregate', 'Setting position'],
    a: 1,
    category: 'Building Materials & Construction',
    explanation: 'According to Abrams\' Law, the compressive strength and workability depend inversely on the water-cement ratio.'
  },
  {
    q: 'The bulking of sand is caused mainly due to:',
    o: ['Clay', 'Moisture', 'Cement', 'Organic matter'],
    a: 1,
    category: 'Building Materials & Construction',
    explanation: 'Surface tension films formed by moisture (around 4–5% water content) push sand particles apart, increasing bulk volume.'
  },
  {
    q: 'The test used to determine the crushing strength of bricks is:',
    o: ['Compression test', 'Impact test', 'Abrasion test', 'Tensile test'],
    a: 0,
    category: 'Building Materials & Construction',
    explanation: 'The compressive testing machine is used on frogs-filled bricks to measure ultimate crushing strength in N/mm².'
  },
  {
    q: 'Efflorescence in bricks is caused mainly by:',
    o: ['Excessive clay', 'Soluble salts', 'Excessive sand', 'High temperature'],
    a: 1,
    category: 'Building Materials & Construction',
    explanation: 'Soluble alkali salts (sulphates/chlorides of Na, K, Mg) dissolve in moisture and deposit as white powder on evaporation.'
  },
  {
    q: 'The frog in a brick is provided mainly to:',
    o: ['Reduce weight only', 'Improve bonding with mortar', 'Increase water absorption', 'Improve colour'],
    a: 1,
    category: 'Building Materials & Construction',
    explanation: 'The 10–20 mm indentation (frog) creates a key joint that binds the brick with mortar.'
  },
  {
    q: 'A concrete mix of 1:2:4 represents the proportion of:',
    o: ['Cement : sand : aggregate', 'Cement : aggregate : sand', 'Sand : cement : aggregate', 'Aggregate : sand : cement'],
    a: 0,
    category: 'Building Materials & Construction',
    explanation: '1:2:4 denotes nominal mix M15: 1 part cement, 2 parts fine aggregate (sand), and 4 parts coarse aggregate.'
  },
  {
    q: 'The full form of PPC in cement is:',
    o: ['Portland Pozzolana Cement', 'Portland Pure Cement', 'Pozzolanic Portland Concrete', 'Portland Plastic Cement'],
    a: 0,
    category: 'Building Materials & Construction',
    explanation: 'PPC blends OPC clinker with pozzolanic materials (such as fly ash or calcined clay) to improve durability and lower heat of hydration.'
  },

  /* =========================================================
     STRENGTH OF MATERIALS (20)
  ========================================================= */
  {
    q: 'Stress is defined as:',
    o: ['Force × area', 'Force / area', 'Area / force', 'Force × length'],
    a: 1,
    category: 'Strength of Materials',
    explanation: 'Stress (σ) is the internal restoring resistance per unit cross-sectional area: σ = P/A.'
  },
  {
    q: 'The SI unit of stress is:',
    o: ['N', 'N/m', 'N/m²', 'N·m'],
    a: 2,
    category: 'Strength of Materials',
    explanation: '1 N/m² is equivalent to 1 Pascal (Pa); engineering stresses are usually expressed in MPa (N/mm²).'
  },
  {
    q: 'Strain is:',
    o: ['Dimensional quantity', 'Dimensionless quantity', 'Force quantity', 'Pressure quantity'],
    a: 1,
    category: 'Strength of Materials',
    explanation: 'Strain (ε) is the ratio of change in dimension to original dimension (ΔL/L), so it has no physical units.'
  },
  {
    q: 'Hooke\'s law is valid within the:',
    o: ['Plastic limit', 'Elastic limit', 'Fracture limit', 'Ultimate limit'],
    a: 1,
    category: 'Strength of Materials',
    explanation: 'Hooke\'s Law states that within the limit of proportionality / elastic limit, stress is directly proportional to strain.'
  },
  {
    q: 'Young\'s modulus is the ratio of:',
    o: ['Shear stress to shear strain', 'Volumetric stress to volumetric strain', 'Longitudinal stress to longitudinal strain', 'Lateral stress to lateral strain'],
    a: 2,
    category: 'Strength of Materials',
    explanation: 'Modulus of Elasticity (E) = longitudinal normal stress / longitudinal strain.'
  },
  {
    q: 'The relation between Young\'s modulus (E), shear modulus (G), and Poisson\'s ratio (ν) is:',
    o: ['E = G(1 + ν)', 'E = 2G(1 + ν)', 'E = 2G(1 − ν)', 'E = G/(1 + ν)'],
    a: 1,
    category: 'Strength of Materials',
    explanation: 'The fundamental elastic constant relation is E = 2G(1 + ν) and also E = 3K(1 - 2ν).'
  },
  {
    q: 'Poisson\'s ratio for a perfectly incompressible material is:',
    o: ['0', '0.25', '0.5', '1'],
    a: 2,
    category: 'Strength of Materials',
    explanation: 'For volumetric strain (εv = ε(1 - 2ν)) to be zero, ν must equal 0.5 (as in rubber or ideal liquids).'
  },
  {
    q: 'The bending equation is:',
    o: ['M/I = σ/y = E/R', 'M/I = y/σ = R/E', 'M = Iσy', 'M = EI/y'],
    a: 0,
    category: 'Strength of Materials',
    explanation: 'The Euler-Bernoulli flexure formula is M/I = σ/y = E/R.'
  },
  {
    q: 'The neutral axis of a homogeneous beam passes through its:',
    o: ['Top surface', 'Bottom surface', 'Centroid', 'Shear centre only'],
    a: 2,
    category: 'Strength of Materials',
    explanation: 'For pure bending of a homogeneous linear elastic beam, the neutral axis passes through the cross-sectional centroid.'
  },
  {
    q: 'The unit of second moment of area is:',
    o: ['m', 'm²', 'm³', 'm⁴'],
    a: 3,
    category: 'Strength of Materials',
    explanation: 'Area moment of inertia I = ∫ y² dA has dimensions of (length)⁴, i.e., m⁴ or mm⁴.'
  },
  {
    q: 'The torsion equation for a circular shaft is:',
    o: ['T/J = τ/R = Gθ/L', 'T/J = R/τ = L/Gθ', 'T = J/R', 'T = G/L'],
    a: 0,
    category: 'Strength of Materials',
    explanation: 'The torsion formula for circular shafts is T/J = τ/R = Gθ/L.'
  },
  {
    q: 'Polar moment of inertia of a solid circular shaft of diameter d is:',
    o: ['πd⁴/64', 'πd⁴/32', 'πd³/32', 'πd²/4'],
    a: 1,
    category: 'Strength of Materials',
    explanation: 'J = Ixx + Iyy = πd⁴/64 + πd⁴/64 = πd⁴/32.'
  },
  {
    q: 'The maximum bending moment for a simply supported beam carrying a central point load W over span L is:',
    o: ['WL/2', 'WL/4', 'WL/8', 'WL/16'],
    a: 1,
    category: 'Strength of Materials',
    explanation: 'Reaction is W/2, so at midspan M = (W/2) * (L/2) = WL/4.'
  },
  {
    q: 'The maximum bending moment for a simply supported beam carrying a UDL w over the entire span L is:',
    o: ['wL²/4', 'wL²/6', 'wL²/8', 'wL²/12'],
    a: 2,
    category: 'Strength of Materials',
    explanation: 'At midspan x = L/2, M = (wL/2)(L/2) - w(L/2)²/2 = wL²/8.'
  },
  {
    q: 'The maximum deflection of a simply supported beam carrying a central point load W is:',
    o: ['WL³/48EI', 'WL³/24EI', 'WL²/48EI', 'WL³/12EI'],
    a: 0,
    category: 'Strength of Materials',
    explanation: 'Deflection at the center δ = WL³ / (48EI).'
  },
  {
    q: 'For a cantilever carrying a point load W at its free end, maximum bending moment occurs at the:',
    o: ['Free end', 'Midpoint', 'Fixed end', 'Quarter point'],
    a: 2,
    category: 'Strength of Materials',
    explanation: 'The bending moment increases linearly from 0 at the free tip to WL at the fixed support clamp.'
  },
  {
    q: 'The maximum bending moment in a cantilever of length L carrying point load W at the free end is:',
    o: ['WL/2', 'WL', 'WL²/2', 'W/L'],
    a: 1,
    category: 'Strength of Materials',
    explanation: 'M_max = W * L at the fixed base.'
  },
  {
    q: 'The maximum shear stress in a rectangular beam section is:',
    o: ['Equal to average shear stress', '1.5 times average shear stress', '2 times average shear stress', '3 times average shear stress'],
    a: 1,
    category: 'Strength of Materials',
    explanation: 'For a rectangular section, shear stress profile is parabolic with τ_max = 1.5 * τ_avg at the neutral axis.'
  },
  {
    q: 'The strain energy stored due to gradually applied axial load P is:',
    o: ['PL/AE', 'P²L/2AE', 'P²L/AE', 'PL²/AE'],
    a: 1,
    category: 'Strength of Materials',
    explanation: 'U = (1/2) * P * δ = (1/2) * P * (PL/AE) = P²L / (2AE).'
  },
  {
    q: 'The factor of safety is generally defined as:',
    o: ['Working stress/ultimate stress', 'Ultimate stress/working stress', 'Yield stress/ultimate stress', 'Working load/ultimate load'],
    a: 1,
    category: 'Strength of Materials',
    explanation: 'FOS = Ultimate (or Yield) Failure Stress / Permissible Working Stress.'
  },

  /* =========================================================
     STRUCTURAL ANALYSIS (15)
  ========================================================= */
  {
    q: 'A simply supported beam has:',
    o: ['Two fixed supports', 'One fixed and one roller support', 'Two roller supports', 'One hinge and one fixed support'],
    a: 1,
    category: 'Structural Analysis',
    explanation: 'A classic simply supported beam has one pinned/hinged support (resisting horizontal & vertical) and one roller support (allowing horizontal movement).'
  },
  {
    q: 'A roller support provides:',
    o: ['One reaction', 'Two reactions', 'Three reactions', 'No reaction'],
    a: 0,
    category: 'Structural Analysis',
    explanation: 'A roller support provides only a single reaction normal to the supporting surface.'
  },
  {
    q: 'A pin or hinge support in a plane structure provides:',
    o: ['One reaction', 'Two reaction components', 'Three reaction components', 'Four reactions'],
    a: 1,
    category: 'Structural Analysis',
    explanation: 'In 2D plane structures, a hinge support resists translation in X and Y directions (2 components).'
  },
  {
    q: 'A fixed support in a plane structure has:',
    o: ['One reaction', 'Two reactions', 'Three reaction components', 'No reaction'],
    a: 2,
    category: 'Structural Analysis',
    explanation: 'A fixed support restrains horizontal translation, vertical translation, and rotation (3 reaction components: Rx, Ry, M).'
  },
  {
    q: 'A structure is statically determinate when its reactions can be determined using:',
    o: ['Compatibility equations only', 'Equilibrium equations only', 'Material properties only', 'Deflection equations only'],
    a: 1,
    category: 'Structural Analysis',
    explanation: 'Statically determinate structures are solved purely using equations of statics (ΣFx=0, ΣFy=0, ΣM=0).'
  },
  {
    q: 'The degree of static indeterminacy of a simply supported beam is:',
    o: ['0', '1', '2', '3'],
    a: 0,
    category: 'Structural Analysis',
    explanation: 'Number of reactions = 3 (2 hinge + 1 roller), equilibrium equations = 3; Ds = 3 - 3 = 0.'
  },
  {
    q: 'The bending moment at a simple support is generally:',
    o: ['Maximum', 'Zero', 'Infinite', 'Negative infinity'],
    a: 1,
    category: 'Structural Analysis',
    explanation: 'A simple support allows free rotation, hence the resisting bending moment is zero.'
  },
  {
    q: 'At a point of contraflexure, the bending moment:',
    o: ['Is maximum', 'Is minimum', 'Changes sign', 'Becomes infinite'],
    a: 2,
    category: 'Structural Analysis',
    explanation: 'Point of contraflexure (inflection) is where curvature reverses and the bending moment diagram crosses zero (changes sign).'
  },
  {
    q: 'The area under a shear force diagram between two points represents the change in:',
    o: ['Load', 'Bending moment', 'Deflection', 'Slope'],
    a: 1,
    category: 'Structural Analysis',
    explanation: 'Since dM/dx = V, integrating V dx gives the difference in bending moment ΔM.'
  },
  {
    q: 'The slope of the bending moment diagram represents:',
    o: ['Load intensity', 'Shear force', 'Deflection', 'Axial force'],
    a: 1,
    category: 'Structural Analysis',
    explanation: 'The mathematical relation is dM/dx = V (Shear force).'
  },
  {
    q: 'The slope of the shear force diagram represents:',
    o: ['Bending moment', 'Load intensity', 'Deflection', 'Torsion'],
    a: 1,
    category: 'Structural Analysis',
    explanation: 'The relation is dV/dx = -w (the applied load intensity).'
  },
  {
    q: 'For a three-hinged arch, the degree of static indeterminacy is:',
    o: ['0', '1', '2', '3'],
    a: 0,
    category: 'Structural Analysis',
    explanation: 'Reactions = 4 (2 at each abutment). Equilibrium eqns = 3 + internal hinge equation at crown (1) = 4; Ds = 0.'
  },
  {
    q: 'In a perfect plane truss, the relation between members m and joints j is:',
    o: ['m = 2j + 3', 'm = 2j − 3', 'm = j − 2', 'm = 3j − 2'],
    a: 1,
    category: 'Structural Analysis',
    explanation: 'For determinacy and stability in 2D trusses, m = 2j - 3.'
  },
  {
    q: 'In a perfect plane truss with 10 joints, the number of members is:',
    o: ['15', '17', '20', '23'],
    a: 1,
    category: 'Structural Analysis',
    explanation: 'm = 2(10) - 3 = 20 - 3 = 17 members.'
  },
  {
    q: 'The method of joints for truss analysis is based on:',
    o: ['Moment equilibrium only', 'Force equilibrium at each joint', 'Energy conservation', 'Compatibility only'],
    a: 1,
    category: 'Structural Analysis',
    explanation: 'Since truss joints are treated as frictionless pins, ΣFx = 0 and ΣFy = 0 are evaluated at each concurrent joint.'
  },

  /* =========================================================
     RCC & STEEL (20)
  ========================================================= */
  {
    q: 'RCC stands for:',
    o: ['Reinforced Cement Concrete', 'Rolled Cement Concrete', 'Reinforced Clay Concrete', 'Reinforced Composite Cement'],
    a: 0,
    category: 'RCC & Steel',
    explanation: 'Reinforced Cement Concrete combines concrete\'s compressive strength with steel\'s tensile strength.'
  },
  {
    q: 'The main purpose of reinforcement in RCC beams is to resist:',
    o: ['Compression only', 'Tension', 'Temperature only', 'Shear only'],
    a: 1,
    category: 'RCC & Steel',
    explanation: 'Plain concrete has very weak tensile strength (approx. 10% of compression), so steel takes the tension.'
  },
  {
    q: 'Concrete is strong in:',
    o: ['Tension', 'Compression', 'Torsion only', 'Bending only'],
    a: 1,
    category: 'RCC & Steel',
    explanation: 'Concrete aggregates interlock under compressive loads, giving high compressive resistance.'
  },
  {
    q: 'The characteristic compressive strength of M25 concrete at 28 days is:',
    o: ['20 MPa', '25 MPa', '30 MPa', '35 MPa'],
    a: 1,
    category: 'RCC & Steel',
    explanation: 'In M25, \'M\' stands for Mix and \'25\' denotes characteristic 28-day 150 mm cube strength of 25 MPa.'
  },
  {
    q: 'The characteristic yield strength of Fe415 steel is:',
    o: ['250 MPa', '415 MPa', '500 MPa', '550 MPa'],
    a: 1,
    category: 'RCC & Steel',
    explanation: 'Fe415 indicates High Yield Strength Deformed (HYSD) rebar with minimum yield strength fy = 415 N/mm².'
  },
  {
    q: 'The minimum grade of concrete generally used for RCC as per IS 456 is:',
    o: ['M10', 'M15', 'M20', 'M25'],
    a: 2,
    category: 'RCC & Steel',
    explanation: 'IS 456:2000 specifies M20 as the minimum grade for reinforced concrete in mild exposure conditions.'
  },
  {
    q: 'The nominal cover provided to reinforcement mainly protects steel against:',
    o: ['Bending', 'Corrosion and fire', 'Shear only', 'Deflection only'],
    a: 1,
    category: 'RCC & Steel',
    explanation: 'Clear concrete cover shields the steel rebar from atmospheric carbonation, moisture-induced rusting, and thermal fire breakdown.'
  },
  {
    q: 'In a singly reinforced RCC beam, the main tension reinforcement is generally placed near the:',
    o: ['Neutral axis', 'Compression face', 'Tension face', 'Centre of beam'],
    a: 2,
    category: 'RCC & Steel',
    explanation: 'In simply supported beams sagging under gravity, tensile stresses develop at the bottom tension face.'
  },
  {
    q: 'The limiting neutral axis depth depends mainly on:',
    o: ['Grade of steel', 'Width of beam only', 'Span only', 'Cover only'],
    a: 0,
    category: 'RCC & Steel',
    explanation: 'xu,max/d depends purely on the yield strain of the steel grade (e.g. 0.53 for Fe250, 0.48 for Fe415, 0.46 for Fe500).'
  },
  {
    q: 'The effective depth of an RCC beam is measured from the:',
    o: ['Compression face to centroid of tension reinforcement', 'Tension face to compression reinforcement', 'Neutral axis to bottom', 'Top surface to bottom surface'],
    a: 0,
    category: 'RCC & Steel',
    explanation: 'Effective depth \'d\' is the distance from extreme compressive fiber to the centroid of tensile steel.'
  },
  {
    q: 'A column is generally considered a short column when its slenderness ratio is:',
    o: ['Less than or equal to 12', 'Greater than 12', 'Greater than 20', 'Greater than 30'],
    a: 0,
    category: 'RCC & Steel',
    explanation: 'As per IS 456, when Lex/D and Ley/b are both <= 12, it is designed as a short column where buckling is negligible.'
  },
  {
    q: 'The minimum eccentricity of a column is provided to account for:',
    o: ['Temperature only', 'Imperfections and construction tolerances', 'Shrinkage only', 'Creep only'],
    a: 1,
    category: 'RCC & Steel',
    explanation: 'emin = unsupported length/500 + lateral dimension/30 (min 20 mm) accounts for unavoidable out-of-plumb construction imperfections.'
  },
  {
    q: 'The full form of Fe in Fe415 steel refers to:',
    o: ['Ferro', 'Ferrous', 'Iron', 'Fibre'],
    a: 2,
    category: 'RCC & Steel',
    explanation: 'Fe is the chemical symbol for Iron (from the Latin Ferrum).'
  },
  {
    q: 'The minimum nominal diameter of longitudinal bars in a column should generally not be less than:',
    o: ['6 mm', '8 mm', '10 mm', '12 mm'],
    a: 3,
    category: 'RCC & Steel',
    explanation: 'IS 456 clause 26.5.3.1 mandates longitudinal column bars must be at least 12 mm in diameter.'
  },
  {
    q: 'The main function of lateral ties in RCC columns is to:',
    o: ['Increase span', 'Hold longitudinal bars and restrain them', 'Reduce concrete strength', 'Increase dead load'],
    a: 1,
    category: 'RCC & Steel',
    explanation: 'Lateral ties prevent outward buckling of vertical longitudinal rebar and confine the core concrete.'
  },
  {
    q: 'Structural steel is generally classified as:',
    o: ['Brittle material', 'Ductile material', 'Ceramic material', 'Non-metallic material'],
    a: 1,
    category: 'RCC & Steel',
    explanation: 'Mild steel displays significant plastic deformation and elongation (typically > 20%) before rupture, making it ductile.'
  },
  {
    q: 'The full form of ISMB is:',
    o: ['Indian Standard Medium Beam', 'Indian Standard Medium Weight Beam', 'Indian Structural Mild Beam', 'Indian Steel Main Beam'],
    a: 1,
    category: 'RCC & Steel',
    explanation: 'ISMB denotes Indian Standard Medium Weight Beam sections defined in IS 808.'
  },
  {
    q: 'Riveting and bolting are examples of:',
    o: ['Welding connections', 'Mechanical connections', 'Concrete connections', 'Frictionless connections'],
    a: 1,
    category: 'RCC & Steel',
    explanation: 'Fasteners like rivets, high-strength friction grip (HSFG) bolts, and bearing bolts are mechanical steel connectors.'
  },
  {
    q: 'The slenderness ratio of a compression member is:',
    o: ['L/r', 'r/L', 'L×r', 'L+r'],
    a: 0,
    category: 'RCC & Steel',
    explanation: 'Slenderness ratio λ = Leff / r_min, where r is the radius of gyration.'
  },
  {
    q: 'The effective length of a column with both ends hinged is:',
    o: ['L/2', 'L', '2L', '3L'],
    a: 1,
    category: 'RCC & Steel',
    explanation: 'For a pinned-pinned column, the fundamental buckling half-wavelength is equal to the actual column length (Leff = 1.0 L).'
  },

  /* =========================================================
     GEOTECHNICAL (25)
  ========================================================= */
  {
    q: 'Soil is generally considered a:',
    o: ['Three-phase system', 'Two-phase system only', 'Single-phase system', 'Four-phase system'],
    a: 0,
    category: 'Geotechnical',
    explanation: 'Partially saturated soil contains solid grains, liquid pore water, and gas (air) in its void spaces.'
  },
  {
    q: 'The three phases of soil are:',
    o: ['Soil, rock and water', 'Solids, water and air', 'Sand, silt and clay', 'Water, cement and air'],
    a: 1,
    category: 'Geotechnical',
    explanation: 'The three constituents in soil phase diagram diagrams are mineral solids (Vs), pore water (Vw), and air (Va).'
  },
  {
    q: 'Void ratio is defined as:',
    o: ['Volume of solids/volume of voids', 'Volume of voids/volume of solids', 'Volume of water/volume of solids', 'Volume of air/volume of water'],
    a: 1,
    category: 'Geotechnical',
    explanation: 'Void ratio e = Vv / Vs.'
  },
  {
    q: 'Porosity is defined as:',
    o: ['Vv/V', 'Vs/V', 'V/Vv', 'Vw/Vs'],
    a: 0,
    category: 'Geotechnical',
    explanation: 'Porosity n = Vv / V (volume of voids over total bulk soil volume).'
  },
  {
    q: 'The relation between porosity n and void ratio e is:',
    o: ['e = n/(1+n)', 'e = n/(1−n)', 'e = 1−n', 'e = n+1'],
    a: 1,
    category: 'Geotechnical',
    explanation: 'e = n / (1 - n) and inversely n = e / (1 + e).'
  },
  {
    q: 'If the void ratio of soil is 0.5, its porosity is:',
    o: ['20%', '25%', '33.33%', '50%'],
    a: 2,
    category: 'Geotechnical',
    explanation: 'n = e / (1 + e) = 0.5 / (1 + 0.5) = 0.5 / 1.5 = 1/3 = 33.33%.'
  },
  {
    q: 'Darcy\'s law is applicable to:',
    o: ['Turbulent flow through soil', 'Laminar flow through soil', 'Open channel flow only', 'Compressible flow only'],
    a: 1,
    category: 'Geotechnical',
    explanation: 'Darcy\'s law holds strictly for slow laminar seepage where Reynolds number is less than 1.'
  },
  {
    q: 'Darcy\'s law is expressed as:',
    o: ['q = kiA', 'q = k/iA', 'q = i/kA', 'q = kA/i'],
    a: 0,
    category: 'Geotechnical',
    explanation: 'Discharge q = k * i * A, where k is permeability, i is hydraulic gradient, and A is cross-sectional area.'
  },
  {
    q: 'The coefficient of permeability has the unit:',
    o: ['m', 'm²', 'm/s', 's/m'],
    a: 2,
    category: 'Geotechnical',
    explanation: 'Since hydraulic gradient i is dimensionless, permeability k has the units of seepage velocity (m/s or cm/s).'
  },
  {
    q: 'The standard penetration test is commonly abbreviated as:',
    o: ['SPT', 'STP', 'PST', 'TPS'],
    a: 0,
    category: 'Geotechnical',
    explanation: 'SPT (Standard Penetration Test) is the standard borehole in-situ geotechnical test.'
  },
  {
    q: 'In SPT, the standard hammer weight is approximately:',
    o: ['25 kg', '50 kg', '63.5 kg', '100 kg'],
    a: 2,
    category: 'Geotechnical',
    explanation: 'The standard hammer weight is 63.5 kg (140 lbs).'
  },
  {
    q: 'The standard drop of the SPT hammer is approximately:',
    o: ['300 mm', '500 mm', '750 mm', '1000 mm'],
    a: 2,
    category: 'Geotechnical',
    explanation: 'The free-fall height of the hammer is 750 mm to 760 mm (30 inches).'
  },
  {
    q: 'The SPT N-value is generally the number of blows required for penetration of:',
    o: ['First 150 mm', 'Second and third 150 mm', 'First 300 mm only', 'Last 600 mm'],
    a: 1,
    category: 'Geotechnical',
    explanation: 'The first 150 mm is seating penetration; N is recorded as blows for the subsequent 300 mm (second + third 150 mm).'
  },
  {
    q: 'The liquid limit of soil is commonly determined using:',
    o: ['Pycnometer', 'Casagrande apparatus', 'Proctor apparatus', 'Plate load apparatus'],
    a: 1,
    category: 'Geotechnical',
    explanation: 'The Casagrande mechanical liquid limit cup determines the water content at 25 blows.'
  },
  {
    q: 'Plasticity Index is equal to:',
    o: ['LL + PL', 'LL − PL', 'PL − LL', 'LL × PL'],
    a: 1,
    category: 'Geotechnical',
    explanation: 'Plasticity Index PI (or Ip) = Liquid Limit (LL) - Plastic Limit (PL).'
  },
  {
    q: 'If liquid limit is 50% and plastic limit is 20%, the plasticity index is:',
    o: ['20%', '30%', '50%', '70%'],
    a: 1,
    category: 'Geotechnical',
    explanation: 'PI = 50% - 20% = 30%.'
  },
  {
    q: 'The Proctor test is used to determine:',
    o: ['Shear strength only', 'OMC and MDD', 'Liquid limit', 'Permeability only'],
    a: 1,
    category: 'Geotechnical',
    explanation: 'The Proctor compaction test identifies the Optimum Moisture Content (OMC) giving Maximum Dry Density (MDD).'
  },
  {
    q: 'OMC stands for:',
    o: ['Optimum Moisture Content', 'Original Moisture Condition', 'Optimum Material Condition', 'Overall Moisture Coefficient'],
    a: 0,
    category: 'Geotechnical',
    explanation: 'Optimum Moisture Content is the moisture percentage at which compaction produces highest dry unit weight.'
  },
  {
    q: 'MDD stands for:',
    o: ['Maximum Dry Density', 'Minimum Dry Density', 'Maximum Design Density', 'Moisture Dry Density'],
    a: 0,
    category: 'Geotechnical',
    explanation: 'Maximum Dry Density is the peak of the compaction curve.'
  },
  {
    q: 'The angle of internal friction is generally denoted by:',
    o: ['θ', 'φ', 'α', 'β'],
    a: 1,
    category: 'Geotechnical',
    explanation: 'Greek letter φ (phi) is universally used for the soil angle of shearing resistance.'
  },
  {
    q: 'The shear strength equation according to Mohr-Coulomb theory is:',
    o: ['τ = c + σ tan φ', 'τ = c − σ tan φ', 'τ = σ/c + tan φ', 'τ = cσtanφ'],
    a: 0,
    category: 'Geotechnical',
    explanation: 'Mohr-Coulomb criterion: τf = c + σ_n * tan(φ), where c is cohesion and σ_n is normal stress.'
  },
  {
    q: 'Rankine\'s theory is used to determine:',
    o: ['Beam deflection', 'Earth pressure', 'Pipe flow', 'Concrete strength'],
    a: 1,
    category: 'Geotechnical',
    explanation: 'Rankine developed classical lateral earth pressure solutions for retaining wall backfills.'
  },
  {
    q: 'The coefficient of active earth pressure according to Rankine for cohesionless soil is:',
    o: ['(1+sinφ)/(1−sinφ)', '(1−sinφ)/(1+sinφ)', 'tanφ', 'sinφ'],
    a: 1,
    category: 'Geotechnical',
    explanation: 'Ka = (1 - sin φ) / (1 + sin φ) = tan²(45° - φ/2).'
  },
  {
    q: 'The bearing capacity of soil is commonly determined using:',
    o: ['Plate load test', 'Slump test', 'Impact test', 'Torsion test'],
    a: 0,
    category: 'Geotechnical',
    explanation: 'The plate load test uses a circular or square steel plate loaded incrementally to evaluate ultimate bearing capacity and settlement.'
  },
  {
    q: 'The full form of CBR is:',
    o: ['California Bearing Ratio', 'Central Bearing Ratio', 'Concrete Bearing Ratio', 'California Base Resistance'],
    a: 0,
    category: 'Geotechnical',
    explanation: 'CBR (California Bearing Ratio) evaluates subgrade soil strength for flexible pavement design.'
  },

  /* =========================================================
     FLUID MECHANICS (20)
  ========================================================= */
  {
    q: 'The SI unit of dynamic viscosity is:',
    o: ['m²/s', 'N·s/m²', 'N/m²', 'kg/m'],
    a: 1,
    category: 'Fluid Mechanics',
    explanation: 'Dynamic viscosity μ has units of Pa·s or N·s/m² (equivalent to kg/(m·s)).'
  },
  {
    q: 'Kinematic viscosity is equal to:',
    o: ['Dynamic viscosity × density', 'Dynamic viscosity/density', 'Density/dynamic viscosity', 'Dynamic viscosity + density'],
    a: 1,
    category: 'Fluid Mechanics',
    explanation: 'Kinematic viscosity ν = μ / ρ (measured in m²/s or stokes).'
  },
  {
    q: 'The continuity equation for incompressible flow is:',
    o: ['A₁V₁ = A₂V₂', 'A₁/V₁ = A₂/V₂', 'A₁ + V₁ = A₂ + V₂', 'A₁V₂ = A₂V₁'],
    a: 0,
    category: 'Fluid Mechanics',
    explanation: 'From mass conservation with constant fluid density, volumetric flow rate Q = A₁V₁ = A₂V₂.'
  },
  {
    q: 'Bernoulli\'s equation is based on conservation of:',
    o: ['Mass', 'Momentum', 'Energy', 'Angular momentum'],
    a: 2,
    category: 'Fluid Mechanics',
    explanation: 'Bernoulli\'s theorem equates total head (pressure + kinetic + potential energy) along a streamline for frictionless flow.'
  },
  {
    q: 'Reynolds number is defined as:',
    o: ['ρVD/μ', 'μVD/ρ', 'ρV/μD', 'μD/ρV'],
    a: 0,
    category: 'Fluid Mechanics',
    explanation: 'Re = Inertia forces / Viscous forces = (ρVD) / μ = (VD) / ν.'
  },
  {
    q: 'Flow through a circular pipe is generally laminar when Reynolds number is less than approximately:',
    o: ['500', '1000', '2000', '10000'],
    a: 2,
    category: 'Fluid Mechanics',
    explanation: 'For internal pipe flow, the lower critical Reynolds number for laminar regime is 2000.'
  },
  {
    q: 'Flow through a pipe is generally turbulent when Reynolds number is greater than approximately:',
    o: ['1000', '1500', '2000', '4000'],
    a: 3,
    category: 'Fluid Mechanics',
    explanation: 'Fully turbulent pipe flow initiates when Re exceeds roughly 4000.'
  },
  {
    q: 'The pressure at a depth h below the free surface of a liquid is:',
    o: ['ρgh', 'ρg/h', 'h/ρg', 'ρh/g'],
    a: 0,
    category: 'Fluid Mechanics',
    explanation: 'Hydrostatic pressure P = ρ * g * h = γ * h.'
  },
  {
    q: 'The centre of pressure on a vertical plane surface submerged in liquid lies:',
    o: ['Above centroid', 'At centroid always', 'Below centroid', 'At free surface'],
    a: 2,
    category: 'Fluid Mechanics',
    explanation: 'Because pressure increases with depth, the resultant pressure centroid h_cp = h_bar + Ig/(A * h_bar), which is always below the centroid.'
  },
  {
    q: 'A venturimeter is used to measure:',
    o: ['Pressure only', 'Discharge', 'Temperature', 'Viscosity'],
    a: 1,
    category: 'Fluid Mechanics',
    explanation: 'A venturimeter uses convergent and divergent cones with manometer differential head to calculate volumetric discharge.'
  },
  {
    q: 'A Pitot tube is used to measure:',
    o: ['Velocity of flow', 'Density', 'Viscosity', 'Discharge directly'],
    a: 0,
    category: 'Fluid Mechanics',
    explanation: 'A Pitot tube converts fluid kinetic energy to stagnation head to measure local point velocity: V = √(2gΔh).'
  },
  {
    q: 'The hydraulic radius is defined as:',
    o: ['Wetted perimeter/area', 'Area/wetted perimeter', 'Area × wetted perimeter', 'Wetted perimeter²/area'],
    a: 1,
    category: 'Fluid Mechanics',
    explanation: 'Hydraulic radius R = A / P, where A is flow area and P is wetted perimeter.'
  },
  {
    q: 'Froude number is important in:',
    o: ['Pipe flow', 'Open channel flow', 'Soil flow', 'Groundwater only'],
    a: 1,
    category: 'Fluid Mechanics',
    explanation: 'Froude number Fr = V / √(gD) governs open channel gravity wave propagation and free-surface regimes.'
  },
  {
    q: 'A hydraulic jump occurs when flow changes from:',
    o: ['Subcritical to supercritical', 'Supercritical to subcritical', 'Laminar to turbulent', 'Turbulent to laminar'],
    a: 1,
    category: 'Fluid Mechanics',
    explanation: 'A hydraulic jump is a turbulent phenomenon where rapid supercritical flow (Fr > 1) abruptly jumps to subcritical flow (Fr < 1).'
  },
  {
    q: 'The unit of discharge is:',
    o: ['m/s', 'm²/s', 'm³/s', 'm³'],
    a: 2,
    category: 'Fluid Mechanics',
    explanation: 'Discharge is volume per second: m³/s (cumecs) or litres/second.'
  },
  {
    q: 'Manning\'s equation is commonly used for:',
    o: ['Open channel flow', 'Pipe stress', 'Soil compaction', 'Beam design'],
    a: 0,
    category: 'Fluid Mechanics',
    explanation: 'Manning\'s empirical equation V = (1/n) * R^(2/3) * S^(1/2) computes uniform flow velocity in open channels.'
  },
  {
    q: 'The full form of HGL is:',
    o: ['Hydraulic Gradient Line', 'Hydraulic Ground Level', 'Head Gradient Level', 'Hydraulic Gauge Line'],
    a: 0,
    category: 'Fluid Mechanics',
    explanation: 'Hydraulic Gradient Line represents the sum of elevation head (z) and pressure head (P/γ).'
  },
  {
    q: 'The full form of EGL is:',
    o: ['Energy Gradient Line', 'Energy Ground Level', 'Elevation Gradient Line', 'Energy Gauge Level'],
    a: 0,
    category: 'Fluid Mechanics',
    explanation: 'Energy Gradient Line is HGL plus the velocity head (V² / 2g).'
  },
  {
    q: 'A centrifugal pump converts:',
    o: ['Hydraulic energy into mechanical energy', 'Mechanical energy into hydraulic energy', 'Heat energy into hydraulic energy', 'Electrical energy directly into pressure'],
    a: 1,
    category: 'Fluid Mechanics',
    explanation: 'The rotating impeller delivers mechanical torque to the liquid to raise pressure and flow energy.'
  },
  {
    q: 'Cavitation in a pump occurs when local pressure falls below:',
    o: ['Atmospheric pressure only', 'Vapour pressure of liquid', 'Critical pressure', 'Gauge pressure'],
    a: 1,
    category: 'Fluid Mechanics',
    explanation: 'When pressure drops below liquid vapor pressure, bubbles form and violently implode near metal blades causing pitting damage.'
  },

  /* =========================================================
     ENVIRONMENTAL (20)
  ========================================================= */
  {
    q: 'BOD stands for:',
    o: ['Biochemical Oxygen Demand', 'Biological Oxygen Density', 'Biochemical Oxidation Density', 'Biological Organic Demand'],
    a: 0,
    category: 'Environmental',
    explanation: 'BOD represents the dissolved oxygen consumed by aerobic microorganisms decomposing organic matter.'
  },
  {
    q: 'COD stands for:',
    o: ['Chemical Oxygen Demand', 'Chemical Organic Density', 'Carbon Oxygen Demand', 'Chemical Oxidation Density'],
    a: 0,
    category: 'Environmental',
    explanation: 'COD is the oxygen required to chemically oxidize all biodegradable and non-biodegradable organic constituents.'
  },
  {
    q: 'BOD is commonly measured over:',
    o: ['1 day at 20°C', '3 days at 25°C', '5 days at 20°C', '7 days at 25°C'],
    a: 2,
    category: 'Environmental',
    explanation: 'Standard BOD5 test incubates diluted wastewater samples for 5 days at 20°C.'
  },
  {
    q: 'The pH of neutral water at 25°C is approximately:',
    o: ['5', '6', '7', '8'],
    a: 2,
    category: 'Environmental',
    explanation: 'At 25°C, [H+] = [OH-] = 10^-7 mol/L, giving a neutral pH of 7.0.'
  },
  {
    q: 'The process of removing suspended particles by settling is called:',
    o: ['Filtration', 'Sedimentation', 'Chlorination', 'Aeration'],
    a: 1,
    category: 'Environmental',
    explanation: 'Sedimentation utilizes gravity to separate denser suspended solids in clarifiers.'
  },
  {
    q: 'The main purpose of coagulation in water treatment is to remove:',
    o: ['Dissolved oxygen', 'Fine colloidal particles', 'Hardness only', 'Chlorine'],
    a: 1,
    category: 'Environmental',
    explanation: 'Coagulants neutralize the negative surface charges on colloidal clay/turbid particles so they can agglomerate.'
  },
  {
    q: 'Alum is commonly used as a:',
    o: ['Disinfectant', 'Coagulant', 'Deodorant', 'Softening agent only'],
    a: 1,
    category: 'Environmental',
    explanation: 'Alum (Aluminium Sulphate) is the most widely applied chemical coagulant in municipal water plants.'
  },
  {
    q: 'Chlorination is mainly used for:',
    o: ['Coagulation', 'Disinfection', 'Sedimentation', 'Aeration'],
    a: 1,
    category: 'Environmental',
    explanation: 'Chlorine addition destroys pathogenic bacteria and viruses to safeguard public drinking water.'
  },
  {
    q: 'The most commonly used disinfectant for municipal water supply is:',
    o: ['Nitrogen', 'Chlorine', 'Oxygen', 'Carbon dioxide'],
    a: 1,
    category: 'Environmental',
    explanation: 'Chlorine gas or hypochlorite provides effective disinfection and leaves protective residual concentration in pipes.'
  },
  {
    q: 'Hardness of water is mainly caused by salts of:',
    o: ['Sodium and potassium', 'Calcium and magnesium', 'Iron and aluminium only', 'Chlorine and fluorine'],
    a: 1,
    category: 'Environmental',
    explanation: 'Multivalent cations, primarily Ca²⁺ and Mg²⁺, cause soap consumption and scale formation.'
  },
  {
    q: 'Temporary hardness is mainly due to:',
    o: ['Chlorides', 'Sulphates', 'Bicarbonates', 'Nitrates'],
    a: 2,
    category: 'Environmental',
    explanation: 'Bicarbonates of calcium and magnesium cause carbonate (temporary) hardness, which can be removed simply by boiling.'
  },
  {
    q: 'Permanent hardness is mainly due to:',
    o: ['Bicarbonates', 'Chlorides and sulphates', 'Carbonates only', 'Hydroxides only'],
    a: 1,
    category: 'Environmental',
    explanation: 'Chlorides, sulphates, and nitrates of calcium and magnesium cannot be removed by boiling.'
  },
  {
    q: 'The full form of TDS is:',
    o: ['Total Dissolved Solids', 'Total Dry Solids', 'Total Density of Solids', 'Total Dissolved Salts'],
    a: 0,
    category: 'Environmental',
    explanation: 'TDS measures combined inorganic and organic molecular substances in solution.'
  },
  {
    q: 'The full form of DO in water quality is:',
    o: ['Dissolved Oxygen', 'Density of Oxygen', 'Dissolved Organic matter', 'Demand Oxygen'],
    a: 0,
    category: 'Environmental',
    explanation: 'DO is dissolved molecular oxygen essential for aquatic life (typically 4–8 mg/L).'
  },
  {
    q: 'A septic tank is primarily used for:',
    o: ['Drinking water treatment', 'Primary treatment of domestic sewage', 'Industrial water cooling', 'Air purification'],
    a: 1,
    category: 'Environmental',
    explanation: 'A septic tank performs anaerobic digestion and solids sedimentation for on-site domestic sewage.'
  },
  {
    q: 'Activated sludge process is a:',
    o: ['Physical treatment process', 'Biological treatment process', 'Chemical treatment process only', 'Thermal treatment process'],
    a: 1,
    category: 'Environmental',
    explanation: 'Aerobic microorganisms in an aeration tank consume dissolved organics in the activated sludge process.'
  },
  {
    q: 'Trickling filter is used for:',
    o: ['Biological treatment', 'Chlorination', 'Screening only', 'Sludge drying only'],
    a: 0,
    category: 'Environmental',
    explanation: 'Wastewater trickles over a bed of stones or corrugated plastic media covered with an attached microbial biofilm.'
  },
  {
    q: 'The unit of turbidity commonly used is:',
    o: ['NTU', 'ppm only', 'mg/L only', 'dB'],
    a: 0,
    category: 'Environmental',
    explanation: 'Nephelometric Turbidity Units (NTU) measure scattered light from colloidal particles.'
  },
  {
    q: 'The full form of WHO is:',
    o: ['World Health Organization', 'World Housing Organization', 'Water Health Organization', 'World Hygiene Office'],
    a: 0,
    category: 'Environmental',
    explanation: 'WHO provides international drinking water and sanitation health guidelines.'
  },
  {
    q: 'The main purpose of a bar screen in a sewage treatment plant is to remove:',
    o: ['Dissolved salts', 'Large floating objects', 'Bacteria', 'Fine colloids'],
    a: 1,
    category: 'Environmental',
    explanation: 'Screening traps rags, branches, plastics, and debris to protect downstream pumps and impellers.'
  },

  /* =========================================================
     TRANSPORTATION (20)
  ========================================================= */
  {
    q: 'The full form of IRC is:',
    o: ['Indian Road Congress', 'Indian Railway Code', 'International Road Council', 'Indian Roads Committee'],
    a: 0,
    category: 'Transportation',
    explanation: 'Indian Roads Congress (IRC), formed in 1934, sets national highway design standards.'
  },
  {
    q: 'The camber of a road is provided mainly for:',
    o: ['Increasing speed', 'Drainage of rainwater', 'Reducing width', 'Increasing traffic volume'],
    a: 1,
    category: 'Transportation',
    explanation: 'Camber is the cross-slope given to pavement to rapidly shed surface storm runoff towards side gutters.'
  },
  {
    q: 'Superelevation is provided on horizontal curves to counteract:',
    o: ['Braking force', 'Centrifugal force', 'Friction only', 'Gravity'],
    a: 1,
    category: 'Transportation',
    explanation: 'Raising the outer edge of pavement counters outward centrifugal thrust: e + f = v² / (127R).'
  },
  {
    q: 'The minimum sight distance required for a vehicle to stop safely is called:',
    o: ['Overtaking sight distance', 'Stopping sight distance', 'Intermediate sight distance', 'Intersection sight distance'],
    a: 1,
    category: 'Transportation',
    explanation: 'SSD = Lag distance (vt) + Braking distance (v² / 2gf).'
  },
  {
    q: 'SSD stands for:',
    o: ['Safe Speed Distance', 'Stopping Sight Distance', 'Standard Sight Design', 'Stopping Safety Design'],
    a: 1,
    category: 'Transportation',
    explanation: 'Stopping Sight Distance is non-negotiable for highway alignment safety.'
  },
  {
    q: 'The wearing course of a flexible pavement is generally:',
    o: ['At the bottom', 'At the top', 'Below subgrade', 'Below drainage layer'],
    a: 1,
    category: 'Transportation',
    explanation: 'The surface / wearing course is the topmost premium bituminous layer providing skid resistance and riding quality.'
  },
  {
    q: 'The CBR test is mainly used in the design of:',
    o: ['Flexible pavements', 'Steel bridges', 'Concrete buildings', 'Rail tracks only'],
    a: 0,
    category: 'Transportation',
    explanation: 'The IRC 37 design charts relate subgrade California Bearing Ratio to required pavement crust thickness.'
  },
  {
    q: 'WBM stands for:',
    o: ['Water Bound Macadam', 'Wet Bound Material', 'Water Base Macadam', 'Wet Bituminous Macadam'],
    a: 0,
    category: 'Transportation',
    explanation: 'Water Bound Macadam binds crushed broken stones using stone screenings, dust, and water.'
  },
  {
    q: 'WMM stands for:',
    o: ['Wet Mix Macadam', 'Water Mixed Material', 'Wet Macadam Material', 'Water Mix Method'],
    a: 0,
    category: 'Transportation',
    explanation: 'Wet Mix Macadam is plant-mixed granular base material laid at optimum moisture content.'
  },
  {
    q: 'The Los Angeles abrasion test determines the:',
    o: ['Toughness of aggregate', 'Abrasion resistance of aggregate', 'Water absorption of cement', 'Strength of soil'],
    a: 1,
    category: 'Transportation',
    explanation: 'Rotating aggregates with steel balls tests resistance against mutual attrition and wheel abrasion wear.'
  },
  {
    q: 'The aggregate impact value indicates the:',
    o: ['Toughness of aggregate', 'Shape of aggregate', 'Specific gravity', 'Water absorption'],
    a: 0,
    category: 'Transportation',
    explanation: 'Repeated hammer blows in the impact test measure resistance to sudden shock or impact loading.'
  },
  {
    q: 'The flakiness index measures the percentage of aggregate particles that are:',
    o: ['Rounded', 'Flaky', 'Elongated only', 'Porous'],
    a: 1,
    category: 'Transportation',
    explanation: 'An aggregate particle is flaky when its least dimension (thickness) is less than 0.6 times its mean dimension.'
  },
  {
    q: 'The penetration test is used to determine the consistency of:',
    o: ['Cement', 'Bitumen', 'Concrete', 'Soil'],
    a: 1,
    category: 'Transportation',
    explanation: 'A standard needle loaded with 100 g penetrates bitumen at 25°C for 5 seconds to grade asphalt hardness.'
  },
  {
    q: 'The ductility test of bitumen determines its ability to:',
    o: ['Resist abrasion', 'Undergo elongation', 'Resist compression', 'Absorb water'],
    a: 1,
    category: 'Transportation',
    explanation: 'Briquette specimens pulled at 5 cm/min measure how many centimeters the bitumen strand stretches without snapping.'
  },
  {
    q: 'The softening point of bitumen is commonly determined using:',
    o: ['Ring and Ball apparatus', 'Casagrande apparatus', 'Proctor apparatus', 'Vicat apparatus'],
    a: 0,
    category: 'Transportation',
    explanation: 'Bitumen in a brass ring yields under a steel ball as water bath temperature rises, identifying softening temperature.'
  },
  {
    q: 'Railway sleepers are provided mainly to:',
    o: ['Increase train speed', 'Maintain gauge and transfer load', 'Reduce rail length', 'Increase rail temperature'],
    a: 1,
    category: 'Transportation',
    explanation: 'Sleepers hold parallel rails at uniform gauge width and distribute wheel axle loads over ballast.'
  },
  {
    q: 'The distance between the inner faces of two rails is called:',
    o: ['Rail length', 'Railway gauge', 'Track width', 'Sleeper spacing'],
    a: 1,
    category: 'Transportation',
    explanation: 'Track gauge is defined as the minimum clear distance between running faces of the two rails.'
  },
  {
    q: 'Broad gauge in Indian Railways is:',
    o: ['1000 mm', '1435 mm', '1524 mm', '1676 mm'],
    a: 3,
    category: 'Transportation',
    explanation: 'Indian standard broad gauge track width is 1.676 m (5 ft 6 in).'
  },
  {
    q: 'A transition curve is provided between:',
    o: ['Two straight roads', 'Straight and circular curve', 'Two straight railway tracks only', 'Two bridges'],
    a: 1,
    category: 'Transportation',
    explanation: 'A transition curve gradually introduces radius curvature and superelevation from straight to circular curve.'
  },
  {
    q: 'The full form of PCU is:',
    o: ['Passenger Car Unit', 'Pavement Capacity Unit', 'Passenger Capacity Utility', 'Pavement Control Unit'],
    a: 0,
    category: 'Transportation',
    explanation: 'Passenger Car Unit standardizes mixed traffic modes against an equivalent single passenger car.'
  },

  /* =========================================================
     SURVEYING (15)
  ========================================================= */
  {
    q: 'The fundamental principle of surveying is to work from:',
    o: ['Part to whole', 'Whole to part', 'Centre to edge', 'Bottom to top'],
    a: 1,
    category: 'Surveying',
    explanation: 'Working from whole to part establishes a high-precision primary control framework, preventing error accumulation.'
  },
  {
    q: 'A chain survey is most suitable for:',
    o: ['Large mountainous areas', 'Small and fairly level areas', 'Underground surveys', 'Hydrographic surveys'],
    a: 1,
    category: 'Surveying',
    explanation: 'Chain triangulation works best in open, relatively flat, small tracts where obstacles are minimal.'
  },
  {
    q: 'The length of a metric chain commonly used in surveying is:',
    o: ['10 m', '20 m', '30 m', '50 m'],
    a: 2,
    category: 'Surveying',
    explanation: 'Metric chains are standardized primarily in 20 m (100 links) and 30 m (150 links) lengths as per IS 1492.'
  },
  {
    q: 'A prismatic compass measures:',
    o: ['Vertical angle only', 'Magnetic bearings', 'Horizontal distance only', 'Elevation only'],
    a: 1,
    category: 'Surveying',
    explanation: 'A prismatic compass measures the magnetic bearing of survey lines in whole circle bearing (WCB) format.'
  },
  {
    q: 'The whole circle bearing system measures bearings from:',
    o: ['South clockwise', 'North clockwise', 'East anticlockwise', 'West clockwise'],
    a: 1,
    category: 'Surveying',
    explanation: 'WCB is always reckoned clockwise from the north meridian, ranging from 0° to 360°.'
  },
  {
    q: 'The reduced bearing of a line is expressed in the range:',
    o: ['0° to 90°', '0° to 180°', '0° to 270°', '0° to 360°'],
    a: 0,
    category: 'Surveying',
    explanation: 'Quadrantal or reduced bearing (QB) lies between 0° and 90° with designated quadrant prefixes (N or S) and suffixes (E or W).'
  },
  {
    q: 'A theodolite is mainly used for measuring:',
    o: ['Horizontal and vertical angles', 'Distance only', 'Area only', 'Soil density'],
    a: 0,
    category: 'Surveying',
    explanation: 'A theodolite has graduated horizontal and vertical vernier plates to measure spatial angles with high precision.'
  },
  {
    q: 'The process of determining elevations of points is called:',
    o: ['Traversing', 'Levelling', 'Chaining', 'Ranging'],
    a: 1,
    category: 'Surveying',
    explanation: 'Levelling establishes height differences relative to a designated datum like Mean Sea Level (MSL).'
  },
  {
    q: 'The instrument used for levelling is commonly called:',
    o: ['Plane table', 'Level', 'Compass', 'Sextant'],
    a: 1,
    category: 'Surveying',
    explanation: 'An auto-level, dumpy level, or tilting level is collimated on a levelling staff to record readings.'
  },
  {
    q: 'RL in surveying stands for:',
    o: ['Reduced Level', 'Reference Length', 'Relative Line', 'Reduced Length'],
    a: 0,
    category: 'Surveying',
    explanation: 'Reduced Level is the calculated vertical height of a survey ground point above or below datum.'
  },
  {
    q: 'The full form of GPS is:',
    o: ['Global Positioning System', 'General Positioning Survey', 'Global Pointing System', 'Geographic Positioning Survey'],
    a: 0,
    category: 'Surveying',
    explanation: 'Global Positioning System uses satellite constellations for precise 3D geodetic positioning.'
  },
  {
    q: 'Contour lines join points having equal:',
    o: ['Slope', 'Elevation', 'Distance', 'Bearing'],
    a: 1,
    category: 'Surveying',
    explanation: 'A contour line connects continuous imaginary terrain points having identical reduced levels (elevations).'
  },
  {
    q: 'Contour lines generally do not:',
    o: ['Intersect each other', 'Show elevation', 'Form closed curves', 'Represent terrain'],
    a: 0,
    category: 'Surveying',
    explanation: 'Except in rare cases like overhanging cliffs or natural caves, two contour lines never intersect or cross.'
  },
  {
    q: 'A total station combines an electronic theodolite with:',
    o: ['EDM and data processing system', 'Compass only', 'Level only', 'Chain only'],
    a: 0,
    category: 'Surveying',
    explanation: 'A total station integrates electronic angle measurement with an infrared EDM and onboard microprocessor.'
  },
  {
    q: 'EDM stands for:',
    o: ['Electronic Distance Measurement', 'Electronic Direction Meter', 'Engineering Distance Method', 'Electronic Data Measurement'],
    a: 0,
    category: 'Surveying',
    explanation: 'Electronic Distance Measurement calculates distance by timing modulated carrier wave phase shift.'
  },

  /* =========================================================
     ENGINEERING MECHANICS (10)
  ========================================================= */
  {
    q: 'Newton\'s second law is expressed as:',
    o: ['F = mv', 'F = ma', 'F = m/a', 'F = a/m'],
    a: 1,
    category: 'Engineering Mechanics',
    explanation: 'Force is proportional to the rate of change of momentum; with constant mass, F = m * a.'
  },
  {
    q: 'The SI unit of force is:',
    o: ['Joule', 'Newton', 'Watt', 'Pascal'],
    a: 1,
    category: 'Engineering Mechanics',
    explanation: 'One Newton (N) is the force needed to accelerate 1 kilogram of mass at the rate of 1 m/s².'
  },
  {
    q: 'Moment of a force is equal to:',
    o: ['Force/distance', 'Force × perpendicular distance', 'Force + distance', 'Force × area'],
    a: 1,
    category: 'Engineering Mechanics',
    explanation: 'Torque or moment M = F * d_perp around a given rotational pivot axis.'
  },
  {
    q: 'The SI unit of moment is:',
    o: ['N', 'N/m', 'N·m', 'N/m²'],
    a: 2,
    category: 'Engineering Mechanics',
    explanation: 'Force in Newtons multiplied by lever arm distance in meters yields Newton-meter (N·m).'
  },
  {
    q: 'The centre of gravity of a uniform circular disc lies at its:',
    o: ['Circumference', 'Centre', 'Radius', 'Diameter end'],
    a: 1,
    category: 'Engineering Mechanics',
    explanation: 'Due to radial symmetry, the geometric centroid and center of gravity coincide at the disc center.'
  },
  {
    q: 'Friction always acts:',
    o: ['In the direction of motion', 'Opposite to relative or impending motion', 'Vertically upward', 'Vertically downward'],
    a: 1,
    category: 'Engineering Mechanics',
    explanation: 'Frictional resistance opposes the tangential vector of relative slip or impending sliding between contact surfaces.'
  },
  {
    q: 'The coefficient of friction is the ratio of:',
    o: ['Normal reaction to limiting friction', 'Limiting friction to normal reaction', 'Friction to weight only', 'Weight to friction'],
    a: 1,
    category: 'Engineering Mechanics',
    explanation: 'μ = F_limiting / R_normal.'
  },
  {
    q: 'Work done by a force is zero when the force is:',
    o: ['Parallel to displacement', 'Perpendicular to displacement', 'In the direction of displacement', 'Greater than displacement'],
    a: 1,
    category: 'Engineering Mechanics',
    explanation: 'W = F · d = F * d * cos(90°) = 0.'
  },
  {
    q: 'Power is defined as:',
    o: ['Work × time', 'Work/time', 'Force/time', 'Energy × distance'],
    a: 1,
    category: 'Engineering Mechanics',
    explanation: 'Power is the time rate at which work is performed: P = dW/dt.'
  },
  {
    q: 'The SI unit of power is:',
    o: ['Joule', 'Newton', 'Watt', 'Pascal'],
    a: 2,
    category: 'Engineering Mechanics',
    explanation: '1 Watt (W) = 1 Joule per second (J/s).'
  },

  /* =========================================================
     IRRIGATION & HYDROLOGY (10)
  ========================================================= */
  {
    q: 'The study of occurrence, movement and distribution of water is called:',
    o: ['Hydraulics', 'Hydrology', 'Hydrostatics', 'Geology'],
    a: 1,
    category: 'Irrigation & Hydrology',
    explanation: 'Hydrology examines the global water cycle including precipitation, evaporation, infiltration, and runoff.'
  },
  {
    q: 'The average annual rainfall over a catchment is commonly determined using:',
    o: ['Arithmetic mean method', 'Moment method', 'Load method', 'Stress method'],
    a: 0,
    category: 'Irrigation & Hydrology',
    explanation: 'The arithmetic average of uniform rain gauge stations provides the simplest areal precipitation estimate.'
  },
  {
    q: 'The Thiessen polygon method is used to determine:',
    o: ['Average rainfall', 'Soil strength', 'Pipe discharge', 'Evaporation only'],
    a: 0,
    category: 'Irrigation & Hydrology',
    explanation: 'Thiessen polygons assign weighted tributary area fractions to non-uniformly distributed catchment rain gauges.'
  },
  {
    q: 'The unit hydrograph represents the direct runoff resulting from:',
    o: ['1 cm effective rainfall', '1 mm total rainfall', '10 cm rainfall', '1 m rainfall'],
    a: 0,
    category: 'Irrigation & Hydrology',
    explanation: 'Sherman\'s unit hydrograph gives the hydrograph of 1 cm (or 1 unit) of excess rainfall occurring uniformly over duration D.'
  },
  {
    q: 'The full form of FSL in irrigation is:',
    o: ['Full Supply Level', 'Final Storage Level', 'Flow Supply Line', 'Full Storage Length'],
    a: 0,
    category: 'Irrigation & Hydrology',
    explanation: 'Full Supply Level is the designed maximum water surface elevation in an irrigation canal under designed peak discharge.'
  },
  {
    q: 'The full form of LWL in a reservoir is:',
    o: ['Lowest Water Level', 'Lower Water Line', 'Low Working Level', 'Lowest Width Level'],
    a: 0,
    category: 'Irrigation & Hydrology',
    explanation: 'Lowest Water Level (or Minimum Drawdown Level) is below which water is inactive dead storage.'
  },
  {
    q: 'The ratio of water actually used by a crop to water delivered to the field is called:',
    o: ['Conveyance efficiency', 'Application efficiency', 'Storage efficiency', 'Overall efficiency'],
    a: 1,
    category: 'Irrigation & Hydrology',
    explanation: 'Water Application Efficiency evaluates how much water placed on the plot is stored in root zones versus lost to runoff/percolation.'
  },
  {
    q: 'A canal constructed approximately parallel to the contours is called:',
    o: ['Ridge canal', 'Contour canal', 'Inundation canal', 'Feeder canal'],
    a: 1,
    category: 'Irrigation & Hydrology',
    explanation: 'A contour canal follows natural elevation contours and usually irrigates land on only one downhill side.'
  },
  {
    q: 'A canal constructed along a watershed or ridge is called:',
    o: ['Contour canal', 'Ridge canal', 'Perennial canal', 'Escape canal'],
    a: 1,
    category: 'Irrigation & Hydrology',
    explanation: 'A ridge (watershed) canal runs along the high crest, naturally enabling gravity flow irrigation on both sides.'
  },
  {
    q: 'The structure used to carry a canal over a natural drain is called:',
    o: ['Aqueduct', 'Syphon', 'Culvert', 'Weir'],
    a: 0,
    category: 'Irrigation & Hydrology',
    explanation: 'An aqueduct is a cross-drainage masonry or concrete flume conveying the canal elevated above a river bed with atmospheric clearance.'
  },

  /* =========================================================
     ESTIMATION & MANAGEMENT (10)
  ========================================================= */
  {
    q: 'The process of determining quantities of materials and work required for a project is called:',
    o: ['Estimation', 'Valuation', 'Auditing', 'Accounting'],
    a: 0,
    category: 'Estimation & Management',
    explanation: 'Quantity estimation calculates required materials, labor, and anticipated budget from architectural drawings.'
  },
  {
    q: 'The unit of measurement for brick masonry is generally:',
    o: ['m', 'm²', 'm³', 'kg'],
    a: 2,
    category: 'Estimation & Management',
    explanation: 'Standard brickwork in walls thicker than 10 cm is measured in cubic meters (m³).'
  },
  {
    q: 'The unit of measurement for plastering is generally:',
    o: ['m', 'm²', 'm³', 'kg'],
    a: 1,
    category: 'Estimation & Management',
    explanation: 'Thin surface coatings like plastering (12 mm or 15 mm) and painting are measured in superficial area (m²).'
  },
  {
    q: 'The unit of measurement for reinforcement steel is generally:',
    o: ['m²', 'm³', 'kg', 'litre'],
    a: 2,
    category: 'Estimation & Management',
    explanation: 'Steel rebar is calculated in kilograms (kg) or metric quintals/tonnes from bar bending schedules (BBS).'
  },
  {
    q: 'The centre line method is used for:',
    o: ['Estimating quantities', 'Measuring rainfall', 'Soil testing', 'Levelling'],
    a: 0,
    category: 'Estimation & Management',
    explanation: 'The center-line method multiplies total running wall centerline by cross-sectional breadth and height to estimate excavation and masonry.'
  },
  {
    q: 'The full form of BOQ is:',
    o: ['Bill of Quantities', 'Book of Quality', 'Balance of Quantity', 'Bill of Quality'],
    a: 0,
    category: 'Estimation & Management',
    explanation: 'A Bill of Quantities itemizes all project work items with specified quantities and unit tender rates.'
  },
  {
    q: 'CPM stands for:',
    o: ['Critical Path Method', 'Construction Planning Method', 'Cost Planning Method', 'Critical Project Management'],
    a: 0,
    category: 'Estimation & Management',
    explanation: 'Critical Path Method (CPM) is a deterministic network project scheduling technique.'
  },
  {
    q: 'PERT stands for:',
    o: ['Project Evaluation and Review Technique', 'Project Engineering and Resource Technique', 'Planning Evaluation and Resource Tool', 'Project Estimation and Review Test'],
    a: 0,
    category: 'Estimation & Management',
    explanation: 'PERT is a probabilistic project management tool utilizing 3-time estimates (optimistic, most likely, pessimistic).'
  },
  {
    q: 'In CPM, activities on the critical path generally have:',
    o: ['Maximum float', 'Zero total float', 'Negative float', 'Infinite float'],
    a: 1,
    category: 'Estimation & Management',
    explanation: 'Critical path activities cannot be delayed without delaying the entire project, hence Total Float = 0.'
  },
  {
    q: 'The full form of DPR in construction projects is:',
    o: ['Detailed Project Report', 'Design Planning Report', 'Development Project Record', 'Detailed Planning Register'],
    a: 0,
    category: 'Estimation & Management',
    explanation: 'A Detailed Project Report (DPR) is the comprehensive master document detailing feasibility, engineering designs, surveys, cost estimates, and financial returns.'
  }
];

export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function getRandomQuestions(count: number = 10, category?: string): Question[] {
  const filtered = category && category !== 'All Topics'
    ? questionBank.filter(q => q.category === category)
    : questionBank;

  return shuffleArray(filtered).slice(0, Math.min(count, filtered.length));
}
