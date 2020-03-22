const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let t;
    let temp;
    if (typeof sampleActivity == 'string') {
        let sampleActivity1 = sampleActivity.split('.');
        sampleActivity = sampleActivity1[0] + '.' + sampleActivity1.slice(1).join("");
    }
    if (sampleActivity > 0 && sampleActivity < 15 && typeof(sampleActivity) == 'string') {
        let sampleActivity1 = sampleActivity.split('.');
        sampleActivity = sampleActivity1[0] + '.' + sampleActivity1.slice(1).join("");
        t = Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
        temp = t.toFixed(0);
        if (temp > t) return temp;
        else return ++temp;

    } else {
        return false;
    };
};
