---
title: "Cards"
---
{::nomarkdown}
<div class="text-center" style="margin-top:10px; margin-bottom:0px">Card patterns are currently in <span class="label label-info">BETA</span> <a href="nicholas.b.carter@gmail.com">Leave feedback</a></div>
{:/nomarkdown}

<div class="pl-pattern" style="margin-top:10px">


### Cards overview

#### Purpose
A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.

#### Description

Cards require a small amount of markup and classes to provide you with as much control as possible. These classes and markup are flexible though and can typically be remixed and extended with ease. For example, if your card has no flush content like images, feel free to put the .card-block class on the .card element to consolidate your markup. The current implementation of the card patterns below are based on the forthcoming [Bootstrap 4 release](https://github.com/twbs/bootstrap/tree/v4-dev). 


#### Merged example
Cards support a wide variety of content, including images, text, list groups, links, and more. Mix and match multiple content types to create the card you need.

{::nomarkdown}
<div class="pl-preview">
    <div class="row" style="margin:50px 0; max-width:980px">
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-4">
            <div class="card">
                <div class="card-header">
                    Featured
                  </div>
                  <img class="card-img-top img-responsive" style="opacity: .7" src="/designpatterns/generated/images/place-holder.png" alt="Card image cap">
                  <div class="card-block">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                  </ul>
                  <div class="card-block">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                  </div>
                   <div class="card-footer text-muted">
                    2 days ago
                  </div>
            </div>
        </div>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
 <div class="card">
    <div class="card-header">
        Featured
      </div>
      <img class="card-img-top img-responsive" data-src="..." alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
      <div class="card-block">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
       <div class="card-footer text-muted">
        2 days ago
      </div>
</div>
{% endhighlight %}



#### Image position & image caps
Images can be positioned inside of cards quickly and easily with `.card-image`.  Be sure to set `.img-responsive` to allow the image to shrink and grow responsively.

{::nomarkdown}
<div class="pl-preview">
    <div class="row" style="margin:50px 0; max-width:980px">
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="card">
              <img class="card-img-top img-responsive" style="opacity: .7" src="/designpatterns/generated/images/place-holder.png" alt="Card image cap">
              <div class="card-block">
                <h4 class="card-title">Card image top</h4>
                <p class="card-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
              </div>
              <div class="card-block">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="card">
              <div class="card-block">
                <h4 class="card-title">Card image middle</h4>
              </div>
              <img class="card-img img-responsive" style="opacity: .7" src="/designpatterns/generated/images/place-holder-2.png" alt="Card image cap">
              <div class="card-block">
               <p class="card-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
        </div>
         <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="card">
              <div class="card-block">
                <h4 class="card-title">Card image bottom</h4>
                    <p class="card-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
              </div>
            <img class="card-img-bottom img-responsive" style="opacity: .7" src="/designpatterns/generated/images/place-holder-3.png" alt="Card image cap">
            </div>
        </div>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="card">
  <img class="card-img-top img-responsive" data-src="..." alt="Card image cap">
  <div class="card-block">
    <h4 class="card-title">Card image top</h4>
    <p class="card-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
  </div>
  <div class="card-block">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

{% endhighlight %}


#### Image cards
Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need `.card-inverse`.

{::nomarkdown}
<div class="pl-preview">
    <div class="row" style="margin:50px 0; max-width:980px">
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-4">
            <div class="card">
                  <img class="card-img img-responsive" src="/designpatterns/generated/images/place-holder.png" style="opacity:.2" alt="Card image">
                  <div class="card-img-overlay">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-4">
            <div class="card card-inverse">
                  <img class="card-img img-responsive" style="opacity: .7" src="/designpatterns/generated/images/place-holder-2.png" alt="Card image">
                  <div class="card-img-overlay">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
            </div>
        </div>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="card card-inverse">
  <img class="card-img" data-src="..." alt="Card image">
  <div class="card-img-overlay">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
{% endhighlight %}

#### Background variants
Cards include their own variant classes for quickly changing the background-color and border-color of a card. Darker colors require the use of `.card-inverse`.

{::nomarkdown}
<div class="pl-preview">
    <div class="row" style="margin:50px 0; max-width:980px">
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <div class="card card-inverse card-primary text-xs-center">
              <div class="card-block">
                <blockquote class="card-blockquote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer>Using .card-primary</footer>
                </blockquote>
              </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <div class="card card-inverse card-success text-xs-center">
              <div class="card-block">
                <blockquote class="card-blockquote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer>Using .card-success</footer>
                </blockquote>
              </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <div class="card card-inverse card-info text-xs-center">
              <div class="card-block">
                <blockquote class="card-blockquote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer>Using .card-info</footer>
                </blockquote>
              </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <div class="card card-inverse card-danger text-xs-center">
              <div class="card-block">
                <blockquote class="card-blockquote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer>Using .card-danger</footer>
                </blockquote>
              </div>
            </div>
        </div>        
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="card card-inverse card-danger text-xs-center">
  <div class="card-block">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>Using .card-danger</footer>
    </blockquote>
  </div>
</div>
{% endhighlight %}


#### Headers & footers
Add an optional header and/or footer within a card.

{::nomarkdown}
<div class="pl-preview">
    <div class="row" style="margin:50px 0; max-width:980px">
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="card">
              <div class="card-header">
                Featured
              </div>
              <div class="card-block">
                <h4 class="card-title">Special title treatment</h4>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
        </div>
         <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="card text-xs-center">
              <div class="card-header">
                Featured
              </div>
              <div class="card-block">
                <h4 class="card-title">Special title treatment</h4>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
              <div class="card-footer text-muted">
                2 days ago
              </div>
            </div>
        </div> 
         <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="card text-xs-center">
              <div class="card-block">
                <h4 class="card-title">Special title treatment</h4>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
              <div class="card-footer text-muted">
                2 days ago
              </div>
            </div>
        </div>  
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-block">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{% endhighlight %}

#### Card groups
Use card groups to render cards as a single, attached element with equal width and height columns. By default, card groups use `display: table;` and `table-layout: fixed;` to achieve their uniform sizing. However, enabling flexbox mode can switch that to use `display: flex;` and provide the same effect.

{::nomarkdown}
<div class="pl-preview">
    <div class="row" style="margin:50px 0; max-width:980px">
        <div class="col-xs-12">
            <div class="card-group">
              <div class="card">
                <img class="card-img-top img-responsive" style="opacity: .7" src="/designpatterns/generated/images/place-holder-3.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top img-responsive" style="opacity: .7" src="/designpatterns/generated/images/place-holder.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top img-responsive" style="opacity: .7" src="/designpatterns/generated/images/place-holder-2.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
        </div>   
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="card-group">
  <div class="card">
    <img class="card-img-top img-responsive" data-src="..." alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top img-responsive" data-src="..." alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top img-responsive" data-src="..." alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
{% endhighlight %}

#### Card decks
Need a set of equal width and height cards that aren’t attached to one another? Use card decks. By default, card decks require two wrapping elements: `.card-deck-wrapper` and a `.card-deck`. We use table styles for the sizing and the gutters on .card-deck. The .card-deck-wrapper is used to negative margin out the border-spacing on the `.card-deck`.

*ProTip!* If you enable flexbox mode, you can remove the `.card-deck-wrapper`.

{::nomarkdown}
<div class="pl-preview">
    <div class="row" style="margin:50px 0; max-width:980px">
        <div class="col-xs-12">
            <div class="card-deck-wrapper">
              <div class="card-deck">
                <div class="card">
                  <img class="card-img-top img-responsive" style="opacity: .7" src="/designpatterns/generated/images/place-holder.png" alt="Card image cap">
                  <div class="card-block">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div class="card">
                  <img class="card-img-top img-responsive" style="opacity: .7" src="/designpatterns/generated/images/place-holder-3.png" alt="Card image cap">
                  <div class="card-block">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div class="card">
                  <img class="card-img-top img-responsive" style="opacity: .7" src="/designpatterns/generated/images/place-holder-2.png" alt="Card image cap">
                  <div class="card-block">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
        </div>   
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="card-deck">
    <div class="card">
      <img class="card-img-top img-responsive" data-src="..." alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top img-responsive" data-src="..." alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top img-responsive" data-src="..." alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
</div>
{% endhighlight %}

#### Columns & masonry
Cards can be organized into Masonry-like columns with just CSS by wrapping them in `.card-columns.` Only applies to small devices and above.

{::nomarkdown}
<div class="pl-preview">
    <div class="row" style="margin:50px 0; max-width:980px">
        <div class="col-xs-12">
            <div class="card-columns">
              <div class="card">
                <img class="card-img-top img-responsive" style="opacity: .7" src="/designpatterns/generated/images/place-holder-2.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Card title that wraps to a new line</h4>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
              <div class="card card-block">
                <blockquote class="card-blockquote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <small class="text-muted">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                </blockquote>
              </div>
              <div class="card">
                <img class="card-img-top img-responsive" style="opacity: .7" src="/designpatterns/generated/images/place-holder.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div class="card card-block card-inverse card-primary text-xs-center">
                <blockquote class="card-blockquote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                </blockquote>
              </div>
              <div class="card card-block text-xs-center">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>

              <div class="card card-block text-xs-right">
                <blockquote class="card-blockquote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                </blockquote>
              </div>
              <div class="card card-block">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
              <div class="card">
                <img class="card-img img-responsive" style="opacity: .7" src="/designpatterns/generated/images/place-holder-3.png" alt="Card image">
              </div>
            </div>
        </div>   
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="card-columns">
  <div class="card">
    <img class="card-img-top" data-src="..." alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">Card title that wraps to a new line</h4>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div class="card card-block">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="..." alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card card-block card-inverse card-primary text-xs-center">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
      <footer>
        <small>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card card-block text-xs-center">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
  <div class="card">
    <img class="card-img" data-src="..." alt="Card image">
  </div>
  <div class="card card-block text-xs-right">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card card-block">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
{% endhighlight %}