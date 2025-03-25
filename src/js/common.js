document.addEventListener('alpine:init', function () {
    Alpine.data('slider', (symbol = ' ₸') => ({
        slider: '',
        input: '',
        symbol: '',
        typing() {
            const triggerEvents = true,
                value = Number(this.input.value.replace(this.symbol));
            this.slider.rangeSlider.update({value}, triggerEvents);
            this.formattedValue(value)
        },
        clear() {
            this.input.value = '';
        },
        formattedValue(value) {
            this.input.value = value + this.symbol;
        },
        init() {
            this.slider = this.$el.querySelector('input[type=range]');
            this.input = this.$el.querySelector('input[type=text]');
            this.symbol = symbol;

            const that = this;

            rangeSlider.create(this.slider, {
                onSlideEnd(position, value) {
                    that.formattedValue(position)
                }
            });
        }
    }))

    Alpine.data('glide', (symbol = ' ₸') => ({
        init() {
            new Glide('.glide', {
                rewind: false
            }).mount()
        }
    }));

    Alpine.store('nav', {
        isOpen: false,
        media: matchMedia('(max-width: 1199px)'),

        show() {
            this.isOpen = true;
        },
        hide() {
            this.isOpen = false;
        }
    })
});

