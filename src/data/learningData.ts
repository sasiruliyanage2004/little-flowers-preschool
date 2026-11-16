import { DevelopmentArea, ActivityItem } from '@/types';

export const developmentAreas: DevelopmentArea[] = [
  {
    id: 'intellectual',
    title: {
      en: 'Intellectual & Cognitive Development',
      si: 'බුද්ධිමය හා සංජානන සංවර්ධනය',
    },
    subtitle: {
      en: 'Curiosity, critical thinking & early problem-solving',
      si: 'කුතුහලය, සිතීමේ හැකියාව සහ ගැටළු විසඳීම',
    },
    description: {
      en: 'Stimulating children’s natural curiosity through hands-on exploration, sensory discovery, early counting, spatial shapes, and question-asking in a joyful atmosphere.',
      si: 'ප්‍රශ්න ඇසීමට, නිරීක්ෂණයට, සංඛ්‍යා හා හැඩතල හඳුනා ගැනීමට සහ කුතුහලය පුබුදුවාලන ප්‍රායෝගික ක්‍රියාකාරකම් මගින් දරුවාගේ බුද්ධිමය මංපෙත් විවර කරමු.',
    },
    iconName: 'Brain',
    accentColor: '#F28B78',
    bgLight: '#FFF0ED',
    points: {
      en: [
        'Sensory-based puzzles and logic games',
        'Exploring patterns, shapes, and early numbers',
        'Cause-and-effect discoveries and nature science',
        'Developing sustained focus and eager attention',
      ],
      si: [
        'පංචේන්ද්‍රිය පාදක ප්‍රහේලිකා හා ක්‍රීඩා',
        'හැඩතල, රටා සහ මූලික ගණිත සංකල්ප',
        'සොබාදහම හා වටපිටාව නිරීක්ෂණය කිරීමේ කුසලතා',
        'අවධානය හා සිත එක්තැන් කර ගැනීමේ පුරුද්ද',
      ],
    },
  },
  {
    id: 'language',
    title: {
      en: 'Language & Communication',
      si: 'භාෂාව හා සන්නිවේදන කුසලතා',
    },
    subtitle: {
      en: 'Expressive speaking, attentive listening & vocabulary',
      si: 'පැහැදිලි කථනය, සවන්දීම සහ වචන මාලාව',
    },
    description: {
      en: 'Cultivating confident verbal expression, rich vocabulary, captivating Sinhala and English nursery stories, rhymes, and phonemic awareness.',
      si: 'තම අදහස් නිර්භීතව හා පැහැදිලිව ප්‍රකාශ කිරීමට, කතන්දර වලට සවන්දීමට, ළමා ගීත සහ මූලික භාෂා ශබ්ද හඳුනා ගැනීමට මගපෙන්වයි.',
    },
    iconName: 'MessageSquareHeart',
    accentColor: '#FFD66B',
    bgLight: '#FFFBEA',
    points: {
      en: [
        'Story circles, interactive puppetry, and dialogues',
        'Melodious rhymes in Sinhala and English',
        'Vocabulary expansion through daily conversations',
        'Active listening and respectful conversational etiquette',
      ],
      si: [
        'කතන්දර කවය සහ රූකඩ මාධ්‍යයෙන් අදහස් දැක්වීම',
        'සිංහල හා ඉංග්‍රීසි ළමා ගීතිකා සහ කවි',
        'එදිනෙදා සංවාද තුළින් වචන කෝෂය පුළුල් කිරීම',
        'අනෙකාට ගෞරවයෙන් සවන්දීමේ සත්පුරුදු',
      ],
    },
  },
  {
    id: 'social',
    title: {
      en: 'Social & Interpersonal Development',
      si: 'සමාජීය සංවර්ධනය හා සුහදශීලී බව',
    },
    subtitle: {
      en: 'Friendship, empathy, sharing & teamwork',
      si: 'මිත්‍රත්වය, සහයෝගය, බෙදාහදා ගැනීම සහ කණ්ඩායම් හැඟීම',
    },
    description: {
      en: 'Guiding children to form genuine friendships, share toys, respect turns, show empathy for classmates, and blossom into thoughtful, polite individuals.',
      si: 'යහළුවන් සමඟ සුහදව සෙල්ලම් කිරීමට, සෙල්ලම් බඩු බෙදාහදා ගැනීමට, වාරය එනතෙක් ඉවසීමට සහ අනුන්ගේ හැඟීම් තේරුම් ගැනීමට හුරු කරවයි.',
    },
    iconName: 'Users',
    accentColor: '#CBE8D5',
    bgLight: '#F0F9F3',
    points: {
      en: [
        'Collaborative circle time and buddy projects',
        'Learning the warmth of sharing and mutual help',
        'Resolving gentle playground disagreements peacefully',
        'Respecting friends, teachers, and school helpers',
      ],
      si: [
        'සාමූහික කණ්ඩායම් ක්‍රියාකාරකම් හා ක්‍රීඩා',
        'බෙදාහදා ගැනීමේ හා උදව් කිරීමේ සතුට',
        'සුහදව ගැටළු නිරාකරණය කරගැනීමේ මගපෙන්වීම',
        'ගුරුවරුන්ට, මිතුරන්ට හා වැඩිහිටියන්ට ගරු කිරීම',
      ],
    },
  },
  {
    id: 'emotional',
    title: {
      en: 'Emotional Well-Being & Resilience',
      si: 'චිත්තවේගීය යහපැවැත්ම හා පෞරුෂය',
    },
    subtitle: {
      en: 'Self-confidence, emotional expression & inner calm',
      si: 'ආත්ම විශ්වාසය, හැඟීම් පාලනය සහ මානසික සුවය',
    },
    description: {
      en: 'Creating a protective haven where children feel unconditionally loved, recognized, safe to express feelings, and capable of overcoming small challenges.',
      si: 'ආදරය සහ සෙනෙහස පිරි පරිසරයක් තුළ තම හැඟීම් බියක් නැතිව ප්‍රකාශ කිරීමටත්, සතුට, ආත්ම විශ්වාසය සහ මනා පෞරුෂයක් ගොඩනැගීමටත් සහාය වේ.',
    },
    iconName: 'HeartHandshake',
    accentColor: '#F9DCE5',
    bgLight: '#FFF5F8',
    points: {
      en: [
        'Recognizing, naming, and regulating feelings',
        'Celebrating every little personal triumph',
        'Cultivating gentle independence and self-belief',
        'A warm, reassuring embrace whenever comfort is needed',
      ],
      si: [
        'තම හැඟීම් හඳුනාගෙන ඒවා සාමකාමීව ප්‍රකාශ කිරීම',
        'සෑම කුඩා ජයග්‍රහණයක්ම අගය කර දිරිගැන්වීම',
        'ස්වාධීනත්වය සහ තමන් කෙරෙහි විශ්වාසය ගොඩනැගීම',
        'සෑම මොහොතකම සෙනෙහෙබර රැකවරණය සහ මගපෙන්වීම',
      ],
    },
  },
  {
    id: 'physical',
    title: {
      en: 'Physical & Motor Skill Mastery',
      si: 'කායික වර්ධනය හා මෝටර් කුසලතා',
    },
    subtitle: {
      en: 'Gross motor agility, fine motor dexterity & outdoor fun',
      si: 'ශාරීරික සමබරතාවය, අත් ඇඟිලි හුරුව සහ එළිමහන් සෙල්ලම්',
    },
    description: {
      en: 'Balancing active outdoor play in our garden swings and paved courtyard with fine-motor finger exercises like scissor cutting, clay molding, and beading.',
      si: 'පෙරපාසල් මිදුලේ සෙල්ලම් හා පැද්දුම් ක්‍රීඩා මෙන්ම මැටි අනීම, කතුරු භාවිතය, ඇට ඇමිණීම වැනි සියුම් මෝටර් කුසලතා ඔස්සේ ශක්තිමත් නිරෝගී සිරුරක්.',
    },
    iconName: 'Sparkles',
    accentColor: '#D9ECFA',
    bgLight: '#F3F9FE',
    points: {
      en: [
        'Garden playground swings, balancing, and relay hops',
        'Clay sculpting, playdough modeling, and finger grasps',
        'Paper folding, safety-scissor crafts, and buttoning',
        'Cultivating healthy movement habits and hygiene',
      ],
      si: [
        'මිදුලේ පැද්දුම් පැදීම, දිවීම සහ සමබරතා ක්‍රීඩා',
        'මැටි ආකෘති තැනීම සහ සියුම් ඇඟිලි චලන අභ්‍යාස',
        'කඩදාසි නැවීම්, කැපීම් සහ අත්කම් නිර්මාණ',
        'නිරෝගී සනීපාරක්ෂක පුරුදු සහ කායික ප්‍රබෝධය',
      ],
    },
  },
  {
    id: 'creative',
    title: {
      en: 'Creative & Artistic Imagination',
      si: 'නිර්මාණශීලී හා කලාත්මක පරිකල්පනය',
    },
    subtitle: {
      en: 'Free drawing, musical rhythms, dramatic play & dance',
      si: 'චිත්‍ර ඇඳීම, සංගීතය, රංගනය සහ නිදහස් පරිකල්පනය',
    },
    description: {
      en: 'Unlocking unbounded imagination through vibrant finger painting, rhythmic movement, dressing up, musical instruments, and creative open-ended craft.',
      si: 'වර්ණවත් චිත්‍ර, තාලයට සරිලන නැටුම් ගැයුම්, නාට්‍යමය රංගන සහ විවිධ මාධ්‍ය ඔස්සේ දරුවාගේ සිතුවිලි නිදහසේ මල්පල ගැන්වීමට ඉඩ සලසමු.',
    },
    iconName: 'Palette',
    accentColor: '#FFD66B',
    bgLight: '#FFFCEB',
    points: {
      en: [
        'Freehand sketching, vibrant poster paints, and collage',
        'Rhythm instruments, tambourines, and singing games',
        'Character roleplay, imaginative dress-up adventures',
        'Annual showcase performances and celebration acts',
      ],
      si: [
        'නිදහස් චිත්‍ර, පැස්ටල් හා දිය සායම් නිර්මාණ',
        'රිද්ම භාණ්ඩ භාවිතය සහ තාලානුකූල ගීත',
        'චරිත නිරූපණය සහ පරිකල්පනීය රංගන ක්‍රීඩා',
        'වාර්ෂික විවිධ ප්‍රසංග හා සැමරුම් අවස්ථා',
      ],
    },
  },
];

