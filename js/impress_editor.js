$(document).ready(function() {
        $("div.step").click(createEditor);
        });
function createEditor (eventObject) {
    // Replace the contents of the current slide with its own html to be edited
    var ownHtml = $(this).html();
    $(this).append('<textarea class="impress_slide_content">' +  ownHtml + '</textarea>');

    // Disable click handle
    $(this).off("click");
    document.removeEventListener("keydown", document.filterKeys, false);

    // Add button to save changes
    $(this).append($('<button type="button">Save</button>').click({slide:this}, saveContent));
}
function saveContent(event) {
    var slide = event.data.slide;
    $(slide).click(createEditor);
    var newContent = $(slide).children(".impress_slide_content")[0].value;
    $(slide).empty();
    $(slide).append(newContent);
    // Re-enable impress.js key navigation
    document.addEventListener("keydown", document.filterKeys, false);
    // Avoid calling createEditor immediately by not propagating the event
    return false;
}
