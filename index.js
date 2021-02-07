function gliderAutoplay(glider, options) {
    glider.autoplay = autoplay;
    glider.autoplay(options);

    function autoplay(options) {
        const {
            interval,
            startItem = 0,
            pausable = true,
            onPause,
            onRestart,
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
            if (onPause && typeof onPause === "function") {
                onPause();
            }
        };
        const restartAutoplay = () => {
            _.currentItem = _.slide;
            _.autoplayInterval = setInterval(incrementSlide.bind(_), interval);
            if (onRestart && typeof onRestart === "function") {
                onRestart();
            }
        };

        if (pausable) {
            _.ele.onmouseover = stopAutoplay.bind(_);
            _.ele.ontouchstart = stopAutoplay.bind(_);
            _.ele.onmouseout = restartAutoplay.bind(_);
            _.ele.ontouchend = restartAutoplay.bind(_);
            _.ele.ontouchcancel = restartAutoplay.bind(_);
        }
    }
}

module.exports.gliderAutoplay = gliderAutoplay;
