$(".navbar-toggler").click(function () {
    const icon = document.getElementById("icon");
    icon.style.transform = icon.style.transform === 'rotate(180deg)' ? '' : 'rotate(180deg)';
})

$(function () {
    $('[data-toggle="popover"]').popover()
})

$(function () {
    $('.healthcare-sc').popover({
        container: 'body',
        placement: 'left',
        content: `
        <div class="screenshot card-img-top">
            <img src="./dist/img/projects/healthcare.PNG" alt="">
        </div>
        `,
        html: true,
        trigger: 'focus'
    })
})

