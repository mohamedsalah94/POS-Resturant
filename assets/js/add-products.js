$("#open_customer_add_responsive").click(function() {
    jQuery("#myCheckOutResponsive").modal("show");

});
$("#close_customer_add_responsive").click(function() {
    jQuery("#myCheckOutResponsive").modal("hide");

});

let max = 0;

$("#add-products").click(function() {


    $("[id^=buy_product_]").each(function() {
        if (parseInt(this.id.split('_')[2]) > max) {
            max = parseInt(this.id.split('_')[2]);
        }
    });
    max += 1;
    $("#sidebar .empty").fadeOut(1500);

    $("#sidebar").append(`
    <div class="product mb-1 d-flex justify-content-between"  id="buy_product_` + max + `">
    <div class="product-image">
        <img class="img-products" src="assets/img/brands/Mask Group.png" alt="">
    </div>
    <div class="disc product-details mt-2">
        <a href="" class="name" data-toggle="modal" data-target="#myModalRight">Classic Chicken Burger</a>
        <div class="size">Small, Extra Cheese</div>
    </div>
    <div class="quan-salary">
        <div class="quant mt-1">
            <span class="increase-decrease-btn minus" id="minus_` + max + `">
                <i class="fas fa-minus"></i>
            </span>
            <span class="qt">1</span>
            <span class="increase-decrease-btn plus" id="plus_` + max + `">
                <i class="fas fa-plus"></i>
            </span>
        </div>
        <div class="mt-1">
            <h4 class="price">
                2.29$
            </h4>
            <h4 class="pu d-none"> 2.29</h4>

        </div>
    </div>
    <div class="op">
        <span class="remove" id="remove_` + max + `">
                <i class="fas fa-times remove-icon"></i>
            </span>
    </div>
</div>
    
    
    `)
    jQuery("#myModalRight").modal("hide");
    sum();
});

$("#sidebar").on('click', "[id^=remove_]", function() {
    let id = $(this).attr('id');
    $('#' + id).parent().parent().remove();
    max--;
    sum();
    if (max == 0) {
        $("#sidebar .empty").fadeIn(1500);
    }
});

$(document).on('click', "[id^=plus_]", function() {
    for (let i = 0; i < products.length; i++) {
        let elem = products[i];
        let pu = elem.querySelector(".pu").innerText;


        if (elem.querySelector(".qt").innerText > 0) {
            elem.querySelector(".qt").innerText++;
            elem.querySelector(".price").innerText =
                pu * elem.querySelector(".qt").innerText + "$";
            sum();
        }


    }
});


$(document).on('click', '.minus', function() {
    for (let i = 0; i < products.length; i++) {
        let elem = products[i];
        let pu = elem.querySelector(".pu").innerText;

        if (elem.querySelector(".qt").innerText > 0) {
            elem.querySelector(".qt").innerText--;
            elem.querySelector(".price").innerText =
                pu * elem.querySelector(".qt").innerText + "$";
            sum();
        }


    }
});