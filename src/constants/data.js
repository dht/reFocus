import * as he from './languages/he';
import * as en from './languages/en';

const languages = {
    he,
    en,
};

let language = 'en';

export const setLanguage = (_language) => {

    console.log('_language -> ', _language);

    if (_language && languages[_language]) {
        language = _language;
    }

    if (_language === 'he' && typeof document !== 'undefined') {
        document.body.className = 'rtl';
    }
};

export const getData = () => {
    return languages[language];
};
