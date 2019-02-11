<template>

    <!--------------------------------------------------------------
    Navigation section
    ---------------------------------------------------------------->

    <header>

        <nav class="navbar navbar-expand-lg  main-nav " id="main-nav">
            <div class="container">
            <span>
                <nuxt-link to="/" class="logo-wrapper">
                    <img src="~/assets/img/logo.png"  class="logo" alt="">
                </nuxt-link>
            </span>

                <button class="navbar-toggler menu-icon menu-toggle" type="button" >
                    <svg id="menu-bar" style="fill: #000;" width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
                </button>



                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto ">
                        <li class="nav-item ">
                        <nuxt-link class="nav-link active" :to="{name:'students-internships',params:{id:1}}">All Internship <span class="sr-only">(current)</span>
                                        </nuxt-link>
                        </li>

                        <!--<li class="nav-item">-->
                            <!--<a class="nav-link" href="#testimonial">Student speak</a>-->
                        <!--</li>-->

                        <!--<li class="nav-item">-->
                            <!--<a class="nav-link" href="#why" aria-expanded="false">Why YouthBeat</a>-->
                        <!--</li>-->

                        <!--<li class="nav-item">-->
                            <!--<a class="nav-link" href="#clients">Client</a>-->
                        <!--</li>-->

                        <!--<li class="nav-item">-->
                            <!--<a class="nav-link" href="#signup">Contact</a>-->
                        <!--</li>-->

                        <!--&lt;!&ndash;<li class="nav-item">&ndash;&gt;-->
                        <!--&lt;!&ndash;<a class="nav-link" href="#signup">&ndash;&gt;-->
                        <!--&lt;!&ndash;<svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="-197 283.3 24.5 26">&ndash;&gt;-->
                        <!--&lt;!&ndash;<path d="M-188.5 300.3c-4.7 0-8.5-3.8-8.5-8.5s3.8-8.5 8.5-8.5 8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5zm0-16c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5z"/>&ndash;&gt;-->
                        <!--&lt;!&ndash;<path d="M-173.5 307.3c-.1 0-.3 0-.4-.1l-9.3-9.3c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0l9.3 9.3c.2.2.2.5 0 .7 0 0-.2.1-.3.1z"/>&ndash;&gt;-->
                        <!--&lt;!&ndash;</svg>&ndash;&gt;-->
                        <!--&lt;!&ndash;</a>&ndash;&gt;-->
                        <!--&lt;!&ndash;</li>&ndash;&gt;-->
                    </ul>
                </div>

                <!--<div class="visible-xs visible-sm hidden-md hidden-lg">-->
                <div class="mega-menu">
                    <a class="menu-toggle">
                        <svg fill="#fff" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.89 110.9"><g data-name="Layer 2"><path d="M88.89 4.89L84 0 44.53 39.47l-.08-.08-.09.08L4.89 0 0 4.89l39.47 39.47L0 83.83l4.89 4.89 39.47-39.47.09.08.08-.08L84 88.72l4.89-4.89-39.47-39.47L88.89 4.89z" data-name="Layer 16 copy"/></g></svg>
                    </a>
                    <div class="row">
                        <div class="col-md-12">
                            <ul>


                                 <li class="nav-item ">
                                        <nuxt-link class="nav-link active" :to="{name:'students-internships',params:{id:1}}">All Internship <span class="sr-only">(current)</span>
                                        </nuxt-link>
                                  </li>

                                <!--<li class="nav-item">-->
                                    <!--<a class="nav-link" href="#testimonial">Student speak</a>-->
                                <!--</li>-->

                                <!--<li class="nav-item">-->
                                    <!--<a class="nav-link" href="#why" aria-expanded="false">Why YouthBeat</a>-->
                                <!--</li>-->

                                <!--<li class="nav-item">-->
                                    <!--<a class="nav-link" href="#clients">Client</a>-->
                                <!--</li>-->

                                <!--<li class="nav-item">-->
                                    <!--<a class="nav-link" href="#signup">Contact</a>-->
                                <!--</li>-->

                                <!--&lt;!&ndash;<li class="nav-item">&ndash;&gt;-->
                                <!--&lt;!&ndash;<a class="nav-link" href="#signup">&ndash;&gt;-->
                                <!--&lt;!&ndash;<svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="-197 283.3 24.5 26">&ndash;&gt;-->
                                <!--&lt;!&ndash;<path d="M-188.5 300.3c-4.7 0-8.5-3.8-8.5-8.5s3.8-8.5 8.5-8.5 8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5zm0-16c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5z"/>&ndash;&gt;-->
                                <!--&lt;!&ndash;<path d="M-173.5 307.3c-.1 0-.3 0-.4-.1l-9.3-9.3c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0l9.3 9.3c.2.2.2.5 0 .7 0 0-.2.1-.3.1z"/>&ndash;&gt;-->
                                <!--&lt;!&ndash;</svg>&ndash;&gt;-->
                                <!--&lt;!&ndash;</a>&ndash;&gt;-->
                                <!--&lt;!&ndash;</li>&ndash;&gt;-->
                            </ul>

                        </div>
                    </div>
                </div>
                <!--</div>-->


            </div>
        </nav>
    </header>


</template>
