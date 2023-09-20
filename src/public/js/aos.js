const elements = document.querySelectorAll('.aos');

const setTranslate = (element, value = '0 50%') => {
    [x, y] = value.split(' ');
    element.style.transform = `translate(${x}, ${y})`;
};

const callback = (entries) => {
    entries.forEach((entry) => {
        let target = entry.target;
        if (entry.isIntersecting) {
            target.style.opacity = 1;
            target.style.transform = 'translate(0)';
        } else {
            target.style.opacity = 0;
            setTranslate(
                target,
                entry.boundingClientRect.top < 0
                    ? target.dataset.translateout
                    : target.dataset.translatein
            );
        }
    });
};

const observer = new IntersectionObserver(callback, {
    threshold: 0.3,
});

elements.forEach((element) => {
    element.style.opacity = 0;
    setTranslate(element, element.dataset.translatein);
    if (element.dataset.boot == 'true') {
        setTimeout(() => {
            element.style.transform = 'translate(0)';
        }, 500);
    }
    observer.observe(element);
});
