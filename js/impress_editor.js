$(document).ready(function() {
        $("div.step").click(function(eventObject) {
            // Replace the contents of the current slide with its own html to be edited
            var ownHtml = $(this).html();
            $(this).append('<textarea>' +  ownHtml + '</textarea>');

            // Disable click handle
            $(this).off("click");
            });
        });

