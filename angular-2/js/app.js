(function() {
    var AppComponent = ng
      .Component({
        selector: 'myApp',
      })
      .View({

      })
      .Class({
        constructor: function () { }
      });
    document.addEventListener('DOMContentLoaded', function() {
      ng.bootstrap(AppComponent);
    });
})();
