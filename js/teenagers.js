var arrTeenagers = [];

function Teenager(obj) {
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


function getTeenagerJSON() {
  return $.ajax({
    url: 'js/teenagers-feed.json',
    dataType: 'json'
  });
};



function getTeenagerHTML(obj) {
  var el = '<div class="photo">'+
               '<a href="profile-teenagers.html'+ '?id=' + obj.id +'" data-id="'+ obj.id +'">'+
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
  return el;
};


getTeenagerJSON().then(function(data) {
  var str = '';
  for (var i = 0; i < data.length; i++) {
      arrTeenagers.push(new Teenager(data[i]));
      str += getTeenagerHTML(arrTeenagers[i]);
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
