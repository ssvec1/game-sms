// jeff puts this in his apps
export function ready(cb: () => void) {
    document.onreadystatechange = function () {
        if (document.readyState === 'interactive') {
            cb();
        }
    };
}
