import {channels} from '../channels';

export const verbs = {
    [channels.happy]: 'Refocus',
    [channels.facebook]: 'facebook feed',
    [channels.whatsapp]: 'incoming whatsapp',
    [channels.phonecall]: 'incoming call',
    [channels.email]: 'incoming email',
    [channels.snap]: 'chance for a snap',
    [channels.picture]: 'photo opp',
    [channels.charging]: 'you need to charge',
    [channels.yelp]: 'search for lunch',
    [channels.youtube]: 'you\'re watching a video',
    [channels.instagram]: 'there\'s a new story',
    [channels.twitter]: 'a new retweet',
    [channels.google]: 'searching information',
    [channels.browsing]: 'reading news',
};

export const story = [
    "Dozens of services, companies and individuals are seeking your attention every day",
    "Your attention suffers, Your creativity suffers",
    "You’re unable to focus, Unable to think clearly, Unable to create",
    "Your mind is cluttered",
    "And it’s only getting worse",
    "What is Refocus?",
    "A counter culture",
    "We create tools for reclaiming attention",
    "We believe one must choose the best strategies in the many battles of attention",
    "Pro actively regaining control of your information habits",
    "Pro actively reshaping your digital topography",
    "Pro actively refocusing your attention on the things that make your soul dance",
];

export const tools = [
    {
        id: 1,
        title: 'Social Contracts',
        imageUrl:'images/rick.png',
        description: 'Share your availability hours in different digital channels',
        linkText: 'website',
        linkUrl: 'https://www.socialcontracts.io'
    },
    {
        id: 2,
        title: 'WAM',
        imageUrl:'images/auto.png',
        description: 'Auto answer incoming whatsapp messages if you\'re not available',
        linkText: 'github',
        linkUrl: 'https://github.com/dht/whatsapp-answering-machine'
    }

];

export const strings = {
    see_the_tools: 'See the tools'
};