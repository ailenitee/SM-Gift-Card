
/**
* First we will load all of this project's JavaScript dependencies which
* includes Vue and other libraries. It is a great starting point when
* building robust, powerful web applications using Vue and Laravel.
*/

require('./bootstrap');

window.Vue = require('vue');

/**
* Next, we will create a fresh Vue application instance and attach it to
* the page. Then, you may begin adding components to this application
* or customize the JavaScript scaffolding to fit your unique needs.
*/

//Vue.component('example-component', require('./components/ExampleComponent.vue'));
//
//const app = new Vue({
//    el: '#app'
//});

$(function() {
  $('#detailModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  });
  $('#detailModalShow').css('cursor','pointer');
  $('#detailModalShow').on('click', function () {
    $('#detailModal').modal('show');
  });
  $('.click').on('click', function () {
    $('.click').removeClass('active');
    $(this).addClass('active');
  });
  $('a[title]').tooltip();
  $('.create_gc').click(function() {
    window.location.href = '/card/details';
    return false;
  });
});
