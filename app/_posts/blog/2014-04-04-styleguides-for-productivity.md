---
layout: post
title:  Boost your efficiency with a styleguide
date:   2014-04-04 10:44:06
categories:
- blog
---
A styleguide provides a branded look and feel to anything you produce. However, a web page is affected by many factors, including different devices, browsers, and screen sizes. We need a more robust guide for describing web creations.

<!--more-->

## Bring on pattern libraries

We have a need for modularity in web design, so rather than static definitions we describe patterns. Patterns are commonly used in the clothing industry and are used to create clothing from paper representations.

Just as a clothing designer can choose different fabrics or colors, a web designer can modify the look and feel of a module while maintaining the same shape and components. Example pattern libraries can be found around the internet. Such as, <a href="http://www.google.com/url?q=http%3A%2F%2Fpattern-lab.info%2F&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNELTwtYm8BhTjbJ0ioGTjjGtkmiYw">Pattern Lab</a>, <a href="http://www.google.com/url?q=http%3A%2F%2Fsmacss.com%2F&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNEy37dckxSvZTCFb4HVGPtcBJsQig">SMACSS</a>, <a href="http://www.google.com/url?q=http%3A%2F%2Fgetbootstrap.com%2F&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNFcuWE7kcMSjG0AtLf81JzsTheXPQ">Twitter Bootstrap</a>, and <a href="http://www.google.com/url?q=http%3A%2F%2Fwww.bbc.co.uk%2Fgel&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNEpF1lSrfaffGFNWhBYkzu47cTdyg">BBC&rsquo;s GEL</a>, to name a few.

## How can a styleguide improve efficiency?

Good question, let&rsquo;s go over its benefits:

### View all your styles in one place

Imagine your designers hand you a comp filled with form elements and it&rsquo;s your job to apply the styles to the site. Each type of input, button, textarea, have to be styled. Is there one place on your site where you can see all these items? How will these changes affect your search and login forms? The pattern library provides you with a view of all&nbsp;your headings, form elements, and more, allowing you to quickly spot problems.

### Reference for designers and programmers

When a designer needs colors, fonts, or even an example module for a design they&rsquo;ll have a place to get it. Same with a programmer who is looking for specific class names or HTML structures. You can also provide quick references to other curious coworkers.

The key to building your own site is to build it fast. Before you can change your mind. Once you have something up you can continue to improve on it.

### Share with partners

Your brand may have product web pages separate from your main site, or you may have business partners that need to create a site based on your brand. The pattern library provides all the information to build a site using your brand.

### Sandbox

The sandbox is where you&rsquo;ll be doing the bulk of your work. Build your HTML comps, demo functionality, incorporate new features, or just experiment.

#### Present interactive designs

Client comments on design are such an industry standard that they&rsquo;ve been immortalized as <a href="http://www.google.com/url?q=http%3A%2F%2Fsharpsuits.net%2F&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNFXOVhzVJzR9sq0fUwho8r_1aqGgA">posters </a>and <a href="http://www.google.com/url?q=http%3A%2F%2Ftheoatmeal.com%2Fcomics%2Fdesign_hell&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNGsJ0Ba_LnbigD8tJrjfiuUJdc2VQ">comics</a>. In design meetings it&rsquo;s often hard to keep a client focused on a relevant topic. As a front-end developer, you can help your design comrades by building interactive mock-ups.

When presenting a fully functional HTML mock-up, clients tend to focus more on the topics you want them to. An HTML mock-up has more capability than an image as well. You can showcase <a href="http://www.google.com/url?q=http%3A%2F%2Fbradfrostweb.com%2Fblog%2Fpost%2Fthe-post-psd-era%2F&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNHPZO46SnLYkFyesqbJWjBBNR7K_A">responsive design, articulating states</a>, web fonts, and JavaScript.

#### Experiment

You&rsquo;ve just read an article about CSS animations and you want to create some scrolling effects. Here&rsquo;s the perfect place for experimenting on your site. The sandbox also provides a method to collect useful snippets for potential use in later projects.


## This seems like a lot of work

You&rsquo;re right, writing a styleguide is a lot of work, but in the long run it will save you hours of &ldquo;wasted&rdquo; time and provide you with an intimate knowledge of your code. Having this knowledge allows you to solve problems much faster, and the sandbox provides you instant feedback while writing code.

