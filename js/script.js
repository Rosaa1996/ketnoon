if ($('.owl-slider').length) {
    $(document).ready(function() {
        var owl = $('.owl-slider');
        $('.owl-slider').owlCarousel({
            loop: true,
            //animateIn: 'fadeIn',
            //animateOut: 'fadeOut',
            autoplay: true,
            navSpeed: 500,
            items: 1,
            rtl: true,
            autoplay: true,
            responsive: {
                0: {
                     dots: true,
                     margin: 2,
                    nav: false
                },
                768: {
                     dots: false,
                     margin: 0,
                    nav: true
                }

            }
        });

    });
}

if (matchMedia('only screen and (max-width: 768px)').matches) {

    $(".set > span").on("click", function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");
            $(this).siblings('.content').slideUp(200);
            $(".set > span i").removeClass("fas fa-chevron-up").addClass("fas fa-chevron-up");
        } else {
            $(".set > span i").removeClass("fas fa-chevron-up").addClass("fas fa-chevron-up");
            $(this).find("i").removeClass("fas fa-chevron-down").addClass("fas fa-chevron-up");
            $(".set > span").removeClass("active");
            $(this).addClass("active");
            $('.content').slideUp(200);
            $(this).siblings('.content').slideDown(200);
        }

    });
}

$(function() {
    $('.scroll-down-icon a').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});

//gap
$('.menuTrigger').click(function() {
    $('.panel-menu').toggleClass('isOpen');

});

$('.openSubPanel').click(function() {
    $(this).next('.subPanel').addClass('isOpen');
});

$('.closeSubPanel').click(function() {
    $('.subPanel').removeClass('isOpen');
});

$("#panel-menu").on("click", function(e) {
    var target = $(e.target);
    if (target.attr('id') == 'menu-toggle' || target.parents('#panel-menu').length > 0 || target.parents('.panel-menu').length > 0) {
        console.log('id: ' + target.attr('id') + 'contains: ' + $.contains(target, $('.panel-menu')));
    } else {
        if ($(".panel-menu").hasClass('isOpen'))
            $(".panel-menu").removeClass("isOpen");
        $('.subPanel').removeClass('isOpen');
    }

});

$('.closePanel').click(function() {
    $('.panel-menu').removeClass('isOpen');
    $('.subPanel').removeClass('isOpen');

});
//gap

if ($('.owl-send').length) {
    $('.owl-send').owlCarousel({
        // autoplay: true,
        loop: false,
        rtl: true,
        nav: false,
        margin: 20,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        lazyLoad: true,
        responsive: {
            0: {
                items: 2,
                dots: true,
                stagePadding: 50
            },
            500: {
                items: 3,
                dots: false
            },
            768: {
                items: 3,
                dots: true
            },
            991: {
                items: 4,
                dots: true
            },
            1200: {
                items: 4,
                touchDrag: false,
                mouseDrag: false
            }

        }
    });
}

//owl-help
if ($('.owl-pro').length) {
    $('.owl-pro').owlCarousel({
        //autoplay: true,
        loop: false,
        rtl: true,
        dots: false,
        lazyLoad: true,
        responsive: {
            0: {
                nav: false,
                items: 1,
                stagePadding: 60
            },
            400: {
                nav: false,
                items: 1,
                stagePadding: 80
            },
            440: {
                nav: false,
                items: 2,
                stagePadding: 20
            },
            768: {
                nav: false,
                items: 3,
                stagePadding: 30
            },
           992: {
                nav: false,
                items: 4,
                stagePadding: 30
            },
            1200: {
                nav: true,
                items: 6
            }

        }
    });

}

//owl-wnd	 
if ($('.owl-wnd').length) {
    var heroSlider = $('.owl-wnd');
    var owlCarouselTimeout = 3500;
    $('.owl-wnd').owlCarousel({
        autoplay: false,
        loop: true,
        //autoplayHoverPause: true,
        smartSpeed: 450,
        rtl: true,
        margin: 0,
        dots: false,
        margin: 10,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                stagePadding: 20

            },

            400: {
                items: 1,
                nav: false,
                stagePadding: 40
            },
            500: {
                items: 2,
                nav: false,
                stagePadding: 10
            },
            768: {
                items: 3,
                nav: false,
                stagePadding: 20

            },
            1200: {
                items: 5,
                nav: true,

            }

        }
    });
}
//owl-off	 
if ($('.owl-off').length) {
    var heroSlider = $('.owl-off');
    var owlCarouselTimeout = 3500;
    $('.owl-off').owlCarousel({
        autoplay: false,
        loop: true,
        //autoplayHoverPause: true,
        smartSpeed: 450,
        rtl: true,
        margin: 0,
        dots: false,
        margin: 10,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                stagePadding: 20

            },

            400: {
                items: 1,
                nav: false,
                stagePadding: 40
            },
            500: {
                items: 2,
                nav: false,
                stagePadding: 10
            },
            768: {
                items: 3,
                nav: false,
                stagePadding: 20

            },
            1200: {
                items: 4,
                nav: true,

            }

        }
    });
}

