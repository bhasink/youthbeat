<template>

    <div>

        <Header/>


        <!--------------------------------------------------------------
        Hero Section
        ---------------------------------------------------------------->
        <div class="hidden-xs hidden-sm  visible-md visible-lg">
            <section class="hero-section" id="hero-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="hero-text">
                                <div class="elements"></div>
                                <h1>
                                    <span class="wow fadeIn" data-wow-delay="0.1s">Intern with the best</span>
                                    <span class="wow fadeIn" data-wow-delay="0.4s">companies and enhance</span>
                                    <span class="wow fadeIn" data-wow-delay="0.7s">your college experience</span>
                                </h1>

                                <a href="#signup">Register now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>



        <div class="visible-xs visible-sm hidden-md hidden-lg mobile-view">
            <section class="hero-section" id="hero-section-mobile">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">

                        </div>
                    </div>
                </div>
            </section>

            <div class="hero-text">
                <div class="elements"></div>
                <h1>
                    <span class="wow fadeIn" data-wow-delay="0.1s">Intern with the best</span>
                    <span class="wow fadeIn" data-wow-delay="0.4s">companies and enhance</span>
                    <span class="wow fadeIn" data-wow-delay="0.7s">your college experience</span>
                </h1>

                <a href="#signup">Register now</a>
            </div>
        </div>


        <!--------------------------------------------------------------
        Internship Location
        ---------------------------------------------------------------->
        <section class="internship-location">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="title">
                            Internships By <br>
                            Location
                        </h2>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <carousel class="location-internship"  :responsive="{0:{items:1,nav:false, stagePadding:50},1000:{items:4,nav:false, stagePadding:50}}">
                            <div class="item">
                                <nuxt-link class="apply-btn" :to="{name:'students-internships-city',params:{city:'mumbai'}}">
                                    <figure class="wow fadeIn" data-wow-delay="0.2s" >
                                        <img src="~assets/img/locations/delhi.jpg" alt="">
                                        <figcaption>
                                            Mumbai

                                            <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 42">
                                                <path fill="#fff" d="M51.2 19.038l-16-18c-1-1.2-3.1-1.3-4.3-.3-1.2 1.1-1.3 3.1-.2 4.3l11.6 13H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h39.3l-11.6 13c-1.1 1.2-1 3.2.2 4.3 1.2 1.1 3.2 1 4.2-.3l16-18c1.2-1.5 1.1-2.8.1-4z"/>
                                            </svg>

                                        </figcaption>
                                    </figure>
                                </nuxt-link>

                            </div>

                            <div class="item">
                                <nuxt-link class="apply-btn" :to="{name:'students-internships-city',params:{city:'delhi-ncr'}}">
                                    <figure class="wow fadeIn" data-wow-delay="0.5s" >
                                        <img src="~assets/img/locations/delhi.jpg" alt="">
                                        <figcaption>
                                            New Delhi

                                            <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 42">
                                                <path fill="#fff" d="M51.2 19.038l-16-18c-1-1.2-3.1-1.3-4.3-.3-1.2 1.1-1.3 3.1-.2 4.3l11.6 13H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h39.3l-11.6 13c-1.1 1.2-1 3.2.2 4.3 1.2 1.1 3.2 1 4.2-.3l16-18c1.2-1.5 1.1-2.8.1-4z"/>
                                            </svg>

                                        </figcaption>
                                    </figure>
                                </nuxt-link>
                            </div>

                            <div class="item">
                                <nuxt-link class="apply-btn" :to="{name:'students-internships-city',params:{city:'bengaluru'}}">
                                    <figure class="wow fadeIn" data-wow-delay="0.8s" >
                                        <img src="~assets/img/locations/delhi.jpg" alt="">
                                        <figcaption>
                                            Benaluru

                                            <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 42">
                                                <path fill="#fff" d="M51.2 19.038l-16-18c-1-1.2-3.1-1.3-4.3-.3-1.2 1.1-1.3 3.1-.2 4.3l11.6 13H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h39.3l-11.6 13c-1.1 1.2-1 3.2.2 4.3 1.2 1.1 3.2 1 4.2-.3l16-18c1.2-1.5 1.1-2.8.1-4z"/>
                                            </svg>

                                        </figcaption>
                                    </figure>
                                </nuxt-link>
                            </div>

                            <div class="item">
                                <nuxt-link class="apply-btn" :to="{name:'students-internships-city',params:{city:'hyderabad'}}">
                                    <figure class="wow fadeIn" data-wow-delay="1.1s" >
                                        <img src="~assets/img/locations/delhi.jpg" alt="">
                                        <figcaption>
                                            New Delhi

                                            <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 42">
                                                <path fill="#fff" d="M51.2 19.038l-16-18c-1-1.2-3.1-1.3-4.3-.3-1.2 1.1-1.3 3.1-.2 4.3l11.6 13H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h39.3l-11.6 13c-1.1 1.2-1 3.2.2 4.3 1.2 1.1 3.2 1 4.2-.3l16-18c1.2-1.5 1.1-2.8.1-4z"/>
                                            </svg>

                                        </figcaption>
                                    </figure>
                                </nuxt-link>
                            </div>

                            <div class="item">
                                <nuxt-link class="apply-btn" :to="{name:'students-internships-city',params:{city:'ahmedabad'}}">
                                    <figure class="wow fadeIn" data-wow-delay="1.4s" >
                                        <img src="~assets/img/locations/delhi.jpg" alt="">
                                        <figcaption>
                                            Ahmedabad

                                            <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 42">
                                                <path fill="#fff" d="M51.2 19.038l-16-18c-1-1.2-3.1-1.3-4.3-.3-1.2 1.1-1.3 3.1-.2 4.3l11.6 13H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h39.3l-11.6 13c-1.1 1.2-1 3.2.2 4.3 1.2 1.1 3.2 1 4.2-.3l16-18c1.2-1.5 1.1-2.8.1-4z"/>
                                            </svg>

                                        </figcaption>
                                    </figure>
                                </nuxt-link>
                            </div>

                            <div class="item">
                                <nuxt-link class="apply-btn" :to="{name:'students-internships-city',params:{city:'chandigarh'}}">
                                    <figure class="wow fadeIn" data-wow-delay="1.7s" >
                                        <img src="~assets/img/locations/delhi.jpg" alt="">
                                        <figcaption>
                                            Chandigarh

                                            <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 42">
                                                <path fill="#fff" d="M51.2 19.038l-16-18c-1-1.2-3.1-1.3-4.3-.3-1.2 1.1-1.3 3.1-.2 4.3l11.6 13H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h39.3l-11.6 13c-1.1 1.2-1 3.2.2 4.3 1.2 1.1 3.2 1 4.2-.3l16-18c1.2-1.5 1.1-2.8.1-4z"/>
                                            </svg>

                                        </figcaption>
                                    </figure>
                                </nuxt-link>
                            </div>

                            <div class="item">
                                <nuxt-link class="apply-btn" :to="{name:'students-internships-city',params:{city:'chennai'}}">
                                    <figure class="wow fadeIn" data-wow-delay="1.7s" >
                                        <img src="~assets/img/locations/delhi.jpg" alt="">
                                        <figcaption>
                                            Chennai

                                            <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 42">
                                                <path fill="#fff" d="M51.2 19.038l-16-18c-1-1.2-3.1-1.3-4.3-.3-1.2 1.1-1.3 3.1-.2 4.3l11.6 13H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h39.3l-11.6 13c-1.1 1.2-1 3.2.2 4.3 1.2 1.1 3.2 1 4.2-.3l16-18c1.2-1.5 1.1-2.8.1-4z"/>
                                            </svg>

                                        </figcaption>
                                    </figure>
                                </nuxt-link>
                            </div>


                            <div class="item">
                                <nuxt-link class="apply-btn" :to="{name:'students-internships-city',params:{city:'pune'}}">
                                    <figure class="wow fadeIn" data-wow-delay="1.7s" >
                                        <img src="~assets/img/locations/delhi.jpg" alt="">
                                        <figcaption>
                                            Pune

                                            <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 42">
                                                <path fill="#fff" d="M51.2 19.038l-16-18c-1-1.2-3.1-1.3-4.3-.3-1.2 1.1-1.3 3.1-.2 4.3l11.6 13H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h39.3l-11.6 13c-1.1 1.2-1 3.2.2 4.3 1.2 1.1 3.2 1 4.2-.3l16-18c1.2-1.5 1.1-2.8.1-4z"/>
                                            </svg>

                                        </figcaption>
                                    </figure>
                                </nuxt-link>
                            </div>

                        </carousel>
                    </div>
                </div>
            </div>
        </section>



        <!--------------------------------------------------------------
      About
      ---------------------------------------------------------------->
        <section class="about-us">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="title">
                            About Youthbeat
                        </h2>

                        <p>
                            Channelize your creativity by associating with the biggest brands in the country by
                            representing brands as a campus ambassador for your college. Channelize your creativity by
                            associating with the biggest brands in the country by representing brands
                            as a campus ambassador for your college.
                        </p>

                        <!--<a href="#" class="youth-btn">Read More</a>-->

                    </div>
                </div>
            </div>
        </section>



        <!--------------------------------------------------------------
