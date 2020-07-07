function fetchinformation(done) {
  $.get("/api/information", function (data) {
    done(data);
  });
}

function addinformation(name, email, phone, city, service) {
  $.post(
    "/api/information",
    {
      name: name,
      email: email,
      phone: phone,
      city: city,
      service: service,
    },
    function (done) {
      done(data);
    }
  );
}

function addcard(card){
    // add krenge yeh wala card front pr show hoga ..
}