if ($('.header').length) {
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 100) {
                $(".header").addClass("sticky-menu");
            } else {
                $(".header").removeClass("sticky-menu");
            }
        });
    });
}

function initCategoryBar() {
    var $overlay = $(".js-menu-overlay"),
        $naviOverlay = $(".js-navi-overlay"),
        $megaMenuMain = $('.js-mega-menu-main-item'),
        $megaMenuOptionsContainer = $(".js-mega-menu-categories-options"),
        $hoverEffect = $(".js-navi-new-list-category-hover"),
        $headerLinks = $('.js-categories-bar-item'),
        $megaMenuCategory = $('.js-mega-menu-category'),
        $searchBar = $('.js-search'),
        $searchResults = $('.js-search-results');

    var moveHover = function(self) {
        var parent = self
            .parent()
            .parent()
            .parent();

        $hoverEffect
            .css("width", self.width())
            .css(
                "right",
                parent.width() -
                (self.offset().left + self.width()) +
                parent.offset().left
            );
        $hoverEffect.css("transform", "scaleX(1)");
    };

    var removeHover = function() {
        $hoverEffect.css("transform", "scaleX(0)");
    };

    $headerLinks.hover(function() {
            moveHover.call(this, $(this));
        },
        function() {
            removeHover.call(this, $(this));
        });

    $megaMenuMain.on('click', function(e) {
        e.stopPropagation();
    });

    var hoverAction;
    $megaMenuMain.hover(
        function() {
            var $this = $(this);
            hoverAction = setTimeout(function() {
                $this.children(".js-mega-menu-categories-options").css('display', 'flex');
                $naviOverlay.addClass("is-active");
                $searchResults.removeClass("is-active");
                $searchBar.removeClass("is-active");
            }, 200);
        },
        function() {
            hoverAction && clearTimeout(hoverAction);
            $naviOverlay.removeClass("is-active");
            $megaMenuOptionsContainer.hide()
        });

    $megaMenuCategory.hover(
        function() {

            $megaMenuOptionsContainer.find('.js-categories-ad').removeClass('ad-is-active');
            $megaMenuOptionsContainer.find('#categories-ad-' + $(this).data('index')).addClass('ad-is-active');

            $megaMenuOptionsContainer.find('.js-mega-menu-category-options').removeClass('is-active');
            $megaMenuCategory.removeClass('c-navi-new-list__inner-category--hovered');
            $(this).addClass('c-navi-new-list__inner-category--hovered');
            $megaMenuOptionsContainer.find('#categories-' + $(this).data('index')).addClass('is-active');
        },

        function() {}
    );

    $overlay.hover(function() {
        if (!$(this).is(".is-active")) return true;
    });

    $megaMenuCategory.hover(
        function() {

            $megaMenuOptionsContainer.find('.js-categories-ad').removeClass('ad-is-active');
            $megaMenuOptionsContainer.find('#categories-ad-' + $(this).data('index')).addClass('ad-is-active');

            $megaMenuOptionsContainer.find('.js-mega-menu-category-options').removeClass('is-active');
            $megaMenuCategory.removeClass('c-navi-new-list__inner-category--hovered');
            $(this).addClass('c-navi-new-list__inner-category--hovered');
            $megaMenuOptionsContainer.find('#categories-' + $(this).data('index')).addClass('is-active');
        },

        function() {}
    );

};

