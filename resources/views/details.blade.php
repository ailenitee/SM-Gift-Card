@extends('includes.app')
@section('content')
<div class="container">
  <h1 class="text-center egift">Send eGift Card</h1>
  <div class="row">
    <div class="col-md-offset-8 col-md-4">
      <a class="nav-link btn-red btn-center float-right" href=""><i class="fa fa-shopping-cart"></i>&nbsp; Cart</a>
    </div>
  </div>

  <div class="content d-content">
    <form action="" method="post" class="form_details">
      @include('design')
      <hr>
      @include('cdetails')
      <hr>
      @include('send')
    </form>
  </div>
</div>
@stop
