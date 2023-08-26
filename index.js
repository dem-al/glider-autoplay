function gliderAutoplay(glider, options) {
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

        _.autoplayInterval = window.setInterval(
            incrementSlide.bind(_),
            interval
        );
        _.isRunning = true;

        const stopAutoplay = () => {
            clearInterval(_.autoplayInterval);
            _.isRunning = false;
            if (onPause && typeof onPause === "function") {
                onPause();
            }
        };
        const restartAutoplay = () => {
            if (_.isRunning) {
                return;
            }
            _.currentItem = _.slide;
            _.autoplayInterval = window.setInterval(incrementSlide, interval);
            _.isRunning = true;
            if (onRestart && typeof onRestart === "function") {
                onRestart();
            }
        };

        if (pausable) {
            _.ele.addEventListener("mouseover", stopAutoplay.bind(_));
            _.ele.addEventListener("touchstart", stopAutoplay.bind(_));
            _.ele.addEventListener("mouseout", restartAutoplay.bind(_));
            _.ele.addEventListener("touchend", restartAutoplay.bind(_));
            _.ele.addEventListener("touchcancel", restartAutoplay.bind(_));
        }

        _.pause = stopAutoplay;
        _.run = restartAutoplay;
    }

    glider.autoplay = autoplay;
    glider.autoplay(options);
}

if (window) {
    window.gliderAutoplay = gliderAutoplay;
}

module.exports.gliderAutoplay = gliderAutoplay;
