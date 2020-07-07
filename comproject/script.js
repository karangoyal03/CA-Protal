$(function(){
    let name = $('#name');
    let email = $('#email');
    let phone =$('#phone');
    let city =$('#city');
    let service =$('#service');
    

    $('#submit').click(()=>{
        console.log(name.val());
        console.log(email.val());
        console.log(phone.val());
        console.log(city.val());
        console.log(service.val());

        addinformation(
          name.val(),
          email.val(),
          phone.val(),
          city.val(),
          service.val()
          ,function(addedinfo){
               window.alert(
                 "Successfully added" +
                   addedinfo.name +
                   " in our database"
               );
          }
        );

    })
})