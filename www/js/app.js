
// init //

$(document).ready(function(){ 
    $('.tabs').tabs();  
  

});

$(document).ready(function(){
  $('.sidenav').sidenav();
});




// unang spalsh 



async function splash(){

  var next_page = document.getElementById('next_page');
  setTimeout(async function () {   

     
          next_page.click();

  }, 15000)
} // end ng unang function





// nav scroll function


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("una").style.top = "0";
  } else {
    document.getElementById("una").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}






function loadagain(){
  location.reload();
}


async function mundo(){
  

  try {


   var test2 = document.getElementById("test2");
   var prog = document.getElementById("prog");

  
   var test1 = document.getElementById("test1");
   var test2 = document.getElementById("test2");
   var prog1 = document.getElementById("prog1");





  test1.style.display = "none"; 
  test4.style.display = "none"; 
  prog1.style.display = "none"; 

  
  test2.innerHTML += "";
  
  prog.innerHTML += `
  <center>
     <div class="spinner">
      <div class="dot1">
      </div>
      <div class="dot2"> 
      </div>
    </div>  
    </center>
    <br>
    <p id="wit">Please Wait </p>  
  `;



   
   
    var a = await fetch('https://covid-simple.satyawikananda.tech/api/world');
    var b = await a.json();
    var c = await b.activeCases; // active cases 
    var d = await b.closedCases; // closed cases 
    var e = await b.deaths; // deaths
    var f = await b.lastUpdate ;  // lastUpdate
    var fa = moment(f).calendar();  
    var g = await b.recovered ;  // recovered
    var h = await b.totalCases ;  // totalCases
  
  
    var ca = await numeral(c).format('0.0a');   // active cases 
    var da = await numeral(d).format('0.0a');   // closed cases 
    var ea = await numeral(e).format('0.0a');   // deaths
    var ga = await numeral(g).format('0.0a');   // recovered
    
  

  
  
    prog.style.visibility = "hidden";    
  
    test2.innerHTML += `      
    
    <div id="test2" class="col s12">
  
    <p id="world">World Data</p>  
    <table class="responsive-table" id="mesa">
    <p id="time">Updated As of: <br>${fa}</p5>
     <thead>     
       <tr id="kaliwang_sulat">         
           <th>Recovered</th>
           <th>Deaths</th>            
           <th>Active Cases</th>    
           <th>Closed Cases</th>        
           <th>Total Cases</th>
       </tr>
     </thead>
  
     <tbody>
       <tr id="kaliwang_sulat_uli">
       
         <td id="rec">${ga}</td>
         <td id="d">${ea}</td>
         <td id="ac">${ca}</td>
         <td id="ac" class="panganime">${da}</td>
         <td id="total">${h}</td>
       </tr>       
     </tbody>    
   </table>
  
   </div>    
    
    
    `;  // end ng inner HTML




   // anime and baffle  js


   

   baffle('#world')
    .start()
    .set({
        characters: 'supe░█/░▓rcalif▓░█ragili█▒/░▓ ▒<▒▓▒sticexpia█▒▓░█/░▓▒<▒▓▒lidoc░█/░▓ious',
        speed: 40
    })
    .reveal(1000, 2000);
    
 
    


   anime({
    targets: '#rec',
    innerHTML: [0,ga],
    delay: 2300,
    easing: 'linear',   
    round: 1 // Will round the animated value to 1 decimal
  });

  anime({
    targets: '#d',
    innerHTML: [0, ea],
    delay: 2500,
    easing: 'linear',   
    round: 1 // Will round the animated value to 1 decimal
  });


  anime({
    targets: '#ac',
    innerHTML: [0, ca],
    delay: 2700,
    easing: 'linear',  
    round: 1 // Will round the animated value to 1 decimal
  });

  anime({
    targets: '.panganime',
    innerHTML: [0, da],
    delay: 3000,
    easing: 'linear',   
    round: 1 // Will round the animated value to 1 decimal
  });

    anime({
      
      targets: '#total',
      innerHTML: [0,h],
      delay: 4000,
      easing: 'linear',      
      round: 1 // Will round the animated value to 1 decimal
    });

    // done animation


  
  
    
  } catch (error) {

    prog.style.visibility = "hidden";
    test2.innerHTML += `

    <center>
    <i class="fas fa-exclamation-triangle" id="error_icon"></i>
    <br>       
    <p id="error_message">An Error Occurred <br> Please Try Again.</p>
    <br>   
    <br>
    <br>   
    <a class="waves-effect waves-light btn z-depth-1"  id="error_btn" onclick="loadagain()">TRY AGAIN</a>
   </center>    
    
    `; 
    



  }  // end ng catch 

}// end ng mundo function



