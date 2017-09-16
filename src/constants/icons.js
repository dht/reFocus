import {flipACoin} from '../utils/utils';

export default ['smile-o', 'facebook-official', 'whatsapp', 'phone', 'envelope-o', 'snapchat',
    'camera', 'battery-1',
    'yelp', 'youtube', 'instagram', 'twitter', 'google', flipACoin() ? 'chrome' : 'firefox'];

// flipACoin() ? 'android' : 'apple'


export const channels = {
    happy: 0,
    facebook: 1,
    whatsapp: 2,
    phonecall: 3,
    email: 4,
    snap: 5,
    picture: 6,
    charging: 7,
    yelp: 8,
    youtube: 9,
    instagram: 10,
    twitter: 11,
    google: 12,
    browsing: 13,
};

export const sentence = (channel) => {
    switch (channel) {
        case channels.happy:
            return 'Refocus';
        case channels.facebook:
            return 'facebook feed';
        case channels.whatsapp:
            return 'incoming whatsapp';
        case channels.phonecall:
            return 'incoming call';
        case channels.email:
            return 'incoming email';
        case channels.snap:
            return 'chance for a snap';
        case channels.picture:
            return 'photo opp';
        case channels.charging:
            return 'you need to charge';
        case channels.yelp:
            return 'search for lunch';
        case channels.youtube:
            return 'you\'re watching a video';
        case channels.instagram:
            return 'there\'s a new story';
        case channels.twitter:
            return 'a new retweet';
        case channels.google:
            return 'where is mars?';
        case channels.browsing:
            return 'a NASA article';
    }
};