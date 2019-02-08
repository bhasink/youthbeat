<template>
    <div>


        <!--Header include-->

        <Header/>

        <div class="internship-detail-page">

            <!--------------------------------------------------------------
            Hero Section
            ---------------------------------------------------------------->
            <section class="internship-detail-banner">

            </section>

            <!--------------------------------------------------------------
            Internship Display
            ---------------------------------------------------------------->

            <section class="internship-detail">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="internship-card">
                                <div class="row spacing-block">
                                    <div class="col-md-2">
                                        <div class="internship-logo-container">
                                            <img :src="'https://phplaravel-163112-711576.cloudwaysapps.com/internship/images/'+projectDetails.internship_logo"  alt="">
                                        </div>
                                    </div>

                                    <div class="col-md-10">

                                        <div class="internship-title">
                                            {{projectDetails.title}}
                                        </div>

                                        <div class="internship-points">
                                            <svg width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.4 15.6"><path d="M5.2 0C2.3 0 0 2.2 0 5.4c0 1.1.3 1.9.8 2.8l4.1 7.2c.1.2.4.3.5.2.1 0 .1-.1.2-.2l4.1-7.2c.5-.9.8-1.7.8-2.8C10.4 2.2 8.1 0 5.2 0zm0 .8c2.4 0 4.4 1.8 4.4 4.6 0 1-.2 1.6-.7 2.4l-3.7 6.6-3.7-6.6C1 7 .8 6.4.8 5.4.8 2.6 2.8.8 5.2.8zm0 1.6c-1.5 0-2.8 1.3-2.8 2.8S3.7 8 5.2 8 8 6.7 8 5.2 6.7 2.4 5.2 2.4zm0 .8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
                                            </svg>&nbsp;&nbsp;

                                            {{projectDetails.location}}

                                        </div>

                                    </div>

                                </div>

                                <div class="row spacing-block">
                                    <div class="col-md-auto col-6">
                                        <div class="internship-points">
                                            <svg width="17px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.6 12.3"><path d="M12.7 1.5H9.6V1c0-.6-.5-1-1-1H6.1c-.6 0-1 .5-1 1v.5H1.9c-1 0-1.9.9-1.9 1.6v7c0 1.3.8 2.3 1.9 2.3h10.8c1.1 0 1.9-.9 1.9-2.3v-7c0-.7-.8-1.6-1.9-1.6zM5.6 1c0-.3.2-.5.5-.5h2.4c.3.1.5.3.5.5v.5H5.6V1zm-5 2.1c0-.3.6-1 1.3-1h10.8c.8 0 1.3.6 1.3 1v2.6c0 .3-.3.6-.6.6H8.2v-.4c0-.3-.2-.6-.5-.6h-.2c-.3 0-.5.3-.5.6v.3H1.2c-.4 0-.6-.2-.6-.6V3.1zm7.2 2.8V7c0 .1-.1.2-.2.3-.2 0-.3-.1-.3-.3V5.9c0-.1.1-.2.2-.3.2.1.3.2.3.3zm4.9 5.9H1.9c-.8 0-1.3-.7-1.3-1.7V6.6c.2.1.4.2.6.2H7V7c0 .3.2.6.5.6h.2c.3 0 .5-.3.5-.6v-.2h5.3c.2 0 .4-.1.6-.2V10c0 1.1-.6 1.8-1.4 1.8z"/>
                                            </svg>&nbsp;&nbsp;

                                            {{projectDetails.category}}

                                        </div>
                                    </div>

                                    <div class="col-md-auto col-6">
                                        <div class="internship-points">
                                            <svg width="11px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 13.1"><path d="M.5 1H3.8h-.2c.3 0 .5.1.8.2h-.2c.2.1.4.2.6.4v-.1c.2.1.4.3.5.5v-.1c.2.2.3.4.4.6l-.1-.1c.1.2.2.5.2.8v-.1.8-.1c0 .3-.1.5-.2.8l.1-.1c-.2.1-.3.3-.4.5l.1-.1c-.2.2-.4.4-.6.5l.1-.1c-.2.2-.4.3-.7.4l.1-.1c-.2.2-.4.3-.7.3h.1H.5c-.3 0-.5.2-.5.5v.3c0 .1.1.3.2.4l.1.1.5.5 1.7 1.9 1.8 2.1 1 1.2c.2.2.5.2.7 0 .1-.1.1-.2.2-.4 0-.1-.1-.3-.2-.4l-.8-.9-1.8-2-1.8-2-.7-.9.1.4v-.3l-.5.5h3c.4 0 .7-.1 1.1-.2.4-.2.7-.3 1-.6.6-.5 1-1.1 1.1-1.8.1-.4.1-.8.1-1.1 0-.4-.1-.8-.3-1.2C6.2 1.3 5.6.8 5 .4 4.5.1 3.9 0 3.3 0H.5C.2 0 0 .2 0 .5s.2.5.5.5z"/><path d="M8.5 3h-8c-.3 0-.5.3-.5.6s.2.5.5.5h8c.3 0 .5-.3.5-.5S8.8 3 8.5 3zm-8-2h8c.3 0 .5-.2.5-.5S8.8 0 8.5 0h-8C.2 0 0 .2 0 .5s.2.5.5.5z"/>
                                            </svg>&nbsp;&nbsp;
                                            {{projectDetails.is_paid ===1? 'Paid':'Unpaid'}}&nbsp;&nbsp;{{projectDetails.any_stipend}}/-
                                        </div>
                                    </div>

                                    <div class="col-md-auto col-6">
                                        <div class="internship-points">
                                            <svg width="15px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.1 17.8"><path d="M3.4 13.3c-.2 0-.3.1-.3.3 0 .2.1.3.3.3h.7v.7c0 .2.1.3.3.3s.3-.1.3-.3v-.7h2.5v.7c0 .2.1.3.3.3.2 0 .3-.1.3-.3v-.7h2.5v.7c0 .2.1.3.3.3.2 0 .3-.1.3-.3v-.7h.7c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H11v-2.5h.7c.2 0 .3-.1.3-.3s-.1-.3-.3-.3H11V7.6h.7c.2 0 .3-.1.3-.3 0-.1-.2-.3-.3-.3H11v-.7c0-.1-.2-.3-.3-.3-.2 0-.3.1-.3.3V7H7.8v-.7c0-.1-.1-.3-.3-.3-.1 0-.3.2-.3.3V7H4.7v-.7c0-.1-.1-.3-.3-.3-.2 0-.3.2-.3.3V7h-.7c-.2 0-.3.2-.3.3 0 .2.1.3.3.3h.7v2.5h-.7c-.2 0-.3.1-.3.3 0 .2.1.3.3.3h.7v2.5l-.7.1zm4.4-5.7h2.6v2.5H7.8V7.6zm0 3.2h2.6v2.5H7.8v-2.5zM4.7 7.6h2.6v2.5H4.7V7.6zm0 3.2h2.6v2.5H4.7v-2.5z"/><path d="M13.2 4.9H1.9c-.2 0-.3.1-.3.3v10.5c0 .2.1.3.3.3h11.3c.2 0 .3-.1.3-.3V5.2c0-.2-.2-.3-.3-.3zm-.3 10.5H2.2V5.5h10.7v9.9z"/><path d="M13.5 1.8H12V.3c0-.2-.1-.3-.3-.3h-1.3c-.2 0-.3.1-.3.3v1.5H4.9V.3c0-.2-.1-.3-.3-.3H3.3c-.1 0-.3.1-.3.3v1.5H1.6C.7 1.8 0 2.5 0 3.4v12.8c0 .9.7 1.6 1.6 1.6h11.9c.9 0 1.6-.7 1.6-1.6V3.4c0-.9-.7-1.6-1.6-1.6zm-2.8.3V.6h.7v2.3h-.7v-.8zM3.6.6h.7v2.3h-.7V.6zm10.9 15.6c0 .6-.4 1-1 1H1.6c-.6 0-1-.4-1-1V3.4c0-.6.4-1 1-1H3v.8c0 .2.1.3.3.3h1.3c.2 0 .3-.1.3-.3v-.8h5.2v.8c0 .2.1.3.3.3h1.3c.2 0 .3-.1.3-.3v-.8h1.4c.6 0 1 .4 1 1l.1 12.8z"/>
                                            </svg>&nbsp;&nbsp;
                                            Starts      {{ projectDetails.internship_start_date | moment("Do MMMM YYYY") }}

                                        </div>

                                    </div>

                                    <div class="col-md-auto col-6">
                                        <div class="internship-points">
                                            <svg width="15px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.1 17.8"><path d="M3.4 13.3c-.2 0-.3.1-.3.3 0 .2.1.3.3.3h.7v.7c0 .2.1.3.3.3s.3-.1.3-.3v-.7h2.5v.7c0 .2.1.3.3.3.2 0 .3-.1.3-.3v-.7h2.5v.7c0 .2.1.3.3.3.2 0 .3-.1.3-.3v-.7h.7c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H11v-2.5h.7c.2 0 .3-.1.3-.3s-.1-.3-.3-.3H11V7.6h.7c.2 0 .3-.1.3-.3 0-.1-.2-.3-.3-.3H11v-.7c0-.1-.2-.3-.3-.3-.2 0-.3.1-.3.3V7H7.8v-.7c0-.1-.1-.3-.3-.3-.1 0-.3.2-.3.3V7H4.7v-.7c0-.1-.1-.3-.3-.3-.2 0-.3.2-.3.3V7h-.7c-.2 0-.3.2-.3.3 0 .2.1.3.3.3h.7v2.5h-.7c-.2 0-.3.1-.3.3 0 .2.1.3.3.3h.7v2.5l-.7.1zm4.4-5.7h2.6v2.5H7.8V7.6zm0 3.2h2.6v2.5H7.8v-2.5zM4.7 7.6h2.6v2.5H4.7V7.6zm0 3.2h2.6v2.5H4.7v-2.5z"/><path d="M13.2 4.9H1.9c-.2 0-.3.1-.3.3v10.5c0 .2.1.3.3.3h11.3c.2 0 .3-.1.3-.3V5.2c0-.2-.2-.3-.3-.3zm-.3 10.5H2.2V5.5h10.7v9.9z"/><path d="M13.5 1.8H12V.3c0-.2-.1-.3-.3-.3h-1.3c-.2 0-.3.1-.3.3v1.5H4.9V.3c0-.2-.1-.3-.3-.3H3.3c-.1 0-.3.1-.3.3v1.5H1.6C.7 1.8 0 2.5 0 3.4v12.8c0 .9.7 1.6 1.6 1.6h11.9c.9 0 1.6-.7 1.6-1.6V3.4c0-.9-.7-1.6-1.6-1.6zm-2.8.3V.6h.7v2.3h-.7v-.8zM3.6.6h.7v2.3h-.7V.6zm10.9 15.6c0 .6-.4 1-1 1H1.6c-.6 0-1-.4-1-1V3.4c0-.6.4-1 1-1H3v.8c0 .2.1.3.3.3h1.3c.2 0 .3-.1.3-.3v-.8h5.2v.8c0 .2.1.3.3.3h1.3c.2 0 .3-.1.3-.3v-.8h1.4c.6 0 1 .4 1 1l.1 12.8z"/>
                                            </svg>&nbsp;&nbsp;
                                            Apply by {{ projectDetails.internship_deadline | moment("Do MMMM YYYY") }}

                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div class="internship-card">
                                <h4>About Tinder</h4>

                                <p v-html="projectDetails.about_brand"></p>

                                <h4>About the Internship:</h4>

                                <p>
                                    Selected intern's day-to-day responsibilities include:
                                </p>

                                <p v-html="projectDetails.about_internship"></p>

                                <h4># of Internships available: {{projectDetails.no_of_internship_available}}</h4>
                                <p> Only those candidates can apply who:</p>

                                <p v-html="projectDetails.internship_criteria"></p>

                                <h4>Perks:</h4>

                                <p v-html="projectDetails.internship_perks"></p>

                            </div>

                            <div class="internship-card">

                                <div class="signup " id="signup">
                                    <div class="container" v-bind:style="{display:formShow}">
                                        <div class="form-container">
                                            <div class="row">
                                                <div class="col-md-12">

                                                    <form id="youth-form" @submit.prevent="submit" class="youth-form">
                                                        <div class="form-group">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <input v-model.trim="form.name" type="text" class="form-control" placeholder="Name*">
                                                                    <span v-if="errors.name" class="error">{{errors.name[0]}}</span>
                                                                </div>

                                                                <div class="col-md-4">
                                                                    <input v-model.trim="form.email" type="text" class="form-control" placeholder="Email*">
                                                                    <span v-if="errors.email" class="error">{{errors.email[0]}}</span>
                                                                </div>

                                                                <div class="col-md-4">
                                                                    <input v-model.trim="form.college" type="text" class="form-control" placeholder="College*">
                                                                    <span v-if="errors.college" class="error">{{errors.college[0]}}</span>
                                                                </div>

                                                            </div> <!--row ends here-->
                                                        </div>  <!--form-group ends here-->

                                                        <div class="form-group">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <select v-model.trim="form.city" class="form-control">
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

                                                                <div class="col-md-4">
                                                                    <input v-model.trim="form.phone_no" type="number" class="form-control" placeholder="Phone Number*">
                                                                    <span v-if="errors.phone_no" class="error">{{errors.phone_no[0]}}</span>
                                                                </div>

                                                                <div class="col-md-4">
                                                                    <select v-model.trim="form.study_year" class="form-control">
                                                                        <option value="">Which year are you in</option>
                                                                        <option value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="3">3</option>
                                                                        <option value="4">4</option>
                                                                    </select>
                                                                    <span v-if="errors.study_year" class="error">{{errors.study_year[0]}}</span>
                                                                </div>

                                                            </div> <!--row ends here-->
                                                        </div>  <!--form-group ends here-->


                                                        <div class="form-group">
                                                            <div class="row">


                                                                <div class="col-md-4">
                                                                    <input v-model.trim="form.course" type="text" class="form-control" placeholder="What course are you in pursuing*">
                                                                    <span v-if="errors.course" class="error">{{errors.course[0]}}</span>

                                                                </div>

                                                                <div class="col-md-4">
                                                                    <input v-model.trim="form.area_of_interest" type="text" class="form-control" placeholder="What are your area of interest?*">
                                                                    <span v-if="errors.area_of_interest" class="error">{{errors.area_of_interest[0]}}</span>
                                                                </div>

                                                                <div class="col-md-4">
                                                                    <input v-model.trim="form.who_is_your_role_model_in_life" type="text" class="form-control" placeholder="Who is your role model in life and why?">
                                                                    <span v-if="errors.who_is_your_role_model_in_life" class="error">{{errors.who_is_your_role_model_in_life[0]}}</span>
                                                                </div>



                                                            </div> <!--row ends here-->
                                                        </div>  <!--form-group ends here-->

                                                        <div class="form-group">
                                                            <div class="row">

                                                                <div class="col-md-4">
                                                                    <input v-model.trim="form.what_type_of_internship_are_you_looking_forward_to" type="text" class="form-control" placeholder="What type of internship are you looking forward to?*">
                                                                    <span v-if="errors.what_type_of_internship_are_you_looking_forward_to" class="error">{{errors.what_type_of_internship_are_you_looking_forward_to[0]}}</span>
                                                                </div>

                                                                <div class="col-md-4">
                                                                    <input v-model.trim="form.in_which_field_are_you_looking_forward_to_intern" type="text" class="form-control" placeholder="In which field are you looking forward to intern?*">
                                                                    <span v-if="errors.in_which_field_are_you_looking_forward_to_intern" class="error">{{errors.in_which_field_are_you_looking_forward_to_intern[0]}}</span>
                                                                </div>
                                                            </div> <!--row ends here-->
                                                        </div>  <!--form-group ends here-->


                                                        <div class="form-group" v-if="projectDetails.internship_q1 != null">
                                                            <div class="row">

                                                                <div class="col-md-12">


                                                                    <textarea v-model.trim="form.additional_answer_1"  v-bind:placeholder="projectDetails.internship_q1" cols="30"
                                                                              rows="2" class="form-control"></textarea>

                                                                    <span v-if="errors.additional_answer_1" class="error">{{errors.additional_answer_1[0]}}</span>
                                                                </div>


                                                            </div> <!--row ends here-->
                                                        </div>  <!--form-group ends here-->

                                                        <div class="form-group" v-if="projectDetails.internship_q2 != null">
                                                            <div class="row">

                                                                <div class="col-md-12">


                                                                    <textarea v-model.trim="form.additional_answer_2"  v-bind:placeholder="projectDetails.internship_q2" cols="30"
                                                                              rows="2" class="form-control"></textarea>

                                                                    <span v-if="errors.additional_answer_2" class="error">{{errors.additional_answer_2[0]}}</span>
                                                                </div>


                                                            </div> <!--row ends here-->
                                                        </div>  <!--form-group ends here-->


                                                        <div class="form-group" v-if="projectDetails.internship_q3 != null">
                                                            <div class="row">

                                                                <div class="col-md-12">


                                                                    <textarea v-model.trim="form.additional_answer_3"  v-bind:placeholder="projectDetails.internship_q3" cols="30"
                                                                              rows="2" class="form-control"></textarea>

                                                                    <span v-if="errors.additional_answer_3" class="error">{{errors.additional_answer_3[0]}}</span>
                                                                </div>


                                                            </div> <!--row ends here-->
                                                        </div><!--form-group ends here-->

                                                        <div class="form-group" v-if="projectDetails.internship_q4 != null">
                                                            <div class="row">

                                                                <div class="col-md-12">


                                                                    <textarea v-model.trim="form.additional_answer_4"  v-bind:placeholder="projectDetails.internship_q4" cols="30"
                                                                              rows="2" class="form-control"></textarea>

                                                                    <span v-if="errors.additional_answer_4" class="error">{{errors.additional_answer_4[0]}}</span>
                                                                </div>


                                                            </div> <!--row ends here-->
                                                        </div>  <!--form-group ends here-->


                                                        <div class="form-group" v-if="projectDetails.internship_q5 != null">
                                                            <div class="row">

                                                                <div class="col-md-12">


                                                                    <textarea v-model.trim="form.additional_answer_5"  v-bind:placeholder="projectDetails.internship_q5" cols="30"
                                                                              rows="2" class="form-control"></textarea>

                                                                    <span v-if="errors.additional_answer_5" class="error">{{errors.additional_answer_5[0]}}</span>
                                                                </div>


                                                            </div> <!--row ends here-->
                                                        </div>  <!--form-group ends here-->


                                                        <div class="form-group">
                                                            <div class="row">
                                                                <div class="col-md-12 text-center">
                                                                    <div class="checkbox">
                                                                        <label>
                                                                            <input v-model.trim="form.is_permitted_for_future_communication" required="required" type="checkbox" value="check">  By filling this form, I permit youthbeat. in

                                                                            to send me communication about internships in future.
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div> <!--row ends here-->
                                                        </div>  <!--form-group ends here-->

                                                        <div class="form-group">
                                                            <div class="row">
                                                                <div class="col-md-12 text-center">
                                                                    <input id="submit_btn" type="submit" value="Send" class="btn  youth-btn">
                                                                </div>
                                                            </div> <!--row ends here-->
                                                        </div>  <!--form-group ends here-->
                                                    </form>
                                                </div>
                                            </div> <!--row ends here-->
                                        </div>

                                    </div> <!--container ends here-->

                                     <div class="changeDisplaySuccess"  v-bind:style="{display:changeDisplaySuccess}">
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

                            </div>

                        </div>
                    </div>



                </div>
            </section>

        </div>

        <!--Footer include-->

        <Footer/>

    </div>