// next for home 


async function bahay(){


  try {

    

    var test1 = document.getElementById("test1");
    var progre = document.getElementById("progre");
    var test2 = document.getElementById("test2");
    var bahay = document.getElementById("bahay");


 

  test2.style.display = "none"; 
  test1.style.display = "block"; 


  
  test1.innerHTML += "";

  progre.innerHTML += `
  <center>
    <div class="spinner">
      <div class="dot1">
      </div>
      <div class="dot2"> 
      </div>
    </div>  
    </center>
    <br>
    <p id="wit">Please Wait </p>  
  `;

 
  progre.innerHTML += "";

  

    var ja = await fetch('https://extreme-ip-lookup.com/json/');
    var jb = await ja.json();
    var jc = jb.country;   // Full name
    var jd = jb.countryCode; // ISO 2 code


    var je = await fetch('https://disease.sh/v2/countries/' + jd);
    var jf = await je.json();

    var jk = await jf.cases;  // total cases 
    var jl = await jf.todayCases; // Todays cases
    var jm = await jf.deaths;  // total deaths 
    var jn = await jf.todayDeaths; // todays deaths 
    var jo = await jf.recovered; // total recovery
    var jp = await jf.active; // activ e cases 
    var jq = await jf. updated; // update as of 
    var jqt = await moment(jq).calendar();  



    var jka = await numeral(jk).format(	'0,0');
    var jla = await numeral(jl).format(	'0,0');
    var jma = await numeral(jm).format(	'0,0');
    var jna = await numeral(jn).format(	'0,0');
    var joa = await numeral(jo).format(	'0,0');
    var jpa = await numeral(jp).format(	'0,0');





    progre.style.display = "none";
  
    test1.innerHTML += `
    
    <div id="test2" class="col s12">
  
    <p id="world">${jc}</p>  
    <table class="responsive-table" id="mesa">
    <p id="time">Updated As of: <br>${jqt}</p5>
     <thead>
       <tr id="kaliwang_sulat">         
           <th>Today's Entry</th>          
           <th>Today's Deaths</th>    
           <th>Total Deaths</th>          
           <th>Active Cases</th>    
           <th>Total Recovery</th>        
           <th>Total Cases</th>
       </tr>
     </thead>
  
     <tbody>
       <tr id="kaliwang_sulat_uli">
       
        <td id="today">${jla}</td>
        <td id="d"><span id="plus">+</span>${jna}</td>  
         <td id="d" class="d_again">${jma}</td>         
         <td id="ac">${jpa}</td>
         <td id="rec">${joa}</td>         
         <td id="total">${jka}</td>         
       </tr>       
     </tbody>    
   </table>
  
   </div> ` 
    
    
    
    ; // end ng innerhtml


    bahay.onclick = "";  // remove event


    // anime js and baffle js


    baffle('#world')
    .start()
    .set({
        characters: 'supe░█/░▓rcalifragili█▒▓ ░█/░▓ ▒<▒▓▒sticexpia█▒▓ ░█/░▓ ▒<▒▓▒lidoc░█/░▓ious',
        speed: 40
    })
    .reveal(1500, 2000);



   anime({
    targets: '#today',
    innerHTML: [0,'<span id="plus">+</span>' + jla],
    delay: 2200,
    easing: 'linear',   
    round: 1 // Will round the animated value to 1 decimal
  });

  anime({
    targets: '#d',
    innerHTML: [0, '<span id="plus">+</span>' +jna],
    delay: 2400,
    easing: 'linear',   
    round: 1 // Will round the animated value to 1 decimal
  });


  anime({
    targets: '.d_again',
    innerHTML: [0, jma],
    delay: 2500,
    easing: 'linear',  
    round: 1 // Will round the animated value to 1 decimal
  });

  anime({
    targets: '#ac',
    innerHTML: [0, jpa],
    delay: 3000,
    easing: 'linear',   
    round: 1 // Will round the animated value to 1 decimal
  });

    anime({
      
      targets: '#rec',
      innerHTML: [0,joa],
      delay: 4000,
      easing: 'linear',      
      round: 1 // Will round the animated value to 1 decimal
    });


    anime({
      
      targets: '#total',
      innerHTML: [0,jka],
      delay: 5000,
      easing: 'linear',      
      round: 1 // Will round the animated value to 1 decimal
    });

    // done animation


    
  } catch (error) {

   
    progre.style.display = "none";
    test1.innerHTML += `

    <center>
    <i class="fas fa-exclamation-triangle" id="error_icon"></i>
    <br>       
    <p id="error_message">An Error Occurred <br> Please Try Again.</p>
    <br>   
    <br>
    <br>   
    <a class="waves-effect waves-light btn z-depth-1"  id="error_btn" onclick="loadagain()">TRY AGAIN</a>
   </center>    
    
    `; 

    bahay.onclick = "";  // remove event

  
    





  }  // end ng catch 

}// end ng bahay bata 




