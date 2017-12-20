var arrWomen = [];

function Women(obj) {
  this.id = obj.ID;
  this.name = obj.Name;
  this.sureName = obj.SureName;
  this.height = obj.Height;
  this.bust = obj.Bust;
  this.waist = obj.Waist;
  this.hips = obj.Hips;
  this.shoes = obj.Shoes;
  this.eyes = obj.Eyes;
  this.hair = obj.Hair;
  this.images = obj.images;
};


function getWomenJSON() {
  return $.ajax({
    url: 'js/women-feed.json',
    dataType: 'json'
  });
};



function getWomenHTML(obj) {
  var el = '<div class="photo">'+
               '<a href="profile.html'+ '?id=' + obj.id +'" data-id="'+ obj.id +'">'+
                   '<img src="'+ obj.images[0] +'" alt="'+ obj.name +'">'+
                   '<h3 class="photo__name">'+ obj.name + ' ' + obj.sureName +'</h3>'+
                   '<div class="about">'+
                       '<span class="about-item">Height: '+ obj.height +'</span><br>'+
                       '<span class="about-item">Bust: '+ obj.bust +' </span><br>'+
                       '<span class="about-item">Waist: '+ obj.waist +' </span><br>'+
                       '<span class="about-item">Hips: '+ obj.hips +' </span><br>'+
                       '<span class="about-item">Shoes: '+ obj.shoes +' </span><br>'+
                       '<span class="about-item">Hair: '+ obj.hair +' </span><br>'+
                       '<span class="about-item">Eyes: '+ obj.eyes +' </span>'+
                   '</div>'+
               '</a>';
           // '</div>';
  return el;
};


getWomenJSON().then(function(data) {
  var str = '';
  for (var i = 0; i < data.length; i++) {
      arrWomen.push(new Women(data[i]));
      str += getWomenHTML(arrWomen[i]);
      if(data[i].Fly) {
        str += '<span class="arrive"></span></div>';
      } else {
        str += '</div>';
      }
  };
  $('.photo-all').empty();
  $('.photo-all').html(str);
}).fail(function(jqXHR, textStatus, errorThrown ){
  alert('Sorry, something wrong with server');
})