Featured Internships
---------------------------------------------------------------->
        <div class="row">
            <div class="col-lg-12">
                <h2 class="title">
                    Featured Internships
                </h2>
            </div>
        </div>

        <section class="featured-internship">
            <div class="featured-bg">
                <div class="container">

                    <div class="row">
                        <div class="col-lg-12" v-if="featured_internships.length != 0">

                            <carousel class="featured-slider" :responsive="{0:{items:1,nav:false, stagePadding:50},1000:{items:4,nav:false, stagePadding:50}}">
                                <div class="item" v-for="(internships,index) in featured_internships" :key="index">
                                    <nuxt-link class="apply-btn" :to="{name:'students-internships-city-slug-id',params:{city:internships.city_id,slug:internships.slug,id:internships.id}}">
                                    <figure class="wow fadeIn" data-wow-delay="0.2s" >
                                        <img :src="'https://phplaravel-163112-711576.cloudwaysapps.com/internship/images/'+internships.internship_logo" width="150" height="100" alt="">
                                    </figure>

                                    </nuxt-link>
                                </div>

                            </carousel>
                        </div>
                    </div>

                    <div class="row" id="why">
                        <div class="col-lg-12">
                            <h2 class="title">Why Youthbeat</h2>

                            <div class="hidden-xs hidden-sm visible-md visible-lg">
                                <ul class="why-youthbeat">
                                    <li  class="wow fadeIn" data-wow-delay="0.2s" >
                                        <figure>

                                            <svg fill="#f5c634" width="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60.2 86">
                                                <defs>
                                                    <path id="a" d="M0 0h60.2v86H0z"/>
                                                </defs>
                                                <clipPath id="b">
                                                    <use xlink:href="#a" overflow="visible"/>
                                                </clipPath>
                                                <path d="M30.1 0C13.5 0 0 13.4 0 30.1c0 16.6 13.5 30.1 30.1 30.1s30.1-13.5 30.1-30.1S46.7 0 30.1 0m0 13.2l5.9 11 11.8 1.7-9.3 8.4L41.1 47l-11-5.9-11 5.9 2.5-12.7-9.3-8.4 11.8-1.7 6-11zm-18.7 43V86l18.7-11.4L48.8 86V56.2c-5.3 3.8-11.7 6-18.7 6s-13.4-2.3-18.7-6z" clip-path="url(#b)"/>
                                            </svg>

                                            <figcaption>
                                                Opportunity to work
                                                with brands during
                                                college years
                                            </figcaption>


                                        </figure>
                                    </li>

                                    <li  class="wow fadeIn" data-wow-delay="0.5s" >
                                        <figure>
                                            <svg fill="#f5c634" width="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 77.2 100">
                                                <defs>
                                                    <path id="a" d="M0 0h77.2v100H0z"/>
                                                </defs>
                                                <clipPath id="b">
                                                    <use xlink:href="#a" overflow="visible"/>
                                                </clipPath>
                                                <path d="M73.5 0H3.7C1.7 0 0 1.7 0 3.7v92.6c0 2 1.7 3.7 3.7 3.7h69.8c2 0 3.7-1.7 3.7-3.7V3.7c0-2-1.7-3.7-3.7-3.7M8.8 20.3c0-6 4.8-10.8 10.8-10.8 6 0 10.8 4.8 10.8 10.8 0 4.4-2.6 8.1-6.4 9.8V40l-4.4-2.3-4.4 2.3v-9.8c-3.8-1.7-6.4-5.5-6.4-9.9m56.1 60.1H12.3v-3.5h52.6v3.5zm0-14.3H12.3v-3.5h52.6v3.5zm0-14.4H12.3v-3.5h52.6v3.5zm0-14.3H36.4v-3.5h28.5v3.5zm0-14.4H36.4v-3.5h28.5V23z" clip-path="url(#b)"/>
                                            </svg>

                                            <figcaption>
                                                Certificate from
                                                sociowash
                                            </figcaption>

                                        </figure>
                                    </li>

                                    <li class="wow fadeIn" data-wow-delay="0.8s" >
                                        <figure >

                                            <svg fill="#f5c634" width="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60.2 86">
                                                <defs>
                                                    <path id="a" d="M0 0h60.2v86H0z"/>
                                                </defs>
                                                <clipPath id="b">
                                                    <use xlink:href="#a" overflow="visible"/>
                                                </clipPath>
                                                <path d="M30.1 0C13.5 0 0 13.4 0 30.1c0 16.6 13.5 30.1 30.1 30.1s30.1-13.5 30.1-30.1S46.7 0 30.1 0m0 13.2l5.9 11 11.8 1.7-9.3 8.4L41.1 47l-11-5.9-11 5.9 2.5-12.7-9.3-8.4 11.8-1.7 6-11zm-18.7 43V86l18.7-11.4L48.8 86V56.2c-5.3 3.8-11.7 6-18.7 6s-13.4-2.3-18.7-6z" clip-path="url(#b)"/>
                                            </svg>

                                            <figcaption>
                                                Opportunity to work
                                                with brands during
                                                college years
                                            </figcaption>


                                        </figure>
                                    </li>

                                    <li class="wow fadeIn" data-wow-delay="1.1s" >
                                        <figure >
                                            <svg fill="#f5c634" width="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 77.2 100">
                                                <defs>
                                                    <path id="a" d="M0 0h77.2v100H0z"/>
                                                </defs>
                                                <clipPath id="b">
                                                    <use xlink:href="#a" overflow="visible"/>
                                                </clipPath>
                                                <path d="M73.5 0H3.7C1.7 0 0 1.7 0 3.7v92.6c0 2 1.7 3.7 3.7 3.7h69.8c2 0 3.7-1.7 3.7-3.7V3.7c0-2-1.7-3.7-3.7-3.7M8.8 20.3c0-6 4.8-10.8 10.8-10.8 6 0 10.8 4.8 10.8 10.8 0 4.4-2.6 8.1-6.4 9.8V40l-4.4-2.3-4.4 2.3v-9.8c-3.8-1.7-6.4-5.5-6.4-9.9m56.1 60.1H12.3v-3.5h52.6v3.5zm0-14.3H12.3v-3.5h52.6v3.5zm0-14.4H12.3v-3.5h52.6v3.5zm0-14.3H36.4v-3.5h28.5v3.5zm0-14.4H36.4v-3.5h28.5V23z" clip-path="url(#b)"/>
                                            </svg>

                                            <figcaption>
                                                Certificate from
                                                sociowash
                                            </figcaption>

                                        </figure>
                                    </li>


                                </ul>
                            </div>

                            <div class="visible-xs visible-sm hidden-md hidden-lg">
                                <carousel class="why-youthbeat-slider" :responsive="{0:{items:1,nav:false, stagePadding:50},1000:{items:4,nav:false, stagePadding:50}}">
                                    <div class="item">
                                        <ul class="why-youthbeat">
                                            <li  class="wow fadeIn" data-wow-delay="0.2s" >
                                                <figure>

                                                    <svg fill="#f5c634" width="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60.2 86">
                                                        <defs>
                                                            <path id="a" d="M0 0h60.2v86H0z"/>
                                                        </defs>
                                                        <clipPath id="b">
                                                            <use xlink:href="#a" overflow="visible"/>
                                                        </clipPath>
                                                        <path d="M30.1 0C13.5 0 0 13.4 0 30.1c0 16.6 13.5 30.1 30.1 30.1s30.1-13.5 30.1-30.1S46.7 0 30.1 0m0 13.2l5.9 11 11.8 1.7-9.3 8.4L41.1 47l-11-5.9-11 5.9 2.5-12.7-9.3-8.4 11.8-1.7 6-11zm-18.7 43V86l18.7-11.4L48.8 86V56.2c-5.3 3.8-11.7 6-18.7 6s-13.4-2.3-18.7-6z" clip-path="url(#b)"/>
                                                    </svg>

                                                    <figcaption>
                                                        Opportunity to work
                                                        with brands during
                                                        college years
                                                    </figcaption>


                                                </figure>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="item">
                                        <ul class="why-youthbeat">
                                            <li  class="wow fadeIn" data-wow-delay="0.5s" >
                                                <figure>
                                                    <svg fill="#f5c634" width="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 77.2 100">
                                                        <defs>
                                                            <path id="a" d="M0 0h77.2v100H0z"/>
                                                        </defs>
                                                        <clipPath id="b">
                                                            <use xlink:href="#a" overflow="visible"/>
                                                        </clipPath>
                                                        <path d="M73.5 0H3.7C1.7 0 0 1.7 0 3.7v92.6c0 2 1.7 3.7 3.7 3.7h69.8c2 0 3.7-1.7 3.7-3.7V3.7c0-2-1.7-3.7-3.7-3.7M8.8 20.3c0-6 4.8-10.8 10.8-10.8 6 0 10.8 4.8 10.8 10.8 0 4.4-2.6 8.1-6.4 9.8V40l-4.4-2.3-4.4 2.3v-9.8c-3.8-1.7-6.4-5.5-6.4-9.9m56.1 60.1H12.3v-3.5h52.6v3.5zm0-14.3H12.3v-3.5h52.6v3.5zm0-14.4H12.3v-3.5h52.6v3.5zm0-14.3H36.4v-3.5h28.5v3.5zm0-14.4H36.4v-3.5h28.5V23z" clip-path="url(#b)"/>
                                                    </svg>

                                                    <figcaption>
                                                        Certificate from
                                                        sociowash
                                                    </figcaption>

                                                </figure>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="item">
                                        <ul class="why-youthbeat">
                                            <li class="wow fadeIn" data-wow-delay="0.8s" >
                                                <figure >

                                                    <svg fill="#f5c634" width="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60.2 86">
                                                        <defs>
                                                            <path id="a" d="M0 0h60.2v86H0z"/>
                                                        </defs>
                                                        <clipPath id="b">
                                                            <use xlink:href="#a" overflow="visible"/>
                                                        </clipPath>
                                                        <path d="M30.1 0C13.5 0 0 13.4 0 30.1c0 16.6 13.5 30.1 30.1 30.1s30.1-13.5 30.1-30.1S46.7 0 30.1 0m0 13.2l5.9 11 11.8 1.7-9.3 8.4L41.1 47l-11-5.9-11 5.9 2.5-12.7-9.3-8.4 11.8-1.7 6-11zm-18.7 43V86l18.7-11.4L48.8 86V56.2c-5.3 3.8-11.7 6-18.7 6s-13.4-2.3-18.7-6z" clip-path="url(#b)"/>
                                                    </svg>

                                                    <figcaption>
                                                        Opportunity to work
                                                        with brands during
                                                        college years
                                                    </figcaption>


                                                </figure>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="item">
                                        <ul class="why-youthbeat">
                                            <li class="wow fadeIn" data-wow-delay="1.1s" >
                                                <figure >
                                                    <svg fill="#f5c634" width="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 77.2 100">
                                                        <defs>
                                                            <path id="a" d="M0 0h77.2v100H0z"/>
                                                        </defs>
                                                        <clipPath id="b">
                                                            <use xlink:href="#a" overflow="visible"/>
                                                        </clipPath>
                                                        <path d="M73.5 0H3.7C1.7 0 0 1.7 0 3.7v92.6c0 2 1.7 3.7 3.7 3.7h69.8c2 0 3.7-1.7 3.7-3.7V3.7c0-2-1.7-3.7-3.7-3.7M8.8 20.3c0-6 4.8-10.8 10.8-10.8 6 0 10.8 4.8 10.8 10.8 0 4.4-2.6 8.1-6.4 9.8V40l-4.4-2.3-4.4 2.3v-9.8c-3.8-1.7-6.4-5.5-6.4-9.9m56.1 60.1H12.3v-3.5h52.6v3.5zm0-14.3H12.3v-3.5h52.6v3.5zm0-14.4H12.3v-3.5h52.6v3.5zm0-14.3H36.4v-3.5h28.5v3.5zm0-14.4H36.4v-3.5h28.5V23z" clip-path="url(#b)"/>
                                                    </svg>

                                                    <figcaption>
                                                        Certificate from
                                                        sociowash
                                                    </figcaption>

                                                </figure>
                                            </li>
                                        </ul>
                                    </div>
                                </carousel>

                            </div>
                        </div>

                    </div>

                    <div class="stats">
                        <div class="row">
                            <div class="col-lg-12">
                                <ul class="statistics">
                                    <li>

                                        <p> <span class='numscroller' data-min='1' data-max='1500' data-delay='1' data-increment='5'>1500+</span>
                                            <span>colleges</span>
                                        </p>
                                    </li>

                                    <li>
                                        <p> <span class='numscroller' data-min='1' data-max='100000' data-delay='1' data-increment='500'>100,000+</span>
                                            <span>
                                     college students
                                  </span>
                                        </p>
                                    </li>

                                    <li>
                                        <p> <span class='numscroller' data-min='17' data-max='22' data-delay='1' data-increment='1'>17-22</span>
                                            <span>Student age group</span>
                                        </p>
                                    </li>

                                    <li>
                                        <p> <span class='numscroller' data-min='1' data-max='5000' data-delay='1' data-increment='10'>5000+</span>
                                            <span>
                                      Internship experience delivered
                                  </span>
                                        </p>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>


        <!--------------------------------------------------------------
        Featured internship Section
        ---------------------------------------------------------------->

        <!--<section class="featured-internship wow fadeInUp">-->
        <!--<div class="container">-->
        <!--<div class="row">-->
        <!--<div class="col-md-12">-->
        <!--<h2 class="title">Featured Internships</h2>-->


        <!--<div class="featured-internship-card">-->
        <!--<div class="row">-->
        <!--<div class="col-md-8">-->
        <!--<ul class="internship-container" v-if="featured_internships.length != 0">-->

        <!--<li v-for="(internships,index) in featured_internships" :key="index">-->

        <!--<nuxt-link class="apply-btn" :to="{name:'students-internships-city-slug-id',params:{city:internships.city_id,slug:internships.slug,id:internships.id}}">-->
        <!--<img :src="'https://phplaravel-163112-711576.cloudwaysapps.com/internship/images/'+internships.internship_logo" width="150" height="100" alt="">-->
        <!--</nuxt-link>-->
        <!--</li>-->

        <!--</ul>-->
        <!--</div>-->

        <!--<div class="col-md-4">-->
        <!--<div class="view-container">-->
        <!--<nuxt-link :to="{name:'students-internships',params:{id:1}}">View All-->
        <!--</nuxt-link>-->

        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->

        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</section>-->


        <!--------------------------------------------------------------
       Testimonials
       ---------------------------------------------------------------->
        <section class="testimonials" id="testimonials">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="title">What students say <br>
                            about us?</h2>

                        <div class="bd-example">
                            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="img/testimonials/1.jpg" alt="">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eum in ipsum magni nulla obcaecati, omnis quam quisquam repellendus tenetur! Ad exercitationem facilis fuga incidunt maxime nobis nostrum optio velit.
                                        </p>

                                        <h3>MOHD MOZAMMIL</h3>
                                        <p>delhi university</p>

                                    </div>

                                    <div class="carousel-item">
                                        <img src="img/testimonials/1.jpg" alt="">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eum in ipsum magni nulla obcaecati, omnis quam quisquam repellendus tenetur! Ad exercitationem facilis fuga incidunt maxime nobis nostrum optio velit.
                                        </p>

                                        <h3>MOHD MOZAMMIL</h3>
                                        <p>delhi university</p>

                                    </div>


                                    <div class="carousel-item">
                                        <img src="img/testimonials/1.jpg" alt="">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eum in ipsum magni nulla obcaecati, omnis quam quisquam repellendus tenetur! Ad exercitationem facilis fuga incidunt maxime nobis nostrum optio velit.
                                        </p>

                                        <h3>MOHD MOZAMMIL</h3>
                                        <p>delhi university</p>

                                    </div>
                                </div>
                                <!--<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">-->
                                <!--<span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
                                <!--<span class="sr-only">Previous</span>-->
                                <!--</a>-->
                                <!--<a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">-->
                                <!--<span class="carousel-control-next-icon" aria-hidden="true"></span>-->
                                <!--<span class="sr-only">Next</span>-->
                                <!--</a>-->
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>


        <!--------------------------------------------------------------
