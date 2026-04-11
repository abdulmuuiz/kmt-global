import { useState } from 'react';

const PHONE_CODES = [
  { flag: '🇦🇫', country: 'Afghanistan', code: '+93' },
  { flag: '🇦🇱', country: 'Albania', code: '+355' },
  { flag: '🇩🇿', country: 'Algeria', code: '+213' },
  { flag: '🇦🇴', country: 'Angola', code: '+244' },
  { flag: '🇦🇷', country: 'Argentina', code: '+54' },
  { flag: '🇦🇲', country: 'Armenia', code: '+374' },
  { flag: '🇦🇺', country: 'Australia', code: '+61' },
  { flag: '🇦🇹', country: 'Austria', code: '+43' },
  { flag: '🇦🇿', country: 'Azerbaijan', code: '+994' },
  { flag: '🇧🇭', country: 'Bahrain', code: '+973' },
  { flag: '🇧🇩', country: 'Bangladesh', code: '+880' },
  { flag: '🇧🇪', country: 'Belgium', code: '+32' },
  { flag: '🇧🇴', country: 'Bolivia', code: '+591' },
  { flag: '🇧🇦', country: 'Bosnia & Herzegovina', code: '+387' },
  { flag: '🇧🇼', country: 'Botswana', code: '+267' },
  { flag: '🇧🇷', country: 'Brazil', code: '+55' },
  { flag: '🇧🇳', country: 'Brunei', code: '+673' },
  { flag: '🇧🇬', country: 'Bulgaria', code: '+359' },
  { flag: '🇨🇲', country: 'Cameroon', code: '+237' },
  { flag: '🇨🇦', country: 'Canada', code: '+1' },
  { flag: '🇨🇱', country: 'Chile', code: '+56' },
  { flag: '🇨🇳', country: 'China', code: '+86' },
  { flag: '🇨🇴', country: 'Colombia', code: '+57' },
  { flag: '🇨🇷', country: 'Costa Rica', code: '+506' },
  { flag: '🇭🇷', country: 'Croatia', code: '+385' },
  { flag: '🇨🇾', country: 'Cyprus', code: '+357' },
  { flag: '🇨🇿', country: 'Czech Republic', code: '+420' },
  { flag: '🇩🇰', country: 'Denmark', code: '+45' },
  { flag: '🇩🇴', country: 'Dominican Republic', code: '+1-809' },
  { flag: '🇪🇨', country: 'Ecuador', code: '+593' },
  { flag: '🇪🇬', country: 'Egypt', code: '+20' },
  { flag: '🇸🇻', country: 'El Salvador', code: '+503' },
  { flag: '🇪🇪', country: 'Estonia', code: '+372' },
  { flag: '🇪🇹', country: 'Ethiopia', code: '+251' },
  { flag: '🇫🇯', country: 'Fiji', code: '+679' },
  { flag: '🇫🇮', country: 'Finland', code: '+358' },
  { flag: '🇫🇷', country: 'France', code: '+33' },
  { flag: '🇬🇪', country: 'Georgia', code: '+995' },
  { flag: '🇩🇪', country: 'Germany', code: '+49' },
  { flag: '🇬🇭', country: 'Ghana', code: '+233' },
  { flag: '🇬🇷', country: 'Greece', code: '+30' },
  { flag: '🇬🇹', country: 'Guatemala', code: '+502' },
  { flag: '🇭🇳', country: 'Honduras', code: '+504' },
  { flag: '🇭🇰', country: 'Hong Kong', code: '+852' },
  { flag: '🇭🇺', country: 'Hungary', code: '+36' },
  { flag: '🇮🇸', country: 'Iceland', code: '+354' },
  { flag: '🇮🇳', country: 'India', code: '+91' },
  { flag: '🇮🇩', country: 'Indonesia', code: '+62' },
  { flag: '🇮🇷', country: 'Iran', code: '+98' },
  { flag: '🇮🇶', country: 'Iraq', code: '+964' },
  { flag: '🇮🇪', country: 'Ireland', code: '+353' },
  { flag: '🇮🇱', country: 'Israel', code: '+972' },
  { flag: '🇮🇹', country: 'Italy', code: '+39' },
  { flag: '🇨🇮', country: 'Ivory Coast', code: '+225' },
  { flag: '🇯🇲', country: 'Jamaica', code: '+1-876' },
  { flag: '🇯🇵', country: 'Japan', code: '+81' },
  { flag: '🇯🇴', country: 'Jordan', code: '+962' },
  { flag: '🇰🇿', country: 'Kazakhstan', code: '+7' },
  { flag: '🇰🇪', country: 'Kenya', code: '+254' },
  { flag: '🇰🇼', country: 'Kuwait', code: '+965' },
  { flag: '🇰🇬', country: 'Kyrgyzstan', code: '+996' },
  { flag: '🇱🇦', country: 'Laos', code: '+856' },
  { flag: '🇱🇻', country: 'Latvia', code: '+371' },
  { flag: '🇱🇧', country: 'Lebanon', code: '+961' },
  { flag: '🇱🇾', country: 'Libya', code: '+218' },
  { flag: '🇱🇹', country: 'Lithuania', code: '+370' },
  { flag: '🇱🇺', country: 'Luxembourg', code: '+352' },
  { flag: '🇲🇾', country: 'Malaysia', code: '+60' },
  { flag: '🇲🇻', country: 'Maldives', code: '+960' },
  { flag: '🇲🇱', country: 'Mali', code: '+223' },
  { flag: '🇲🇹', country: 'Malta', code: '+356' },
  { flag: '🇲🇺', country: 'Mauritius', code: '+230' },
  { flag: '🇲🇽', country: 'Mexico', code: '+52' },
  { flag: '🇲🇳', country: 'Mongolia', code: '+976' },
  { flag: '🇲🇦', country: 'Morocco', code: '+212' },
  { flag: '🇲🇿', country: 'Mozambique', code: '+258' },
  { flag: '🇲🇲', country: 'Myanmar', code: '+95' },
  { flag: '🇳🇦', country: 'Namibia', code: '+264' },
  { flag: '🇳🇵', country: 'Nepal', code: '+977' },
  { flag: '🇳🇱', country: 'Netherlands', code: '+31' },
  { flag: '🇳🇿', country: 'New Zealand', code: '+64' },
  { flag: '🇳🇬', country: 'Nigeria', code: '+234' },
  { flag: '🇳🇴', country: 'Norway', code: '+47' },
  { flag: '🇴🇲', country: 'Oman', code: '+968' },
  { flag: '🇵🇰', country: 'Pakistan', code: '+92' },
  { flag: '🇵🇦', country: 'Panama', code: '+507' },
  { flag: '🇵🇬', country: 'Papua New Guinea', code: '+675' },
  { flag: '🇵🇾', country: 'Paraguay', code: '+595' },
  { flag: '🇵🇪', country: 'Peru', code: '+51' },
  { flag: '🇵🇭', country: 'Philippines', code: '+63' },
  { flag: '🇵🇱', country: 'Poland', code: '+48' },
  { flag: '🇵🇹', country: 'Portugal', code: '+351' },
  { flag: '🇶🇦', country: 'Qatar', code: '+974' },
  { flag: '🇷🇴', country: 'Romania', code: '+40' },
  { flag: '🇷🇺', country: 'Russia', code: '+7' },
  { flag: '🇷🇼', country: 'Rwanda', code: '+250' },
  { flag: '🇸🇦', country: 'Saudi Arabia', code: '+966' },
  { flag: '🇸🇳', country: 'Senegal', code: '+221' },
  { flag: '🇷🇸', country: 'Serbia', code: '+381' },
  { flag: '🇸🇬', country: 'Singapore', code: '+65' },
  { flag: '🇸🇰', country: 'Slovakia', code: '+421' },
  { flag: '🇸🇮', country: 'Slovenia', code: '+386' },
  { flag: '🇸🇴', country: 'Somalia', code: '+252' },
  { flag: '🇿🇦', country: 'South Africa', code: '+27' },
  { flag: '🇰🇷', country: 'South Korea', code: '+82' },
  { flag: '🇸🇸', country: 'South Sudan', code: '+211' },
  { flag: '🇪🇸', country: 'Spain', code: '+34' },
  { flag: '🇱🇰', country: 'Sri Lanka', code: '+94' },
  { flag: '🇸🇩', country: 'Sudan', code: '+249' },
  { flag: '🇸🇪', country: 'Sweden', code: '+46' },
  { flag: '🇨🇭', country: 'Switzerland', code: '+41' },
  { flag: '🇸🇾', country: 'Syria', code: '+963' },
  { flag: '🇹🇼', country: 'Taiwan', code: '+886' },
  { flag: '🇹🇿', country: 'Tanzania', code: '+255' },
  { flag: '🇹🇭', country: 'Thailand', code: '+66' },
  { flag: '🇹🇳', country: 'Tunisia', code: '+216' },
  { flag: '🇹🇷', country: 'Turkey', code: '+90' },
  { flag: '🇹🇲', country: 'Turkmenistan', code: '+993' },
  { flag: '🇺🇬', country: 'Uganda', code: '+256' },
  { flag: '🇺🇦', country: 'Ukraine', code: '+380' },
  { flag: '🇦🇪', country: 'UAE', code: '+971' },
  { flag: '🇬🇧', country: 'United Kingdom', code: '+44' },
  { flag: '🇺🇸', country: 'United States', code: '+1' },
  { flag: '🇺🇾', country: 'Uruguay', code: '+598' },
  { flag: '🇺🇿', country: 'Uzbekistan', code: '+998' },
  { flag: '🇻🇪', country: 'Venezuela', code: '+58' },
  { flag: '🇻🇳', country: 'Vietnam', code: '+84' },
  { flag: '🇾🇪', country: 'Yemen', code: '+967' },
  { flag: '🇿🇲', country: 'Zambia', code: '+260' },
  { flag: '🇿🇼', country: 'Zimbabwe', code: '+263' },
];

