<?php 
  $EmailFrom = "info@questmedicare.com";

  $EmailTo = "info@questmedicare.com";           // test email

  $Subject = "Contact Us Form";

   
  $reason = "";
  if( isset($_POST['contact-reason-dropdown']) ) {
    $reason             = Trim(stripslashes($_POST['contact-reason-dropdown'])); 
  } 
  $salutation = "";
  if( isset($_POST['contact-salutation-dropdown']) ) {
    $salutation             = Trim(stripslashes($_POST['contact-salutation-dropdown'])); 
  }
  $firstname = "";
  if( isset($_POST['contact-firstname-txt']) ) {
    $firstname              = Trim(stripslashes($_POST['contact-firstname-txt'])); 
  }
  $lastname = "";
  if( isset($_POST['contact-lastname-txt']) ) {
    $lastname              = Trim(stripslashes($_POST['contact-lastname-txt'])); 
  }


  $emailaddress = "";
  if( isset($_POST['contact-email-txt']) ) {
    $emailaddress           = Trim(stripslashes($_POST['contact-email-txt'])); 
  }

  $country_number = "";
  if( isset($_POST['contact-country-phone-txt']) ) {
    $country_number               = Trim(stripslashes($_POST['contact-country-phone-txt'])); 
  }

  $dial_number = "";
  if( isset($_POST['contact-dial-phone-txt']) ) {
    $dial_number               = Trim(stripslashes($_POST['contact-dial-phone-txt'])); 
  }

  

  $number = "";
  if( isset($_POST['contact-phone-txt']) ) {
    $number               = Trim(stripslashes($_POST['contact-phone-txt'])); 
  }
  $message = "";
  if( isset($_POST['contact-message-txt']) ) {
    $message          = Trim(stripslashes($_POST['contact-message-txt'])); 
  }

  
  // prepare email body text
  $Body = "";
  $Body .= "Subject: ";
  $Body .= $reason;
  $Body .= "\n";
  $Body .= "Salutation: ";
  $Body .= $salutation;
  $Body .= "\n";
  $Body .= "First name: ";
  $Body .= $firstname;
  $Body .= "\n";
  $Body .= "Last name: ";
  $Body .= $lastname;
  $Body .= "\n";

  $Body .= "Contact Number: ";
  $Body .= $number;
  $Body .= "\n";

  $Body .= "Contact Number Dial: ";
  $Body .= $dial_number;
  $Body .= "\n";

  $Body .= "Contact Number Country: ";
  $Body .= $country_number;
  $Body .= "\n";


  

  

  $Body .= "Email: ";
  $Body .= $emailaddress;
  $Body .= "\n";
  $Body .= "Message: ";
  $Body .= "\n";
  $Body .= $message;
  $Body .= "\n";

  // send email 
  $success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

  // redirect to success page 
  if ($success){
    //print "<meta http-equiv=\"refresh\" content=\"0;URL=" . $referer . "about_us.html\">";
    print "success";
  } else{
    //print "<meta http-equiv=\"refresh\" content=\"0;URL=" . $referer . "about_us.html\">";
    print "error";
  }


?>