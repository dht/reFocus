import {timestamp} from '../utils/utils';

class Animation {

    constructor(gameplay = [], callbackStep, callbackFinish) {
        this.gameplay = gameplay;
        this.callback = callbackStep;
        this.callbackFinish = callbackFinish;

        this.startTimestamp = timestamp();
        this._interval = null;
        this._delay = 300;
        this.nextStepIndex = 0;

        this.step = this.step.bind(this);
    }

    setGameplay(gameplay) {
        this.gameplay = gameplay;
    }

    step() {
        const now = timestamp(),
            delta = now - this.startTimestamp,
            nextStep = this.gameplay[this.nextStepIndex];

        if (!nextStep) {
            return this.stop();
        }

        if (delta >= nextStep.timestamp) {
            this.callback.call(this, nextStep, this.nextStepIndex, );
            this.nextStepIndex++;
        }
    }

    start() {
        this._interval = setInterval(this.step, this._delay);
    }

    stop() {
        clearInterval(this._interval);
        this.callbackFinish.call(this);
    }
}

export default Animation;
