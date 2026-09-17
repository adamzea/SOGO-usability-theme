# SOGO-usability-theme
A theme for improving the usability of a SOGO groupware web client.  It will increase contrast ratios to more accessible levels as well as add text labels to buttons thus fixing the mystery meat navigation problem and making everything easier to use. 

This is for Sogo version 5.12.9. It uses Aria-labels for most button labels but has some work-arounds for the aria-label bugs and inconsistencies in version 5.12.9's code. Also, some aria-labels are too verbose, so this theme replaces them with simpler terms. Thusly, it really only works for the English language. Other languages would need better translations in the theme code (or within SOGO itself). 



## Why we should fix mystery meat navigation
There are many studies that show how text labels on interactive elements improve the "easy to learn" and "easy to use" aspects of interaction design. 

- [Yes, icons need text labels](https://www.nngroup.com/videos/icon-text-labels/)
- [The Importance Of Labels](https://blogs.msdn.microsoft.com/jensenh/2005/11/01/the-importance-of-labels/)
- [The best icon is a text label](https://thomasbyttebier.be/blog/the-best-icon-is-a-text-label)
- [Icon usability](https://www.nngroup.com/articles/icon-usability/)
- [Do icons need labels?](https://uxdesign.cc/do-icons-need-labels-6cb4f4282c00)
- [The Obvious UI is Often the Best UI](https://medium.com/google-design/the-obvious-ui-is-often-the-best-ui-7a25597d79fd)
- [Introduction to Mystery Meat Navigation](http://www.webpagesthatsuck.com/mysterymeatnavigation.html)  
  ([2](https://web.archive.org/web/20000816204508/http://www.websitesthatsuck.com/badnavigation.html))  
  ([3](https://web.archive.org/web/20060312005922/http://www.webpagesthatsuck.com/mysterymeatnavigation.html))

---

## In the context of hamburger buttons

The reason we call them hamburger buttons is as an insult to the designer’s inability to clearly communicate the function of the interactive element.

- [What’s wrong with the hamburger button?](https://pocketnow.com/hamburger-buttons)
- [Kill the hamburger before the hamburger kills you](http://techcrunch.com/2014/05/24/before-the-hamburger-button-kills-you/)
- [A button that has the word “menu” is clicked 20% more than a hamburger button](https://web.archive.org/web/20170714093902/https://sitesforprofit.com/menu-eats-hamburger)
- [The hamburger is bad for you](http://mor10.com/hamburger-bad/)
- [Why and how to avoid hamburger menus](https://lmjabreu.com/post/why-and-how-to-avoid-hamburger-menus/)
- [Apple says don’t use hamburger menus on iOS](http://blog.manbolo.com/2014/06/30/apple-on-hamburger-menus)
- [Time Magazine had to launch a tutorial pop-up explaining the hamburger menu](http://i0.wp.com/digiday.com/wp-content/uploads/2014/05/time-hamburger.png)
- [To hamburger menu or not? Web publishers’ new addiction to hiding navigation – Digiday](https://digiday.com/media/the-problem-with-the-hamburger-menu/)
- [Why we banished the hamburger menu](https://redbooth.com/blog/hamburger-menu-iphone-app)
- [Hamburger buttons could be costing you half of your user engagement](http://thenextweb.com/dd/2014/04/08/ux-designers-side-drawer-navigation-costing-half-user-engagement/)
- [3 Good Reasons Why You Might Want to Remove that Hamburger Menu from Your Product](https://medium.muz.li/3-good-reason-why-you-might-want-to-remove-that-hamburger-menu-from-your-product-69b9499ba7e2)
- [Hamburger Menus and Hidden Navigation Hurt UX Metrics](https://www.nngroup.com/articles/hamburger-menus/)
- [5 Reasons to Avoid the Desktop Hamburger Menu Icon](https://designshack.net/articles/navigation/reasons-to-avoid-the-desktop-hamburger-menu-icon/)  
  *(It really should be avoided on mobile too for the same reasons though.)*
- [Hamburger buttons are inherently bad UX, particularly on desktop : r/redesign](https://www.reddit.com/r/redesign/comments/7zosyj/hamburger_buttons_are_inherently_bad_ux/)
- [Death by Hamburger. Why three little lines are hurting your… | by Fiona Foster | UX Collective](https://uxdesign.cc/death-by-hamburger-2d1db115352a)
