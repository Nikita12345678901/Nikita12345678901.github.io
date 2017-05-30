$(document).ready(function () {

    function nextVideo() {
        var video = $('video')[0];
        video.src = "vids/" + (Math.floor(Math.random() * 60) + 1) + ".mp4";
        video.load();
        video.play();
    }
    nextVideo();

    $("video").on("ended", function () {
        nextVideo();
    });
});
