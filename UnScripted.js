$(function()
  {
    $('#zone').change(function(){
      $('thead').empty()
      $('tbody').empty()      
      init()      
    })
    $('#month').change(function(){
      $('thead').empty()
      $('tbody').empty()      
      init()      
    })
  //})
    //https://docs.google.com/spreadsheets/d/1w6KmFxXb3qkXM1n7Eyq272NJkvpUlK-aDFdT4_DAxEE/edit?usp=sharing
    //https://docs.google.com/spreadsheets/d/e/2PACX-1vQLKBVlZtsC0V6bXEURcgRO31qRHDofwR1zrfu3r4plJtKM5g1FKHDkGD3NHRchsXuejzAvESgcaK42/pubhtml
    var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1Qatb5EwM883IvFbARIwIWUyZ9lB2XhdVSxOEMsFS4h0/pubhtml';
    //Live
    //https://docs.google.com/spreadsheets/d/e/2PACX-1vSdhf90qNqYGAOXHSWdv-nOryHRXp4P6YNk2ny9cY8Wv00dr3K4rnCm-JjIbC56jymc7Q_uZfE2Nenw/pubhtml
    //https://docs.google.com/spreadsheets/d/1Qatb5EwM883IvFbARIwIWUyZ9lB2XhdVSxOEMsFS4h0/edit?usp=sharing
  
    function init() {        
      Tabletop.init( { key: publicSpreadsheetUrl,        
                       callback: showInfo,                       
                       simpleSheet: true                    
                        })
    }
  
    function showInfo(data, tabletop) {      
      //alert('Successfully processed!')      
      $('span').empty()
      $('span').append($('#zone').val())
      var fdata = data.filter(function(entry){
        return entry.Zone === $('#zone').val()
      })
      var trh;
      trh = $('<tr/>');    
      trh.append("<th>Level</th>");
      if ($('#month').val() === 'Jan')
      {
        trh.append("<th>Jan</th>");
      }
      else if ($('#month').val() === 'Feb')      
      {
        trh.append("<th>Jan</th>");
        trh.append("<th>Feb</th>");
      }
      else if ($('#month').val() === 'Mar')      
      {
        trh.append("<th>Jan</th>");
        trh.append("<th>Feb</th>");
        trh.append("<th>Mar</th>");        
      }
      else if ($('#month').val() === 'Apr')      
      {
        trh.append("<th>Jan</th>");
        trh.append("<th>Feb</th>");
        trh.append("<th>Mar</th>");
        trh.append("<th>Apr</th>");
      }
      else if ($('#month').val() === 'May')      
      {
        trh.append("<th>Jan</th>");
        trh.append("<th>Feb</th>");
        trh.append("<th>Mar</th>");
        trh.append("<th>Apr</th>");
        trh.append("<th>May</th>");
      }
      else if ($('#month').val() === 'Jun')      
      {
        trh.append("<th>Jan</th>");
        trh.append("<th>Feb</th>");
        trh.append("<th>Mar</th>");
        trh.append("<th>Apr</th>");
        trh.append("<th>May</th>");
        trh.append("<th>Jun</th>");
      }
      else if ($('#month').val() === 'Jul')      
      {
        trh.append("<th>Jan</th>");
        trh.append("<th>Feb</th>");
        trh.append("<th>Mar</th>");
        trh.append("<th>Apr</th>");
        trh.append("<th>May</th>");
        trh.append("<th>Jun</th>");
        trh.append("<th>Jul</th>");
      }
      else if ($('#month').val() === 'Aug')      
      {
        trh.append("<th>Jan</th>");
        trh.append("<th>Feb</th>");
        trh.append("<th>Mar</th>");
        trh.append("<th>Apr</th>");
        trh.append("<th>May</th>");
        trh.append("<th>Jun</th>");
        trh.append("<th>Jul</th>");
        trh.append("<th>Aug</th>");
      }
      else if ($('#month').val() === 'Sep')      
      {
        trh.append("<th>Jan</th>");
        trh.append("<th>Feb</th>");
        trh.append("<th>Mar</th>");
        trh.append("<th>Apr</th>");
        trh.append("<th>May</th>");
        trh.append("<th>Jun</th>");
        trh.append("<th>Jul</th>");
        trh.append("<th>Aug</th>");
        trh.append("<th>Sep</th>");
      }
      else if ($('#month').val() === 'Oct')      
      {
        trh.append("<th>Jan</th>");
        trh.append("<th>Feb</th>");
        trh.append("<th>Mar</th>");
        trh.append("<th>Apr</th>");
        trh.append("<th>May</th>");
        trh.append("<th>Jun</th>");
        trh.append("<th>Jul</th>");
        trh.append("<th>Aug</th>");
        trh.append("<th>Sep</th>");
        trh.append("<th>Oct</th>");
      }
      else if ($('#month').val() === 'Nov')      
      {
        trh.append("<th>Jan</th>");
        trh.append("<th>Feb</th>");
        trh.append("<th>Mar</th>");
        trh.append("<th>Apr</th>");
        trh.append("<th>May</th>");
        trh.append("<th>Jun</th>");
        trh.append("<th>Jul</th>");
        trh.append("<th>Aug</th>");
        trh.append("<th>Sep</th>");
        trh.append("<th>Oct</th>");
        trh.append("<th>Nov</th>");
      }
      else if ($('#month').val() === 'Dec')      
      {
        trh.append("<th>Jan</th>");
        trh.append("<th>Feb</th>");
        trh.append("<th>Mar</th>");
        trh.append("<th>Apr</th>");
        trh.append("<th>May</th>");
        trh.append("<th>Jun</th>");
        trh.append("<th>Jul</th>");
        trh.append("<th>Aug</th>");
        trh.append("<th>Sep</th>");
        trh.append("<th>Oct</th>");
        trh.append("<th>Nov</th>");
        trh.append("<th>Dec</th>");
      }                               
      $('thead').append(trh);      
      var trb;      
    for (var i = 0; i < fdata.length; i++) {
      trb = $('<tr/>');    
      trb.append("<td>" + fdata[i].Level + "</td>");
      if ($('#month').val() === 'Jan')
      {
        trb.append("<td>" + fdata[i].Jan + "</td>");
      }
      else if ($('#month').val() === 'Feb')      
      {
        trb.append("<td>" + fdata[i].Jan + "</td>");
        trb.append("<td>" + fdata[i].Feb + "</td>");
      }
      else if ($('#month').val() === 'Mar')      
      {
        trb.append("<td>" + fdata[i].Jan + "</td>");
        trb.append("<td>" + fdata[i].Feb + "</td>");
        trb.append("<td>" + fdata[i].Mar + "</td>");
      }
      else if ($('#month').val() === 'Apr')      
      {
        trb.append("<td>" + fdata[i].Jan + "</td>");
        trb.append("<td>" + fdata[i].Feb + "</td>");
        trb.append("<td>" + fdata[i].Mar + "</td>");
        trb.append("<td>" + fdata[i].Apr + "</td>");
      }
      else if ($('#month').val() === 'May')      
      {
        trb.append("<td>" + fdata[i].Jan + "</td>");
        trb.append("<td>" + fdata[i].Feb + "</td>");
        trb.append("<td>" + fdata[i].Mar + "</td>");
        trb.append("<td>" + fdata[i].Apr + "</td>");
        trb.append("<td>" + fdata[i].May + "</td>");
      }
      else if ($('#month').val() === 'Jun')      
      {
        trb.append("<td>" + fdata[i].Jan + "</td>");
        trb.append("<td>" + fdata[i].Feb + "</td>");
        trb.append("<td>" + fdata[i].Mar + "</td>");
        trb.append("<td>" + fdata[i].Apr + "</td>");
        trb.append("<td>" + fdata[i].May + "</td>");
        trb.append("<td>" + fdata[i].Jun + "</td>");
      }
      else if ($('#month').val() === 'Jul')      
      {
        trb.append("<td>" + fdata[i].Jan + "</td>");
        trb.append("<td>" + fdata[i].Feb + "</td>");
        trb.append("<td>" + fdata[i].Mar + "</td>");
        trb.append("<td>" + fdata[i].Apr + "</td>");
        trb.append("<td>" + fdata[i].May + "</td>");
        trb.append("<td>" + fdata[i].Jun + "</td>");
        trb.append("<td>" + fdata[i].Jul + "</td>");
      }
      else if ($('#month').val() === 'Aug')      
      {
        trb.append("<td>" + fdata[i].Jan + "</td>");
        trb.append("<td>" + fdata[i].Feb + "</td>");
        trb.append("<td>" + fdata[i].Mar + "</td>");
        trb.append("<td>" + fdata[i].Apr + "</td>");
        trb.append("<td>" + fdata[i].May + "</td>");
        trb.append("<td>" + fdata[i].Jun + "</td>");
        trb.append("<td>" + fdata[i].Jul + "</td>");
        trb.append("<td>" + fdata[i].Aug + "</td>");
      }
      else if ($('#month').val() === 'Sep')      
      {
        trb.append("<td>" + fdata[i].Jan + "</td>");
        trb.append("<td>" + fdata[i].Feb + "</td>");
        trb.append("<td>" + fdata[i].Mar + "</td>");
        trb.append("<td>" + fdata[i].Apr + "</td>");
        trb.append("<td>" + fdata[i].May + "</td>");
        trb.append("<td>" + fdata[i].Jun + "</td>");
        trb.append("<td>" + fdata[i].Jul + "</td>");
        trb.append("<td>" + fdata[i].Aug + "</td>");
        trb.append("<td>" + fdata[i].Sep + "</td>");
      }
      else if ($('#month').val() === 'Oct')      
      {
        trb.append("<td>" + fdata[i].Jan + "</td>");
        trb.append("<td>" + fdata[i].Feb + "</td>");
        trb.append("<td>" + fdata[i].Mar + "</td>");
        trb.append("<td>" + fdata[i].Apr + "</td>");
        trb.append("<td>" + fdata[i].May + "</td>");
        trb.append("<td>" + fdata[i].Jun + "</td>");
        trb.append("<td>" + fdata[i].Jul + "</td>");
        trb.append("<td>" + fdata[i].Aug + "</td>");
        trb.append("<td>" + fdata[i].Sep + "</td>");
        trb.append("<td>" + fdata[i].Oct + "</td>");
      }
      else if ($('#month').val() === 'Nov')      
      {
        trb.append("<td>" + fdata[i].Jan + "</td>");
        trb.append("<td>" + fdata[i].Feb + "</td>");
        trb.append("<td>" + fdata[i].Mar + "</td>");
        trb.append("<td>" + fdata[i].Apr + "</td>");
        trb.append("<td>" + fdata[i].May + "</td>");
        trb.append("<td>" + fdata[i].Jun + "</td>");
        trb.append("<td>" + fdata[i].Jul + "</td>");
        trb.append("<td>" + fdata[i].Aug + "</td>");
        trb.append("<td>" + fdata[i].Sep + "</td>");
        trb.append("<td>" + fdata[i].Oct + "</td>");
        trb.append("<td>" + fdata[i].Nov + "</td>");
      }
      else if ($('#month').val() === 'Dec')      
      {
        trb.append("<td>" + fdata[i].Jan + "</td>");
        trb.append("<td>" + fdata[i].Feb + "</td>");
        trb.append("<td>" + fdata[i].Mar + "</td>");
        trb.append("<td>" + fdata[i].Apr + "</td>");
        trb.append("<td>" + fdata[i].May + "</td>");
        trb.append("<td>" + fdata[i].Jun + "</td>");
        trb.append("<td>" + fdata[i].Jul + "</td>");
        trb.append("<td>" + fdata[i].Aug + "</td>");
        trb.append("<td>" + fdata[i].Sep + "</td>");
        trb.append("<td>" + fdata[i].Oct + "</td>");
        trb.append("<td>" + fdata[i].Nov + "</td>");
        trb.append("<td>" + fdata[i].Dec + "</td>");
      }                               
      $('tbody').append(trb);
    }      
    }
    window.addEventListener('DOMContentLoaded', init)    
})