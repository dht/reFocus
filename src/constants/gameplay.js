import {channels, sentence} from '../constants/icons';
import ease from '../utils/easing';

let timestamp = 0;
const iconsCount = Object.keys(channels).length;

const degrees = (index = 0) => {
    return (360 / iconsCount) * index - 16;
};

const stepByIndex = (index, delay = 1000, sentence = '') => {
    timestamp += delay;

    timestamp += delay;

    return {
        timestamp,
        iconIndex: index,
        degrees: degrees(index),
        sentence,
    };
};


const stepByTitle = (channel, delay = 1000) => {
    return stepByIndex(channel, delay, sentence(channel));
};

let totalTime = 20000,
    previousT = 0;

export const time = (percent) => {
    const t = ease.easeOutCubic(percent),
        delta = (t - previousT);

    previousT = t;

    return delta * totalTime;
};

export const makePlan = (arr) => {
    const len = arr.length - 1;

    return arr.map((channel, index) => stepByTitle(channel, time(index / len)));
};

let plan = makePlan([
    channels.phonecall,
    channels.instagram,
    channels.whatsapp,
    channels.youtube,
    channels.phonecall,
    channels.email,
    channels.picture,
    channels.charging,
    channels.facebook,
    channels.twitter,
    channels.google,
    channels.snap,
    channels.browsing,
    channels.yelp,
    channels.instagram,
    channels.snap,
    channels.charging,
    channels.phonecall,
    channels.instagram,
    channels.whatsapp,
    channels.youtube,
    channels.phonecall,
    channels.email,
    channels.picture,
    channels.charging,
    channels.facebook,
    channels.twitter,
    channels.google,
    channels.snap,
    channels.browsing,
    channels.yelp,
    channels.instagram,
    channels.snap,
    channels.charging,
    channels.facebook,
]);

export default plan;
