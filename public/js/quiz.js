$(function() {
    $("#draggable").draggable();
    $("#draggable2").draggable();
    $("#droppable").droppable({
        drop: function(event, ui) {
            var inputValue = ui.draggable.context.childNodes[1].id;
            $("#drag1").val(inputValue)
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("Pregunta 1");
        }
    });

    $("#droppable2").droppable({
        drop: function(event, ui) {
            var inputValue = ui.draggable.context.childNodes[1].id;
            $("#drag2").val(inputValue)
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("Pregunta 2");
        }
    });

});