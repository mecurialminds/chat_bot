              

var MobiSmartBar = MobiSmartBar || (function(){
    var _args = {}; // private

    return {
        init : function(Args) {
            _args = Args;
            _url = 'https://www.jazz.com.pk/smartbar/smart-bar.php?prop='+Args[0];
           
        },
        startBar : function() {
            

          $.post(_url).success(function(resp){


            $('#smart-bar').html(resp);



            $(document).on("click touchstart", "body", function(event) {

              //setInterval(function(){ $('.desktop-brands-outer').removeClass('opened-nav-brands'); }, 100);
              
            })

                $('.open-announcement').on('click', function(e){
                    e.preventDefault();
                    $('.notifications').fadeToggle('fast')
                  })

              $('.notification_area, .nav-brands-header').on('click', function(e){
                e.stopPropagation();
              });

              $('.nav-brands-header').on('click', function(){
                  $('.desktop-brands-outer').addClass('opened-nav-brands');
                })


              $('body').on('click', function(){
                $('.notifications').fadeOut();
                $('.desktop-brands-outer').removeClass('opened-nav-brands');
              })
              
                
          });


        }
    };
}());