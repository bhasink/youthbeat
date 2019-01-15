<template>

    <div>
        <!--Include header-->
        <Header/>


        <div class="city-page">

            <!--------------------------------------------------------------
            Hero Section
            ---------------------------------------------------------------->
            <section class="city-banner">
                <div class="city-txt">
                    <h1>All Internships</h1>
                </div>
            </section>


            <!--------------------------------------------------------------
            Internship Display
            ---------------------------------------------------------------->

            <section class="internship-display">
                <div class="container">
                    <div class="row">


                        <!--Include Internship Card-->

                        <internship v-for="(internship,index) in internships" :key="index" :internship="internship"></internship>




                    </div>


                </div>


            </section>


            <div class="container">

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
    import Internship from '@/components/Internship'
    import Pagination from '@/components/Pagination'

    export default{
        data(){
            return{
                internships:[],
                meta:{}
            }
        },
        async asyncData(params){

            let {data} = await params.$axios.get('/internship/?page='+params.route.query.page)
            return {
                internships:data.data,
                meta:data.meta

            }
        },
        components:{
            Header,
            Footer,
            Internship,
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
                    name: "students-internships",
                    query:{
                        page
                    }
                })
            },
            async loadMore(page = this.$route.query.page){
                let {meta,data} = await this.$axios.$get('/internship',{
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