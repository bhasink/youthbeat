<template>
  <div class="stick-footer-body">
        <!--Include header-->
        <Header/>


        <div class="city-page stick-footer">

            <!--------------------------------------------------------------
            Hero Section
            ---------------------------------------------------------------->
            <section class="city-banner">
                <div class="city-txt">
                    <h1 class="citytxt"> {{city[0].city_name}} Internships</h1>
                </div>
            </section>


            <!--------------------------------------------------------------
            Internship Display
            ---------------------------------------------------------------->

            <section class="internship-display">
                <div class="container">
                    <div class="row">


                        <!--Include Internship Card-->

                        <!--<internship v-for="(internship,index) in internships" :key="index" :internship="internship"></internship>-->


                        <div class="col-md-6 col-12" v-for="(internship,index) in internships" :key="index">

                            <div class="internship-card">
                                <div class="row spacing-block">
                                    <div class="col-md-3">
                                        <div class="internship-logo-container">
                                            <img v-bind:src="'https://phplaravel-163112-711576.cloudwaysapps.com/internship/images/'+internship.internship_logo"  alt="">

                                        </div>
                                    </div>

                                    <div class="col-md-7">
                                        <div class="internship-title">
                                            {{internship.title}}
                                        </div>
                                    </div>

                                    <div class="col-md-2 text-right">
                                        <div class="dropdown">
                                        <div class="internship-share dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                                <path style="text-indent:0;text-transform:none;block-progression:tb" d="M72 9c-6.604 0-12 5.396-12 12 0 1.617.32 3.183.906 4.594L36.313 41.406C34.15 39.314 31.23 38 28 38c-6.604 0-12 5.396-12 12s5.396 12 12 12c3.253 0 6.209-1.288 8.375-3.406l24.563 15.781A11.854 11.854 0 0 0 60 79c0 6.604 5.396 12 12 12s12-5.396 12-12-5.396-12-12-12c-3.54 0-6.705 1.575-8.906 4.031L38.719 55.375a11.924 11.924 0 0 0 0-10.75l24.343-15.656C65.264 31.439 68.45 33 72 33c6.604 0 12-5.396 12-12S78.604 9 72 9zm0 4c4.442 0 8 3.558 8 8s-3.558 8-8 8a7.97 7.97 0 0 1-8-8c0-4.442 3.558-8 8-8zM28 42c4.442 0 8 3.558 8 8s-3.558 8-8 8a7.97 7.97 0 0 1-8-8c0-4.442 3.558-8 8-8zm44 29c4.442 0 8 3.558 8 8s-3.558 8-8 8a7.97 7.97 0 0 1-8-8c0-4.442 3.558-8 8-8z" overflow="visible" color="#000"/>
                                            </svg>
                                        </div>


                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">
                                                <svg width="7px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512"><path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"/></svg>&nbsp;&nbsp;Facebook
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                <svg width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>&nbsp;&nbsp;instagram
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                <svg width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430.1 411"><path d="M430.1 252v159h-92.2V262.6c0-37.3-13.3-62.7-46.7-62.7-25.5 0-40.6 17.1-47.3 33.7-2.4 5.9-3.1 14.2-3.1 22.5V411h-92.2s1.2-251.3 0-277.3h92.2V173l-.6.9h.6v-.9c12.3-18.9 34.1-45.8 83.1-45.8 60.7 0 106.2 39.6 106.2 124.8zM52.2 0C20.6 0 0 20.7 0 47.9c0 26.6 20 47.9 51 47.9h.6c32.2 0 52.2-21.3 52.2-47.9C103.1 20.7 83.7 0 52.2 0zM5.5 411h92.2V133.7H5.5V411z"></path></svg>&nbsp;&nbsp;linkedin
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                <svg width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>&nbsp;&nbsp;Twitter
                                            </a>
                                        </div>
                                    </div>
                                    </div>

                                </div>

                                <div class="row spacing-block">
                                    <div class="col-md-auto col-6">
                                        <div class="internship-points" style="text-transform: capitalize;">
                                            <svg width="17px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.6 12.3"><path d="M12.7 1.5H9.6V1c0-.6-.5-1-1-1H6.1c-.6 0-1 .5-1 1v.5H1.9c-1 0-1.9.9-1.9 1.6v7c0 1.3.8 2.3 1.9 2.3h10.8c1.1 0 1.9-.9 1.9-2.3v-7c0-.7-.8-1.6-1.9-1.6zM5.6 1c0-.3.2-.5.5-.5h2.4c.3.1.5.3.5.5v.5H5.6V1zm-5 2.1c0-.3.6-1 1.3-1h10.8c.8 0 1.3.6 1.3 1v2.6c0 .3-.3.6-.6.6H8.2v-.4c0-.3-.2-.6-.5-.6h-.2c-.3 0-.5.3-.5.6v.3H1.2c-.4 0-.6-.2-.6-.6V3.1zm7.2 2.8V7c0 .1-.1.2-.2.3-.2 0-.3-.1-.3-.3V5.9c0-.1.1-.2.2-.3.2.1.3.2.3.3zm4.9 5.9H1.9c-.8 0-1.3-.7-1.3-1.7V6.6c.2.1.4.2.6.2H7V7c0 .3.2.6.5.6h.2c.3 0 .5-.3.5-.6v-.2h5.3c.2 0 .4-.1.6-.2V10c0 1.1-.6 1.8-1.4 1.8z"/>
                                            </svg>&nbsp;&nbsp;

                                            {{internship.category}}

                                        </div>
                                    </div>

                                    <div class="col-md-auto col-6">
                                        <div class="internship-points">
                                            <svg width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.4 15.6"><path d="M5.2 0C2.3 0 0 2.2 0 5.4c0 1.1.3 1.9.8 2.8l4.1 7.2c.1.2.4.3.5.2.1 0 .1-.1.2-.2l4.1-7.2c.5-.9.8-1.7.8-2.8C10.4 2.2 8.1 0 5.2 0zm0 .8c2.4 0 4.4 1.8 4.4 4.6 0 1-.2 1.6-.7 2.4l-3.7 6.6-3.7-6.6C1 7 .8 6.4.8 5.4.8 2.6 2.8.8 5.2.8zm0 1.6c-1.5 0-2.8 1.3-2.8 2.8S3.7 8 5.2 8 8 6.7 8 5.2 6.7 2.4 5.2 2.4zm0 .8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
                                            </svg>&nbsp;&nbsp;

                                            {{internship.location}}

                                        </div>
                                    </div>

                                    <div class="col-md-auto col-6">
                                        <div class="internship-points">
                                            <svg width="11px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 13.1"><path d="M.5 1H3.8h-.2c.3 0 .5.1.8.2h-.2c.2.1.4.2.6.4v-.1c.2.1.4.3.5.5v-.1c.2.2.3.4.4.6l-.1-.1c.1.2.2.5.2.8v-.1.8-.1c0 .3-.1.5-.2.8l.1-.1c-.2.1-.3.3-.4.5l.1-.1c-.2.2-.4.4-.6.5l.1-.1c-.2.2-.4.3-.7.4l.1-.1c-.2.2-.4.3-.7.3h.1H.5c-.3 0-.5.2-.5.5v.3c0 .1.1.3.2.4l.1.1.5.5 1.7 1.9 1.8 2.1 1 1.2c.2.2.5.2.7 0 .1-.1.1-.2.2-.4 0-.1-.1-.3-.2-.4l-.8-.9-1.8-2-1.8-2-.7-.9.1.4v-.3l-.5.5h3c.4 0 .7-.1 1.1-.2.4-.2.7-.3 1-.6.6-.5 1-1.1 1.1-1.8.1-.4.1-.8.1-1.1 0-.4-.1-.8-.3-1.2C6.2 1.3 5.6.8 5 .4 4.5.1 3.9 0 3.3 0H.5C.2 0 0 .2 0 .5s.2.5.5.5z"/><path d="M8.5 3h-8c-.3 0-.5.3-.5.6s.2.5.5.5h8c.3 0 .5-.3.5-.5S8.8 3 8.5 3zm-8-2h8c.3 0 .5-.2.5-.5S8.8 0 8.5 0h-8C.2 0 0 .2 0 .5s.2.5.5.5z"/>
                                            </svg>&nbsp;&nbsp;
                                            {{internship.is_paid ===1? 'Paid':'Unpaid'}}
                                        </div>
                                    </div>

                                    <div class="col-md-auto col-6">
                                        <div class="internship-points">
                                            <svg width="15px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.1 17.8"><path d="M3.4 13.3c-.2 0-.3.1-.3.3 0 .2.1.3.3.3h.7v.7c0 .2.1.3.3.3s.3-.1.3-.3v-.7h2.5v.7c0 .2.1.3.3.3.2 0 .3-.1.3-.3v-.7h2.5v.7c0 .2.1.3.3.3.2 0 .3-.1.3-.3v-.7h.7c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H11v-2.5h.7c.2 0 .3-.1.3-.3s-.1-.3-.3-.3H11V7.6h.7c.2 0 .3-.1.3-.3 0-.1-.2-.3-.3-.3H11v-.7c0-.1-.2-.3-.3-.3-.2 0-.3.1-.3.3V7H7.8v-.7c0-.1-.1-.3-.3-.3-.1 0-.3.2-.3.3V7H4.7v-.7c0-.1-.1-.3-.3-.3-.2 0-.3.2-.3.3V7h-.7c-.2 0-.3.2-.3.3 0 .2.1.3.3.3h.7v2.5h-.7c-.2 0-.3.1-.3.3 0 .2.1.3.3.3h.7v2.5l-.7.1zm4.4-5.7h2.6v2.5H7.8V7.6zm0 3.2h2.6v2.5H7.8v-2.5zM4.7 7.6h2.6v2.5H4.7V7.6zm0 3.2h2.6v2.5H4.7v-2.5z"/><path d="M13.2 4.9H1.9c-.2 0-.3.1-.3.3v10.5c0 .2.1.3.3.3h11.3c.2 0 .3-.1.3-.3V5.2c0-.2-.2-.3-.3-.3zm-.3 10.5H2.2V5.5h10.7v9.9z"/><path d="M13.5 1.8H12V.3c0-.2-.1-.3-.3-.3h-1.3c-.2 0-.3.1-.3.3v1.5H4.9V.3c0-.2-.1-.3-.3-.3H3.3c-.1 0-.3.1-.3.3v1.5H1.6C.7 1.8 0 2.5 0 3.4v12.8c0 .9.7 1.6 1.6 1.6h11.9c.9 0 1.6-.7 1.6-1.6V3.4c0-.9-.7-1.6-1.6-1.6zm-2.8.3V.6h.7v2.3h-.7v-.8zM3.6.6h.7v2.3h-.7V.6zm10.9 15.6c0 .6-.4 1-1 1H1.6c-.6 0-1-.4-1-1V3.4c0-.6.4-1 1-1H3v.8c0 .2.1.3.3.3h1.3c.2 0 .3-.1.3-.3v-.8h5.2v.8c0 .2.1.3.3.3h1.3c.2 0 .3-.1.3-.3v-.8h1.4c.6 0 1 .4 1 1l.1 12.8z"/>
                                            </svg>&nbsp;&nbsp;
                                            Starts

                                            {{ internship.internship_start_date | moment("Do MMMM YYYY") }}



                                        </div>
                                    </div>

                                </div>

                                <div class="row spacing-block">
                                    <div class="col-6">
                                        <p> Apply by {{internship.internship_deadline | moment("Do MMMM YYYY")}}</p>
                                    </div>

                                    <div class="col-6 text-right">

                                        <!--{{internship}}-->

                                        <nuxt-link class="apply-btn" :to="{name:'students-internships-id',params:{slug:internship.slug,city:internship.city_id,id:internship.id}}">
                                            apply Now
                                        </nuxt-link>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                     <div class="no-data" v-if="internships.length == 0">
                          No Internship Found!
                    </div>



                </div>


            </section>


            <div class="container" v-if="internships.length != 0">

                <!--Include pagination-->

                <pagination v-if="meta.current_page" :meta="meta" v-on:pagination:switched="switchPage"></pagination>

            </div>


        </div>

        <!--Include footer-->
        <Footer/>

    </div>


