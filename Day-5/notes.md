# Media
Multimedia on the web is sound, music, videos, movies, and animations.

## Video
To show a video in HTML, use the `<video>` element. You have to pass the source in `source` tag with video type.

video tag attributes:
 - width
 - hieght
 - controls
 - muted
 - autoplay
 - loop
 - preload
 - disablePictureInPicture: use this with `<video>` if you do not want to allow picture in picture mode 
 - crossorigin: you need to allow CORS from asset server too when accessing assets

 ## audio
 To play an audio file in HTML, use the `<audio>` element.


 ## HTML Plug-ins
 Plug-ins are computer programs that extend the standard functionality of the browser.

 - The `<object>` element is supported by all browsers.The `<object>` element defines an embedded object within an HTML document.It was designed to embed plug-ins (like Java applets, PDF readers, and Flash Players) in web pages, but can also be used to include HTML in HTML:
- The `<embed>` element is supported in all major browsers.The `<embed>` element also defines an embedded object within an HTML document.Web browsers have supported the `<embed>` element for a long time. However, it has not been a part of the HTML specification before HTML5.


 # Miscellaneous
- if `autoplay` is not wokring then use it with `muted` on video tag some browsers doesn't allow playing video on load (although when you use muted true, autoplay will work)