</template>


<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
//
    export default{
        data(){
            return{
                projectDetails:'',
                form:{
                    name:'',
                    email:'',
                    internship_id:'',
                    college:'',
                    city:'',
                    phone_no:'',
                    area_of_interest:'',
                    study_year:'',
                    course:'',
                    who_is_your_role_model_in_life:'',
                    what_type_of_internship_are_you_looking_forward_to:'',
                    in_which_field_are_you_looking_forward_to_intern:'',
                    additional_answer_1:'',
                    additional_answer_2:'',
                    additional_answer_3:'',
                    additional_answer_4:'',
                    additional_answer_5:'',
                    is_permitted_for_future_communication:'',
                    external_question:''
                },
                formShow:'',
                changeDisplaySuccess:''

            }
        },
        async asyncData({$axios, params, route, redirect}){

            let city_name = route.params.city;
            let slug = route.params.slug;

            let city_check = await $axios.$get('/api/get-city-by-name/'+city_name)

             if(city_check.length === 0){
              return redirect('/404')
            }

            let  internship_data = await $axios.$get(`/api/get-particular-internship/${params.id}/${params.slug}`)

            if(internship_data.status == 204){
                return redirect('/404')
            }

            return{
                projectDetails:internship_data.data,
            }
        },
        components:{
            Header,
            Footer
        },
        methods:{
          async submit(){
              this.form.internship_id = this.projectDetails.id;

                if(this.projectDetails.internship_q5 != null &&
                this.projectDetails.internship_q4 != null &&
                this.projectDetails.internship_q3 != null &&
                this.projectDetails.internship_q2 != null &&
                this.projectDetails.internship_q1 != null){

                  this.form.external_question = 5;

                }else if(this.projectDetails.internship_q4 != null &&
                this.projectDetails.internship_q3 != null &&
                this.projectDetails.internship_q2 != null &&
                this.projectDetails.internship_q1 != null){

                  this.form.external_question = 4;

                }else if(this.projectDetails.internship_q3 != null &&
                this.projectDetails.internship_q2 != null &&
                this.projectDetails.internship_q1 != null){

                  this.form.external_question = 3;

                }else if(this.projectDetails.internship_q2 != null &&
                this.projectDetails.internship_q1 != null){

                  this.form.external_question = 2;

                }else if(this.projectDetails.internship_q1 != null){

                  this.form.external_question = 1;

                }

                await this.$axios.$post('/api/internship-register',this.form)
                 .then((response)=>{
                        this.formShow = "none",
                        this.changeDisplaySuccess = "block"
                });
          }
        }
    }


</script>

<style scoped>
    @import "@/assets/css/city.css";
    @import "@/assets/css/internship-detail.css";
</style>