Let me share with you how I became more efficient by building a styleguide and improving my workflow. Then, how to completely automate the process of building the styleguide as you write new code.

### My old workflow

At my workplace it&rsquo;s really difficult to get something from an idea to production. The design process is pretty standard. We have a goal and some guidelines. We produce wireframes and design comps, but to take it any further we need our information technology department (IT) to step in.

<img alt="" src="/img/post/styleguide_01.png" style="width: 624.00px; height: 390.67px;">

We have a Java based environment and portal software. We use git for version control, a package manager, and several environments for publishing.

The IT department supplies us with a git repository and incorporates it into the portal system. Then using a Java IDE we work locally on a copy of the website before publishing, and we notify IT when we&rsquo;re ready to publish. If they approve, they&rsquo;ll notify us when they&rsquo;ve scheduled a build.

All the while, we wait anxiously at our computer to see the fruits of our creativity. When the time arrives we hit refresh in our browser, with the URL already entered, and watch as pixels of colored light render our carefully designed and coded web page.

First we check that our changes made it into the build. If they haven&rsquo;t, we notify IT and they rerun the process. Next, we evaluate if the update fixed the problem.

Let&rsquo;s say we modified a wrapper in the portal to have 20px of padding:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
.portal-wrapper {
  padding: 20px;
}
{% endhighlight %}

As we view it on the newly rendered page we see that it fixes the problem perfectly. However, a page with a special layout is completely broken. It&rsquo;s an easy fix, let&rsquo;s just remove the padding on the special layout:

.special-layout .portal-wrapper {
  padding: 0;
}

Now we need to get IT to do another build, but they can&rsquo;t. It&rsquo;s the end of the day and the administrator left to pick their child up from school. We&rsquo;ll have to wait until next week, since today&rsquo;s Friday. It might be an easy fix, but we have no control in fixing it.

<img alt="" src="/img/post/styleguide02.gif" style="width: 400.00px; height: 225.00px;">

If only I had known about the unique page layout before committing the style. We do have a way of fixing it, but it feels dirty, like I need to take a shower afterwards. The change is part of a larger build that has to go out for the weekend. So, I log into the portal admin tool and add an inline style to the unique page. It works, but to our detriment, as it may create a problem later.

This whole process felt tedious and disjointed, which led me to find a better way&hellip;

**In the following section I&rsquo;ll show you how to:**

- Automatically generate a styleguide
- Use a static templating system
- Preprocess, minify, and concatenate your CSS and JS
- Accurately recreate your company&rsquo;s site to fully test pages before you commit
- Perform this whole process in seconds

### Let&rsquo;s grunt!

No, this isn&rsquo;t an onomatopoeia for a pig or an exclamation of manliness. Grunt is a task runner, and it is the industrial revolution of front-end development. You can now run every process of development, on your own computer, in seconds. You control every detail of minifying, linting, concatenating, preprocessing, and much more.

Like any factory, Grunt is nothing without some machines to configure. Let&rsquo;s say you&rsquo;re making peanut M&amp;M&rsquo;s. You&rsquo;ll need to coat peanuts in chocolate and a candy shell, color them, and print them with an &ldquo;m&rdquo;. Then package and distribute them. Every bag produced by&nbsp;a set of machines that have been&nbsp;calibrated based on user expectations.

Websites are very similar. Every aspect of development can be broken into a task and fine-tuned to obtain the results you want.

### A living document

Whenever I wrote a styleguide there was a limited amount of time it was relevant. I often found myself saying, &ldquo;It&rsquo;s a little outdated.&rdquo; That&rsquo;s because as a developer, I was always trying to perfect my code, and I found myself putting off updating the styleguide until I was done. But I was never done, there was always some new feature, or optimization to keep me busy.

Having a living document means that your styleguide updates automatically when you update your code. The HTML is constructed based on a template, and the generated examples even have syntax highlighting!

<img alt="" src="/img/post/styleguide03.gif" style="width: 320.00px; height: 220.00px;">

