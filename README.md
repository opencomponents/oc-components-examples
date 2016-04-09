oc-components-examples
======================

This is intended to be a repository with some [OpenComponents](https://github.com/opentable/oc) examples.

## Running locally
```sh
# install oc first (you may want to sudo this)
npm i -g oc

# clone the repo
git clone https://github.com/matteofigus/oc-components-examples.git
cd oc-components-examples

# run the dev watcher
oc dev . 3030

# now open http://localhost:3030 with your browser
```

## The components
Hello world examples using different view engines: [Handlebars](handlebars-hello) and [Jade](jade-hello).

### Static resources
[This example](static-image) shows how to include static resources inside components. When developing locally, the local resources will be used, when the component will be package they will be hosted inside the cdn. When files are `css` or `js` they are automatically minified during the packaging phase.

### Server-side dependencies
[This example](node-dependencies) shows how to use a server-side dependency. Server-side dependencies are declared inside `package.json` as usual for a node module. When developing, the CLI will attempt to resolve it and install it automatically. When publishing, it is important to ensure the registry's maintainer allows that dependency to be used in its own registry. If you own the registry's yourself, [here](https://github.com/opentable/oc/blob/master/docs/advanced-operations.md#nodejs-dependencies-on-the-serverjs) you can find more informations about how to configure external dependencies to be used.

### Client-side javascript dependencies
[This example](moment) shows how to use a client-side library. The oc client will try to resolve the dependency inside the window global scope. In case the dependency will be found, it will be used, if not it will be downloaded from provided url and then the component rendering phase will start. If you want to require local dependencies you obviously can (look at the previous example).

### Styling and client-side css dependencies
If you don't want to do css in-lining, and your component needs some css that is not already on the container, you can require it and you can pause the rendering until the css is loaded and ready. [This example](styled) shows how to require a css file and how to delay the display phase using javascript.

### Nesting components
If you want to nest components, you can. [This example](nested-hello) shows how to render a nested component that is hosted in the same registry (but this is not a mandatory requirement).

### Angular, Rect, ??? as OpenComponents? Yes you can
[This example](angular-component) shows how to create an Angular.js component as OpenComponent. In this way, you can design your Angular app as usual, and use OC purely as delivery mechanism. Cool thing is that this is totally isomorphic. 

### Can I do ...? How?
[Let me know](issues) if you would like more examples about OpenComponents. I will try to update this list adding more and more examples. If you want to ask any question about OC, [open an issue in the OC main repository](https://github.com/opentable/oc).

## License
MIT
