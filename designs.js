var gridCreate = $('#pixel_canvas');

$('input:submit').click(function(event){
  event.preventDefault();
  makeGrid();
});

// gridCreate 
function makeGrid() {
  gridCreate.empty();
  let gridHeight = document.getElementById("input_height").value;
  let gridWidth = document.getElementById("input_width").value;
  for (var s = 0; s < gridHeight; s ++ ) {
    gridCreate.append('<tr class="' + s + '">', '</tr>');
    for (var n = 0; n < gridWidth; n ++) {
      $('.' + s).append('<td>', '</td>');
    }
  }
};

// Background color 
gridCreate.on("mousemove", "td", function() {
  var colorInput = document.getElementById("colorPicker").value;
  if($(this).hasClass('mousemove')) {
  } else {
    $(this).css("background-color", colorInput);
  }
  
  //reset grid 
  var resetGrid = $('#reset-grid');
  resetGrid.on('click', function() {
    $('td').css('background-color', '');
  });

});