A good example of this is <a href="https://www.google.com/url?q=https%3A%2F%2Fgithub.com%2Fstyleguide%2Fcss&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNHh0DPKVs2PdtldtkR59aGjouTlaw">Github&rsquo;s styleguide</a>. They use a tool called KSS, or <a href="https://www.google.com/url?q=https%3A%2F%2Fgithub.com%2Fkneath%2Fkss&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNHcIf0mikc8m2eXzzuTOZhYUSGqVw">Knyle Style Sheets</a>, to automatically generate pages containing style definitions and examples. While KSS is awesome, it&rsquo;s only a small part of your factory.

### Meet Jekyll

Jekyll, &ldquo;Transforms your plain text into static websites and blogs&rdquo;. If this doesn&rsquo;t sound like a big deal to you, then you haven&rsquo;t used it yet. Github uses this tool to generate web pages. Are you familiar with <a href="http://www.google.com/url?q=http%3A%2F%2Fgetbootstrap.com%2F&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNFcuWE7kcMSjG0AtLf81JzsTheXPQ">Twitter Bootstrap</a>? That&rsquo;s built with Jekyll.

So, what does that mean for your styleguide? It means you can set up your site the same way you would in a dynamic environment. Build templates and include files based on conditions and variables. Jekyll uses the <a href="http://www.google.com/url?q=http%3A%2F%2Fdocs.shopify.com%2Fthemes%2Fliquid-basics&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNH5bfnjzqzFP0hK1Ls2fdoEhZKfCw">Liquid </a>templating system, developed by Shopify, which gives you the ability to use operators, logic, loops, and more to build your pages.

**With Jekyll, you can:**

- Create static pages in a dynamic way
- Pass conditions during the build process
- Use the same includes as your production environment
- Use the same layouts as your production environment
- Create mock includes and layouts for testing and experimenting
- Create pages exactly like your production environment or as different as you want, all from the same folder

### New improved workflow

Thanks to Grunt and KSS, designers and developers can be confident that your styleguide is an up-to-date reference. Greatly enhancing research and discovery by the design team. Your developers will also have a better resource when building the latest feature, and will be able to update the styleguide as easy as you.

In addition, because of Jekyll you have a factory at your fingertips to generate HTML mock-ups that better help your clients understand new designs. Additional Grunt packages allow access to preprocessors, linters, and more. There&rsquo;s even a web server to more accurately display your web pages as they were meant to be seen.

With these tools at your disposal you can mimic your production environment with as much detail as you want. Thereby eliminating the reliance on a third-party for accurate previews. Without being tied to an IDE, you can also use your favorite text editor to write code.

<img alt="" src="/img/post/styleguide01.png" style="width: 624.00px; height: 374.67px;">

In the following section you&rsquo;ll find links that will help you get started on building styleguides and working with Grunt. I&rsquo;ve also included a generator that that installs everything you need to get started.

## Further reading

If you've enjoyed my writing up to this point, then you may want to review these other resources.

### My styleguide generator
- <a href="https://www.google.com/url?q=https%3A%2F%2Fgithub.com%2Fnicmarson%2Fgenerator-styleguide&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNGHplSwKIgxZodcFAmcsf0EKmh1uQ">https://github.com/nicmarson/generator-styleguide</a>

### Styleguide resources
- <a href="http://www.google.com/url?q=http%3A%2F%2F24ways.org%2F2011%2Ffront-end-style-guides%2F&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNHfLop84pnOAazfsnG1HKaHFRLpqQ">http://24ways.org/2011/front-end-style-guides/</a>
- <a href="http://www.google.com/url?q=http%3A%2F%2Fpattern-lab.info%2F&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNELTwtYm8BhTjbJ0ioGTjjGtkmiYw">http://pattern-lab.info/</a>
- <a href="http://www.google.com/url?q=http%3A%2F%2Fwww.uie.com%2Fbrainsparks%2F2014%2F01%2F16%2Fbrad-frost-creating-responsive-interfaces%2F&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNG0jea8KTVjewf9UdAeEJy2pXZAgQ">http://www.uie.com/brainsparks/2014/01/16/brad-frost-creating-responsive-interfaces/</a>
- <a href="http://www.google.com/url?q=http%3A%2F%2Fbradfrost.github.io%2Fthis-is-responsive%2Fpatterns.html&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNEFjoydiuELMPk_NeutNz4MAhFEQg">http://bradfrost.github.io/this-is-responsive/patterns.html</a>
- <a href="http://www.google.com/url?q=http%3A%2F%2Fcss-tricks.com%2Fcss-style-guides%2F&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNG_9mOiLkYHuCuvB0IDQjqzkrhtIQ">http://css-tricks.com/css-style-guides/</a>
- <a href="http://www.google.com/url?q=http%3A%2F%2Fsmacss.com%2F&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNEy37dckxSvZTCFb4HVGPtcBJsQig">http://smacss.com/</a>
- <a href="https://www.google.com/url?q=https%3A%2F%2Fmedium.com%2Fobjects-in-space%2Ff6f404727&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNECiTml5pmo3Ht6d15oakS0w1yYlw">https://medium.com/objects-in-space/f6f404727</a>

