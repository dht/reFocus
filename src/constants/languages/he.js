import {channels} from '../channels';

export const verbs = {
    [channels.happy]: 'Refocus',
    [channels.facebook]: 'פיד של פייסבוק',
    [channels.whatsapp]: 'הודעת וואטסאפ חדשה',
    [channels.phonecall]: 'שיחה נכנסת',
    [channels.email]: 'אימייל חדש',
    [channels.snap]: 'סרטון חדש',
    [channels.picture]: 'הזדמנות לתמונה',
    [channels.charging]: 'צריך להטעין',
    [channels.yelp]: 'חיפוש מקום לצהריים',
    [channels.youtube]: 'רואה סרט ביוטיוב',
    [channels.instagram]: 'יש סיפור חדש',
    [channels.twitter]: 'מישהו עשה retweet',
    [channels.google]: 'חיפוש בגוגל',
    [channels.browsing]: 'קריאת חדשות',
};

export const story = [
    "עשרות חברות, אנשים, שירותים מחפשים את תשומת הלב שלך מידי יום",
    "תשומת הלב שלך בעומס יתר",
    "אין אפשרות להתרכז, אין אפשרות לחשוב בבהירות, אין אפשרות ליצור",
    "העיניים חסרות נחת, מחפשות מי שלח מה, מי כתב, מי הגיב, הראש מתחמם",
    "ולא נראה שהמצב משתפר עם הזמן",
    "מה זה התפקסות מחדש?",
    "תרבות אלטרנטיבית",
    "אנחנו יוצרים כלים שמונעים את גניבת תשומת הלב",
    "אנחנו מאמינים שכל אחד חייב לבחור את האסטרטגיות הכי טובות עבורו בקרב תשומת הלב",
    "אילוף הרגלי חשיפה לאינפורמציה באופן אקטיבי",
    "עיצוב של הטופוגרפיה הדיגיטלית האישית באופן אקטיבי",
    "התפקסות מחדש על הדברים שגורמים לנפש שלך לרקוד",
];

export const tools = [
    {
        id: 1,
        title: 'Social Contracts',
        imageUrl:'images/rick.png',
        description: 'שיתוף שעות הזמינות שלך לצורך יצירת תיאום ציפיות',
        linkText: 'שימוש בכלי',
        linkUrl: 'https://www.socialcontracts.io'
    },
    {
        id: 2,
        title: 'WAM',
        imageUrl:'images/auto.png',
        description: 'מענה אוטומטי להודעות בוואטסאפ עם שעת הזמינות הקרובה',
        linkText: 'github',
        linkUrl: 'https://github.com/dht/whatsapp-answering-machine'
    }

];

export const strings = {
    see_the_tools: 'גלריית הכלים'
};