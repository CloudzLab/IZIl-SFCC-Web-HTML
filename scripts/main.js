var $jq = jQuery.noConflict(true);

$jq(document).ready(function() {
    /*  slick item with nav start     */
    $jq(".slider-main-banner").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        asNavFor: ".slider-main-banner-caption",
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                dots: false,
                arrows: false
            }
        }]
    });
    $jq(".slider-main-banner-caption").slick({
        slidesToShow: 1,
        //slidesToScroll: 1,
        asNavFor: ".slider-main-banner",
        arrows: false,
        dots: false,
        //focusOnSelect: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: true
            }
        }]
    });
    /*  slick item with nav end     */

    /*  slick item with nav start     */
    $jq(".slider-four-show").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        //centerMode: false,
        //focusOnSelect: true,
        responsive: [
            // {
            //     breakpoint: 9999,
            //     settings: "unslick"
            // },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    // $jq(".nav-cat-tabs .btn").click(function() {
    //     $jq(".slider-four-show").fadeOut("fast");
    //     setTimeout(function() {
    //         $jq(".slider-four-show").slick("refresh");
    //         $jq(".slider-four-show").fadeIn("slow");
    //     }, 200);
    // });

    // var tabEl = document.getElementsByClassName('btn-04')[2];
    // tabEl.addEventListener('show.bs.tab', function(event) {
    //     event.target // newly activated tab
    //     event.relatedTarget // previous active tab
    //     $jq('.slider-four-show').slick("refresh");
    // });

    // selecting the anchor tag which refers to solutions tab (contains slick slider)

    /*  slick four item end    */

    /*  slick three item start     */
    $jq(".slider-three-items").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        //centerMode: false,
        //focusOnSelect: true,

        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                    //centerMode: true
                }
            }
        ]
    });
    /*  slick three item end    */

    /*  slick three item start     */
    $jq(".slider-four-two-item").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        centerMode: false,
        //focusOnSelect: true,

        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
    /*  slick three item end    */

    /*  tabs  */
    // $jq('.nav-tabs .nav-link').click(function(){
    //     //$jq('.slider-four-show').slick();
    //     console.log("i clicked");
    // });

    $jq("[data-fancybox]").fancybox({
        // Options will go here
        buttons: ["close"],
        wheel: false,
        transitionEffect: "slide",
        // thumbs          : false,
        // hash            : false,
        loop: true,
        // keyboard        : true,
        toolbar: false,
        // animationEffect : false,
        // arrows          : true,
        clickContent: false
    });

    // search contanier open
    $jq(".search-trigger-01").click(function() {
        $jq(".search-top-wrapper-01").slideDown();
        setTimeout(function() {
            $jq(".background-opened-overlay").addClass("open");
        }, 300);

        // if($jq('.background-opened-overlay').hasClass('open')){
        if ($jq(".background-opened-overlay").hasClass("open")) {
            //console.log("if has class");
            $jq(".search-top-wrapper-01").slideUp();
            setTimeout(function() {
                $jq(".background-opened-overlay").removeClass("open");
            }, 300);
        }

        $jq(window).mouseup(function(e) {
            var container = $jq(".search-top-wrapper-01");
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $jq(".search-top-wrapper-01").slideUp();

                setTimeout(function() {
                    $jq(".background-opened-overlay").removeClass("open");
                }, 300);
            }
        });

        $jq(document).keyup(function(e) {
            if (e.key === "Escape") {
                // escape key maps to keycode `27`
                $jq(".search-top-wrapper-01").slideUp();

                setTimeout(function() {
                    $jq(".background-opened-overlay").removeClass("open");
                }, 300);
            }
        });

        $jq(".background-opened-overlay").click(function() {
            $jq(".search-top-wrapper-01").slideUp();
            setTimeout(function() {
                $jq(".background-opened-overlay").removeClass("open");
            }, 300);
        });

        $jq(".un-reset-button").click(function() {
            $jq(".search-top-wrapper-01").slideUp();
            setTimeout(function() {
                $jq(".background-opened-overlay").removeClass("open");
            }, 300);
        });

    });

    $jq(".search-trigger-02").click(function() {
        $jq(".search-top-wrapper-02").slideToggle();

        setTimeout(function() {
            $jq(".background-opened-overlay").toggleClass("open");
        }, 300);
    });

    // Main Nav open
    $jq(".nav-btn-toggler").click(function() {
        $jq(".nav-wrapper").animate({
            left: "0px"
        });
        $jq(".nav-wrapper").toggleClass("nav-opened");
        $jq(".nav-opened-overlay").fadeToggle();

        $jq(document).mouseup(function(e) {
            var container = $jq(".nav-wrapper.nav-opened");
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.animate({
                    left: "-110%"
                });
                $jq(".nav-opened-overlay").fadeOut();
                setTimeout(function() {
                    container.removeClass("nav-opened");
                }, 1000);
            }
        });

        $jq(document).keyup(function(e) {
            if (e.key === "Escape") {
                // escape key maps to keycode `27`
                var container = $jq(".nav-wrapper.nav-opened");
                // if the target of the click isn't the container nor a descendant of the container
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    container.animate({
                        left: "-110%"
                    });
                    $jq(".nav-opened-overlay").fadeOut();
                    setTimeout(function() {
                        container.removeClass("nav-opened");
                    }, 1000);
                }
            }
        });
    });

    $jq(".close-nav").click(function() {
        $jq(".nav-wrapper").animate({
            left: "-110%"
        });
        // container.fadeOut();
        $jq(".nav-opened-overlay").fadeOut();
        setTimeout(function() {
            $jq(".nav-wrapper.nav-opened").removeClass("nav-opened");
        }, 1000);
    });

    // footer toggle navs js
    $jq("footer h6").click(function() {
        $jq("footer .col-lg-2").removeClass("open");
        $jq(this)
            .parent()
            .toggleClass("open");
    });

    // checked add class
    $jq(".check-wrapper input:checkbox").change(function() {
        //console.log("iam here");
        if ($jq(this).is(":checked")) {
            $jq(this)
                .parent()
                .toggleClass("selected");
        } else {
            $jq(this)
                .parent()
                .removeClass("selected");
        }
    });



    // hide password btn
    $jq(".btn-pass-icon").click(function() {
        $jq(this).css("display", "none");
        $jq(this)
            .parent()
            .addClass("hide-passwrord");
        $jq(".btn-pass-icon-show").css("display", "block");
        $jq(".hide-passwrord .form-control").attr("type", "password");
    });

    $jq(".btn-pass-icon-show").click(function() {
        console.log("test");
        $jq(this).css("display", "none");
        $jq(this)
            .parent()
            .removeClass("hide-passwrord");
        $jq(".btn-pass-icon").css("display", "block");
        $jq(".form-control").attr("type", "text");
    });

    // add to wishlist
    $jq(".btn-add-to-fav").click(function() {
        $jq(this).toggleClass("added");
    });

    // open filter
    $jq(".btn-more-options").click(function() {
        $jq(".btn-more-options").toggleClass("added");
        $jq(".main-filter-block-wrapper").fadeToggle("slow", function() {
            // Animation complete.
            $jq(".main-filter-block-wrapper").toggleClass("main-filter-opened");
        });

        $jq(document).mouseup(function(e) {
            var container = $jq(".main-filter-block-wrapper");
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                // container.animate({
                //     left: "-110%"
                // });
                // $jq(".nav-opened-overlay").fadeOut();
                // setTimeout(function() {
                //     container.removeClass("nav-opened");
                // }, 1000);
                $jq(".btn-more-options").removeClass("added");
                $jq(".main-filter-block-wrapper").fadeOut("slow", function() {
                    // Animation complete.
                    $jq(".main-filter-block-wrapper").removeClass("main-filter-opened");
                });
            }
        });


        $jq(document).keyup(function(e) {
            if (e.key === "Escape") {
                // escape key maps to keycode `27`
                var container = $jq(".main-filter-block-wrapper.main-filter-opened");
                // if the target of the click isn't the container nor a descendant of the container
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    $jq(".btn-more-options").removeClass("added");
                    $jq(".main-filter-block-wrapper").removeClass("main-filter-opened");
                    container.fadeOut("slow");
                }
            }
        });
    });
    // for filter display
    if ($jq(window).width() <= 768) {
        $jq(".btn-more-options").click(function() {
            $jq(".main-filter-opened .refinement-bar").css("display", "flex");
        });
    }



    $jq(".btn-close-filter").click(function() {
        $jq(".btn-more-options").removeClass("added");
        $jq(".main-filter-block-wrapper").fadeOut("slow");
        $jq(".main-filter-block-wrapper.main-filter-opened").removeClass(
            "main-filter-opened"
        );
    });

    // expand list
    $jq(".btn-view-all").click(function() {
        $jq(this)
            .parent(".filter-block-wrapper")
            .toggleClass("expand");
    });

    // filter by types
    let filters = document.querySelectorAll(".filter-by-type-nav .nav-link");
    let productsCards = document.querySelectorAll(".product-card");
    for (var link of filters) {
        link.addEventListener("click", filterProjects);
    }

    function filterProjects(e) {
        e.preventDefault();

        for (let eachFilter of filters) {
            eachFilter.classList.remove("active");
        }

        let filter = this.dataset.filter;
        for (var project of productsCards) {
            if (filter == "all") {
                project.style.display = "block";
                this.classList.add("active");
            } else if (project.classList.contains(filter)) {
                project.style.display = "block";
                this.classList.add("active");
            } else {
                project.style.display = "none";
            }
        }
    }

    // product accordion
    $jq(".custom-accordion-title").click(function(j) {
        let dropDown = $jq(this)
            .closest(".custom-accordion-card")
            .find(".custom-accordion-panel");
        $jq(this)
            .closest(".custom-accordion")
            .find(".custom-accordion-panel")
            .not(dropDown)
            .slideUp();

        if ($jq(this).hasClass("active")) {
            $jq(this)
                .closest(".custom-accordion")
                .removeClass("card-opended");
        } else {
            $jq(this)
                .closest(".custom-accordion")
                .find(".custom-accordion-title.active")
                .removeClass("active");
            $jq(this).addClass("active");
        }
        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });



    /*  slick item with nav start     */
    $jq(".product-main-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        // fade: true,
        asNavFor: ".product-main-slider-thumb",
        responsive: [{
            breakpoint: 769,
            settings: {
                //slidesToShow: 1.1,
                slidesToShow: 1,
                centerMode: true,
                dots: true,
                arrows: false
            }
        }]
    });
    $jq(".product-main-slider-thumb").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".product-main-slider",
        arrows: true,
        dots: false,
        focusOnSelect: true
    });
    /*  slick item with nav end     */

    /*  bag option 02 end */
    $jq(".btn-bag-option02-trigger").click(function() {
        $jq(".bag-cart-main-wrapper").animate({
            width: "toggle"
        });

        $jq(".nav-opened-overlay").fadeToggle();

        setTimeout(function() {
            $jq(".add-to-bag-option02-wrapper").fadeIn("slow");
            $jq(".add-to-bag-option02-wrapper").toggleClass("option-02-opened");
        }, 500);

        $jq(document).mouseup(function(e) {
            var container = $jq(".add-to-bag-option02-wrapper.option-02-opened");
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $jq(".add-to-bag-option02-wrapper").fadeOut("fast");
                $jq(".add-to-bag-option02-wrapper.option-02-opened").removeClass(
                    "option-02-opened"
                );
                setTimeout(function() {
                    $jq(".bag-cart-main-wrapper").animate({
                        width: "toggle"
                    });
                    $jq(".nav-opened-overlay").fadeOut();
                }, 500);
            }
        });
    });
    $jq(".close-bag-option02").click(function() {
        $jq(".add-to-bag-option02-wrapper").fadeOut("fast");
        //$jq('.add-to-bag-option02-wrapper').animate({ opacity: 0 }, 100);

        setTimeout(function() {
            $jq(".bag-cart-main-wrapper").animate({
                width: "toggle"
            });
            $jq(".nav-opened-overlay").fadeToggle();
        }, 500);
    });
    $jq(".keep-shopping-option02-btn").click(function() {
        $jq(".add-to-bag-option02-wrapper").fadeOut("fast");

        setTimeout(function() {
            $jq(".bag-cart-main-wrapper").animate({
                width: "toggle"
            });
            $jq(".nav-opened-overlay").fadeToggle();
        }, 500);
    });

    // $jq(".view-bag-option02-btn").click(function() {
    //     $jq(".add-to-bag-option02-wrapper").fadeOut("fast");
    //     setTimeout(function() {
    //         $jq(".view-bag-option02-wrapper").fadeIn("fast");
    //     }, 500);
    // });

    // $jq(".close-bag-option03").click(function() {
    //     $jq(".view-bag-option02-wrapper").fadeOut("fast");
    //     setTimeout(function() {
    //         $jq(".bag-cart-main-wrapper").animate({
    //             width: "toggle"
    //         });
    //         $jq(".nav-opened-overlay").fadeToggle();
    //     }, 500);
    // });

    // custom select
    $jq(".custom-select").selectpicker();

    // custom select
    function uniCustomSelectFun() {
        var uniCustomSelect = $jq(".uni-ship-block");

        uniCustomSelect.each(function() {
            var thisCustomSelect = $jq(this),
                options = thisCustomSelect.find("option"),
                firstOptionText = options.first().text();

            var selectedItem = $jq("<div></div>", {
                    class: "selected-item"
                })
                .appendTo(thisCustomSelect)
                .text(firstOptionText);

            var allItems = $jq("<div></div>", {
                class: "all-items all-items-hide"
            }).appendTo(thisCustomSelect);

            options.each(function() {
                var that = $jq(this),
                    optionText = that.text();

                var item = $jq("<div></div>", {
                        class: "item",
                        on: {
                            click: function() {
                                var selectedOptionText = that.text();
                                selectedItem.text(selectedOptionText).removeClass("arrowanim");
                                allItems.addClass("all-items-hide");
                            }
                        }
                    })
                    .appendTo(allItems)
                    .text(optionText);
            });
        });

        var selectedItem = $jq(".selected-item"),
            allItems = $jq(".all-items");

        selectedItem.on("click", function(e) {
            var currentSelectedItem = $jq(this),
                currentAllItems = currentSelectedItem.next(".all-items");

            allItems.not(currentAllItems).addClass("all-items-hide");
            selectedItem.not(currentSelectedItem).removeClass("arrowanim");

            currentAllItems.toggleClass("all-items-hide");
            currentSelectedItem.toggleClass("arrowanim");

            e.stopPropagation();
        });

        $jq(document).on("click", function() {
            var opened = $jq(".all-items:not(.all-items-hide)"),
                index = opened.parent().index();

            uniCustomSelect
                .eq(index)
                .find(".all-items")
                .addClass("all-items-hide");
            uniCustomSelect
                .eq(index)
                .find(".selected-item")
                .removeClass("arrowanim");
        });
    }

    function uniCustomSelectFun02() {
        var uniCustomSelect02 = $jq(".bestsellers-wrapper");

        uniCustomSelect02.each(function() {
            var thisCustomSelect = $jq(this),
                options = thisCustomSelect.find("option"),
                firstOptionText = options.first().text();

            var selectedItem = $jq("<div></div>", {
                    class: "selected-item-02"
                })
                .appendTo(thisCustomSelect)
                .text(firstOptionText);

            var allItems = $jq("<div></div>", {
                class: "all-items-02 all-items-hide-02"
            }).appendTo(thisCustomSelect);

            options.each(function() {
                var that = $jq(this),
                    optionText = that.text();

                var item = $jq("<div></div>", {
                        class: "item-02",
                        on: {
                            click: function() {
                                var selectedOptionText = that.text();
                                selectedItem.text(selectedOptionText).removeClass("arrowanim-02");
                                allItems.addClass("all-items-hide-02");
                            }
                        }
                    })
                    .appendTo(allItems)
                    .text(optionText);
            });
        });

        var selectedItem = $jq(".selected-item-02"),
            allItems = $jq(".all-items-02");

        selectedItem.on("click", function(e) {
            var currentSelectedItem = $jq(this),
                currentAllItems = currentSelectedItem.next(".all-items-02");

            allItems.not(currentAllItems).addClass("all-items-hide-02");
            selectedItem.not(currentSelectedItem).removeClass("arrowanim-02");

            currentAllItems.toggleClass("all-items-hide-02");
            currentSelectedItem.toggleClass("arrowanim-02");

            e.stopPropagation();
        });

        $jq(document).on("click", function() {
            var opened = $jq(".all-items-02:not(.all-items-hide-02)"),
                index = opened.parent().index();

            uniCustomSelect02
                .eq(index)
                .find(".all-items-02")
                .addClass("all-items-hide-02");
            uniCustomSelect02
                .eq(index)
                .find(".selected-item-02")
                .removeClass("arrowanim-02");
        });
    }

    function uniCustomSelectFun03() {
        var uniCustomSelect03 = $jq(".uni-select-global");

        uniCustomSelect03.each(function() {
            var thisCustomSelect = $jq(this),
                options = thisCustomSelect.find("option"),
                firstOptionText = options.first().text();

            var selectedItem = $jq("<div></div>", {
                    class: "selected-item-03"
                })
                .appendTo(thisCustomSelect)
                .text(firstOptionText);

            var allItems = $jq("<div></div>", {
                class: "all-items-03 all-items-hide-03"
            }).appendTo(thisCustomSelect);

            options.each(function() {
                var that = $jq(this),
                    optionText = that.text();

                var item = $jq("<div></div>", {
                        class: "item-03",
                        on: {
                            click: function() {
                                var selectedOptionText = that.text();
                                selectedItem.text(selectedOptionText).removeClass("arrowanim-03");
                                allItems.addClass("all-items-hide-03");
                            }
                        }
                    })
                    .appendTo(allItems)
                    .text(optionText);
            });
        });

        var selectedItem = $jq(".selected-item-03"),
            allItems = $jq(".all-items-03");

        selectedItem.on("click", function(e) {
            var currentSelectedItem = $jq(this),
                currentAllItems = currentSelectedItem.next(".all-items-03");

            allItems.not(currentAllItems).addClass("all-items-hide-03");
            selectedItem.not(currentSelectedItem).removeClass("arrowanim-03");

            currentAllItems.toggleClass("all-items-hide-03");
            currentSelectedItem.toggleClass("arrowanim-03");

            e.stopPropagation();
        });

        $jq(document).on("click", function() {
            var opened = $jq(".all-items-03:not(.all-items-hide-03)"),
                index = opened.parent().index();

            uniCustomSelect03
                .eq(index)
                .find(".all-items-03")
                .addClass("all-items-hide-03");
            uniCustomSelect03
                .eq(index)
                .find(".selected-item-03")
                .removeClass("arrowanim-03");
        });
    }



    uniCustomSelectFun();
    uniCustomSelectFun02();
    uniCustomSelectFun03();

    // bootstrap datepicker
    /*  date picker start    */
    $jq(".datepicker").datepicker({
        format: "mm/yyyy"
            //startDate: '-3d'
    });
    /*  date picker end     */

    // Checkout slide order
    if ($jq(window).width() < 993) {
        $jq(".your-order-wrapper-title").click(function() {
            $jq(this)
                .parent()
                .toggleClass("opened");
            $jq(".your-order-wrapper-content").slideToggle();
            $jq(".order-opened-overlay").fadeToggle();
        });

        // profile accordion
        $jq(".profile-block-title").click(function() {
            console.log("click working");
            $jq(this)
                .parent()
                .toggleClass("opened");
            // $jq(this).parents('.profile-block-collapse').slideToggle();
            //$jq(this).closest('.profile-block-collapse').slideToggle();
        });
    }

    /*  careers three items start     */
    $jq(".slider-three-careers-item").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: false,
        //focusOnSelect: true,

        responsive: [{
            breakpoint: 769,
            settings: {
                //slidesToShow: 2.1,
                slidesToShow: 2,
                //centerMode: true,
                dots: true,
                arrows: false
            }
        }]
    });

    /*  slick three item start     */
    $jq(".slider-one-careers-item").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false,
        focusOnSelect: true
    });

    // custom upload file show file name
    $jq(".custom-file-input-commission").on("change", function() {
        var fileName = $jq(this)
            .val()
            .split("\\")
            .pop();
        $jq(this)
            .siblings(".custom-file-label")
            .addClass("selected")
            .html(fileName);
    });

    /*  careers three items start     */
    $jq(".slider-four-contact-us-item").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: false,
        //focusOnSelect: true,

        responsive: [{
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    //centerMode: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    //slidesToShow: 1.1,
                    slidesToShow: 1,
                    //centerMode: true,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    /*  slick item with nav start     */
    $jq(".slider-two-show").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        centerMode: false,
        //focusOnSelect: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                    arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: true,
                    centerMode: true
                }
            }
        ]
    });

    $jq(".nav-cat-tabs-option-02 .btn").click(function() {
        setTimeout(function() {
            $jq(".slider-two-show").slick("refresh");
        }, 200);
    });

    // option three
    $jq(".slider-three-shop-show").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        centerMode: false,
        //focusOnSelect: true,
        responsive: [{
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $jq(".nav-cat-tabs-option-03 .btn").click(function() {
        setTimeout(function() {
            $jq(".slider-three-shop-show").slick("refresh");
        }, 200);
    });

    /*  hd sd slider     */
    $jq(".slider-hd-sd-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: false,
        //focusOnSelect: true,

        //settings: "unslick",
        responsive: [{
            breakpoint: 680,
            settings: {
                slidesToShow: 3,
                dots: true,
                arrows: false
            }
        }]
    });

    /*  slider-hd-sd-result    */
    $jq(".slider-hd-sd-result").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: true,

        responsive: [{
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    centerMode: false,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    /*  skin diagnosis slider one item start     */
    $jq(".slider-sd-test").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
    });

    //   button next / prev slick skin diagnosis
    $jq(".prev-btn").click(function () {
		$jq(".slider-sd-test").slick("slickPrev");
	});

	$jq(".next-btn").click(function () {
		$jq(".slider-sd-test").slick("slickNext");
	});
	$jq(".prev-btn").addClass("slick-disabled");
	$jq(".slider-sd-test").on("afterChange", function () {
		if ($jq(".slick-prev").hasClass("slick-disabled")) {
			$jq(".prev-btn").addClass("slick-disabled");
		} else {
			$jq(".prev-btn").removeClass("slick-disabled");
		}
		if ($jq(".slick-next").hasClass("slick-disabled")) {
			$jq(".next-btn").addClass("slick-disabled");
		} else {
			$jq(".next-btn").removeClass("slick-disabled");
		}
	});



    /*  main navegation third level start    */
    $jq(".has-drop > .nav-link").click(function(e) {
        e.preventDefault();
        $jq(this)
            .parent(".has-drop")
            .toggleClass("open");
        //$jq(this).parent('.has-drop > .nav').slideToggle();
    });

    /*  make dropdown link work    */
    $jq(".cat-nav-home .dropdown-item .dropdown-toggle").click(function() {
        var location = $jq(this).attr("href");
        window.location.href = location;
        return false;
    });

    // share btn show
    $jq(".btn-share").click(function() {
        $jq(".uni-social-container").slideToggle("slow");
    });

    // stop hover on  dropdown filter
    $jq(".bestsellers-wrapper .dropdown-toggle").hover(function() {
        $jq(
            ".bestsellers-wrapper .btn-bestsellers-dropdown > .dropdown-menu"
        ).removeClass("show");
        $jq(".bestsellers-wrapper .btn-bestsellers-dropdown").removeClass("show");
    });

    $jq(".bestsellers-wrapper .dropdown-toggle").click(function() {
        $jq(
            ".bestsellers-wrapper .btn-bestsellers-dropdown > .dropdown-menu"
        ).toggleClass("force-show");

        $jq(document).mouseup(function(e) {
            var container = $jq(".bestsellers-wrapper");
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $jq(
                    ".bestsellers-wrapper .btn-bestsellers-dropdown > .dropdown-menu"
                ).removeClass("force-show");
            }
        });
        $jq(document).keyup(function(e) {
            if (e.key === "Escape") {
                // escape key maps to keycode `27`
                $jq(
                    ".bestsellers-wrapper .btn-bestsellers-dropdown > .dropdown-menu"
                ).removeClass("force-show");
            }
        });
    });

    // target second word
    // $jq(".page-title h2").each(function() {
    //     var text = $jq(this)
    //         .text()
    //         .split(" ");
    //     var n = 1; // specify which word we're wrapping. remember that the count starts from 0
    //     var t = "span"; // which HTML tag are we going to use as wrapper?

    //     if (n >= text.length) {
    //         return;
    //     }

    //     text[n] = "<" + t + ">" + text[n] + " </" + t + ">";

    //     $jq(this).html(text.join(" "));
    // });

    /*  slick item with nav start     */
    $jq(".product-image-gallery-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        // fade: true,
        asNavFor: ".product-image-gallery-slider-thumb",
        responsive: [{
            breakpoint: 769,
            settings: {
                //slidesToShow: 1.1,
                slidesToShow: 1,
                centerMode: false,
                dots: false,
                arrows: false
            }
        }]
    });
    $jq(".product-image-gallery-slider-thumb").slick({
        rows: 2,
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: ".product-image-gallery-slider",
        arrows: false,
        dots: true,
        focusOnSelect: true
    });
    /*  slick item with nav end     */


    /*  ingredients accordion see more/less start */
    $jq(".see-more-ingredients-btn").click(function() {
        if($jq(".ingredients-accordion-main-block .custom-accordion").hasClass("show-more-height")) {
            $jq(this).text("+See more");
        } else {
            $jq(this).text("-See less");
        }

        $jq(".ingredients-accordion-main-block .custom-accordion").toggleClass("show-more-height");
    });
    /*  // ingredients accordion see more/less end */

    /*  celeberty slider  start     */
    $jq(".three-on-un-mobile-four-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,

        responsive: [{
            breakpoint: 769,

                settings: "unslick"
            // settings: {
                
            //     //slidesToShow: 1.1,
            //     slidesToShow: 2,
            //     //centerMode: true,
            //     dots: true,
            //     arrows: false
            // }
        }]
    });

    /*  celeberty slider  start     */
    $jq(".product-four-two-mobile-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,

        responsive: [{
            breakpoint: 769,
            settings: {
                //slidesToShow: 1.1,
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        }]
    });
    /*  celeberty slider  end    */

    $jq('.review-order').click(function(){
        $jq('.order-review-wrapper').fadeIn('slow');
        $jq('.btn-close-review').click(function(){
            $jq('.order-review-wrapper').fadeOut('slow');
        });
    });

    // // country code
    // var telInput = $jq(".phone-form-control"),
    //     errorMsg = $jq("#error-msg"),
    //     validMsg = $jq("#valid-msg");

    // // initialise plugin
    // telInput.intlTelInput({

    //     allowExtensions: true,
    //     formatOnDisplay: true,
    //     autoFormat: true,
    //     autoHideDialCode: true,
    //     autoPlaceholder: true,
    //     defaultCountry: "auto",
    //     ipinfoToken: "yolo",

    //     nationalMode: false,
    //     numberType: "MOBILE",
    //     //onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
    //     preferredCountries: ['sa', 'ae', 'qa', 'om', 'bh', 'kw', 'ma'],
    //     preventInvalidNumbers: true,
    //     separateDialCode: true,
    //     initialCountry: "ae",
    //     // geoIpLookup: function(callback) {
    //     //     $jq.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
    //     //         var countryCode = (resp && resp.country) ? resp.country : "";
    //     //         callback(countryCode);
    //     //     });
    //     // },
    //     // utilsScript: "scripts/intlTelutils.js"
    // });

    // var reset = function () {
    //     telInput.removeClass("error");
    //     errorMsg.addClass("hide");
    //     validMsg.addClass("hide");
    // };

    // // on blur: validate
    // telInput.blur(function () {
    //     reset();
    //     if ($jq.trim(telInput.val())) {
    //         if (telInput.intlTelInput("isValidNumber")) {
    //             validMsg.removeClass("hide");
    //         } else {
    //             telInput.addClass("error");
    //             errorMsg.removeClass("hide");
    //         }
    //     }
    // });

    // // on keyup / change flag: reset
    // telInput.on("keyup change", reset);

    //load first tab for orderDetails and

    if ($jq(".tab-content").prop("id") == "loadfirsttab") {
        var $firstDiv = $jq(".tab-content")
            .children(".tab-pane")
            .first();
        $firstDiv.addClass("active show");
    }
    if ($jq(".nav-order-list-tab").prop("id") == "loadfirsttabnav") {
        var $firstNavLink = $jq(
            ".nav-order-list-tab > li > a.order-nav-tab-btn"
        ).first();
        $firstNavLink.addClass("active");
    }

    // close price dropdown
    $jq(".selected-item-02").click(function() {
        $jq(document).mouseup(function(e) {
            var container = $jq(".bestsellers-wrapper");
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $jq(".selected-item-02").removeClass("arrowanim-02");
                $jq(".all-items-02").addClass("all-items-hide-02");
            }
        });


        $jq(document).keyup(function(e) {
            if (e.key === "Escape") {
                // escape key maps to keycode `27`
                var container = $jq(".bestsellers-wrapper");
                // if the target of the click isn't the container nor a descendant of the container
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    $jq(".selected-item-02").removeClass("arrowanim-02");
                    $jq(".all-items-02").addClass("all-items-hide-02");
                }
            }
        });
    });

    // login (to be removed after finish)
    // $jq(".btn-login-trigger").click(function(e) {
    //     var loginUrl = $jq(this).attr("data-href");
    //     var querystring = {
    //         eventType: "login"
    //     };
    //     $jq.ajax({
    //         url: loginUrl,
    //         type: "GET",
    //         data: querystring,
    //         dataType: "json",
    //         success: function(data) {
    //             $jq("body").addClass("modal-open");
    //             $jq(".login-backdrop").show();
    //             $jq("#signInModal")
    //                 .show()
    //                 .removeClass("fade");
    //             $jq("#signInModal")
    //                 .empty()
    //                 .append(data.renderedTemplate);

    //             $jq(".btn-close").click(function(e) {
    //                 $jq("#signInModal")
    //                     .hide()
    //                     .addClass("fade");
    //                 $jq("body").removeClass("modal-open");
    //                 $jq(".login-backdrop").hide();
    //             });
    //         }
    //     });
    //     return false;
    // });

    // var SelectList = {
    //     fn: {
    //         prepare: function() {
    //             var select = $jq('<div class="select-box"/>');
    //             var html = '<div class="trigger">Choose</div>';
    //                 html += '<ul class="choices">';

    //             $jq('option', '#shippingCountrydefault').not('option:first').each(function() {
    //                 var $option = $jq(this);
    //                 var value = $option.val();
    //                 var text = $option.text();
    //                 html += '<li data-country-code="' + value + '" value="' + value + '" data-value="' + value + '">' + text + '</li>';
    //             });

    //             html += '</ul>';
    //             select.html(html).insertBefore('#shippingCountrydefault');
    //         },

    //         showHide: function() {
    //             $jq('.trigger', '.select-box').on('click', function() {
    //                 var $trigger = $jq(this);
    //                 var list = $trigger.next();
    //                 if(list.is(':hidden')) {
    //                     list.slideDown(300);
    //                 } else {
    //                     list.slideUp(300);
    //                 }
    //             });
    //         },

    //         view: function() {
    //             $jq('.view').on('click', function() {
    //                 var value = $jq('#shippingCountrydefault').val();
    //                 alert(value);
    //             });
    //         },

    //         select: function() {
    //             var $trigger = $jq('.trigger');
    //             var $select = $jq('#shippingCountrydefault');
    //             var $view = $jq('.view');
    //             $jq('li', '.choices').on('click', function() {
    //                 var $li = $jq(this);
    //                 var value = $li.data('value');
    //                 $trigger.text(value);
    //                 $li.parent().slideUp(300, function() {
    //                     $select.val(value);
    //                     $view.trigger('click');
    //                 });
    //             });
    //         }
    //     },

    //     init: function() {
    //         for(var method in this.fn) {
    //             this.fn[method]();
    //         }

    //     }
    // };

    // $jq(function() {
    //     SelectList.init();
    // });
});
