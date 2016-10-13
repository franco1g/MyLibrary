function remove_me(elm) {
  MyTotal = 0;
  $(elm).remove();
  $('.price').each(function() {
    MyTotal = MyTotal + Number((this).innerHTML);
  });
  drawerFooter.innerHTML = "Total: " + (MyTotal).toFixed(2) + " plus tax";
}
/////
$(document).ready(function() {
  var PriceSerial = 0;
  /////
  $(".selectable-Item").attr('title', 'Selectable Item');
  $("#itemDrawer").fadeOut();
  $("#drawerHeader").click(function(event) {
    $("#itemDrawer").fadeOut();
  });
  $("#drawerButton").click(function(event) {
    $("#itemDrawer").fadeToggle();
  });
  ///////if the element is h2...
  $("h2").click(function(event) {
    //and has selectable-Item class...
    if ($(this).hasClass("selectable-Item")) {
      var MyTotal = 0;
      PriceSerial = PriceSerial + 1;
      var PriceId = PriceSerial;
      //initialize and capture the id so that we can get the innerHTML and find the content by appending "_content" and get it's innerHTML
      var ElementCopyTitle = (event.target.id);
      //initialize and find the SOMETHING_content id
      var ElementCopyContent = (event.target.id) + "_content";
      //initialize drawer contents and add value
      var MyActualCode = "<div class='erasable' onclick='remove_me(this)'>" + (document.getElementById(ElementCopyTitle).innerHTML) + "&nbsp;&nbsp;&nbsp;&nbsp;" + "<div class='price' id='" + PriceId + "'>" + (document.getElementById(ElementCopyContent).innerHTML) + "</div><br /></div>";
      //assign and append the values to the drawer
      document.getElementById("drawerBody").innerHTML = document.getElementById("drawerBody").innerHTML + MyActualCode;
      $('.price').each(function() {
        MyTotal = MyTotal + Number((this).innerHTML);
      });
      drawerFooter.innerHTML = "Total: " + (MyTotal).toFixed(2) + " plus tax";
      $("#itemDrawer").fadeIn();
    }
  });

});