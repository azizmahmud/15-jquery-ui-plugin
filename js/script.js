$(document).ready(function(){
    var availableTags = [
        "web development",
        "web design",
        "digital marketing",
        "graphics design",
        "logo design",
        "frellensing"
      ];
      $( "#tags" ).autocomplete({
        source: availableTags
      });
      // example 2
      $( "#draggable" ).draggable();
      // example 3
      $( "#resizable" ).resizable();
      // example 4
      $( "#selectable" ).selectable();
      $( "#sortable" ).sortable();
})