Signup
---------------------------------------------------------------->
        <section class="signup " id="signup">
            <div class="container"  v-bind:style="{display:changeDisplay}">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h2 class="title">
                            signup
                        </h2>

                        <p>Fill this form to keep yourself updated about the best  <br>
                            internships in the market.
                            We will buzz you whenever we think something <br>
                            interesting has come up.</p>
                    </div>
                </div> <!--row ends here-->

                <div class="form-container">
                    <div class="row">
                        <div class="col-md-12">
                            <form @submit.prevent="submit" id="youth-form">
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="input-field">
                                                <label for="name">Name</label>
                                                <input id="name" v-model.trim="form.name" type="text" class="form-control" placeholder="Name*">

                                                <span v-if="errors.name" class="error">{{errors.name[0]}}</span>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="input-field">
                                                <label for="email">Email</label>
                                                <input id="email" v-model.trim="form.email" type="text" class="form-control" placeholder="Email*">
                                                <span v-if="errors.email" class="error">{{errors.email[0]}}</span>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="input-field">
                                                <label for="college">College</label>
                                                <input id="college" v-model.trim="form.college" type="text" class="form-control" placeholder="College*">
                                                <span v-if="errors.college" class="error">{{errors.college[0]}}</span>
                                            </div>
                                        </div>


                                    </div> <!--row ends here-->
                                </div>  <!--form-group ends here-->

                                <div class="form-group">
                                    <div class="row">

                                        <div class="col-md-4">
                                            <div class="input-field">
                                                <label for="y-year">City <span>
                                                    <img width="15px" src="~assets/img/angle-down.svg" alt=""></span>
                                                </label>
                                                <select id="w-year" v-model.trim="form.year" class="form-control">
                                                    <option value="">Which year are you in</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </select>
                                                <span v-if="errors.year" class="error">{{errors.year[0]}}</span>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="input-field">
                                                <label for="city">City <span><img width="15px" src="~assets/img/angle-down.svg" alt=""></span></label>
                                                <select id="city" v-model.trim="form.city" class="form-control">
                                                    <option value="">Select City</option>
                                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                    <option value="Assam">Assam</option>
                                                    <option value="Bihar">Bihar</option>
                                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                                    <option value="Chandigarh">Chandigarh</option>
                                                    <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                                    <option value="Daman and Diu">Daman and Diu</option>
                                                    <option value="Delhi">Delhi</option>
                                                    <option value="Goa">Goa</option>
                                                    <option value="Gujarat">Gujarat</option>
                                                    <option value="Haryana">Haryana</option>
                                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                                    <option value="Jharkhand">Jharkhand</option>
                                                    <option value="Karnataka">Karnataka</option>
                                                    <option value="Kerala">Kerala</option>
                                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                    <option value="Maharashtra">Maharashtra</option>
                                                    <option value="Manipur">Manipur</option>
                                                    <option value="Meghalaya">Meghalaya</option>
                                                    <option value="Mizoram">Mizoram</option>
                                                    <option value="Nagaland">Nagaland</option>
                                                    <option value="Orissa">Orissa</option>
                                                    <option value="Punjab">Punjab</option>
                                                    <option value="Pondicherry">Pondicherry</option>
                                                    <option value="Rajasthan">Rajasthan</option>
                                                    <option value="Sikkim">Sikkim</option>
                                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                                    <option value="Tripura">Tripura</option>
                                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                    <option value="Uttarakhand">Uttarakhand</option>
                                                    <option value="West Bengal">West Bengal</option>
                                                </select>
                                                <span v-if="errors.city" class="error">{{errors.city[0]}}</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="input-field">

                                                <label for="mobile_number">Mobile Number</label>

                                                <input id="mobile_number" v-model.trim="form.phone_no" type="number" class="form-control" placeholder="Phone Number*">
                                                <span v-if="errors.phone_no" class="error">{{errors.phone_no[0]}}</span>
                                            </div>
                                        </div>

                                    </div> <!--row ends here-->
                                </div>  <!--form-group ends here-->



                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="checkbox">
                                                <label>
                                                    <input v-model.trim="form.is_permitted_for_future_communication" id="check" type="checkbox" value="check">  By filling this form, I permit youthbeat. in

                                                    to send me communication about internships in future.
                                                </label>
                                            </div>
                                        </div>

                                        <div class="col-lg-6 text-center">
                                            <input id="submit_btn" type="submit" value="Send" class="youth-btn w-100" >
                                        </div>
                                    </div> <!--row ends here-->
                                </div>  <!--form-group ends here-->


                            </form>
                        </div>
                    </div> <!--row ends here-->
                </div>

            </div> <!--container ends here-->

            <div class="changeDisplaySuccess"  v-bind:style="{display:changeDisplaySuccess}">
                <div class="internship-card">

                    <div class="check_mark">
                        <div class="sa-icon sa-success animate">
                            <span class="sa-line sa-tip animateSuccessTip"></span>
                            <span class="sa-line sa-long animateSuccessLong"></span>
                            <div class="sa-placeholder"></div>
                            <div class="sa-fix"></div>
                        </div>
                    </div>


                    <h1>Thank You. </h1>
                    <p>We will get back to you later.</p>
                </div>
            </div>



        </section>



        <!--------------------------------------------------------------
        Sign up Form Section
        ---------------------------------------------------------------->


        <Footer/>

    </div>



</template>





<script>

    import Header from '@/components/Header'
    import Footer from '@/components/Footer'

    export default{
        head() {
            return {
                link: [
                    { type: 'text/css', rel: 'stylesheet', href: '/css/main.css' },
                ],
            };
        },
        data(){
            return{
                featured_internships:[],
                form:{
                    name: '',
                    email: '',
                    college: '',
                    phone_no: '',
                    city: '',
                    year:'',
                    is_permitted_for_future_communication: '',
                },
                changeDisplay:'',
                changeDisplaySuccess:'',
                Internship_logo_url:''
            }
        },
        async asyncData({$axios,context}){

            let {data} = await $axios.$get('/api/get-featured-internship')
            return {
                featured_internships:data,
            }
        },
        methods:{
            async submit(){
                await this.$axios.$post('/api/student-register',this.form)
                    .then((response) =>{
                        console.log(response),
                            this.changeDisplay = "none",
                            this.changeDisplaySuccess = "block"
                    })

            }
        },


        components:{
            Header,
            Footer
        },
    }

</script>

