
<?php 
  
  $site_language                  = manic_get_option( PREFIX . 'site_language' );

  

  $contact_us_phone_actual_title  = manic_get_option( PREFIX . 'contact_us_phone_actual_title' );
  $contact_us_text                = manic_get_option( PREFIX . 'contact_us_text' );
  $contact_us_phone_number        = manic_get_option( PREFIX . 'contact_us_phone_number' );
  $contact_us_email               = manic_get_option( PREFIX . 'contact_us_email' );

  $contact_us_thank_you_text      = manic_get_option( PREFIX . 'contact_us_thank_you_text' );
  $contact_us_error_text          = manic_get_option( PREFIX . 'contact_us_error_text' );

?>


<div class="scroll-target" data-value="contact"></div>

<article id="page-home-contact-section" class="default-contact-form-section visible-md visible-lg">

  <div class="default-contact-form-title-container">
    <div class="container">
      <div class="row">
        <div class="col-md-12">

          

          <div id="default-contact-form-title">
            <h4><?php echo $contact_us_phone_actual_title; ?></h4>

            <div class="row">
              <div class="col-md-6">
                <div id="default-contact-form-text-01">
                  <?php echo $contact_us_text; ?>
                </div>
              </div>
              <div class="col-md-6">
                <div id="default-contact-form-text-02-container">

                  <div id="default-contact-form-text-02">
                    <h3><span class="fa fa-phone"></span>&nbsp;&nbsp;<?php echo $contact_us_phone_number; ?></h3>
                    <h3><a href="mailto:<?php echo $contact_us_email; ?>"><span class="fa fa-envelope"></span>&nbsp;&nbsp;<?php echo $contact_us_email; ?></a></h3>
                  </div>

                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>


    </div>
  </div>

  <form id="desktop-contact-form" 
    class="default-contact-form simple-form-check ajax-version"
    action="<?php echo THEMEROOT; ?>/_email_function.php" 
    method="post">


    
    <div class="default-contact-thankyou-container">
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="default-copy">
              <?php echo $contact_us_thank_you_text; ?>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="default-contact-error-container">
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="default-copy">
              <?php echo $contact_us_error_text; ?>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="default-contact-form-group-container">
      <div class="container">
        <div class="row">
          <div class="col-md-4">

            <!--
                ___  _
               / _ \/ |
              | | | | |
              | |_| | |
               \___/|_|

            -->

            <div id="default-contact-form-column-01">

              <div class="form-group">
                <label>Reason for contact</label>
                
                <div class="manic-dropdown">
                  <select id="contact-reason-dropdown" name="contact-reason-dropdown" class="required">
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Services">Services</option>
                    <option value="Careers">Careers</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                
                <!-- <input type="text" class="form-control" placeholder="General Enquiry"></input> -->
              </div>

              <div class="form-group">
                <label>Salutation</label>
                
                <div class="manic-dropdown">
                  <select id="contact-salutation-dropdown" name="contact-salutation-dropdown" class="required">
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Dr.">Dr.</option>
                  </select>
                </div>
                
                <!-- <input type="text" class="form-control" placeholder="Please Select"></input> -->
              </div>

              <div class="form-group">
                <label>First Name</label>
                <input id="contact-firstname-txt" name="contact-firstname-txt" type="text" class="form-control required" placeholder="enter name"></input>
              </div>

              <div class="form-group">
                <label>Last Name</label>
                <input id="contact-lastname-txt" name="contact-lastname-txt" type="text" class="form-control required" placeholder="enter name"></input>
              </div>

            </div> <!-- default-contact-form-column-01 -->

          </div> <!-- col-md-4 -->
          <div class="col-md-8">

            <!--
                ___ ____
               / _ \___ \
              | | | |__) |
              | |_| / __/
               \___/_____|

            -->

            <div id="default-contact-form-column-02">
              <div class="row">
                
                <div class="col-md-5">

                  <div class="form-group" id="desktop-contact-phone-txt-form-group" >
                    <label>Phone Number</label>
                    <input id="desktop-contact-phone-txt" name="contact-phone-txt" type="text" class="form-control required" placeholder="enter number"></input>

                    <input id="desktop-contact-country-phone-txt" name="contact-country-phone-txt" type="hidden" value="none"></input>
                    <input id="desktop-contact-dial-phone-txt" name="contact-dial-phone-txt" type="hidden" value="0"></input>
                  </div>

                </div>
                <div class="col-md-1"></div>
                <div class="col-md-6">

                  <div class="form-group">
                    <label>Email Address</label>
                    <input id="contact-email-txt" name="contact-email-txt" type="text" class="form-control required only-email" placeholder="enter email"></input>
                  </div>

                </div>

              </div>
              
              <div class="form-group textarea-version">
                <label>Message</label>
                <textarea id="contact-message-txt" name="contact-message-txt" class="form-control required" placeholder="please be as concise with your enquiry to allow us to assist you"></textarea>
              </div>

              <div class="cta-container">
                <input type="submit" class="square-cta large-version" value="Submit">
              </div>

            </div> <!-- default-contact-form-column-02 -->

          </div> <!-- col-md-8 -->
        </div> <!-- row -->




      </div> <!-- container -->
    </div> <!-- default-contact-form-group-container -->

    <div class="default-contact-sending-container">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="default-copy">
              <h3>Sending...</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

  </form>
</article>
