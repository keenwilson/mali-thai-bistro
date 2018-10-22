$(document).ready(function () {

    // Toggle dropdown menu at 'Menu' section
    var dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function (event) {
        event.stopPropagation();
        dropdown.classList.toggle('is-active');
    });

    //=======================================================================
    // Add links to each dropdown menu items
    $(document).on("click", "#dropdown-link-drinks", function (e) {
        e.preventDefault();
        dropdown.classList.toggle('is-active');
        window.location = '#drinks';
    })

    $(document).on("click", "#dropdown-link-appetizers", function (e) {
        e.preventDefault();
        dropdown.classList.toggle('is-active');
        window.location = '#appetizers';
    })


    $(document).on("click", "#dropdown-link-house-favorites", function (e) {
        e.preventDefault();
        dropdown.classList.toggle('is-active');
        window.location = '#house-favorites';
    })

    $(document).on("click", "#dropdown-link-chefs-recommendations", function (e) {
        e.preventDefault();
        dropdown.classList.toggle('is-active');
        window.location = '#chefs-recommendations';
    })

    $(document).on("click", "#dropdown-link-from-the-wok", function (e) {
        e.preventDefault();
        dropdown.classList.toggle('is-active');
        window.location = '#from-the-wok';
    })

    $(document).on("click", "#dropdown-link-soups-salads", function (e) {
        e.preventDefault();
        dropdown.classList.toggle('is-active');
        window.location = '#soups-salads';
    })

    $(document).on("click", "#dropdown-link-noodles", function (e) {
        e.preventDefault();
        dropdown.classList.toggle('is-active');
        window.location = '#noodles';
    })


    $(document).on("click", "#dropdown-link-curries", function (e) {
        e.preventDefault();
        dropdown.classList.toggle('is-active');
        window.location = '#curries';
    })

    $(document).on("click", "#dropdown-link-desserts", function (e) {
        e.preventDefault();
        dropdown.classList.toggle('is-active');
        window.location = '#desserts';
    })
});