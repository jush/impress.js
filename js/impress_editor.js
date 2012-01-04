$(document).ready(function() {
        $("div.step").click(function(eventObject) {
            // Replace the contents of the current slide with its own html to be edited
            var ownHtml = $(this).html();
            var thisChild = $(this).children(":first");
            $(thisChild).replaceWith('<textarea columns="20">' +  ownHtml + '</textarea>');

            // Disable click handle
            $(this).off("click");
            });
        });

