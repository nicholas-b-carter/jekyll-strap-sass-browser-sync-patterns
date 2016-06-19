---
title: "Tours"
preview: false
---

<div class="pl-pattern">
<h3>Tours</h3>

#### Purpose
Users need to a guided overview of functionality that they may not be familiar with yet.

#### Description
- Tours can appear in the center of the screen or next to a related element
- Tours can contain text, forms, images, or videos
- Optional step indicators can be added to indicate where the user is within the tour
- An optional close (x) button can be added if the user is able to skip the tour
- The background can optionally be grayed out while highlighting a related element

{::nomarkdown}
<div class="pl-preview">
<div class="popover left" style="width: 400px; z-index: 1; max-width: 100%; position: relative; display: block; margin-left: 0;">
  <div class="arrow"></div>
  <div class="popover-content padding-2">
    <h3 class="margin-top-0 margin-bottom-2">Welcome! <span class="close pull-right">&times;</span></h3>
    <p>Any images placed within /app/images will be automatically copied to the build/images directory. If running gulp prod, they will also be compressed via imagemin.</p>
  </div>
  <div class="popover-toolbar btn-toolbar">
    <ol class="nav-dots pull-left margin-top-1 margin-bottom-0 margin-left-1">
      <li class="active">
          <a href="">Step 1</a>
      </li>
      <li>
          <a href="">Step 2</a>
      </li>
      <li>
          <a href="">Step 3</a>
      </li>
    </ol>
      <button class="btn btn-primary pull-right">Start the tour</button>
      <button class="btn btn-default pull-right">Skip</button>
  </div>
</div>

<hr>

<div class="popover left" style="width: 400px; z-index: 1; max-width: 100%; position: relative; display: block; margin-left: 0;">
  <div class="arrow"></div>
  <div class="popover-content padding-2">
    <h3 class="margin-top-0 margin-bottom-2">Searching for documents <span class="close pull-right">&times;</span></h3>
    <p>Any images placed within /app/images will be automatically copied to the build/images directory. If running gulp prod, they will also be compressed via imagemin.</p>
    <p>
      <a href="">Learn more</a>
    </p>
  </div>
  <div class="popover-toolbar btn-toolbar">
    <ol class="nav-dots pull-left margin-top-1 margin-bottom-0 margin-left-1">
      <li>
          <a href="">Step 1</a>
      </li>
      <li class="active">
          <a href="">Step 2</a>
      </li>
      <li>
          <a href="">Step 3</a>
      </li>
    </ol>
      <button class="btn btn-primary pull-right">Next</button>
      <button class="btn btn-default pull-right">Back</button>
  </div>
</div>

<hr>

<div class="popover" style="width: 400px; z-index: 1; max-width: 100%; position: relative; display: block; margin-left: 0;">
  <div class="arrow"></div>
  <div class="popover-content padding-2">
    <h3 class="margin-top-0 margin-bottom-2">Ready to sign up? <span class="close pull-right">&times;</span></h3>
    <p>Signing up lets you save your searches for later. You can also opt-in for email alerts whenever your search results change.</p>
    <form role="form" class="margin-top-2">
      <div class="form-group">
          <label class="control-label required" requiredfor="emailInput">Email</label>
          <input type="email" class="form-control" id="emailInput">
      </div>
      <div class="form-group">
          <label class="control-label required" for="passwordInput">Password</label>
          <input type="password" class="form-control" id="passwordInput" >
      </div>
      <div class="form-group">
          <label class="control-label required" for="passwordInput2">Confirm password</label>
          <input type="password" class="form-control" id="passwordInput2" >
      </div>
  </form>
  </div>
  <div class="popover-toolbar btn-toolbar">
    <ol class="nav-dots pull-left margin-top-1 margin-bottom-0 margin-left-1">
      <li>
          <a href="">Step 1</a>
      </li>
      <li>
          <a href="">Step 2</a>
      </li>
      <li class="active">
          <a href="">Step 3</a>
      </li>
    </ol>
      <button class="btn btn-primary pull-right">Submit</button>
      <button class="btn btn-default pull-right">Maybe later</button>
  </div>
</div>

</div>
{:/nomarkdown}

{% highlight html %}
<div class="popover left">
    <div class="arrow"></div>
    <h3 class="popover-title">Add note</h3>
    <div class="popover-content">
        <textarea placeholder="Enter note here" class="form-control" name="" id="" rows="3"></textarea>
    </div>
    <div class="popover-toolbar">
        <button class="btn btn-hover btn-icon-only"><i class="icon icon-image"></i><span class="sr-only">Add image</span></button>
        <button class="btn btn-hover btn-icon-only"><i class="icon icon-chain"></i><span class="sr-only">Add link</span></button>
        <button class="btn btn-primary pull-right">Add</button>
    </div>
</div>
{% endhighlight %}

</div>
