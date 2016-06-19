---
title: "Step indicators"
preview: false
---

<div class="pl-pattern">
<h3>Step indicators</h3>

Step indicators are used to represent an ordered, sequential process. They can be used as navigation, or just as a visual indicator for where a user is within a process.

#### Horizontal

{::nomarkdown}
<div class="pl-preview">
<div style="max-width: 600px;">
    <ol class="nav-steps">
        <li  style="width:33.3%">
            <span>Applicant information</span>
        </li>
        <li class="active" style="width:33.3%">
            <span>Mark information</span>
        </li>
        <li class="" style="width:33.3%">
            <span>Goods and services</span>
        </li>
    </ol>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
<ol class="nav-steps">
    <li  style="width:33.3%">
        <span>Applicant information</span>
    </li>
    <li class="active" style="width:33.3%">
        <span>Mark information</span>
    </li>
    <li class="" style="width:33.3%">
        <span>Goods and services</span>
    </li>
</ol>
{% endhighlight %}


#### Vertical

The veritcal style is useful for navigation or for "scroll spy" behavior.

{::nomarkdown}
<div class="pl-preview">
<div style="max-width: 600px;">
    <ol class="nav-steps nav-stacked">
        <li>
            <a href="">Applicant information</a>
        </li>
        <li class="active">
            <span href="">Mark information</span>
        </li>
        <li>
            <a href="">Goods and services</a>
        </li>
    </ol>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
<ol class="nav-steps">
    <li  style="width:33.3%">
        <span>Applicant information</span>
    </li>
    <li class="active" style="width:33.3%">
        <span>Mark information</span>
    </li>
    <li class="" style="width:33.3%">
        <span>Goods and services</span>
    </li>
</ol>
{% endhighlight %}


#### Dots

The dot step indicator is useful for very simple processes, like a tour.

{::nomarkdown}
<div class="pl-preview">
<div style="max-width: 600px;">
    <ol class="nav-dots">
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
</div>
</div>
{:/nomarkdown}

{% highlight html %}
<ol class="nav-dots">
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
{% endhighlight %}

</div>