const COLORS = ['White', 'Black', 'Silver', 'Grey', 'Red', 'Blue', 'Green', 'Other'];

const MAKES = {
  Japanese: ['Toyota', 'Lexus', 'Nissan', 'Honda', 'Mazda', 'Mitsubishi', 'Subaru', 'Suzuki', 'Daihatsu', 'Isuzu', 'Hino'],
  Imported: ['BMW', 'Mercedes-Benz', 'Volkswagen', 'Audi', 'Land Rover', 'Volvo', 'Jaguar', 'Ford', 'Tesla', 'Alfa Romeo'],
};

const MODELS: Record<string, string[]> = {
  Toyota: [
    '86', 'Aqua', 'Allex', 'Allion', 'Alphard', 'Altezza', 'Altezza Gita', 'Aristo', 'Auris', 'Avalon',
    'Avensis Sedan', 'Avensis Wagon', 'Belta', 'Blade', 'Blizzard', 'Brevis', 'C-HR', 'Caldina', 'Caldina Van',
    'Cami', 'Camroad', 'Camry', 'Camry Gracia', 'Camry Gracia Wagon', 'Carina', 'Carina ED', 'Carina Surf',
    'Carina Van', 'Cavalier Coupe', 'Celica', 'Celsior', 'Century', 'Chaser', 'Coaster', 'Comfort', 'Coms',
    'Corolla', 'Corolla Axio', 'Corolla Ceres', 'Corolla Cross', 'Corolla FX', 'Corolla Fielder', 'Corolla Levin',
    'Corolla Rumion', 'Corolla Runx', 'Corolla Spacio', 'Corolla Sport', 'Corolla Touring', 'Corolla Van',
    'Corolla Wagon', 'Corolla2', 'Corona', 'Corona Exiv', 'Corona Premio', 'Corona Van', 'Corsa', 'Cresta',
    'Crown', 'Crown Comfort', 'Crown Crossover', 'Crown Estate', 'Crown Majesta', 'Crown Sport', 'Crown Van',
    'Crown Wagon', 'Curren', 'Cynos', 'Deliboy', 'Duet', 'Dyna', 'Esquire', 'Estima', 'Estima Emina',
    'Estima Hybrid', 'Estima Lucida', 'Estima T/L', 'FJ Cruiser', 'Funcargo', 'Gaia', 'Granace', 'Grand Hiace',
    'Granvia', 'Harrier', 'Hiace Commuter', 'Hiace Regius', 'Hiace Truck', 'Hiace Van', 'Hiace Wagon', 'Hilux',
    'Hilux Surf', 'Hilux Van', 'Ipsum', 'JPN Taxi', 'Jobsun', 'Kluger', 'Land Cruiser', 'Land Cruiser Prado',
    'Land Cruiser Wagon', 'Liteace Noah', 'Liteace Truck', 'Liteace Van', 'Liteace Wagon', 'MIRAI', 'MR-S',
    'MR2', 'Mark II', 'Mark II Blit', 'Mark II Qualis', 'Mark II Van', 'Mark II Wagon', 'Mark X', 'Mark X Zio',
    'Nadia', 'Noah', 'Opa', 'Origin', 'Passo', 'Passo Sette', 'Pixis Epoch', 'Pixis Joy', 'Pixis Mega',
    'Pixis Space', 'Pixis Truck', 'Pixis Van', 'Platz', 'Porte', 'Premio', 'Prius', 'Prius PHV', 'Prius α',
    'Probox', 'Probox Van', 'Progres', 'Pronard', 'Quick Delivery Van', 'RAV4', 'Ractis', 'Raize', 'Raum',
    'Regius Van', 'Regius Ace Comfort', 'Regius Ace Van', 'Roomy', 'Rush', 'SAI', 'Sera', 'Sienta', 'Soarer',
    'Spade', 'Sparky', 'Sprinter', 'Sprinter Carib', 'Sprinter Marino', 'Sprinter Trueno', 'Sprinter Van',
    'Sprinter Wagon', 'Starlet', 'Succeed', 'Succeed Van', 'Supra', 'Tank', 'Tercel', 'Touring Hiace',
    'Townace Noah', 'Townace Truck', 'Townace Van', 'Townace Wagon', 'Toyoace', 'Toyota Copen', 'Toyota Forklift',
    'Urban Supporter', 'Vanguard', 'Vellfire', 'Verossa', 'Vista', 'Vista Ardeo', 'Vitz', 'Voltz', 'Voxy',
    'WiLL Cypha', 'WiLL VS', 'WiLL Vi', 'Windom', 'Wish', 'Yaris', 'Yaris Cross', 'bB', 'bZ4X', 'iQ',
  ],
  Lexus: [
    'CT', 'ES', 'GS', 'GS F', 'GX', 'HS', 'IS', 'LBX', 'LC', 'LM', 'LS', 'LX', 'NX', 'RC', 'RC F', 'RX', 'RZ', 'SC', 'UX',
  ],
  Nissan: [
    '180SX', 'AD Van', 'AD Wagon', 'ARIYA', 'Arrow', 'AURA', 'Atlas', 'Avenir Cargo', 'Avenir Wagon', 'Bassara',
    'Be-1', 'Big Thumb', 'Bluebird', 'Bluebird Sylphy', 'Caravan Bus', 'Caravan Coach', 'Caravan Van', 'Cassette',
    'Cedric', 'Cedric Wagon', 'Cefiro', 'Cefiro Wagon', 'Cima', 'Civilian', 'Clipper', 'Clipper EV', 'Clipper Rio',
    'Clipper Truck', 'Clipper Van', 'Condor', 'Crew', 'Cube', 'Cube Cubic', 'Datsun Pickup', 'DAYZ', 'DAYZ Roox',
    'Datsun', 'Dualis', 'Elgrand', 'Expert', 'Fairlady', 'Fairlady Z', 'Figaro', 'Fuga', 'GT-R', 'Gloria',
    'Gloria Wagon', 'Homy Coach', 'Homy Van', 'Infiniti', 'Juke', 'KIX', 'Lafesta', 'Largo', 'Latio', 'Laurel',
    'Leaf', 'Leopard', 'Leopard J.Ferie', 'Liberty', 'March', 'Maxima', 'Micra', 'Mistral', 'Moco', 'Murano',
    'NV200', 'Nissan Bus', 'Nissan Forklift', 'Nissan Truck', 'Note', 'Otti', 'Pao', 'Pino', 'Presage', 'Presea',
    'President', 'Primera', 'Primera Camino', 'Primera Wagon', 'Pulsar', 'Pulsar Series', 'Quon', 'Rasheen',
    'Rnessa', 'Roox', 'Runner', 'SAKURA', 'SYLPHY', 'Safari', 'Safari Truck', 'Safari Van', 'Santana', 'S-Cargo',
    'Serena', 'Silvia', 'Skyline', 'Skyline Coupe', 'Skyline Crossover', 'Stagea', 'Sunny', 'Sunny California',
    'Sunny Lucino', 'Sunny NX Coupe', 'Sunny Truck', 'Teana', 'Terrano', 'Terrano Regulus', 'Tilda', 'Tiida Latio',
    'Tino', 'UD', 'UD Bus', 'Vanette Coach', 'Vanette Truck', 'Vanette Van', 'Wingroad', 'X-Trail',
  ],
  Honda: [
    'Accord', 'Accord Coupe', 'Accord Wagon', 'Acty Street', 'Acty Truck', 'Acty Van', 'Airwave', 'Ascot',
    'Avancier', 'Beat', 'CR-V', 'CR-X', 'CR-X del Sol', 'CR-Z', 'Capa', 'City', 'Civic', 'Civic Ferio',
    'Civic Hybrid', 'Clarity', 'Concerto', 'Crossroad', 'Domani', 'Edix', 'Element', 'Elysion', 'Fit',
    'Fit Shuttle', 'Freed', 'Freed Spike', 'Grace', 'HR-V', 'Honda e', 'Horizon', 'Insight', 'Inspire',
    'Integra', 'Integra SJ', 'Jade', 'Lagreat', 'Legend', 'Life', 'Life Dunk', 'Logo', 'MDX', 'Mobilio',
    'N-BOX', 'N-BOX +', 'N-BOX Slash', 'N-ONE', 'N-ONE e:', 'N-VAN', 'N-VAN e:', 'N-WGN', 'NSX', 'Odyssey',
    'Orthia', 'Partner', 'Prelude', 'S-MX', 'S2000', 'S660', 'Saber', 'Shuttle', 'Spike', 'Stepwgn', 'Stream',
    'TN-V', "That's", 'Today', 'Today Associe', 'Today Van', 'Torneo', 'VEZEL', 'Vamos', 'WR-V', 'Z', 'ZR-V', 'Zest',
  ],
  Mazda: [
    'AZ Offroad', 'AZ Wagon', 'AZ-1', 'Atenza Sedan', 'Atenza Sport', 'Atenza Wagon', 'Axela', 'Biante',
    'Bongo Brawny', 'Bongo Brawny Van', 'Bongo Friendee', 'Bongo Truck', 'Bongo Van', 'Bongo Wagon',
    'CX-3', 'CX-30', 'CX-5', 'CX-60', 'CX-7', 'CX-8', 'CX-80', 'Capella', 'Capella Wagon', 'Carol', 'Demio',
    'Eunos 500', 'Eunos Cosmo', 'Eunos Presso', 'Familia', 'Familia S-Wagon', 'Familia Van', 'Flair',
    'Flair Crossover', 'Flair Wagon', 'Laputa', 'Luce', 'Mazda2', 'Mazda3', 'Mazda6', 'MPV', 'MS-9', 'MX-30',
    'Millenia', 'Porter Cab', 'Premacy', 'Proceed', 'Proceed Marvie', 'RX-7', 'RX-8', 'Roadster', 'Scrum Truck',
    'Scrum Van', 'Scrum Wagon', 'Sentia', 'Spiano', 'Titan', 'Tribute', 'Verisa',
  ],
  Mitsubishi: [
    'Aero Ace', 'Aero Midi', 'Aero Queen', 'Aero Star', 'Airtrek', 'Aspire', 'Canter', 'Canter Guts',
    'Challenger', 'Chariot Grandis', 'Colt', 'Colt Plus', 'Debonair', 'Delica D:2', 'Delica D:3', 'Delica D:5',
    'Delica Mini', 'Delica Space Gear', 'Delica Truck', 'Delica Van', 'Delica Wagon', 'Diamante', 'Diamante Wagon',
    'Dignity', 'Dingo', 'Dion', 'Eclipse', 'Eclipse Cross', 'FTO', 'Forte', 'Fuso Bus', 'Fuso Fighter',
    'Fuso Truck', 'GTO', 'Galant', 'Galant Fortis', 'Grandis', 'Great', 'Jeep', 'Lancer', 'Lancer Cedia',
    'Lancer Cedia Wagon', 'Lancer Van', 'Lancer Wagon', 'Legnum', 'Libero', 'Libero Cargo', 'Minica', 'Minica Van',
    'Minicab MiEV', 'Minicab Truck', 'Minicab Van', 'Minica Toppo', 'Mirage', 'Mirage Asti', 'Mitsubishi Bus',
    'Mitsubishi Forklift', 'Outlander', 'Outlander PHEV', 'Pajero', 'Pajero Jr', 'Pajero iO', 'Pajero Mini',
    'Proudia', 'RVR', 'Rosa', 'Sigma', 'Starion', 'Strada', 'Super Great', 'Toppo', 'Toppo BJ', 'Town Box',
    'Triton', 'eK Active', 'eK Classy', 'eK Custom', 'eK Space', 'eK Sport', 'eK Wagon', 'eK X', 'eK X EV',
    'eK X Space', 'i', 'i-MiEV',
  ],
  Subaru: [
    'Alcyone SVX', 'BRZ', 'Chiffon', 'Crosstrek', 'Dex', 'Domingo', 'Exiga', 'Forester', 'Impreza', 'Impreza G4',
    'Impreza Wagon', 'Justy', 'Legacy', 'Legacy B4', 'Legacy Outback', 'Legacy Wagon', 'Leone Van', 'Levorg',
    'Levorg Layback', 'Lucra', 'Pleo', 'Pleo Nesta', 'Pleo Plus', 'Pleo Van', 'R1', 'R2', 'Rex', 'Rex Van',
    'Sambar Dias Van', 'Sambar Dias Wagon', 'Sambar Truck', 'Sambar Van', 'Solterra', 'Stella', 'Subaru 360',
    'Subaru XV', 'Traviq', 'Trezia', 'Vivio', 'Vivio Bistro', 'Vivio Van', 'WRX',
  ],
  Suzuki: [
    'Aerio', 'Alto', 'Alto Eco', 'Alto Lapin', 'Alto Van', 'Alto Works', 'Baleno', 'Cappuccino', 'Carry Truck',
    'Cervo', 'Cervo Mode', 'Chevrolet Cruze', 'Chevrolet MW', 'Cultus', 'Cultus Crescent', 'Escudo',
    'Escudo Nomade', 'Every', 'Every Landy', 'Every Plus', 'Every Wagon', 'FRONX', 'Grand Escudo', 'Hustler',
    'Ignis', 'Jimny', 'Jimny Sierra', 'Jimny Nomade', 'Jimny Wide', 'Kei', 'Kizashi', 'Landy', 'MR Wagon',
    'Mighty Boy', 'Palette', 'Palette SW', 'SX4', 'Senior Car', 'Solio', 'Spacia', 'Spacia Base', 'Spacia Gear',
    'Splash', 'Swift', 'Twin', 'Wagon R', 'Wagon R Plus', 'Wagon R Smile', 'Wagon R Solio', 'Wagon R Wide', 'XBEE',
  ],
  Daihatsu: [
    'Altis', 'Atrai 7', 'Atrai Van', 'Atrai Wagon', 'Bego', 'Boon', 'Cast', 'Charade', 'Coo', 'Copen',
    'Delta Truck', 'Delta Van', 'Delta Wagon', 'Esse', 'Fellow Max', 'Gran Max Cargo', 'Hijet Caddie',
    'Hijet Truck', 'Hijet Van', 'Leeza', 'MAX', 'Mebius', 'Midget II', 'Mira', 'Mira Avy', 'Mira Cocoa',
    'Mira Gino', 'Mira Tocot', 'Mira Van', 'Mira e:S', 'Move', 'Move Canbus', 'Move Conte', 'Move Latte',
    'Naked', 'Opti', 'Pyzar', 'Rocky', 'Rugger', 'Sonica', 'Storia', 'Taft', 'Tanto', 'Tanto Exe', 'Terios',
    'Terios Lucia', 'Terios Kid', 'Thor', 'WAKE', 'YRV',
  ],
  Isuzu: [
    'Asuka', 'Bellett', 'Bighorn', 'Como', 'Elf', 'Elf 100', 'Elf 150', 'Elf 250', 'Elf Mio', 'Erga', 'Erga Mio',
    'Fargo Van', 'Fargo Wagon', 'Forward', 'Foster Rodeo', 'Gala', 'Gala Mio', 'Giga', 'Isuzu Bus', 'Isuzu Truck',
    'Journey', 'Juston', 'VehiCross', 'Wizard',
  ],
  Hino: [
    'Blue Ribbon', 'Dolphin', 'Hino Bus', 'Hino Dutro', 'Hino FD', 'Hino Liesse', 'Hino Rainbow', 'Hino Ranger',
    'Hino Truck', 'Melpha', 'Poncho', 'Profia', 'Selega', 'Super Dolphin',
  ],
  BMW: ['M3', 'M5', 'M2', '3 Series', '5 Series', '7 Series', 'X5', 'X3', 'X6'],
  'Mercedes-Benz': ['C-Class', 'E-Class', 'S-Class', 'G-Class', 'GLE', 'GLC', 'AMG GT'],
  Volkswagen: ['Golf GTI', 'Golf R', 'Polo', 'Tiguan', 'Passat', 'Touareg'],
  Audi: ['A3', 'A4', 'A6', 'Q5', 'Q7', 'RS3', 'RS6', 'R8', 'TT'],
  'Land Rover': ['Defender', 'Discovery', 'Range Rover', 'Range Rover Sport', 'Freelander'],
  Volvo: ['XC90', 'XC60', 'XC40', 'V90', 'S90', 'S60'],
  Jaguar: ['F-Type', 'XE', 'XF', 'XJ', 'F-Pace', 'E-Pace'],
  Ford: ['Mustang', 'F-150', 'Ranger', 'Explorer', 'Everest'],
  Tesla: ['Model 3', 'Model S', 'Model X', 'Model Y'],
  'Alfa Romeo': ['Giulia', 'Stelvio', 'Giulietta', '4C'],
};

