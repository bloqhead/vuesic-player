# vuesic-player

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

---

## Caveats / Tradeoffs

- I was originally fetching a mock API (just a local JSON file) but found it was quicker for this exercise to work with hard-coded data in the store file.
- I had to learn how to use Vuex on the fly. There was a lot of referencing the documentation, writing mutations, getters, etc. The reason I deferred to Vuex was because after scaffolding things out and planning ahead, I realized that managing the entire app's state in one place was the most ideal. My store file became the source of truth for everything and also houses all of my app's major functionality.
- To make things easier, I flattened the fake song data a bit to make it easier. Otherwise I was heading down a "how should I structure this?" rabbit hole. The app basically assumes that the user has a really disorganized music library. A more advanced version would have things more finitely organized.

## Next Steps / Wants

- It would be great to turn this into a full-fledged player with a Controls component. For this demonstration, I simplified things.

## Fancy Branch

The fancy branch is for the fun stuff. This is where the app is more polished and styled to be more visually appealing and music library app-esque. The master branch is primarily for demonstrating the core functionality of the app.
