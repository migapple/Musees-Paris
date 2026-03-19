const MUSEUMS = [
  {
    id: 1,
    name: { fr: "Musée du Louvre", en: "Louvre Museum" },
    address: "Rue de Rivoli, 75001 Paris",
    coords: { lat: 48.8606, lng: 2.3376 },
    phone: "+33 1 40 20 53 17",
    website: "https://www.louvre.fr",
    hours: {
      fr: "Lun, Jeu–Dim : 9h–18h  |  Mer & Ven : 9h–21h45  |  Fermé Mar",
      en: "Mon, Thu–Sun: 9am–6pm  |  Wed & Fri: 9am–9:45pm  |  Closed Tue"
    },
    price: "22 €",
    types: {
      fr: ["Antiquités", "Peintures", "Sculptures", "Arts décoratifs"],
      en: ["Antiquities", "Paintings", "Sculptures", "Decorative Arts"]
    },
    description: {
      fr: "Le plus grand musée du monde, avec plus de 35 000 œuvres exposées sur 72 000 m². Un voyage à travers l'Antiquité, le Moyen Âge et les grandes civilisations.",
      en: "The world's largest museum, with over 35,000 works across 72,000 m². A journey through Antiquity, the Middle Ages, and great civilizations."
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Louvre_Museum_Wikimedia_Commons.jpg/1200px-Louvre_Museum_Wikimedia_Commons.jpg",
    artworks: [
      { name: "La Joconde", artist: "Léonard de Vinci", year: "1503–1519", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/300px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" },
      { name: "Vénus de Milo", artist: "Anonyme", year: "~130–100 av. J.-C.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Aphrodite_of_Milos%2C_Louvre.jpg/300px-Aphrodite_of_Milos%2C_Louvre.jpg" },
      { name: "La Liberté guidant le peuple", artist: "Eugène Delacroix", year: "1830", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg/300px-Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg" }
    ]
  },
  {
    id: 2,
    name: { fr: "Musée d'Orsay", en: "Musée d'Orsay" },
    address: "1 Rue de la Légion d'Honneur, 75007 Paris",
    coords: { lat: 48.8600, lng: 2.3266 },
    phone: "+33 1 40 49 48 14",
    website: "https://www.musee-orsay.fr",
    hours: {
      fr: "Mar–Dim : 9h30–18h  |  Jeu : 9h30–21h45  |  Fermé Lun",
      en: "Tue–Sun: 9:30am–6pm  |  Thu: 9:30am–9:45pm  |  Closed Mon"
    },
    price: "16 €",
    types: {
      fr: ["Impressionnisme", "Post-impressionnisme", "Sculpture", "Arts décoratifs"],
      en: ["Impressionism", "Post-Impressionism", "Sculpture", "Decorative Arts"]
    },
    description: {
      fr: "Installé dans l'ancienne gare d'Orsay, ce musée abrite la plus grande collection impressionniste au monde, avec Monet, Renoir, Van Gogh et Cézanne.",
      en: "Housed in the former Orsay railway station, this museum holds the world's largest collection of Impressionist art, featuring Monet, Renoir, Van Gogh and Cézanne."
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mus%C3%A9e_d%27Orsay%2C_North-West_facade.jpg/1200px-Mus%C3%A9e_d%27Orsay%2C_North-West_facade.jpg",
    artworks: [
      { name: "Olympia", artist: "Édouard Manet", year: "1863", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Edouard_Manet_-_Olympia_-_Google_Art_Project_3.jpg/400px-Edouard_Manet_-_Olympia_-_Google_Art_Project_3.jpg" },
      { name: "Bal du moulin de la Galette", artist: "Pierre-Auguste Renoir", year: "1876", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bal_du_moulin_de_la_Galette_%28Mus%C3%A9e_d%27Orsay%2C_Paris%29.jpg/400px-Bal_du_moulin_de_la_Galette_%28Mus%C3%A9e_d%27Orsay%2C_Paris%29.jpg" },
      { name: "La Chambre à Arles", artist: "Vincent van Gogh", year: "1888", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg/400px-Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg" }
    ]
  },
  {
    id: 3,
    name: { fr: "Centre Pompidou", en: "Centre Pompidou" },
    address: "Place Georges-Pompidou, 75004 Paris",
    coords: { lat: 48.8607, lng: 2.3523 },
    phone: "+33 1 44 78 12 33",
    website: "https://www.centrepompidou.fr",
    hours: {
      fr: "Mer–Lun : 11h–21h  |  Nocturnes Jeu jusqu'à 23h  |  Fermé Mar",
      en: "Wed–Mon: 11am–9pm  |  Late night Thu until 11pm  |  Closed Tue"
    },
    price: "15 €",
    types: {
      fr: ["Art moderne", "Art contemporain", "Design", "Architecture"],
      en: ["Modern Art", "Contemporary Art", "Design", "Architecture"]
    },
    description: {
      fr: "Icône de l'architecture du XXe siècle, le Centre Pompidou accueille le plus grand musée d'art moderne d'Europe avec plus de 100 000 œuvres.",
      en: "An icon of 20th-century architecture, Centre Pompidou hosts Europe's largest museum of modern art with over 100,000 works."
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Le_centre_Pompidou%2C_Paris_%288239672856%29.jpg/1200px-Le_centre_Pompidou%2C_Paris_%288239672856%29.jpg",
    artworks: [
      { name: "Les Demoiselles d'Avignon", artist: "Pablo Picasso", year: "1907", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/375px-Les_Demoiselles_d%27Avignon.jpg" },
      { name: "Composition II en rouge, bleu et jaune", artist: "Piet Mondrian", year: "1930", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg/300px-Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg" },
      { name: "L'Atelier Rouge", artist: "Henri Matisse", year: "1911", image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Matisse%2C_The_Red_Studio.jpg/400px-Matisse%2C_The_Red_Studio.jpg" }
    ]
  },
  {
    id: 4,
    name: { fr: "Musée de l'Orangerie", en: "Musée de l'Orangerie" },
    address: "Jardin des Tuileries, 75001 Paris",
    coords: { lat: 48.8638, lng: 2.3222 },
    phone: "+33 1 44 77 80 07",
    website: "https://www.musee-orangerie.fr",
    hours: {
      fr: "Mer–Lun : 9h–18h  |  Fermé Mar",
      en: "Wed–Mon: 9am–6pm  |  Closed Tue"
    },
    price: "12,50 €",
    types: {
      fr: ["Impressionnisme", "École de Paris"],
      en: ["Impressionism", "School of Paris"]
    },
    description: {
      fr: "Temple du peintre Monet, l'Orangerie abrite les monumentales Nymphéas dans deux salles ovales conçues spécialement par l'artiste, ainsi qu'une collection de l'École de Paris.",
      en: "A temple to Monet, the Orangerie houses the monumental Water Lilies in two oval rooms designed specifically by the artist, plus a School of Paris collection."
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Orangerie_-_Mus%C3%A9e_de_l%27Orangerie_%28Paris%29_2012.jpg/1200px-Orangerie_-_Mus%C3%A9e_de_l%27Orangerie_%28Paris%29_2012.jpg",
    artworks: [
      { name: "Les Nymphéas", artist: "Claude Monet", year: "1914–1926", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/400px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg" },
      { name: "Paul et Virginie", artist: "Henri Rousseau", year: "1890", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Henri_Rousseau_-_The_Sleeping_Gypsy.jpg/400px-Henri_Rousseau_-_The_Sleeping_Gypsy.jpg" },
      { name: "Portrait de Femme", artist: "Amedeo Modigliani", year: "1918", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Modigliani_-_Jeanne_H%C3%A9buterne_%28au_foulard%29.jpg/300px-Modigliani_-_Jeanne_H%C3%A9buterne_%28au_foulard%29.jpg" }
    ]
  },
  {
    id: 5,
    name: { fr: "Musée Rodin", en: "Musée Rodin" },
    address: "77 Rue de Varenne, 75007 Paris",
    coords: { lat: 48.8555, lng: 2.3159 },
    phone: "+33 1 44 18 61 10",
    website: "https://www.musee-rodin.fr",
    hours: {
      fr: "Mar–Dim : 10h–18h30  |  Fermé Lun",
      en: "Tue–Sun: 10am–6:30pm  |  Closed Mon"
    },
    price: "14 €",
    types: {
      fr: ["Sculpture", "Dessin", "Photographie"],
      en: ["Sculpture", "Drawing", "Photography"]
    },
    description: {
      fr: "L'Hôtel Biron accueille les plus grandes sculptures d'Auguste Rodin, dont Le Penseur et La Porte de l'Enfer, dans un jardin de 3 hectares en plein cœur de Paris.",
      en: "The Hôtel Biron houses Auguste Rodin's greatest sculptures, including The Thinker and The Gates of Hell, within a 3-hectare garden in central Paris."
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Musee_Rodin1.jpg/1200px-Musee_Rodin1.jpg",
    artworks: [
      { name: "Le Penseur", artist: "Auguste Rodin", year: "1880–1882", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Rodin_TheThinker.jpg/300px-Rodin_TheThinker.jpg" },
      { name: "Le Baiser", artist: "Auguste Rodin", year: "1882", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/The_Kiss_Rodin.jpg/300px-The_Kiss_Rodin.jpg" },
      { name: "Les Bourgeois de Calais", artist: "Auguste Rodin", year: "1884–1889", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Burghers_of_calais_3.jpg/400px-Burghers_of_calais_3.jpg" }
    ]
  },
  {
    id: 6,
    name: { fr: "Musée Picasso Paris", en: "Musée Picasso Paris" },
    address: "5 Rue de Thorigny, 75003 Paris",
    coords: { lat: 48.8594, lng: 2.3625 },
    phone: "+33 1 85 56 00 36",
    website: "https://www.museepicassoparis.fr",
    hours: {
      fr: "Mar–Ven : 10h30–18h  |  Sam–Dim : 9h30–18h  |  Fermé Lun",
      en: "Tue–Fri: 10:30am–6pm  |  Sat–Sun: 9:30am–6pm  |  Closed Mon"
    },
    price: "14 €",
    types: {
      fr: ["Cubisme", "Surréalisme", "Peinture", "Céramique"],
      en: ["Cubism", "Surrealism", "Painting", "Ceramics"]
    },
    description: {
      fr: "Installé dans l'Hôtel Salé, ce musée présente la plus importante collection Picasso au monde : 5 000 œuvres couvrant 80 ans de création, du cubisme à la vieillesse.",
      en: "Housed in the Hôtel Salé, this museum holds the world's most important Picasso collection: 5,000 works spanning 80 years of creation, from Cubism to his final years."
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Hotel_Sale_dsc01611.jpg/1200px-Hotel_Sale_dsc01611.jpg",
    artworks: [
      { name: "Autoportrait", artist: "Pablo Picasso", year: "1907", image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Pablo_Picasso%2C_1907%2C_Self-portrait%2C_oil_on_canvas%2C_50_x_46_cm%2C_National_Gallery_in_Prague.jpg/300px-Pablo_Picasso%2C_1907%2C_Self-portrait%2C_oil_on_canvas%2C_50_x_46_cm%2C_National_Gallery_in_Prague.jpg" },
      { name: "La Celestina", artist: "Pablo Picasso", year: "1904", image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Picasso_-_Celestina.jpg/300px-Picasso_-_Celestina.jpg" },
      { name: "Les Deux Femmes courant sur la plage", artist: "Pablo Picasso", year: "1922", image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Pablo_Picasso%2C_1922%2C_Two_Women_Running_on_the_Beach_%28The_Race%29%2C_gouache_on_plywood%2C_32.5_x_41.1_cm%2C_Mus%C3%A9e_Picasso%2C_Paris.jpg/400px-Pablo_Picasso%2C_1922%2C_Two_Women_Running_on_the_Beach_%28The_Race%29%2C_gouache_on_plywood%2C_32.5_x_41.1_cm%2C_Mus%C3%A9e_Picasso%2C_Paris.jpg" }
    ]
  },
  {
    id: 7,
    name: { fr: "Musée Marmottan Monet", en: "Marmottan Monet Museum" },
    address: "2 Rue Louis Boilly, 75016 Paris",
    coords: { lat: 48.8551, lng: 2.2779 },
    phone: "+33 1 44 96 50 33",
    website: "https://www.marmottan.fr",
    hours: {
      fr: "Mar–Dim : 10h–18h  |  Mar : 10h–21h  |  Fermé Lun",
      en: "Tue–Sun: 10am–6pm  |  Tue: 10am–9pm  |  Closed Mon"
    },
    price: "14 €",
    types: {
      fr: ["Impressionnisme", "Art médiéval", "Art de l'Empire"],
      en: ["Impressionism", "Medieval Art", "Empire Art"]
    },
    description: {
      fr: "Ancienne demeure de chasse, ce musée détient la plus grande collection de Monet au monde — 94 tableaux — dont la célèbre toile Impression, Soleil Levant qui donna son nom au mouvement.",
      en: "A former hunting lodge, this museum holds the world's largest Monet collection — 94 paintings — including the famous Impression, Sunrise that gave Impressionism its name."
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Mus%C3%A9e_Marmottan_Monet_%28fa%C3%A7ade%29.jpg/1200px-Mus%C3%A9e_Marmottan_Monet_%28fa%C3%A7ade%29.jpg",
    artworks: [
      { name: "Impression, Soleil Levant", artist: "Claude Monet", year: "1872", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/400px-Monet_-_Impression%2C_Sunrise.jpg" },
      { name: "Le Pont japonais", artist: "Claude Monet", year: "1899", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_The_Japanese_Footbridge_-_Google_Art_Project.jpg/400px-Claude_Monet_-_The_Japanese_Footbridge_-_Google_Art_Project.jpg" },
      { name: "Cathédrale de Rouen", artist: "Claude Monet", year: "1894", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Claude_Monet_-_Rouen_Cathedral%2C_Facade_%28Sunset%29_-_Google_Art_Project.jpg/300px-Claude_Monet_-_Rouen_Cathedral%2C_Facade_%28Sunset%29_-_Google_Art_Project.jpg" }
    ]
  },
  {
    id: 8,
    name: { fr: "Musée Carnavalet", en: "Musée Carnavalet" },
    address: "23 Rue de Sévigné, 75003 Paris",
    coords: { lat: 48.8573, lng: 2.3621 },
    phone: "+33 1 44 59 58 58",
    website: "https://www.carnavalet.paris.fr",
    hours: {
      fr: "Mar–Dim : 10h–18h  |  Fermé Lun (entrée gratuite)",
      en: "Tue–Sun: 10am–6pm  |  Closed Mon (free entry)"
    },
    price: "Gratuit / Free",
    types: {
      fr: ["Histoire de Paris", "Archéologie", "Arts et métiers"],
      en: ["History of Paris", "Archaeology", "Arts & Crafts"]
    },
    description: {
      fr: "Dédié à l'histoire de Paris de la Préhistoire à nos jours, le Carnavalet occupe deux hôtels particuliers du Marais avec plus de 600 000 objets et œuvres d'art.",
      en: "Dedicated to the history of Paris from Prehistory to today, Carnavalet occupies two Marais mansions with over 600,000 objects and works of art."
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Mus%C3%A9e_Carnavalet%2C_Paris_2009.jpg/1200px-Mus%C3%A9e_Carnavalet%2C_Paris_2009.jpg",
    artworks: [
      { name: "Enseigne de Gersaint", artist: "Jean-Antoine Watteau", year: "1720", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Antoine_Watteau_-_L%27Enseigne_de_Gersaint.jpg/400px-Antoine_Watteau_-_L%27Enseigne_de_Gersaint.jpg" },
      { name: "Portrait de Louis XIV", artist: "Hyacinthe Rigaud", year: "1701", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Louis_XIV_of_France.jpg/300px-Louis_XIV_of_France.jpg" },
      { name: "Vue de Paris depuis la Bastille", artist: "Henri Regnault", year: "1871", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Vue_de_Paris_prise_de_la_Bastille_-_Gustave_Caillebotte_-_Mus%C3%A9e_Marmottan_Monet.jpg/400px-Vue_de_Paris_prise_de_la_Bastille_-_Gustave_Caillebotte_-_Mus%C3%A9e_Marmottan_Monet.jpg" }
    ]
  },
  {
    id: 9,
    name: { fr: "Musée de Cluny – Moyen Âge", en: "Cluny Museum – Middle Ages" },
    address: "28 Rue du Sommerard, 75005 Paris",
    coords: { lat: 48.8509, lng: 2.3442 },
    phone: "+33 1 53 73 78 00",
    website: "https://www.musee-moyenage.fr",
    hours: {
      fr: "Mar–Dim : 9h30–18h15  |  Fermé Lun",
      en: "Tue–Sun: 9:30am–6:15pm  |  Closed Mon"
    },
    price: "12 €",
    types: {
      fr: ["Moyen Âge", "Tapisseries", "Arts médiévaux", "Archéologie"],
      en: ["Middle Ages", "Tapestries", "Medieval Arts", "Archaeology"]
    },
    description: {
      fr: "Installé dans un hôtel médiéval jouxtant les thermes gallo-romains, Cluny est le seul musée de France entièrement consacré au Moyen Âge, célèbre pour La Dame à la Licorne.",
      en: "Housed in a medieval mansion adjoining Gallo-Roman baths, Cluny is France's only museum entirely dedicated to the Middle Ages, famous for The Lady and the Unicorn."
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/H%C3%B4tel_de_Cluny_002.jpg/1200px-H%C3%B4tel_de_Cluny_002.jpg",
    artworks: [
      { name: "La Dame à la Licorne", artist: "Anonyme flamand", year: "~1500", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/La_dame_à_la_licorne_%28tapisserie_-_le_goût%29.jpg/300px-La_dame_à_la_licorne_%28tapisserie_-_le_goût%29.jpg" },
      { name: "Les Têtes de Rois de Notre-Dame", artist: "Anonyme", year: "XIIIe siècle", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Têtes_de_rois_de_Notre-Dame_de_Paris_-_Musée_de_Cluny.jpg/300px-Têtes_de_rois_de_Notre-Dame_de_Paris_-_Musée_de_Cluny.jpg" },
      { name: "La Rose d'or", artist: "Orfèvre siennois", year: "1330", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Rose_d%27or_de_Bâle.jpg/300px-Rose_d%27or_de_Bâle.jpg" }
    ]
  },
  {
    id: 10,
    name: { fr: "Musée Guimet", en: "Guimet Museum" },
    address: "6 Place d'Iéna, 75116 Paris",
    coords: { lat: 48.8652, lng: 2.2931 },
    phone: "+33 1 56 52 53 00",
    website: "https://www.guimet.fr",
    hours: {
      fr: "Mer–Lun : 10h–18h  |  Fermé Mar",
      en: "Wed–Mon: 10am–6pm  |  Closed Tue"
    },
    price: "13 €",
    types: {
      fr: ["Arts asiatiques", "Archéologie", "Art bouddhiste", "Art hindou"],
      en: ["Asian Arts", "Archaeology", "Buddhist Art", "Hindu Art"]
    },
    description: {
      fr: "Premier musée d'arts asiatiques d'Europe, le Guimet rassemble 45 000 œuvres en provenance d'Afghanistan, d'Inde, de Chine, du Japon et d'Asie du Sud-Est.",
      en: "Europe's leading Asian arts museum, Guimet brings together 45,000 works from Afghanistan, India, China, Japan and Southeast Asia."
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Paris_-_Musée_Guimet_-_Entrée_01.jpg/1200px-Paris_-_Musée_Guimet_-_Entrée_01.jpg",
    artworks: [
      { name: "Tête de Bodhisattva", artist: "Art du Gandhara", year: "IIe–IIIe siècle", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Gandhara_Buddha_%28tnm%29.jpeg/300px-Gandhara_Buddha_%28tnm%29.jpeg" },
      { name: "Shiva Nataraja", artist: "Anonyme indien", year: "Xe–XIe siècle", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Shiva_Nataraja_Gu%C3%ADmet_15232.jpg/300px-Shiva_Nataraja_Gu%C3%ADmet_15232.jpg" },
      { name: "Paravent à la heron", artist: "Anonyme japonais", year: "XVIIe siècle", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Ogata_Korin_-_Yatsuhashi_%28Eight_Plank_Bridge%29_-_Google_Art_Project.jpg/400px-Ogata_Korin_-_Yatsuhashi_%28Eight_Plank_Bridge%29_-_Google_Art_Project.jpg" }
    ]
  },
  {
    id: 11,
    name: { fr: "Musée des Arts Décoratifs", en: "Museum of Decorative Arts" },
    address: "107 Rue de Rivoli, 75001 Paris",
    coords: { lat: 48.8641, lng: 2.3347 },
    phone: "+33 1 44 55 57 50",
    website: "https://madparis.fr",
    hours: {
      fr: "Mar–Dim : 11h–18h  |  Fermé Lun",
      en: "Tue–Sun: 11am–6pm  |  Closed Mon"
    },
    price: "14 €",
    types: {
      fr: ["Design", "Mode & Textile", "Arts décoratifs", "Arts graphiques"],
      en: ["Design", "Fashion & Textile", "Decorative Arts", "Graphic Arts"]
    },
    description: {
      fr: "Le MAD Paris retrace l'histoire des arts de vivre depuis le Moyen Âge. Mobilier, bijoux, céramiques, mais aussi une collection de mode internationale de 150 000 pièces.",
      en: "MAD Paris traces the history of the art of living from the Middle Ages. Furniture, jewellery, ceramics, and an international fashion collection of 150,000 pieces."
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Aile_de_Marsan_-_Vue_du_jardin_des_Tuileries.jpg/1200px-Aile_de_Marsan_-_Vue_du_jardin_des_Tuileries.jpg",
    artworks: [
      { name: "Cabinet Boulle", artist: "André-Charles Boulle", year: "~1700", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Armoire_Boulle_Louvre_OA5470.jpg/300px-Armoire_Boulle_Louvre_OA5470.jpg" },
      { name: "Robe Balenciaga", artist: "Cristóbal Balenciaga", year: "1967", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Balenciaga_1967_wedding_dress.jpg/300px-Balenciaga_1967_wedding_dress.jpg" },
      { name: "Vase Art Nouveau", artist: "Émile Gallé", year: "1900", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Galle_vase_collection.jpg/300px-Galle_vase_collection.jpg" }
    ]
  },
  {
    id: 12,
    name: { fr: "Musée de l'Armée", en: "Army Museum" },
    address: "129 Rue de Grenelle, 75007 Paris",
    coords: { lat: 48.8548, lng: 2.3124 },
    phone: "+33 1 44 42 38 77",
    website: "https://www.musee-armee.fr",
    hours: {
      fr: "Lun–Dim : 10h–18h  |  Nocturne Lun jusqu'à 21h (avr–oct)",
      en: "Mon–Sun: 10am–6pm  |  Late Mon until 9pm (Apr–Oct)"
    },
    price: "15 €",
    types: {
      fr: ["Histoire militaire", "Armes & Armures", "Napoléon", "Seconde Guerre mondiale"],
      en: ["Military History", "Arms & Armour", "Napoleon", "World War II"]
    },
    description: {
      fr: "L'un des plus riches musées militaires du monde, abritant le tombeau de Napoléon sous le dôme des Invalides. Une histoire de France en armes de la Préhistoire au XXIe siècle.",
      en: "One of the world's richest military museums, housing Napoleon's tomb under the Invalides dome. A history of France in arms from Prehistory to the 21st century."
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Invalides_Dome_-_5.jpg/1200px-Invalides_Dome_-_5.jpg",
    artworks: [
      { name: "Armure de François Ier", artist: "Armurier royal", year: "1539", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Armor_of_Henry_II_of_France_MET_DP251139.jpg/300px-Armor_of_Henry_II_of_France_MET_DP251139.jpg" },
      { name: "Épée de Charlemagne", artist: "Atelier carolingien", year: "IXe siècle", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Charlemagne_sword_Louvre.jpg/300px-Charlemagne_sword_Louvre.jpg" },
      { name: "Portrait de Napoléon sur le Trône", artist: "Jean-Auguste Ingres", year: "1806", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Ingres_Napoleon_on_his_Imperial_throne.jpg/300px-Ingres_Napoleon_on_his_Imperial_throne.jpg" }
    ]
  }
];

const I18N = {
  fr: {
    appTitle: "Musées de Paris",
    list: "Liste",
    map: "Carte",
    favorites: "Favoris",
    settings: "Paramètres",
    search: "Rechercher un musée…",
    noFavorites: "Aucun favori pour l'instant.\nAjoutez des musées depuis la liste.",
    addFavorite: "Ajouter aux favoris",
    removeFavorite: "Retirer des favoris",
    openMap: "Itinéraire",
    website: "Site web",
    price: "Tarif",
    hours: "Horaires",
    artworks: "Œuvres phares",
    darkMode: "Mode sombre",
    notifications: "Notifications",
    allTypes: "Tous",
    back: "Retour",
    noResults: "Aucun musée trouvé",
    museums: "musées",
    favoriteAdded: "Ajouté aux favoris",
    favoriteRemoved: "Retiré des favoris",
    address: "Adresse",
    coords: "Coordonnées GPS"
  },
  en: {
    appTitle: "Paris Museums",
    list: "List",
    map: "Map",
    favorites: "Favorites",
    settings: "Settings",
    search: "Search a museum…",
    noFavorites: "No favorites yet.\nAdd museums from the list.",
    addFavorite: "Add to favorites",
    removeFavorite: "Remove from favorites",
    openMap: "Get Directions",
    website: "Website",
    price: "Admission",
    hours: "Hours",
    artworks: "Highlights",
    darkMode: "Dark mode",
    notifications: "Notifications",
    allTypes: "All",
    back: "Back",
    noResults: "No museums found",
    museums: "museums",
    favoriteAdded: "Added to favorites",
    favoriteRemoved: "Removed from favorites",
    address: "Address",
    coords: "GPS Coordinates"
  }
};
