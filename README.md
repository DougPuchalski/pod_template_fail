Demonstrates failure of ember-jj-abrams-resolver in finding named templates in pod structure

curl http://localhost:4200/pass
curl http://localhost:4200/fail

Log for fialing case

```
Error while loading route: Error: Assertion Failed: You specified the templateName fail/hello for <pod-template@view:fail::ember294>, but it did not exist.
    at new Error (native)
    at Error.Ember.Error (ember.js:910:19)
    at Object.Ember.assert (ember.js:73:11)
    at eval (ember.js:23247:11)
    at ComputedPropertyPrototype.get (ember.js:4951:38)
    at get (ember.js:2176:17)
    at Ember.Observable.Ember.Mixin.create.get (ember.js:12425:12)
    at Ember.Route.Ember.Object.extend.render (ember.js:36974:32)
    at Ember.Route.Ember.Object.extend.renderTemplate (ember.js:36894:10)
    at Ember.Route.Ember.Object.extend.setup (ember.js:36337:12) 
```