</template>



<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
//    import Internship from '@/components/Internship'
    import Pagination from '@/components/Pagination'

    export default{
        data(){
            return{
                internships:[],
                meta:{},
                city:{},
            }
        },
        async asyncData({$axios,route,redirect,query}){

           let page = query.page;
           let city_name = route.params.city;

           if (page === undefined){
               page = 1;
           }

           let city_check = await $axios.$get('/api/get-city-by-name/'+city_name)

            if(city_check.length === 0){
              return redirect('/404')
            }
            else{

                let {data,meta} = await $axios.$get('/api/get-internship-by-city/'+city_check[0].id+'?page='+page)

                return {
                    internships:data,
                    meta:meta,
                    city:city_check
                }

            }

        },
        components:{
            Header,
            Footer,
//            Internship,
            Pagination
        },
        watch:{
            '$route.query' (query){
                this.loadMore(query.page)
            }
        },
        methods:{
            switchPage(page){
                this.$router.replace({
                    name: "students-internships-city",
                    query:{
                        page
                    }
                })
            },
            async loadMore(page = this.$route.query.page){
                let {meta,data} = await this.$axios.$get('/api/get-internship-by-city/1',{
                    params:{
                        page: page
                    }
                });

                this.meta = meta
                this.internships = data


            },
        }

    }
</script>


<style scoped>
    @import "@/assets/css/city.css";
</style>