function initStatic() {
    var $overlay = $(".js-menu-overlay"),
        $naviOverlay = $(".js-navi-overlay"),
        $newCategories = $(".js-navi-new-list-categories"),
        $newCategoryItem = $(".js-navi-new-list-category"),
        $hoverEffect = $(".js-navi-new-list-category-hover"),
        allCategoriesButton = $(".js-navi-new-list__all-links"),
        sentBanners = [];

    this.openCategories = false;
    var mainJs = this;

    $(".js-navi").hover(function() {
        $(this)
            .find("img[data-src]")
            .each(function() {
                $(this)
                    .attr("src", $(this).attr("data-src"))
                    .removeAttr("data-src");
            });
    });

    var moveHover = function(self) {
        var parent = self
            .parent()
            .parent()
            .parent();

        $hoverEffect
            .css("width", self.width())
            .css(
                "right",
                parent.width() -
                (self.offset().left + self.width()) +
                parent.offset().left
            );
        if ($(this).hasClass("is-fmcg")) {
            $hoverEffect.addClass("is-fmcg");
        } else {
            $hoverEffect.removeClass("is-fmcg");
        }
        $hoverEffect.css("transform", "scaleX(1)");
    };

    var removeHover = function() {
        $hoverEffect.css("transform", "scaleX(0)");
    };

    var handlerHover = function() {
        clearTimeout(this.closeTimer);
        var self = $(this);

        this.timer = setTimeout(function() {
            $("body").click();
            $naviOverlay.addClass("is-active");
            self.addClass("can-show-menu");
            self.siblings(".js-navi-new-list-category").addClass("can-show-menu");
            self.find(".js-navi-new-list-category").addClass("can-show-menu");
            mainJs.openCategories = true;
            var id = self.find(".c-adplacement__item").data("id");

            if (id && sentBanners.indexOf(id) < 0) {
                snt("dkBannerViewed", {
                    bannerId: id,
                    created_at: Date.now()
                });
                sentBanners.push(id);
            }
            $(".js-search-results").removeClass("is-active");
        }, 200);
        if (self.hasClass("js-navi-new-list-category")) {
            moveHover.call(this, self);
        }
    };
    var handlerOut = function() {
        clearTimeout(this.timer);
        var self = this;

        this.closeTimer = setTimeout(function() {
            if ($(".js-search-results").hasClass("is-active")) return;
            $(self).hasClass("js-navi-new-list-categories") ?
                $naviOverlay.removeClass("is-active") :
                "";
            $(self)
                .find(".js-navi-new-list-category")
                .removeClass("can-show-menu");
            $(self).hasClass("can-show-menu") ?
                $(self).removeClass("can-show-menu") :
                "";
            mainJs.openCategories = false;
        }, 200);
        removeHover();
    };

    // $('.js-navi-list-promotion-item').hover(function () {
    //     moveHover.call(this, $(this));
    // }, removeHover);

    var $w = $(window),
        lastY = $w.scrollTop();

    $(window).scroll(function() {
        var currentPosition = $w.scrollTop();

        if (!mainJs.openCategories) {
            return (lastY = currentPosition);
        }
        if (currentPosition - lastY < -5) {
            var e = jQuery.Event("mouseout");

            $newCategories.trigger(e);

            $newCategoryItem.trigger(e);
        }
        lastY = currentPosition;
    });

    $newCategories.hover(handlerHover, handlerOut);
    $newCategoryItem.hover(handlerHover, handlerOut);
    allCategoriesButton.hover(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $naviOverlay.removeClass("is-active");
    });
    $overlay.hover(function() {
        if (!$(this).is(".is-active")) return true;
    });

    $(".js-expert-article-button").on("click", function(e) {
        var $this = $(this),
            $article = $this.closest(".js-expert-article");

        if ($article.hasClass("is-active")) {
            $article.removeClass("is-active");
        } else {
            $article.addClass("is-active");
        }

        e.preventDefault();

        window.dispatchEvent(new Event("scroll"));
    });

    var $deliveryLabels = $(".js-delivery-label");

    $deliveryLabels.click(function() {
        var $this = $(this);

        if ($this.hasClass("is-read-only")) {
            return;
        }

        $deliveryLabels.removeClass("is-selected");
        $this.addClass("is-selected");
    });

    $deliveryLabels.each(function() {
        var $this = $(this);
        var $radio = $this.find('input[type="radio"]');

        if ($radio.is(":checked")) {
            $this.addClass("is-selected");
        }
    });
};
$(document).ready(function() {
    initCategoryBar();
    initStatic();

});
//more-about
$(document).ready(function() {
    "use strict";
    var descMinHeight = 80;
    var desc = $('.desc');
    var descWrapper = $('.desc-wrapper');

    // show more button if desc too long
    if (desc.height() > descWrapper.height()) {
        $('.about-company  .more-info').show();
    }

    // When clicking more/less button
    $('.about-company  .more-info').click(function() {

        var fullHeight = $('.desc').height();

        if ($(this).hasClass('expand')) {
            // contract
            $('.desc-wrapper').animate({
                'height': descMinHeight
            }, 'slow');
        } else {
            // expand 
            $('.desc-wrapper').css({
                'height': descMinHeight,
                'max-height': 'none'
            }).animate({
                'height': fullHeight
            }, 'slow');
        }

        $(this).toggleClass('expand');
        return false;
    });

});
$('.scrollup').click(function() {
    $("html,body").animate({
        scrollTop: 0
    }, 1000);
    return false;
});

$(document).ready(function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

});