export const playActivities: ActivityItem[] = [
  {
    id: 'drawing',
    title: {
      en: 'Drawing & Colouring',
      si: 'චිත්‍ර ඇඳීම සහ පාට කිරීම',
    },
    description: {
      en: 'Children pour their heart’s wonder onto paper with crayons, finger paints, and brushes, mastering fine pencil grip while expressing pure joy.',
      si: 'පැස්ටල්, පාට කූරු හා සායම් භාවිතයෙන් දරුවාගේ සිහින හා හැඟීම් කඩදාසිය මත වර්ණවත් කරමින් අත් ඇඟිලි නම්‍යශීලී කරයි.',
    },
    category: 'creative',
    accentColor: '#F28B78',
    iconName: 'Palette',
    image: '/images/opt-children-play-smiles.jpg',
  },
  {
    id: 'music',
    title: {
      en: 'Music & Melodic Singing',
      si: 'සංගීතය සහ ගායනය',
    },
    description: {
      en: 'Catchy Sinhala and English nursery melodies, rhythmic claps, and simple instruments that inspire pitch awareness and acoustic delight.',
      si: 'ළමා ගීතිකා, තාල වාදන සහ කන්කළු සංගීතය තුළින් දරුවාගේ ශ්‍රවණාග්‍රහණය හා රිද්ම සංවේදීතාව ඔප්නංවයි.',
    },
    category: 'expression',
    accentColor: '#FFD66B',
    iconName: 'Music',
  },
  {
    id: 'dance',
    title: {
      en: 'Dancing & Creative Movement',
      si: 'නර්තනය සහ රිද්මය',
    },
    description: {
      en: 'Joyful movements, traditional graceful gestures, and cheerful stage performances celebrated at Children’s Day variety shows.',
      si: 'ළමා දින සැමරුම් හා ප්‍රසංග වලදී දරුවන් ඉදිරිපත් කරන මනහර නැටුම් සහ රිද්මයානුකූල ශාරීරික චලනයන්.',
    },
    category: 'movement',
    accentColor: '#F9DCE5',
    iconName: 'Sparkles',
    image: '/images/opt-happy-learning-group.jpg',
  },
  {
    id: 'storytelling',
    title: {
      en: 'Storytelling & Character Wonder',
      si: 'කතන්දර සහ පරිකල්පන ලෝකය',
    },
    description: {
      en: 'Morals of empathy, kindness, and courage woven into captivating folktales and illustrated children’s picture books.',
      si: 'ආදර්ශමත් සාරධර්ම, මිත්‍රත්වය හා කරුණාව කියාදෙන සුන්දර කතන්දර තුළින් දරුවාගේ පරිකල්පනය පුළුල් කරයි.',
    },
    category: 'language',
    accentColor: '#CBE8D5',
    iconName: 'BookOpen',
  },
  {
    id: 'outdoor',
    title: {
      en: 'Outdoor Courtyard & Playground',
      si: 'එළිමහන් සෙල්ලම් සහ මිදුලේ කෙළිසෙල්ලම්',
    },
    description: {
      en: 'Swinging under green trees, running across the courtyard with friends, breathing fresh air, and enjoying boundless childhood freedom.',
      si: 'ගස්කොළන් සෙවණේ පැද්දුම් පැදීම, මිතුරන් සමඟ මිදුලේ දිවීම සහ සොබාදහම සමග මුසුව සතුටින් කාලය ගතකිරීම.',
    },
    category: 'outdoor',
    accentColor: '#D9ECFA',
    iconName: 'Sun',
    image: '/images/opt-preschool-entrance-sign.jpg',
  },
  {
    id: 'group',
    title: {
      en: 'Group Activities & Friendly Games',
      si: 'සාමූහික ක්‍රියාකාරකම් හා සුහද ක්‍රීඩා',
    },
    description: {
      en: 'Circle-time cooperative games where every child feels seen, applauded, and cherished as part of a loving little family.',
      si: 'සැවොම එක්ව සිනාසෙමින්, එකිනෙකාට අත්වැල් බඳිමින් පවත්වන සුහද කණ්ඩායම් ක්‍රීඩා හා සුහද හමුවීම්.',
    },
    category: 'social',
    accentColor: '#FFD66B',
    iconName: 'Smile',
    image: '/images/opt-preschool-activity-banner.jpg',
  },
];

