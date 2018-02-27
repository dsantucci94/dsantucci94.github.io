$('.item').click(function() {
  //is the item already in the cart?
  //has the user already clicked this item?
  
  if (!$(this).hasClass('in-cart')){
  
  
      //Add in-cart class to iterms that have been clicked
      $(this).addClass('in-cart');

  
  
      //increment the cart number
      //find current value of .item-count
      //add 1 to current .item-count
      //represent new cart number in html on .item-count
  
      var current_count = $('.item-count'). html(),
          current_value = Math.abs(current_count),
          new_count     = current_value + 1;
          
      $('.item-count').html(new_count);
      $(this).addClass('in-cart');
      //*add item to cart
      add_to_cart(this);
  }

  });

  $('.cart-toggle').click(function() {
      $('.cart').toggleClass('hide');
  }); 

function add_to_cart(line_item) {
  // get img and price of item clicked 
  // inject html with img and price 
  var value = $(line_item).data('value'), 
      price = $(line_item).data('price'),
      img = $(line_item).data('img'), 
      target = $(line_item).data('target'), 
      line_item_html = '<div data-target="' + target + '" data-value="' + value + '" class="line-item"><div class="line-item-img ' + img + '"></div><div class="line-item-price">' + price + '</div></div>';

  $('.line-items').prepend(line_item_html);
  update_total(value);
}

function update_total(line_item_value) {
  var current_value = $('.total').data('value'),
      new_value = current_value + line_item_value,
      new_price = new_value.toLocaleString();


  $('.total').html(new_price);
  $('.total').data('value', new_value);

}
$ ('.line-items').on('click', '.line-item', function(){
    
  
  
    var current_value = $('.total').data('value'),
        line_item_value = $(this).data('value'),
        new_value= current_value - line_item_value,
        new_price =new_value.toLocaleString();
    $(this).html('').removeClass('line-item');
    $('.total').html(new_price);
    $('.total').data('value', new_value);


    var shopping_item_class =$(this).data('target');
    $(shopping_item_class).removeClass('in-cart');

    var current_item_count = $('.item-count').html(),
        updated_item_count = current_item_count -1;

        $('.item-count').html(updated_item_count);
});


// click(function(){
// 	alert('hello');
// })