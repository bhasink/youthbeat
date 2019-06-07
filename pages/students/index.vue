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
                            representing brands as a campus ambassador for your college.
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

                                            <svg fill="#f5c634" width="45px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125"><path style="text-indent:0;text-transform:none;block-progression:tb" d="M18 4c-1.859 0-2.962 1.587-3 3v86c0 1.57 1.43 3 3 3h50c.79-.01 1.573-.34 2.125-.906l14-14c.548-.55.869-1.318.875-2.094V7c0-1.57-1.43-3-3-3H18zm3 6h58v66H68c-1.683 0-3.022 1.533-3 3v11H21V10zm29 2c-4.383 0-8 3.617-8 8s3.617 8 8 8 8-3.617 8-8-3.617-8-8-8zm0 16c-3.1 0-6.753.822-9.969 2.812C36.815 32.803 34 36.357 34 41a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3c0-4.643-2.815-8.197-6.031-10.188C56.753 28.822 53.1 28 50 28zm0-10c1.14 0 2 .86 2 2 0 1.14-.86 2-2 2-1.14 0-2-.86-2-2 0-1.14.86-2 2-2zm0 16c1.9 0 4.747.647 6.781 1.906 1.003.621 1.798 1.292 2.344 2.094h-18.25c.546-.802 1.34-1.473 2.344-2.094C45.253 34.647 48.1 34 50 34zM30 48a3 3 0 0 0 0 6h40a3 3 0 0 0 0-6H30zm0 10a3 3 0 0 0 0 6h40a3 3 0 0 0 0-6H30zm0 10a3 3 0 0 0 0 6h40a3 3 0 0 0 0-6H30zm41 14h3.75L71 85.75V82z" overflow="visible" color="#000"></path></svg>

                                            <figcaption>
                                               Build Your Resume
                                            </figcaption>


                                        </figure>
                                    </li>

                                    <li class="wow fadeIn" data-wow-delay="1.1s" >
                                        <figure >
                                            <svg fill="#f5c634" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 112.5"><path d="M44.6 28.9c-2.7-1-4.8-2.5-6.8-4.5-.3 1.2-.6 2.3-.9 3.5 2.7-.6 7.7 1.3 9.9-.8 1.9-1.9.7-6.9.7-9.2-1 .6-2.1 1.2-3.1 1.8 2.2 1.7 4 3.8 5.7 6 .7.8 2.3.8 2.9 0 1.9-2.3 3.9-4.1 6.5-5.6-1-.6-2.1-1.2-3.1-1.8.4 3.6-2.7 8.9-4 12.2-.9 2.5 3.1 3.6 4 1.1 1.4-3.9 4.7-9.1 4.1-13.3-.2-1.5-1.6-2.7-3.1-1.8-2.8 1.7-5.2 3.7-7.3 6.3H53c-2-2.5-4.1-4.7-6.6-6.6-1.3-1-3.2.4-3.1 1.8 0 2.2.6 5.1 0 7.2l1.5-1.5c-2.7.9-6.1-.4-9 .3-1.5.4-2 2.4-.9 3.5 2.5 2.5 5.3 4.3 8.6 5.6 2.5.8 3.5-3.3 1.1-4.2z"></path><path d="M53.8 32.6c2.7 0 2.7-4.2 0-4.2s-2.7 4.2 0 4.2z"></path><path d="M42.7 35.4C33.5 39.6 25.6 48 25.1 58.5c-.5 11.6 11.5 15.3 20.8 15 10.4-.4 22.8-5.9 26-16.5 3.2-10.6-9.8-19.8-17.3-24.5-2.3-1.4-4.4 2.2-2.1 3.6 6 3.8 13.3 8.9 15.4 16.1C71 62.3 55.9 67.7 48.7 69c-9.2 1.7-20.9-1.5-19.2-13.1 1.2-7.8 8.6-13.9 15.3-17 2.4-1.1.3-4.7-2.1-3.5z"></path><path d="M51.7 44.6c-4.6-1.7-11.2 1.6-9.9 7.1.6 2.6 3.9 2.6 5.9 2.9 2.2.3 3.5 0 1.5 2-1.2 1.3-3.3 1.6-4.2-.1-1.2-2.4-4.8-.3-3.6 2.1 3 6 10.4 2.6 12.9-1.9 1.6-2.8-1-5.3-3.6-5.9-1.6-.4-3.3-.4-4.9-.6-.6-.1 1.6-1.7 1.7-1.8 1-.4 2-.2 3 .1 2.6 1 3.7-3 1.2-3.9z"></path><path d="M49.2 45.1c.1-1 0-2.1-.2-3.1-.3-1.1-1.5-1.7-2.6-1.5-1.1.3-1.7 1.5-1.5 2.6 0 .2.1.4.1.5-.1-.5 0 .1 0 .2v1.3c-.1 1.1 1 2.1 2.1 2.1 1.2-.1 1.9-1 2.1-2.1zM46.9 60.2l.3 1.2c0 .2.1.4.1.6-.1-.4 0 .4 0 .5.1 1.1.9 2.1 2.1 2.1 1.1 0 2.2-.9 2.1-2.1-.1-1.2-.3-2.3-.6-3.4s-1.5-1.8-2.6-1.5c-1 .3-1.7 1.5-1.4 2.6zM67.9 34.1c-.9-1.9-1.9-3.9-2.8-5.8l-2.8 2.8c1.8.9 3.7 1.8 5.6 2.6.6.2 1.6 0 2-.5 1.1-1.4 2.3-2.7 3.8-3.8-1.2-.3-2.3-.6-3.5-.9.3 1.6.7 3.1 1 4.7.3 1.6 2.4 2 3.5.9s2.1-1.6 3.6-1.9c-.9-.5-1.7-1-2.6-1.5.5 1.8 0 3.1-1.4 4.3-2.1 1.7.9 4.6 2.9 2.9 2.5-2.1 3.3-5.2 2.5-8.3-.3-1.1-1.4-1.7-2.6-1.5-2.1.4-3.9 1.4-5.4 3 1.2.3 2.3.6 3.5.9-.3-1.6-.7-3.1-1-4.7-.4-1.7-2.4-1.8-3.5-.9-1.4 1.1-2.6 2.4-3.8 3.8.7-.2 1.3-.4 2-.5-1.6-.6-3.1-1.4-4.6-2.1-1.9-1-3.8 1-2.8 2.8.9 1.9 1.9 3.9 2.8 5.8 1.2 2.4 4.8.3 3.6-2.1z"></path><path d="M74.1 42.2c5.2 3.6 11.6 8.2 10 15.5-1.5 7.3-12.6 8.3-18.2 6.7-2.6-.7-3.7 3.3-1.1 4 8.4 2.3 18.1-.1 22.7-7.9 5.3-9.1-4.7-17.5-11.2-22-2.3-1.5-4.3 2.2-2.2 3.7zM66.2 36.7c-1.7.1-3.4.8-4.6 2.1-.8.8-.8 2.1 0 2.9.8.8 2.2.8 2.9 0l.4-.4c-.3.2.3-.2.4-.2.2-.1.2-.1 0 0 .1 0 .2-.1.4-.1.1 0 .3-.1.4-.1-.2 0-.2 0 0 0 1.1-.1 2.1-.9 2.1-2.1.1-1.1-.8-2.2-2-2.1zM29.4 67.5c-7.3 3.6-27.2 4.1-23.6-9.3 1.1-4 5.1-7.5 8.1-10.2 4-3.7 10.4-6.1 14.7-1.5 1.8 2 4.8-1 2.9-2.9-10.4-11.2-27.2 4.3-30.1 15-1.8 6.5 3.5 11.7 8.9 14 6.8 2.9 14.8 1.6 21.2-1.6 2.4-1.1.3-4.7-2.1-3.5z"></path><path d="M18.3 35.2c-2.8-2.3-5.3-4.8-7.5-7.8-.6 1-1.2 2.1-1.8 3.1 2.1.2 3.9.7 5.9 1.4.9.4 1.8-.3 2.3-1 2.1-2.8 2.8-6.4 3.8-9.7h-4c1.3 3.3 2.8 6.4 4.6 9.4.7 1.1 2.3 1.4 3.3.4 1.8-1.8 3.7-3.3 5.8-4.8-1-.8-2-1.6-3.1-2.3-.6 4.2-1.6 8.2-3 12.1-.9 2.5 3.1 3.6 4 1.1 1.5-4 2.5-8 3-12.1.2-1.6-1.4-3.5-3.1-2.3-2.4 1.6-4.5 3.4-6.6 5.4 1.1.1 2.2.3 3.3.4-1.7-2.7-3.1-5.4-4.2-8.4-.7-1.9-3.3-2.1-4 0-.9 2.9-1.6 6.2-3.4 8.7.8-.3 1.6-.6 2.3-1-2.3-.9-4.5-1.4-7-1.6-1.5-.1-2.7 1.9-1.8 3.1 2.4 3.2 5 6.1 8.1 8.6 2.3 1.9 5.2-1 3.1-2.7z"></path><path d="M17.8 40.4c2-1 4.1-1.6 6.3-1.9-.9-1.2-1.9-2.4-2.8-3.7-1.2 1.7-2.8 3-4.5 4.3-1.9 1.5.2 5.1 2.4 4.2 1.9-.8 3.8-1.6 5.7-2.3l-2.4-4.2c-1 1.1-2.1 2.2-3.1 3.3-1.4 1.5-.5 4.4 1.8 4.3 1.2-.1 2.4-.2 3.5-.6 3-1 1.7-5.8-1.3-4.8-.7.2-1.4.4-2.2.4.6 1.4 1.2 2.8 1.8 4.3 1-1.1 2.1-2.2 3.1-3.3 1.6-1.7 0-5.2-2.4-4.2-1.9.8-3.8 1.6-5.7 2.3l2.4 4.2c2-1.6 3.8-3.2 5.3-5.3 1.4-2-.9-4-2.8-3.7-2.6.4-5.1 1.2-7.5 2.4-3 1.5-.5 5.8 2.4 4.3zM44.1 35.2c.5-.7 1.8-.7 2.6-.9.8-.2 2.3-.8 3.1-.6L48.1 32c0 .1.1.2.1.2.1-.6.2-1.3.3-1.9-.2.4-2.1 1.2-2.6 1.6-1 .7-2 1.3-3.1 2-2.3 1.5-.9 5.5 1.9 4.6 2.5-.8 5-1.7 7.5-2.5 3-1 1.7-5.9-1.3-4.8-2.5.8-5 1.7-7.5 2.5.6 1.5 1.3 3 1.9 4.6 1.8-1.2 3.7-2.4 5.5-3.5 1.3-.9 2.8-2.2 2.1-3.9-.3-.8-.8-1.6-1.7-1.7-1.9-.3-3.9.2-5.8.6-1.7.4-3.7.8-4.8 2.2-2 2.2 1.5 5.7 3.5 3.2zM60.8 56.3c.7 1.2-.7 2.4-1.5 3.2-1.1 1.1.6 2.9 1.8 1.8 1.7-1.6 3.2-3.8 1.9-6.2-.8-1.5-3-.2-2.2 1.2zM66.4 39.6c2.5.5 5 .9 7.4 1.5 3.1.7 4.5-4.2 1.3-4.8-2.5-.5-5-1-7.4-1.5-3.1-.6-4.4 4.2-1.3 4.8z"></path></svg>

                                            <figcaption>
                                                Earn Pocket Money While Earning
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

                                                    <svg fill="#f5c634" width="45px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125"><path style="text-indent:0;text-transform:none;block-progression:tb" d="M18 4c-1.859 0-2.962 1.587-3 3v86c0 1.57 1.43 3 3 3h50c.79-.01 1.573-.34 2.125-.906l14-14c.548-.55.869-1.318.875-2.094V7c0-1.57-1.43-3-3-3H18zm3 6h58v66H68c-1.683 0-3.022 1.533-3 3v11H21V10zm29 2c-4.383 0-8 3.617-8 8s3.617 8 8 8 8-3.617 8-8-3.617-8-8-8zm0 16c-3.1 0-6.753.822-9.969 2.812C36.815 32.803 34 36.357 34 41a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3c0-4.643-2.815-8.197-6.031-10.188C56.753 28.822 53.1 28 50 28zm0-10c1.14 0 2 .86 2 2 0 1.14-.86 2-2 2-1.14 0-2-.86-2-2 0-1.14.86-2 2-2zm0 16c1.9 0 4.747.647 6.781 1.906 1.003.621 1.798 1.292 2.344 2.094h-18.25c.546-.802 1.34-1.473 2.344-2.094C45.253 34.647 48.1 34 50 34zM30 48a3 3 0 0 0 0 6h40a3 3 0 0 0 0-6H30zm0 10a3 3 0 0 0 0 6h40a3 3 0 0 0 0-6H30zm0 10a3 3 0 0 0 0 6h40a3 3 0 0 0 0-6H30zm41 14h3.75L71 85.75V82z" overflow="visible" color="#000"></path></svg>

                                                    <figcaption>
                                                        Build Your Resume
                                                    </figcaption>


                                                </figure>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="item">
                                        <ul class="why-youthbeat">
                                            <li class="wow fadeIn" data-wow-delay="1.1s" >
                                                <figure >
                                                    <svg fill="#f5c634" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 112.5"><path d="M44.6 28.9c-2.7-1-4.8-2.5-6.8-4.5-.3 1.2-.6 2.3-.9 3.5 2.7-.6 7.7 1.3 9.9-.8 1.9-1.9.7-6.9.7-9.2-1 .6-2.1 1.2-3.1 1.8 2.2 1.7 4 3.8 5.7 6 .7.8 2.3.8 2.9 0 1.9-2.3 3.9-4.1 6.5-5.6-1-.6-2.1-1.2-3.1-1.8.4 3.6-2.7 8.9-4 12.2-.9 2.5 3.1 3.6 4 1.1 1.4-3.9 4.7-9.1 4.1-13.3-.2-1.5-1.6-2.7-3.1-1.8-2.8 1.7-5.2 3.7-7.3 6.3H53c-2-2.5-4.1-4.7-6.6-6.6-1.3-1-3.2.4-3.1 1.8 0 2.2.6 5.1 0 7.2l1.5-1.5c-2.7.9-6.1-.4-9 .3-1.5.4-2 2.4-.9 3.5 2.5 2.5 5.3 4.3 8.6 5.6 2.5.8 3.5-3.3 1.1-4.2z"></path><path d="M53.8 32.6c2.7 0 2.7-4.2 0-4.2s-2.7 4.2 0 4.2z"></path><path d="M42.7 35.4C33.5 39.6 25.6 48 25.1 58.5c-.5 11.6 11.5 15.3 20.8 15 10.4-.4 22.8-5.9 26-16.5 3.2-10.6-9.8-19.8-17.3-24.5-2.3-1.4-4.4 2.2-2.1 3.6 6 3.8 13.3 8.9 15.4 16.1C71 62.3 55.9 67.7 48.7 69c-9.2 1.7-20.9-1.5-19.2-13.1 1.2-7.8 8.6-13.9 15.3-17 2.4-1.1.3-4.7-2.1-3.5z"></path><path d="M51.7 44.6c-4.6-1.7-11.2 1.6-9.9 7.1.6 2.6 3.9 2.6 5.9 2.9 2.2.3 3.5 0 1.5 2-1.2 1.3-3.3 1.6-4.2-.1-1.2-2.4-4.8-.3-3.6 2.1 3 6 10.4 2.6 12.9-1.9 1.6-2.8-1-5.3-3.6-5.9-1.6-.4-3.3-.4-4.9-.6-.6-.1 1.6-1.7 1.7-1.8 1-.4 2-.2 3 .1 2.6 1 3.7-3 1.2-3.9z"></path><path d="M49.2 45.1c.1-1 0-2.1-.2-3.1-.3-1.1-1.5-1.7-2.6-1.5-1.1.3-1.7 1.5-1.5 2.6 0 .2.1.4.1.5-.1-.5 0 .1 0 .2v1.3c-.1 1.1 1 2.1 2.1 2.1 1.2-.1 1.9-1 2.1-2.1zM46.9 60.2l.3 1.2c0 .2.1.4.1.6-.1-.4 0 .4 0 .5.1 1.1.9 2.1 2.1 2.1 1.1 0 2.2-.9 2.1-2.1-.1-1.2-.3-2.3-.6-3.4s-1.5-1.8-2.6-1.5c-1 .3-1.7 1.5-1.4 2.6zM67.9 34.1c-.9-1.9-1.9-3.9-2.8-5.8l-2.8 2.8c1.8.9 3.7 1.8 5.6 2.6.6.2 1.6 0 2-.5 1.1-1.4 2.3-2.7 3.8-3.8-1.2-.3-2.3-.6-3.5-.9.3 1.6.7 3.1 1 4.7.3 1.6 2.4 2 3.5.9s2.1-1.6 3.6-1.9c-.9-.5-1.7-1-2.6-1.5.5 1.8 0 3.1-1.4 4.3-2.1 1.7.9 4.6 2.9 2.9 2.5-2.1 3.3-5.2 2.5-8.3-.3-1.1-1.4-1.7-2.6-1.5-2.1.4-3.9 1.4-5.4 3 1.2.3 2.3.6 3.5.9-.3-1.6-.7-3.1-1-4.7-.4-1.7-2.4-1.8-3.5-.9-1.4 1.1-2.6 2.4-3.8 3.8.7-.2 1.3-.4 2-.5-1.6-.6-3.1-1.4-4.6-2.1-1.9-1-3.8 1-2.8 2.8.9 1.9 1.9 3.9 2.8 5.8 1.2 2.4 4.8.3 3.6-2.1z"></path><path d="M74.1 42.2c5.2 3.6 11.6 8.2 10 15.5-1.5 7.3-12.6 8.3-18.2 6.7-2.6-.7-3.7 3.3-1.1 4 8.4 2.3 18.1-.1 22.7-7.9 5.3-9.1-4.7-17.5-11.2-22-2.3-1.5-4.3 2.2-2.2 3.7zM66.2 36.7c-1.7.1-3.4.8-4.6 2.1-.8.8-.8 2.1 0 2.9.8.8 2.2.8 2.9 0l.4-.4c-.3.2.3-.2.4-.2.2-.1.2-.1 0 0 .1 0 .2-.1.4-.1.1 0 .3-.1.4-.1-.2 0-.2 0 0 0 1.1-.1 2.1-.9 2.1-2.1.1-1.1-.8-2.2-2-2.1zM29.4 67.5c-7.3 3.6-27.2 4.1-23.6-9.3 1.1-4 5.1-7.5 8.1-10.2 4-3.7 10.4-6.1 14.7-1.5 1.8 2 4.8-1 2.9-2.9-10.4-11.2-27.2 4.3-30.1 15-1.8 6.5 3.5 11.7 8.9 14 6.8 2.9 14.8 1.6 21.2-1.6 2.4-1.1.3-4.7-2.1-3.5z"></path><path d="M18.3 35.2c-2.8-2.3-5.3-4.8-7.5-7.8-.6 1-1.2 2.1-1.8 3.1 2.1.2 3.9.7 5.9 1.4.9.4 1.8-.3 2.3-1 2.1-2.8 2.8-6.4 3.8-9.7h-4c1.3 3.3 2.8 6.4 4.6 9.4.7 1.1 2.3 1.4 3.3.4 1.8-1.8 3.7-3.3 5.8-4.8-1-.8-2-1.6-3.1-2.3-.6 4.2-1.6 8.2-3 12.1-.9 2.5 3.1 3.6 4 1.1 1.5-4 2.5-8 3-12.1.2-1.6-1.4-3.5-3.1-2.3-2.4 1.6-4.5 3.4-6.6 5.4 1.1.1 2.2.3 3.3.4-1.7-2.7-3.1-5.4-4.2-8.4-.7-1.9-3.3-2.1-4 0-.9 2.9-1.6 6.2-3.4 8.7.8-.3 1.6-.6 2.3-1-2.3-.9-4.5-1.4-7-1.6-1.5-.1-2.7 1.9-1.8 3.1 2.4 3.2 5 6.1 8.1 8.6 2.3 1.9 5.2-1 3.1-2.7z"></path><path d="M17.8 40.4c2-1 4.1-1.6 6.3-1.9-.9-1.2-1.9-2.4-2.8-3.7-1.2 1.7-2.8 3-4.5 4.3-1.9 1.5.2 5.1 2.4 4.2 1.9-.8 3.8-1.6 5.7-2.3l-2.4-4.2c-1 1.1-2.1 2.2-3.1 3.3-1.4 1.5-.5 4.4 1.8 4.3 1.2-.1 2.4-.2 3.5-.6 3-1 1.7-5.8-1.3-4.8-.7.2-1.4.4-2.2.4.6 1.4 1.2 2.8 1.8 4.3 1-1.1 2.1-2.2 3.1-3.3 1.6-1.7 0-5.2-2.4-4.2-1.9.8-3.8 1.6-5.7 2.3l2.4 4.2c2-1.6 3.8-3.2 5.3-5.3 1.4-2-.9-4-2.8-3.7-2.6.4-5.1 1.2-7.5 2.4-3 1.5-.5 5.8 2.4 4.3zM44.1 35.2c.5-.7 1.8-.7 2.6-.9.8-.2 2.3-.8 3.1-.6L48.1 32c0 .1.1.2.1.2.1-.6.2-1.3.3-1.9-.2.4-2.1 1.2-2.6 1.6-1 .7-2 1.3-3.1 2-2.3 1.5-.9 5.5 1.9 4.6 2.5-.8 5-1.7 7.5-2.5 3-1 1.7-5.9-1.3-4.8-2.5.8-5 1.7-7.5 2.5.6 1.5 1.3 3 1.9 4.6 1.8-1.2 3.7-2.4 5.5-3.5 1.3-.9 2.8-2.2 2.1-3.9-.3-.8-.8-1.6-1.7-1.7-1.9-.3-3.9.2-5.8.6-1.7.4-3.7.8-4.8 2.2-2 2.2 1.5 5.7 3.5 3.2zM60.8 56.3c.7 1.2-.7 2.4-1.5 3.2-1.1 1.1.6 2.9 1.8 1.8 1.7-1.6 3.2-3.8 1.9-6.2-.8-1.5-3-.2-2.2 1.2zM66.4 39.6c2.5.5 5 .9 7.4 1.5 3.1.7 4.5-4.2 1.3-4.8-2.5-.5-5-1-7.4-1.5-3.1-.6-4.4 4.2-1.3 4.8z"></path></svg>

                                                    <figcaption>
                                                        Earn Pocket Money While Earning
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
                                        <svg width="100px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 640"><path d="M243 1h28c8.7 1.1 17.5 1.9 26.1 3.3 54.5 9 101.6 32.8 140.7 71.9 40 40.1 64.2 88.4 72.3 144.6 1.1 7.4 1.9 14.8 2.9 22.2v28c-.3 1.6-.8 3.2-.9 4.8-2.9 41.1-14.8 79.4-36.7 114.2-42.4 67.3-102.9 107.6-181.7 120-7.5 1.2-15.1 2-22.7 2.9h-28c-1.4-.3-2.9-.8-4.3-.9-43.4-3-83.6-16-119.8-39.9-64.5-42.5-103-102-115-178.5-1.2-7.4-1.9-15-2.9-22.6v-28c.3-1.6.8-3.2.9-4.8 1.9-27.4 7.7-54.1 18.8-79.2C59.6 71.8 126 19.8 220.3 3.9 227.8 2.6 235.4 2 243 1zm-50.2 364.9c-.3 2.2-.4 3.3-.5 4.4-1 12.7-1.3 25.4 3.6 37.4 10.9 26.8 26.6 50.2 48.7 69.2 7 6 17.9 6 24.9 0 20.1-17.2 34.7-38.5 45.8-62.3 4.9-10.5 7.3-21.4 6.9-32.9-.1-5 0-10.1 0-15.4 34.1 12.8 71.3 18 102.1 39.4 75.8-83.5 78.9-219.8-9.3-307.5-88.4-87.9-231.3-86.9-317.6 1.5-87.9 90.1-81.4 225.6-7.6 306 30.8-21.5 68-26.6 103-39.8z"></path><path d="M158.5 211.6c-1-11.3-2.2-22.5-2.8-33.7-.7-13.2.6-26.2 4.7-38.9 5.2-16 15.2-28.3 28.8-37.9 23.6-16.5 50.2-21.5 78.3-19.5 20.8 1.4 40.1 7.4 57.4 19.6 20.8 14.6 31.8 34.9 32.8 60 .7 16.7-.8 33.5-1.4 50.6 9.4 3.1 12.8 7.5 12.5 19.2-.4 13.9-5 26.3-15.1 36.5-1.6 1.6-2.8 3.7-3.7 5.8-8.8 18.4-18.6 36.1-32.6 51.2-15.9 17.2-35.1 28-59 28.4-25.4.5-45.6-10.6-62.3-28.9-13.6-14.9-23.4-32.3-32-50.4-1.3-2.6-3.1-5.1-5-7.3-9.9-11.1-14.6-24.2-13.7-38.9.6-10.2 4.1-13.8 13.1-15.8zm183.4-21.2c-10.8-.9-19.9-1.5-29-2.5-36.6-3.7-69.8-15.1-96.5-41.7-1.2-1.2-3.9-1.8-5.7-1.5-12.9 2.1-21.8 10.3-29.9 20-8.5 10.2-9.2 21.7-7.5 33.9 1.7 12.1 4 24.2 6 36.3-2-3.8-3.5-7.9-6.1-11.3-1.8-2.4-6.2-5.7-7.4-5-2.9 1.7-6.2 5.2-6.6 8.4-1.3 11.2 2.2 21.2 9.6 30 2.9 3.5 5.8 7.2 7.8 11.3 7.4 15.6 15.3 31 25.6 45.1 25.7 35.2 84.6 35 110-.5 10.4-14.6 18.6-30.3 26-46.5 1.2-2.5 2.4-5.3 4.5-7.1 7.2-6.3 10.7-14.4 12.1-23.5.6-3.8.5-8.2-.7-11.8-2.5-7.3-8.1-7.9-12.5-1.6-2.7 3.9-4.7 8.2-6.7 11.9 2.2-14.2 4.6-28.9 7-43.9zM282.1 380.9c-.7 1-1.2 2.3-2.1 3.2-3.7 3.8-7.2 7.9-11.3 11.2-3.1 2.5-3.3 4.5-1.8 7.9 4.8 11 9.2 22.1 13.9 33.1 1.3 2.9 1.5 5.4-1 7.6-6.8 6.4-13.5 12.8-20.4 19-.9.8-3.7 1-4.6.3-7.1-6.2-14-12.6-20.9-19.1-2.4-2.2-2.2-4.8-.9-7.7 4.9-11.3 9.4-22.7 14.3-34 1.2-2.9.6-4.3-1.7-6.2-4.2-3.7-8.1-7.9-12-11.9-2.4-2.4-1.6-4.5.5-6.8 5.2-5.5 10.7-9.9 19-8.4 3.6.6 7.3.4 11 .1 8.4-.8 12.4 5.2 17.1 10.3.5.2.6.7.9 1.4z"></path></svg>
                                        <p>
                                            Youth Marketing internship with Panasonic was a very interesting opportunity for me to connect with an international brand. It helps me understand my next step in career which is very valuable!
                                        </p>

                                        <h3>Akhil Kapoor</h3>
                                        <p>delhi university</p>

                                    </div>

                                    <div class="carousel-item">
                                        <svg width="100px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 640"><path d="M243 1h28c8.7 1.1 17.5 1.9 26.1 3.3 54.5 9 101.6 32.8 140.7 71.9 40 40.1 64.2 88.4 72.3 144.6 1.1 7.4 1.9 14.8 2.9 22.2v28c-.3 1.6-.8 3.2-.9 4.8-2.9 41.1-14.8 79.4-36.7 114.2-42.4 67.3-102.9 107.6-181.7 120-7.5 1.2-15.1 2-22.7 2.9h-28c-1.4-.3-2.9-.8-4.3-.9-43.4-3-83.6-16-119.8-39.9-64.5-42.5-103-102-115-178.5-1.2-7.4-1.9-15-2.9-22.6v-28c.3-1.6.8-3.2.9-4.8 1.9-27.4 7.7-54.1 18.8-79.2C59.6 71.8 126 19.8 220.3 3.9 227.8 2.6 235.4 2 243 1zm-50.2 364.9c-.3 2.2-.4 3.3-.5 4.4-1 12.7-1.3 25.4 3.6 37.4 10.9 26.8 26.6 50.2 48.7 69.2 7 6 17.9 6 24.9 0 20.1-17.2 34.7-38.5 45.8-62.3 4.9-10.5 7.3-21.4 6.9-32.9-.1-5 0-10.1 0-15.4 34.1 12.8 71.3 18 102.1 39.4 75.8-83.5 78.9-219.8-9.3-307.5-88.4-87.9-231.3-86.9-317.6 1.5-87.9 90.1-81.4 225.6-7.6 306 30.8-21.5 68-26.6 103-39.8z"></path><path d="M158.5 211.6c-1-11.3-2.2-22.5-2.8-33.7-.7-13.2.6-26.2 4.7-38.9 5.2-16 15.2-28.3 28.8-37.9 23.6-16.5 50.2-21.5 78.3-19.5 20.8 1.4 40.1 7.4 57.4 19.6 20.8 14.6 31.8 34.9 32.8 60 .7 16.7-.8 33.5-1.4 50.6 9.4 3.1 12.8 7.5 12.5 19.2-.4 13.9-5 26.3-15.1 36.5-1.6 1.6-2.8 3.7-3.7 5.8-8.8 18.4-18.6 36.1-32.6 51.2-15.9 17.2-35.1 28-59 28.4-25.4.5-45.6-10.6-62.3-28.9-13.6-14.9-23.4-32.3-32-50.4-1.3-2.6-3.1-5.1-5-7.3-9.9-11.1-14.6-24.2-13.7-38.9.6-10.2 4.1-13.8 13.1-15.8zm183.4-21.2c-10.8-.9-19.9-1.5-29-2.5-36.6-3.7-69.8-15.1-96.5-41.7-1.2-1.2-3.9-1.8-5.7-1.5-12.9 2.1-21.8 10.3-29.9 20-8.5 10.2-9.2 21.7-7.5 33.9 1.7 12.1 4 24.2 6 36.3-2-3.8-3.5-7.9-6.1-11.3-1.8-2.4-6.2-5.7-7.4-5-2.9 1.7-6.2 5.2-6.6 8.4-1.3 11.2 2.2 21.2 9.6 30 2.9 3.5 5.8 7.2 7.8 11.3 7.4 15.6 15.3 31 25.6 45.1 25.7 35.2 84.6 35 110-.5 10.4-14.6 18.6-30.3 26-46.5 1.2-2.5 2.4-5.3 4.5-7.1 7.2-6.3 10.7-14.4 12.1-23.5.6-3.8.5-8.2-.7-11.8-2.5-7.3-8.1-7.9-12.5-1.6-2.7 3.9-4.7 8.2-6.7 11.9 2.2-14.2 4.6-28.9 7-43.9zM282.1 380.9c-.7 1-1.2 2.3-2.1 3.2-3.7 3.8-7.2 7.9-11.3 11.2-3.1 2.5-3.3 4.5-1.8 7.9 4.8 11 9.2 22.1 13.9 33.1 1.3 2.9 1.5 5.4-1 7.6-6.8 6.4-13.5 12.8-20.4 19-.9.8-3.7 1-4.6.3-7.1-6.2-14-12.6-20.9-19.1-2.4-2.2-2.2-4.8-.9-7.7 4.9-11.3 9.4-22.7 14.3-34 1.2-2.9.6-4.3-1.7-6.2-4.2-3.7-8.1-7.9-12-11.9-2.4-2.4-1.6-4.5.5-6.8 5.2-5.5 10.7-9.9 19-8.4 3.6.6 7.3.4 11 .1 8.4-.8 12.4 5.2 17.1 10.3.5.2.6.7.9 1.4z"></path></svg>
                                        <p>
                                            Interning with Kailash Satyarthi Foundation was ground breaking for me. Working on such an important social cause while collaborating with a Nobel Laureate's organization is something out of a dream! All thanks to Sociowash.
                                        </p>

                                        <h3>Bhavna</h3>
                                        <p>delhi university</p>

                                    </div>


                                    <div class="carousel-item">
                                        <svg width="100px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 640"><path d="M243 1h28c8.7 1.1 17.5 1.9 26.1 3.3 54.5 9 101.6 32.8 140.7 71.9 40 40.1 64.2 88.4 72.3 144.6 1.1 7.4 1.9 14.8 2.9 22.2v28c-.3 1.6-.8 3.2-.9 4.8-2.9 41.1-14.8 79.4-36.7 114.2-42.4 67.3-102.9 107.6-181.7 120-7.5 1.2-15.1 2-22.7 2.9h-28c-1.4-.3-2.9-.8-4.3-.9-43.4-3-83.6-16-119.8-39.9-64.5-42.5-103-102-115-178.5-1.2-7.4-1.9-15-2.9-22.6v-28c.3-1.6.8-3.2.9-4.8 1.9-27.4 7.7-54.1 18.8-79.2C59.6 71.8 126 19.8 220.3 3.9 227.8 2.6 235.4 2 243 1zm-50.2 364.9c-.3 2.2-.4 3.3-.5 4.4-1 12.7-1.3 25.4 3.6 37.4 10.9 26.8 26.6 50.2 48.7 69.2 7 6 17.9 6 24.9 0 20.1-17.2 34.7-38.5 45.8-62.3 4.9-10.5 7.3-21.4 6.9-32.9-.1-5 0-10.1 0-15.4 34.1 12.8 71.3 18 102.1 39.4 75.8-83.5 78.9-219.8-9.3-307.5-88.4-87.9-231.3-86.9-317.6 1.5-87.9 90.1-81.4 225.6-7.6 306 30.8-21.5 68-26.6 103-39.8z"></path><path d="M158.5 211.6c-1-11.3-2.2-22.5-2.8-33.7-.7-13.2.6-26.2 4.7-38.9 5.2-16 15.2-28.3 28.8-37.9 23.6-16.5 50.2-21.5 78.3-19.5 20.8 1.4 40.1 7.4 57.4 19.6 20.8 14.6 31.8 34.9 32.8 60 .7 16.7-.8 33.5-1.4 50.6 9.4 3.1 12.8 7.5 12.5 19.2-.4 13.9-5 26.3-15.1 36.5-1.6 1.6-2.8 3.7-3.7 5.8-8.8 18.4-18.6 36.1-32.6 51.2-15.9 17.2-35.1 28-59 28.4-25.4.5-45.6-10.6-62.3-28.9-13.6-14.9-23.4-32.3-32-50.4-1.3-2.6-3.1-5.1-5-7.3-9.9-11.1-14.6-24.2-13.7-38.9.6-10.2 4.1-13.8 13.1-15.8zm183.4-21.2c-10.8-.9-19.9-1.5-29-2.5-36.6-3.7-69.8-15.1-96.5-41.7-1.2-1.2-3.9-1.8-5.7-1.5-12.9 2.1-21.8 10.3-29.9 20-8.5 10.2-9.2 21.7-7.5 33.9 1.7 12.1 4 24.2 6 36.3-2-3.8-3.5-7.9-6.1-11.3-1.8-2.4-6.2-5.7-7.4-5-2.9 1.7-6.2 5.2-6.6 8.4-1.3 11.2 2.2 21.2 9.6 30 2.9 3.5 5.8 7.2 7.8 11.3 7.4 15.6 15.3 31 25.6 45.1 25.7 35.2 84.6 35 110-.5 10.4-14.6 18.6-30.3 26-46.5 1.2-2.5 2.4-5.3 4.5-7.1 7.2-6.3 10.7-14.4 12.1-23.5.6-3.8.5-8.2-.7-11.8-2.5-7.3-8.1-7.9-12.5-1.6-2.7 3.9-4.7 8.2-6.7 11.9 2.2-14.2 4.6-28.9 7-43.9zM282.1 380.9c-.7 1-1.2 2.3-2.1 3.2-3.7 3.8-7.2 7.9-11.3 11.2-3.1 2.5-3.3 4.5-1.8 7.9 4.8 11 9.2 22.1 13.9 33.1 1.3 2.9 1.5 5.4-1 7.6-6.8 6.4-13.5 12.8-20.4 19-.9.8-3.7 1-4.6.3-7.1-6.2-14-12.6-20.9-19.1-2.4-2.2-2.2-4.8-.9-7.7 4.9-11.3 9.4-22.7 14.3-34 1.2-2.9.6-4.3-1.7-6.2-4.2-3.7-8.1-7.9-12-11.9-2.4-2.4-1.6-4.5.5-6.8 5.2-5.5 10.7-9.9 19-8.4 3.6.6 7.3.4 11 .1 8.4-.8 12.4 5.2 17.1 10.3.5.2.6.7.9 1.4z"></path></svg>
                                        <p>
                                            I was looking to earn some pocket money for myself and Sociowash gave me so many opportunities to do that! What's really great is that while making money I could add so much value to my resume!
                                        </p>

                                        <h3>Suyan Ramesh</h3>
                                        <p>SRM university</p>

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

