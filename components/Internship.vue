<template>
        <div class="col-md-6 col-12">

            <div class="internship-card">
                <div class="row spacing-block">
                    <div class="col-md-3">
                        <div class="internship-logo-container">
                            <img v-bind:src="`/_nuxt/assets/img/internship/logo/${internship.internship_logo}`"  alt="">

                        </div>
                    </div>

                    <div class="col-md-7">
                        <div class="internship-title">
                            {{internship.title}}
                        </div>
                    </div>

                    <div class="col-md-2 text-right">
                        <a href="#" class="internship-share">
                            <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                <path style="text-indent:0;text-transform:none;block-progression:tb" d="M72 9c-6.604 0-12 5.396-12 12 0 1.617.32 3.183.906 4.594L36.313 41.406C34.15 39.314 31.23 38 28 38c-6.604 0-12 5.396-12 12s5.396 12 12 12c3.253 0 6.209-1.288 8.375-3.406l24.563 15.781A11.854 11.854 0 0 0 60 79c0 6.604 5.396 12 12 12s12-5.396 12-12-5.396-12-12-12c-3.54 0-6.705 1.575-8.906 4.031L38.719 55.375a11.924 11.924 0 0 0 0-10.75l24.343-15.656C65.264 31.439 68.45 33 72 33c6.604 0 12-5.396 12-12S78.604 9 72 9zm0 4c4.442 0 8 3.558 8 8s-3.558 8-8 8a7.97 7.97 0 0 1-8-8c0-4.442 3.558-8 8-8zM28 42c4.442 0 8 3.558 8 8s-3.558 8-8 8a7.97 7.97 0 0 1-8-8c0-4.442 3.558-8 8-8zm44 29c4.442 0 8 3.558 8 8s-3.558 8-8 8a7.97 7.97 0 0 1-8-8c0-4.442 3.558-8 8-8z" overflow="visible" color="#000"/>
                            </svg>
                        </a>
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

                        <nuxt-link class="apply-btn" :to="{name:'students-internships-id',params:{id:internship.id}}">
                            apply Now
                        </nuxt-link>

                    </div>

                </div>


            </div>



        </div>

</template>


<script>
    export default{
       props:['internship']
    }
</script>

<style scoped>
    @import "@/assets/css/city.css";
</style>