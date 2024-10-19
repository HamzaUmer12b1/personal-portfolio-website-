<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    $to = "umer73666@gmail.com";  // Your email address
    $subject = "New Email Subscription";
    $message = "You have received a new email subscription from: " . $email;
    $headers = "From: noreply@yourdomain.com";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
      echo "Email sent successfully!";
    } else {
      echo "Failed to send email.";
    }
  }
?>