async function listahan(){

  try {



    var test4 = document.getElementById("test4");  
    var prog2 = document.getElementById("prog2");
    var back = document.getElementById("back");
    var pangibaba = document.getElementById("pangibaba");


    test4.style.display = "block"; 
    pangibaba.style.visibility = "hidden";      
    back.style.display = "block";    
    prog2.style.display = "block"; 

  

  /* prog2.innerHTML += ` 
   
  <center>   
   <div class="progress">    
   <div class="indeterminate">  
   </div>  
   </div>   
   <i class="fas fa-viruses"></i>
  </center> `; */


  prog2.innerHTML += `
  <center>
<div class="spinner">
  <div class="dot1">
  </div>
  <div class="dot2"> 
  </div>
</div>  
</center>
<br>
<p id="wit">Please Wait<br>Huge record is being fetch </p>  
  `;



  
  var xa = await fetch('https://disease.sh/v3/covid-19/countries');
  var xb = await xa.json();
  var xc = Object.values(xb);


  xc.forEach(async function (gbl) {


    var xd = await gbl.country;  // bansa 
    var xe = await gbl.cases;   // Total cases
    var xf = await gbl.deaths;  // total D
    var xg = await gbl.recovered // Total Recovery
    var xh = await gbl.countryInfo.flag; // flag
    var xx = await gbl.active;
    var xi = await gbl.todayCases; // Todays Case   
    var xk = await gbl.todayDeaths; // Todays D
    var xl = await gbl.updated; // Date 
    var xla = await moment(xl).format('llll');  // converted date

    var xea = await numeral(xe).format(	'0,0');
    var xga = await numeral(xg).format(	'0,0');
    var xfa = await numeral(xf).format(	'0,0');
    var xia = await numeral(xi).format(	'0,0');    
    var xka = await numeral(xk).format(	'0,0');
    var xxa = await numeral(xx).format(	'0,0');




    prog2.innerHTML += "";
    prog2.style.visibility = "hidden";
   
    test4.innerHTML +=`

    <ul class="collapsible z-depth-1">    
    <li>
      <div class="collapsible-header">
      <img src='${xh}' class="responsive-img" id="plag">  
      <p id="count_name">${xd}</p> 
      </div> 

      <div class="collapsible-body">

      <p id="deyt">Update as of<br> ${xla}</p> 
      <br>
     
      <table class="responsive-table">
        <thead>
          <tr>         
             <th id="count_today">New Cases</th>             
             <th id="count_todayd">New Deaths</th>  
             <th id="count_aktib">Active Cases</th> 
             <th id="count_recov">Total Recovered</th>
              <th id="count_d">Total Deaths</th>
              <th id="count_total">Total No. of Cases</th>
          </tr>
        </thead>

        <tbody>
          <tr>
          <td id="tutaltoday">+${xia}</td>         
          <td id="tutaltodayd">+${xka}</td>
           <td id="aktib">${xxa}</td>
            <td id="tutalrec">${xga}</td>
            <td id="tutald">${xfa}</td>
            <td id="tutal">${xea}</td>
          </tr>       
        </tbody>
      </table>
      </div>
    </ul>  
  
    `;
  

    // init function

    $(document).ready(function(){
      $('.collapsible').collapsible();
    }); 
  

  })// end ng for each
   



  } catch (error) {
    

    prog2.style.display = "none";
    document.body.style.backgroundColor = "#F8F8F8";
    test4.innerHTML += `

    <center>
    <i class="fas fa-exclamation-triangle" id="error_icon"></i>
    <br>       
    <p id="error_message">An Error Occurred <br> Please Try Again.</p>
    <br>   
    <br>
    <br>   
    <a class="waves-effect waves-light btn z-depth-1"  id="error_btn" onclick="loadagain()">TRY AGAIN</a>
   </center>    
    
    `; 

  
    




  }





}// end ng listahan

