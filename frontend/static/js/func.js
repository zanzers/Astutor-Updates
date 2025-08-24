$(document).ready(function () {
    $('.input-msg').on('input', function() {
    $(this).css('height', 'auto');
    $(this).css('height', this.scrollHeight + 'px');
});

})