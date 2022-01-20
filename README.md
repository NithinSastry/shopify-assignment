# shopify assignment

programming assignment. Create a UI to show 10 of NASA's images of the day

# Steps to install

1. Clone the repo
2. cd shopify-assignment
3. npm i
4. npm run build
5. visit http://localhost:3000 in the browser
6. Or visit https://nithinsastry.github.io/shopify-assignment/ to view the hosted demo

# Features present

1. User can like / unlike a photo
2. User can search based on the title of the photo
3. Loading indictor till the API response is loaded
4. UI is semantic and accessible

# Architecture

Basically the app has the following:

1. Utilities:
    Service broker: this is a simple fetch API call that interacts with NASA's APIs
2. Controller:
    Eventhub : a central place which holds event map. It has the following structure:
    {
        eventName : [handler1, handler2]
    }
    Its basically a publish and subscribe mechanism. Various views publish and subscribe to these events based on which various actions take place in the UI
    Advantages of this approach : Clear seperate of concerns between models and views. The means of communication between them is through event hub

3. Model:
    It maintains the local state of the application. the data received from the server is stored in this class.
    Invokes the service broker API and publishes an event saying data is received from server
    It is subscribed to a search event so that the model is filtered when search term is entered in the box

4. Views:
    1. AopdView: Its more of a smart view. Has the following logic:
    its subscribed to two events : when search is done and the data loaded event, so that UI can be re-rendered
    Has an event handler to change the like button to unlike and vice-versa. A single event handler is maintained to take advantage of event bubbling mechanism
    Invokes the child view to get its markup
    Has its own markup in the getMarkup method

    2. CardView: Its more of a dumb component. Has a method to return the markup

# TODO

1. the search functionliaty can utilize the features of debouncing for improved performance

