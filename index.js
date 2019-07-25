$(function(){

$('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    let $newItem = `<li>
    <span class="shopping-item">${ $('#shopping-list-entry').val()}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;

    $('.shopping-list').append($newItem);
     $('#shopping-list-entry').val('')    
    
})

$('.shopping-item-delete').on('click', event => {
    $(event.currentTarget).closest('li').remove();
})

$('.shopping-item-toggle').on('click', event => {
    $(event.currentTarget).closest('li').children('.shopping-item').toggleClass('shopping-item__checked')
})



















})

