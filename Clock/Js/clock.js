$(document).ready(function() {
   
          //*****************************ANalog Seconds**************** 
              setInterval( function() {
              var seconds = new Date().getSeconds();
              var sdegree = seconds * 6;
              var srotate = "rotate(" + sdegree + "deg)";
              
              $("#sec").css({"transform" : srotate});
                  
              }, 1000 );
              
          //*****************************ANalog hours**************** 
              setInterval( function() {
              var hours = new Date().getHours();
              var mins = new Date().getMinutes();
              var hdegree = hours * 30 + (mins / 2);
              var hrotate = "rotate(" + hdegree + "deg)";
              
              $("#hour").css({"transform" : hrotate});
                  
              }, 1000 );
              //*****************************ANalog Mints**************** 
              setInterval( function() {
              var mins = new Date().getMinutes();
              var mdegree = mins * 6;
              var mrotate = "rotate(" + mdegree + "deg)";
              
              $("#min").css({"transform" : mrotate});
                  
              }, 1000 );

              //******************Digital Clock Code 
              setInterval( function() {
                  var sec = new Date().getSeconds();
                  var min = new Date().getMinutes();
                  var hour = new Date().getHours();
          
                  $('#time').text(hour+ " : "+min + " : "+ sec);
                  
                      
                  }, 1000 );
                 
            $('#Submit').click(function(){
                var first= $('#First').val();
                var last= $('#Last').val();
                var cnic= $('#CNIC').val();
                var phone= $('#Phone').val();
                var mail= $('#Mail').val();
            $('#Data').text(first+ " : "+last + " : "+ cnic +" : "+mail +" : "+phone);
            alert(first+ " : "+last + " : "+ cnic +" : "+mail +" : "+phone);
            
            });

         
        });