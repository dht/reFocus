import {channels} from './channels';
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


const stepByTitle = (verbs, channel, delay = 1000) => {
    return stepByIndex(channel, delay, verbs[channel]);
};

let totalTime = 20000,
    previousT = 0;

export const time = (percent) => {
    const t = ease.linear(percent),
        delta = (t - previousT);

    previousT = t;

    return delta * totalTime;
};

const _makePlan = (verbs, arr) => {
    const len = arr.length - 1;

    return arr.map((channel, index) => stepByTitle(verbs, channel, time(index / len)));
};

export const makePlan = (verbs) => _makePlan(verbs, [
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

