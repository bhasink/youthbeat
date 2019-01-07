<template>
  <!--------------------------------------------------------------
  Navigation section
  ---------------------------------------------------------------->

  <header>

    <nav class="" id="main-nav">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
                    <span>
                        <a href="" class="logo-wrapper">
                            <img src="img/logo.png"  class="logo" alt="">
                        </a>
                    </span>
          </div>
        </div>
      </div>
    </nav>


    <div class="intro-text">
      <div class="row">
        <div class="col-md-12">
          <h1>
            <span>Youth</span>
            <span>Beat</span>
          </h1>

        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="students-section">
            <p>
              YouthBeat is a brand of Sociowash, <br>
              a creative marketing agency based out <br>
              of Delhi YouthBeat aims to connect
            </p>

            <nuxt-link to="students" class="students">Students</nuxt-link>

          </div>

        </div>

        <div class="col-md-6">
          <div class="corporates-section">
            <p>
              YouthBeat is a brand of Sociowash, <br>
              a creative marketing agency based out <br>
              of Delhi YouthBeat aims to connect
            </p>

            <nuxt-link to="corporates" class="corporates">Corporates</nuxt-link>


          </div>

        </div>
      </div>
    </div>



  </header>

</template>


<script>

  export default{

  }

</script>





<style>
  body {
    padding-top: 0px !important;
  }
</style>

<style scoped>
  @import "@/assets/css/intro.css";

</style>