#### Pattern libraries

Let these examples inspire your own guide.

- <a href="http://www.google.com/url?q=http%3A%2F%2Fux.mailchimp.com%2Fpatterns&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNG_vEuZOCCpIxsBTaQHtkL6HHlTTA">http://ux.mailchimp.com/patterns</a>
- <a href="http://www.google.com/url?q=http%3A%2F%2Fgetbootstrap.com%2F&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNFcuWE7kcMSjG0AtLf81JzsTheXPQ">http://getbootstrap.com/</a>
- <a href="http://www.google.com/url?q=http%3A%2F%2Fwww.bbc.co.uk%2Fgel&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNEpF1lSrfaffGFNWhBYkzu47cTdyg">http://www.bbc.co.uk/gel</a>
- <a href="https://www.google.com/url?q=https%3A%2F%2Fgithub.com%2Fstyleguide%2Fcss&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNHh0DPKVs2PdtldtkR59aGjouTlaw">https://github.com/styleguide/css</a>
- <a href="http://www.google.com/url?q=http%3A%2F%2Fwww.starbucks.com%2Fstatic%2Freference%2Fstyleguide%2F&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNE-DMen8RNZ0e3Q8RIoauhNQJ6QaQ">http://www.starbucks.com/static/reference/styleguide/</a>

#### Task runners

Use grunt or gulp to automate your tasks.

- <a href="http://www.google.com/url?q=http%3A%2F%2Fgruntjs.com%2F&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNGQtfBL4Pd7X63QmhZVMExTQLd12A">http://gruntjs.com/</a>
- <a href="http://www.google.com/url?q=http%3A%2F%2Fgruntjs.com%2Fgetting-started&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNE1SuvnafQU_ChrvF_w0wwW_qfoeQ">http://gruntjs.com/getting-started</a>
- <a href="http://www.google.com/url?q=http%3A%2F%2Fwww.sitepoint.com%2Fwriting-awesome-build-script-grunt%2F&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNGFLWXD_Zz4tR4d7UwZkAfMiw6sxQ">http://www.sitepoint.com/writing-awesome-build-script-grunt/</a>
- <a href="https://www.google.com/url?q=https%3A%2F%2Fnpmjs.org%2Fpackage%2Fgulp&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNEDyZcmHq-y0Fq0KdNr8t6lAGASaw">https://npmjs.org/package/gulp</a>

#### KSS

Build style sheets from you CSS comments.

- <a href="https://www.google.com/url?q=https%3A%2F%2Fnpmjs.org%2Fpackage%2Fgrunt-kss&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNHQaZv2_zDyFccbp78zWL77lyKUUA">https://npmjs.org/package/grunt-kss</a>

#### Yeoman, Jekyll

Build HTML from templates and Liquid coding.

- <a href="http://yeoman.io/">http://yeoman.io/</a>
- <a href="http://www.google.com/url?q=http%3A%2F%2Fjekyllrb.com%2F&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNH7nDJRVmAc9lbjBVqHZmSaJKFdCA">http://jekyllrb.com/</a>

#### Bower

Use a package manager to&nbsp;keep your resources up to date.

- <a href="http://www.google.com/url?q=http%3A%2F%2Fbower.io%2F&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNEq7PqN93tv-ulwZao7M8zit_tYhw">http://bower.io/</a>

[jekyll-gh]:    https://github.com/mojombo/jekyll
[jekyll]:       http://jekyllrb.com
[sass]:         http://sass-lang.com
[bower]:        http://bower.io/
[yeoman]:       http://yeoman.io/
[gh]:           http://github.com/
[gh-pages]:     http://pages.github.com/
[grunt]:        http://gruntjs.com/
