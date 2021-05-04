var animated = false;
$(function () {
  $.ajax({
    type: 'GET',
    url: 'https://moblit.parxsys.com/api/v1/users/statistics',
    success: function (data) {
      $('#carbon-saved').text(data.total_co2_emission_saved)
      $('#carbon-burned').text((data.total_cal_burnt) / 1000)
      $('#carbon-travelled').text(data.total_km_ridden)
      $('#carbon-motivated').text(data.total_user)
      $(window).on('resize scroll', function () {
        if ($('#statistics').isInViewport()) {
          if (!animated) {
            animated = true;
            $('.Count').each(function () {
              var $this = $(this);
              console.log($this.text());
              jQuery({
                Counter: 0
              }).animate({
                Counter: $this.text()
              }, {
                duration: 5000,
                easing: 'swing',
                step: function () {
                  $this.text(Math.ceil(this.Counter));
                }
              });
            });
          }
          $('.animated').addClass('animate')
        } else {
          animated = false;
        }
      });
    }
  });
  $('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });

});

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};




// $('.feedback').onlick(function(){
//   var feedback=[
//     first_name: $('#first_name').val();
//     last_name: $('#last_name').val();
//     email:$('#email').val();
//     phone_no:$('#number').val();
//     subject:$('#subject').val();
//     message:$('#message').val();
//   ];
//
//   $.ajax({
//     url: "http://localhost:3000/api/v1/user_feedbacks",
//     type: 'POST',
//     dataType: 'jsonp'
//     data: JSON.stringify(feedback),
//     success: function (feedback) {
//       feedbackAddSuccess(feedback);
//     },
//     error: function (error) {
//       console.log(error);
//     }
//   });
//
// });




// $.ajax({
//    url: 'https://moblit.parxsys.com/api/v1/cities',
//    type: 'POST',
//    dataType: 'json',
//    data: JSON.stringify(json),
//    contentType: 'application/json; charset=utf-8',
//    success: function (data) {
//      for (var i in data){
//       data[i].city
//      }
//    },
//    error: error
// });
//
//     dataToSend = JSON.stringify({ 'list': city });
//     $.ajax({
//         contentType: 'application/json; charset=utf-8',
//         dataType: 'json',
//         type: 'GET',
//         url: 'https://moblit.parxsys.com/api/v1/cities',
//         data: city,
//         success: function (data) {
//
//         }
//     })
// }



// function(city){
// city.data.forEach(function(data)){
// $("#city li").on("click", ".city-name", function() {
// //var data=data[ $(this).data('city')];
// var laLatLng = new google.maps.LatLng( data.lat, data.lng);
// map.panTo(laLatLng);
// map.setZoom(8);
// console.log(city);
// });