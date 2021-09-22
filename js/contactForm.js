emailjs.init("user_mv8cuvhth1y2AvqK9mvv1");

window.onload = function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      console.log(contactForm.text22.value);
      /* var params = {
        Name: `${contactForm.text22.value}`,
        emailID: `${contactForm.text23.value}`,
        message: `${contactForm.text24.value}`,
      }; */
      var params = {
        Name: "`${contactForm.text22.value}`",
        emailID: "`${contactForm.text23.value}`",
        message: "`${contactForm.text24.value}`",
      };
      emailjs
        .sendForm("service_sjdby5i", "template_ym6kzcg", "contactForm", this)
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    });
};