const YEARS = Array.from({ length: 2027 - 1989 }, (_, i) => String(2027 - i));

const MILEAGES = [
  'No limit', '10,000 km', '20,000 km', '30,000 km', '40,000 km', '50,000 km',
  '60,000 km', '70,000 km', '80,000 km', '90,000 km', '100,000 km',
  '120,000 km', '150,000 km', '200,000 km', '250,000 km', '300,000 km',
];

const inputCls = 'w-full bg-surface-lowest text-white font-body text-sm p-4 border-none placeholder:text-outline-variant focus:ring-1 focus:ring-accent focus:outline-none appearance-none cursor-pointer';
const labelCls = 'font-label text-[10px] tracking-[0.2em] uppercase text-secondary';

export default function RequestVehicle() {
  const [step, setStep] = useState(1);
  const [modelOpen, setModelOpen] = useState(false);
  const [form, setForm] = useState({
    make: '',
    model: '',
    yearFrom: '',
    yearTo: '',
    mileageFrom: '',
    mileageTo: '',
    transmission: 'any',
    colors: [] as string[],
    serviceType: 'export',
    destinationCountry: '',
    budgetMin: '',
    budgetMax: '',
    grade: '',
    notes: '',
    name: '',
    email: '',
    phoneCode: '+81',
    phone: '',
    country: '',
  });

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));
  const toggleColor = (color: string) =>
    setForm((prev) => ({
      ...prev,
      colors: prev.colors.includes(color) ? prev.colors.filter((c) => c !== color) : [...prev.colors, color],
    }));
  const selectMake = (make: string) => {
    const selecting = form.make !== make;
    setForm((prev) => ({ ...prev, make: selecting ? make : '', model: '' }));
    setModelOpen(selecting);
  };

  const canNext = () => {
    if (step === 1) return form.make || form.model;
    if (step === 2) return form.serviceType;
    return form.name && form.email && form.phone && form.country;
  };

  const models = form.make ? (MODELS[form.make] || []) : [];

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <section className="bg-surface-lowest py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <span className="font-label uppercase tracking-[0.3em] text-accent text-xs mb-4 block">Vehicle Sourcing Request</span>
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[0.9] uppercase">
                Define Your<br />Acquisition
              </h1>
            </div>

            {/* Step Indicator */}
            <div className="flex gap-3">
              {[
                { num: 1, label: 'Specifications' },
                { num: 2, label: 'Budget & Sourcing' },
                { num: 3, label: 'Contact' },
              ].map((s) => (
                <button
                  key={s.num}
                  onClick={() => s.num < step && setStep(s.num)}
                  className={`px-4 py-2 font-label text-[10px] tracking-[0.2em] uppercase transition-colors ${
                    step === s.num
                      ? 'bg-accent text-on-accent'
                      : step > s.num
                        ? 'bg-surface-high text-accent cursor-pointer'
                        : 'bg-surface-high text-outline cursor-default'
                  }`}
                >
                  {s.num.toString().padStart(2, '0')} {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Form */}
          <div className="flex-1 min-w-0">

            {/* Step 1 — Vehicle Specifications */}
            {step === 1 && (
              <div className="space-y-10">
                <div>
                  <h2 className="font-headline text-2xl font-bold text-white uppercase tracking-tight mb-2">Vehicle Specifications</h2>
                  <p className="text-sm text-on-surface-variant">Select make, model, year range and mileage.</p>
                </div>

                {/* Make */}
                <div className="space-y-4">
                  <label className={labelCls}>Make</label>

                  {Object.entries(MAKES).map(([category, brands]) => (
                    <div key={category} className="space-y-2">
                      <span className="font-label text-[9px] tracking-[0.2em] uppercase text-outline">{category}</span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                        {brands.map((brand) => (
                          <button
                            key={brand}
                            onClick={() => selectMake(brand)}
                            className={`py-3 px-3 font-label text-[10px] tracking-[0.15em] uppercase text-center transition-colors truncate ${
                              form.make === brand
                                ? 'bg-accent text-on-accent'
                                : 'bg-surface-lowest text-secondary hover:bg-surface-high hover:text-white'
                            }`}
                          >
                            {brand}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Model */}
                {models.length > 0 && (
                  <div className="space-y-3">
                    <button
                      className="w-full flex items-center justify-between"
                      onClick={() => setModelOpen((o) => !o)}
                    >
                      <label className={`${labelCls} cursor-pointer`}>
                        Model — {form.model ? <span className="text-accent">{form.model}</span> : form.make}
                      </label>
                      <svg className={`w-3 h-3 text-secondary transition-transform ${modelOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {modelOpen && (
                    <div className="h-48 overflow-y-auto bg-surface-lowest divide-y divide-white/5">
                      {models.map((model) => (
                        <button
                          key={model}
                          onClick={() => { update('model', form.model === model ? '' : model); setModelOpen(false); }}
                          className={`w-full text-left px-4 py-3 font-label text-[10px] tracking-[0.15em] uppercase transition-colors flex items-center justify-between gap-3 ${
                            form.model === model
                              ? 'bg-accent text-on-accent'
                              : 'text-secondary hover:bg-surface-high hover:text-white'
                          }`}
                        >
                          {model}
                          {form.model === model && (
                            <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          )}
                        </button>
                      ))}
                    </div>
                    )}
                    <p className="text-[10px] text-outline">Don't see your model? Leave blank and add it in the notes.</p>
                  </div>
                )}

                {/* Year Range */}
                <div className="space-y-3">
                  <label className={labelCls}>Year Range</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <span className="font-label text-[9px] tracking-[0.2em] uppercase text-outline">From</span>
                      <div className="relative">
                        <select
                          value={form.yearFrom}
                          onChange={(e) => update('yearFrom', e.target.value)}
                          className={inputCls}
                        >
                          <option value="">Any</option>
                          {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-secondary pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <span className="font-label text-[9px] tracking-[0.2em] uppercase text-outline">To</span>
                      <div className="relative">
                        <select
                          value={form.yearTo}
                          onChange={(e) => update('yearTo', e.target.value)}
                          className={inputCls}
                        >
                          <option value="">Any</option>
                          {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-secondary pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mileage Range */}
                <div className="space-y-3">
                  <label className={labelCls}>Mileage Range</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <span className="font-label text-[9px] tracking-[0.2em] uppercase text-outline">From</span>
                      <div className="relative">
                        <select
                          value={form.mileageFrom}
                          onChange={(e) => update('mileageFrom', e.target.value)}
                          className={inputCls}
                        >
                          <option value="">Any</option>
                          {MILEAGES.filter(m => m !== 'No limit').map((m) => <option key={m} value={m}>{m}</option>)}
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-secondary pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <span className="font-label text-[9px] tracking-[0.2em] uppercase text-outline">To</span>
                      <div className="relative">
                        <select
                          value={form.mileageTo}
                          onChange={(e) => update('mileageTo', e.target.value)}
                          className={inputCls}
                        >
                          <option value="">No limit</option>
                          {MILEAGES.filter(m => m !== 'No limit').map((m) => <option key={m} value={m}>{m}</option>)}
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-secondary pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transmission */}
                <div className="space-y-3">
                  <label className={labelCls}>Transmission</label>
                  <div className="flex gap-2">
                    {['Any', 'Manual', 'Automatic'].map((t) => (
                      <button
                        key={t}
                        onClick={() => update('transmission', t.toLowerCase())}
                        className={`flex-1 py-4 font-label text-[10px] tracking-[0.2em] uppercase transition-colors ${
                          form.transmission === t.toLowerCase() ? 'bg-accent text-on-accent' : 'bg-surface-lowest text-secondary hover:text-white'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div className="space-y-3">
                  <label className={labelCls}>Preferred Color(s)</label>
                  <div className="flex flex-wrap gap-2">
                    {COLORS.map((color) => (
                      <button
                        key={color}
                        onClick={() => toggleColor(color)}
                        className={`px-5 py-3 font-label text-[10px] tracking-[0.2em] uppercase transition-colors ${
                          form.colors.includes(color) ? 'bg-accent text-on-accent' : 'bg-surface-lowest text-secondary hover:text-white'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 — Budget & Sourcing */}
            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="font-headline text-2xl font-bold text-white uppercase tracking-tight mb-2">Budget & Sourcing</h2>
                  <p className="text-sm text-on-surface-variant">Define your budget range and sourcing type.</p>
                </div>

                <div className="space-y-3">
                  <label className={labelCls}>Service Type</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { value: 'export', title: 'Global Export', desc: 'Vehicle sourced and shipped internationally' },
                      { value: 'domestic', title: 'Japan Sourcing', desc: 'Vehicle sourced and delivered within Japan' },
                    ].map((type) => (
                      <button
                        key={type.value}
                        onClick={() => update('serviceType', type.value)}
                        className={`p-6 text-left transition-colors ${
                          form.serviceType === type.value
                            ? 'bg-accent text-on-accent'
                            : 'bg-surface-lowest text-secondary hover:bg-surface-high'
                        }`}
                      >
                        <span className="font-headline text-lg font-bold uppercase block mb-1">{type.title}</span>
                        <span className={`text-xs ${form.serviceType === type.value ? 'opacity-70' : 'text-outline'}`}>{type.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {form.serviceType === 'export' && (
                  <div className="space-y-2">
                    <label className={labelCls}>Destination Country</label>
                    <input
                      type="text"
                      value={form.destinationCountry}
                      onChange={(e) => update('destinationCountry', e.target.value)}
                      placeholder="E.G. UNITED KINGDOM"
                      className={inputCls}
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className={labelCls}>Budget Min (JPY)</label>
                    <input
                      type="text"
                      value={form.budgetMin}
                      onChange={(e) => update('budgetMin', e.target.value)}
                      placeholder="E.G. 500,000"
                      className={inputCls}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={labelCls}>Budget Max (JPY)</label>
                    <input
                      type="text"
                      value={form.budgetMax}
                      onChange={(e) => update('budgetMax', e.target.value)}
                      placeholder="E.G. 3,000,000"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={labelCls}>Preferred Grade (Optional)</label>
                  <input
                    type="text"
                    value={form.grade}
                    onChange={(e) => update('grade', e.target.value)}
                    placeholder="E.G. 4.0 OR ABOVE"
                    className={inputCls}
                  />
                </div>

                <div className="space-y-2">
                  <label className={labelCls}>Additional Notes</label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => update('notes', e.target.value)}
                    rows={4}
                    placeholder="Any specific requirements or preferences..."
                    className="w-full bg-surface-lowest text-white font-body text-sm p-4 border-none placeholder:text-outline-variant focus:ring-1 focus:ring-accent focus:outline-none resize-none"
                  />
                </div>
              </div>
            )}

            {/* Step 3 — Contact */}
            {step === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="font-headline text-2xl font-bold text-white uppercase tracking-tight mb-2">Contact Information</h2>
                  <p className="text-sm text-on-surface-variant">All fields are required to submit your request.</p>
                </div>

                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className={labelCls}>Full Name <span className="text-accent">*</span></label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Your full name"
                      className="w-full bg-surface-lowest text-white font-body text-sm p-4 border-none placeholder:text-outline-variant focus:ring-1 focus:ring-accent focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={labelCls}>Email Address <span className="text-accent">*</span></label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-surface-lowest text-white font-body text-sm p-4 border-none placeholder:text-outline-variant focus:ring-1 focus:ring-accent focus:outline-none"
                    />
                  </div>
                </div>

                {/* Phone + Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className={labelCls}>Phone Number <span className="text-accent">*</span></label>
                    <div className="flex">
                      {/* Country code selector */}
                      <div className="relative shrink-0">
                        <select
                          value={form.phoneCode}
                          onChange={(e) => update('phoneCode', e.target.value)}
                          className="h-full bg-surface-high text-white font-body text-sm pl-3 pr-8 border-none focus:ring-1 focus:ring-accent focus:outline-none appearance-none cursor-pointer"
                          style={{ minWidth: '5.5rem' }}
                        >
                          {PHONE_CODES.map((c) => (
                            <option key={c.country + c.code} value={c.code}>
                              {c.flag} {c.code}
                            </option>
                          ))}
                        </select>
                        <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-secondary pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                      {/* Number input */}
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="XX XXXX XXXX"
                        className="flex-1 bg-surface-lowest text-white font-body text-sm p-4 border-none placeholder:text-outline-variant focus:ring-1 focus:ring-accent focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className={labelCls}>Country of Residence <span className="text-accent">*</span></label>
                    <div className="relative">
                      <select
                        value={form.country}
                        onChange={(e) => update('country', e.target.value)}
                        className="w-full bg-surface-lowest text-white font-body text-sm p-4 border-none focus:ring-1 focus:ring-accent focus:outline-none appearance-none cursor-pointer"
                      >
                        <option value="">Select country</option>
                        {PHONE_CODES.map((c) => (
                          <option key={c.country} value={c.country}>
                            {c.flag} {c.country}
                          </option>
                        ))}
                      </select>
                      <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-secondary pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

                {/* Required note */}
                {(!form.name || !form.email || !form.phone || !form.country) && (
                  <p className="text-[10px] text-outline italic">
                    <span className="text-accent">*</span> All fields must be completed before submitting.
                  </p>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/5">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                  Previous
                </button>
              ) : <div />}

              {step < 3 ? (
                <button
                  onClick={() => canNext() && setStep(step + 1)}
                  className={`inline-flex items-center gap-3 px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm transition-all active:scale-95 ${
                    canNext() ? 'bg-accent text-on-accent hover:bg-accent-dim' : 'bg-surface-high text-outline cursor-not-allowed'
                  }`}
                >
                  Next
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              ) : (
                <button
                  onClick={() => canNext() && alert('Request submitted! We will contact you shortly.')}
                  className={`inline-flex items-center gap-3 px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm transition-all active:scale-95 ${
                    canNext() ? 'bg-accent text-on-accent hover:bg-accent-dim' : 'bg-surface-high text-outline cursor-not-allowed'
                  }`}
                >
                  Submit Request
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </button>
              )}
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:w-72 shrink-0">
            <div className="bg-surface-low p-8 sticky top-24">
              <h3 className="font-headline text-sm font-bold text-white uppercase tracking-wide mb-6">Summary</h3>
              <div className="space-y-4">
                <div>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">Make / Model</span>
                  <span className="text-sm text-white">{form.make || form.model ? `${form.make}${form.model ? ' · ' + form.model : ''}` : '—'}</span>
                </div>
                <div>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">Year</span>
                  <span className="text-sm text-white">{form.yearFrom || form.yearTo ? `${form.yearFrom || 'Any'} → ${form.yearTo || 'Any'}` : '—'}</span>
                </div>
                <div>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">Mileage</span>
                  <span className="text-sm text-white">{form.mileageFrom || form.mileageTo ? `${form.mileageFrom || '0'} → ${form.mileageTo || 'No limit'}` : '—'}</span>
                </div>
                <div>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">Transmission</span>
                  <span className="text-sm text-white capitalize">{form.transmission}</span>
                </div>
                {form.colors.length > 0 && (
                  <div>
                    <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">Colors</span>
                    <span className="text-sm text-white">{form.colors.join(', ')}</span>
                  </div>
                )}
                <div>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">Service</span>
                  <span className="text-sm text-white">{form.serviceType === 'export' ? 'Global Export' : 'Japan Sourcing'}</span>
                </div>
                {form.budgetMax && (
                  <div>
                    <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">Budget</span>
                    <span className="text-sm text-accent">¥{form.budgetMin || '0'} — ¥{form.budgetMax}</span>
                  </div>
                )}
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-[10px] text-outline leading-relaxed">Your request will be reviewed by our sourcing team. We typically respond within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
