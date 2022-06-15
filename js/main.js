
const tags = [
    {
        name: '#コスメ',
        link: 'https://search.rakuten.co.jp/search/mall/コスメ/?sid=379923',
    },
    {
        name: '#雑貨・文房具',
        link: 'https://search.rakuten.co.jp/search/mall/コスメ/?sid=379923',
    },
    {
        name: '#ソフトドリンク',
        link: 'https://search.rakuten.co.jp/search/mall/コスメ/?sid=379923',
    },
    {
        name: '#ジュエリー・アクセサリー',
        link: 'https://search.rakuten.co.jp/search/mall/コスメ/?sid=379923',
    },
    {
        name: '#スポーツ・車',
        link: 'https://search.rakuten.co.jp/search/mall/コスメ/?sid=379923',
    },
    {
        name: '#ランキング入り',
        link: 'https://search.rakuten.co.jp/search/mall/コスメ/?sid=379923',
    },
    {
        name: '#楽天Books',
        link: 'https://search.rakuten.co.jp/search/mall/コスメ/?sid=379923',
    },
    {
        name: '#エンタメ・デジタル家電',
        link: 'https://search.rakuten.co.jp/search/mall/コスメ/?sid=379923',
    },
    {
        name: '#グルメ',
        link: 'https://search.rakuten.co.jp/search/mall/コスメ/?sid=379923',
    },
    {
        name: '#ファッション',
        link: 'https://search.rakuten.co.jp/search/mall/コスメ/?sid=379923',
    },
]
const VueApp = Vue.createApp({
    el: 'Gift of Taiwan',
    data() {
        return {
            tags,
            searchValue: null,
        }
    },
    mounted() {
        // this.shuffle()
        this.setSplide()
        // this.setLocomotiveScroll()
        this.setScrollEffect()
        this.setAOS()
    },
    methods: {
        searchSale() {
            if (this.searchValue) {
                const href = `https://search.rakuten.co.jp/search/mall/${this.searchValue}/?sid=379923`
                window.open(href, '_blank')
            }
        },
        shuffle() {
            setInterval(() => {
                this.tags = _.shuffle(this.tags)
            }, 8000)
        },
        setLocomotiveScroll() {
            const LocomotiveScrollParams = {
                el: document.querySelector('#app'),
                // el: document.querySelector('#TopBanner'),
                smooth: true,
                repeat: true,
                lerp: 0.1,
                tablet: {
                    smooth: true,
                    breakpoint: 550,
                },
                smartphone: {
                    smooth: false,
                },
            }
            const scroll = new LocomotiveScroll(LocomotiveScrollParams)
        },
        setScrollEffect() {
            $('#GoTop').on('click', () => {
                $('html, body').animate(
                    {
                        scrollTop: 0,
                    },
                    700,
                )
            })
            const setOffset = () => {
                if ($(window).scrollTop() >= 300) {
                    $('#GoTop').fadeIn()
                } else {
                    $('#GoTop').fadeOut()
                }
            }
            window.addEventListener('scroll', setOffset)
        },
        setSplide() {
            const splideTopParams = {
                pagination: false,
                arrows: false,
                autoplay: true,
                type: 'fade',
                easing: 'ease',
                rewind: true,
                speed: 1500,
            }
            const splideMiniBannerParams = {
                perPage: 3,
                perMove: 1,
                pagination: false,
                arrows: true,
                autoplay: true,
                type: 'loop',
                easing: 'ease',
                speed: 600,
            }
            const splideSquareBannerParams = {
                perPage: 3,
                perMove: 1,
                pagination: false,
                arrows: true,
                autoplay: true,
                type: 'loop',
                easing: 'ease',
                speed: 600,
                focus: 'center',
            }
            const splideShopItemParams = {
                perMove: 2,
                fixedWidth: 240,
                gap: 60,
                pagination: false,
                arrows: true,
                autoplay: true,
                type: 'loop',
                // rewind: true,
                rewindByDrag: true,
                easing: 'ease',
                speed: 800,
            }
            const splideTop = new Splide('#SplideTop', splideTopParams)
            const splideMiniBanner = new Splide(
                '#SplideMiniBanner',
                splideMiniBannerParams,
            )
            const splideSquareBanner = new Splide(
                '#SplideSquareBanner',
                splideSquareBannerParams,
            )
            splideTop.mount()
            splideMiniBanner.mount()
            splideSquareBanner.mount()
            
            const shopItemSplides = document.querySelectorAll('.shopitem__splide')
            shopItemSplides.forEach((e) => {
                const s = new Splide(
                    e,
                    splideShopItemParams,
                )
                s.mount()
            })
        },
        setAOS() {
            const AOSParams = { once: false }
            AOS.init(AOSParams)
        },
    },
}).mount('#app')

const consoleStyle =
    "font-weight: bold; font-size: 1.05rem; font-family: '微軟正黑體'; color: #ffb93e;"


const head = document.querySelector('head')