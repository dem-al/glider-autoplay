function gliderAutoplay(glider, options) {
    glider.autoplay = autoplay;
    glider.autoplay(options);

    function autoplay(options) {
        const {
            interval,
            startItem = 0,
            pausable = true,
            onPauseCallback,
            onRestartCallback,
        } = options;
        const _ = this;
        _.currentItem = startItem - 1;

        const incrementSlide = () => {
            if (_.currentItem < _.slides.length - _.opt.slidesToShow) {
                _.currentItem++;
            } else {
                _.currentItem = 0;
            }
            _.scrollItem(_.currentItem);
        };

        _.autoplayInterval = setInterval(incrementSlide.bind(_), interval);

        const stopAutoplay = () => {
            clearInterval(_.autoplayInterval);
            if (onPauseCallback && typeof onPauseCallback === "function") {
                onPauseCallback();
            }
        };
        const restartInterval = () => {
            _.currentItem = _.slide;
            _.autoplayInterval = setInterval(incrementSlide.bind(_), interval);
            if (onRestartCallback && typeof onRestartCallback === "function") {
                onRestartCallback();
            }
        };

        if (pausable) {
            _.ele.onmouseover = stopAutoplay.bind(_);
            _.ele.onmouseout = restartInterval.bind(_);
        }
    }
}

if (typeof window !== "undefined") {
    window.gliderAutoplay = gliderAutoplay;
} else {
    module.exports.gliderAutoplay = gliderAutoplay;
}
