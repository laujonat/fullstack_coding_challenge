this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/card.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="card" style="display: block;">\n  <!-- THIS MUST BE AT THE TOP  -->\n  <!-- Get this error: "Template for directive \'card\' must have exactly one root element. templates/card.html" -->\n\n  <!-- FOR EACH CARD -->\n\n\n  <div id="profile" style="display: block;">\n    <img style="height: 100%; overflow: hidden" ng-src=\'{{ ngModel.imgURL}}\' />\n    <!-- prevents the browser from loading the image before the handlebars get parsed.   -->\n  </div>\n\n\n  <div class="identifier" style="display: block;">\n    {{ ngModel.name }},\n    {{ ngModel.age }}\n  </div>\n\n  <div class="mutualFriends" style="display: block;">\n    <img src="/styles/images/mutualfriends.png" style="padding-bottom:1%;width:8%;height:9%;">\n    {{ ngModel.mutualfriends }}\n  </div>\n\n  <div class="numOfMutalInterests" style="display:block;">\n    <img src="/styles/images/mutualinterests.png" style="padding-bottom:1%;width:7%;height:8%;">\n    {{ ngModel.mutualIntrests }}\n  </div>\n\n</div>\n';

}
return __p
};

this["JST"]["assets/templates/cards.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div>\n\n  <!-- card.js -->\n  <!-- binding from card -->\n\n  <!-- scope: {\n    ngModel: \'=\',\n    action: \'=?\'\n  }, -->\n\n  <card ng-repeat="card in cards" ng-model="card" action="action"></card>\n\n\n</div>\n';

}
return __p
};