export const dailyRoutine = [
  {
    time: '08:00 AM – 08:30 AM',
    title: {
      en: 'Warm Morning Welcome & Free Exploration',
      si: 'උදෑසන සුහද පිළිගැනීම සහ නිදහස් ක්‍රියාකාරකම්',
    },
    description: {
      en: 'Greeting teachers with smiles, placing bags in cubbies, and settling in with gentle sensory toys.',
      si: 'ගුරුවරුන් හා යහළුවන් සිනහමුසු මුහුණින් පිළිගැනීම සහ සෙල්ලම් බඩු ආශ්‍රිත නිදහස් කාලය.',
    },
    iconName: 'Sun',
  },
  {
    time: '08:30 AM – 09:15 AM',
    title: {
      en: 'Morning Circle, Rhymes & Language Time',
      si: 'උදෑසන කවය, ළමා ගීතිකා සහ භාෂා ක්‍රියාකාරකම්',
    },
    description: {
      en: 'Reciting beloved Sinhala and English songs, practicing polite greetings, and weather/day check-ins.',
      si: 'ආගමික වතාවත්, ළමා කවි, ගීතිකා සහ දවසේ කාලගුණය හා තොරතුරු සාකච්ඡා කිරීම.',
    },
    iconName: 'Music',
  },
  {
    time: '09:15 AM – 10:00 AM',
    title: {
      en: 'Cognitive & Creative Hands-on Stations',
      si: 'බුද්ධි වර්ධන හා නිර්මාණාත්මක අත්කම් ක්‍රියාකාරකම්',
    },
    description: {
      en: 'Structured table activities: counting objects, color sorting, painting, and playdough sculpting.',
      si: 'හැඩතල, අංක, පාට කිරීම්, කඩදාසි ඇලවීම් සහ මැටි ආකෘති තැනීමේ ප්‍රායෝගික අභ්‍යාස.',
    },
    iconName: 'Palette',
  },
  {
    time: '10:00 AM – 10:30 AM',
    title: {
      en: 'Nutritious Snack & Table Manners',
      si: 'පෝෂණීය කෙටි ආහාර වේල සහ ආචාරශීලී පුරුදු',
    },
    description: {
      en: 'Handwashing hygiene, eating together with mindfulness, and clearing tables with pride.',
      si: 'අත් සේදීමේ සනීපාරක්ෂක පුරුදු, එකට හිඳ ආහාර ගැනීම සහ පිරිසිදුකම පවත්වා ගැනීම.',
    },
    iconName: 'Apple',
  },
  {
    time: '10:30 AM – 11:15 AM',
    title: {
      en: 'Garden Playground & Gross Motor Adventures',
      si: 'එළිමහන් ක්‍රීඩාංගනය සහ මිදුලේ කෙළිසෙල්ලම්',
    },
    description: {
      en: 'Swings, running games, balancing fun, and discovering plants in the school garden.',
      si: 'පැද්දුම් පැදීම, දුවපැන සෙල්ලම් කිරීම සහ උද්‍යානයේ සොබාදහම අත්විඳීම.',
    },
    iconName: 'Smile',
  },
  {
    time: '11:15 AM – 11:45 AM',
    title: {
      en: 'Story Enchantment & Reflection Time',
      si: 'කතන්දර කියවීම සහ දවසේ මතකය ආවර්ජනය',
    },
    description: {
      en: 'Listening quietly to meaningful folktales, celebrating achievements, and calming down.',
      si: 'සාරධර්ම පිරි කතන්දරයකට සවන්දීම, යහපත් ක්‍රියා අගය කිරීම සහ සිත සන්සුන් කරගැනීම.',
    },
    iconName: 'BookOpen',
  },
  {
    time: '11:45 AM – 12:00 PM',
    title: {
      en: 'Fond Farewell to Parents & Family Pickup',
      si: 'දවසේ සමුගැනීම සහ දෙමාපියන් වෙත දරුවන් භාරදීම',
    },
    description: {
      en: 'Packing little bags, hugs and high-fives, and safe handoff to loving parents.',
      si: 'සුරක්ෂිතව බඩුමුට්ටු අසුරාගෙන දෙමාපියන්ගේ ආදරණීය තුරුලට පිටත්ව යාම.',
    },
    iconName: 'Heart',
  },
];
