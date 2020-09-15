# HTML APIs

HTML5 is more powerful than ever with the support of below APIs.

## Geolocation:

Geolocation is the geo-graphical position of any object.It is determined with the latitude and longitude values.To know about the user's location is very sensitive information thus it requries user's consent to get the geo locations.

You can use `navigator` object available inside global `window` object to get the current location of user.

### Navigator

`navigator` has geolocation object on which you can all getCurrentLocation method. This method takes a function as an argument where you can get cords object which has latitude and longitude values.

Apart from geolocation navigator has several other objects which can be beneficial:
    - usb
    - storage
    - serviceWorker
    - platform
    - permissions
    - etc

## Drag and Drop:

This allows user to implment make elements draggable and droppable to specific areas. Following are the key attributes and events of this api:

- `draggable`: expects boolean, it should be use on the element to which you want to make draggable
- `ondragstart`: this is an event which will be triggered when dragging starts.It should be used on the elemment to which you want to make draggable
- `ondrop`: this is an event which will get triggered when dragging done, it should be on the area where you want to drop the draggable element
- `ondragover`: event specifies where the dragged data can be dropped.

## Web Storage

This api allows to store data persistanlty or sessional.

- window.localStorage - stores data with no expiration date
- window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)

## Web Worker
Web workers are like background processes (deamons). you should use web-workers to perform heavy operations in background to prevent UI to get unresponsive.

## SSE (Server Sent Events)
HTML has capability to listen events now with `EventSource` implementation. Prior to this frontend uses poll mechanism to get the updates from server.Keep some basic things in mind while implementing SSE:

    - API endpoint should return header content-type with `text/event-stream`
    - API endpoint should return header connection with value alive
    - response shuold have `data:` at the front of actual data



# Miscellanious
- Object.keys(window) to get all global accessible objects
- Chrome doesn't allow created web workers with file:// protocol


