!function(a){a(function(){if(window.SubscriptionData!=undefined){if(SubscriptionData.status=="onhold"){$onHoldNotification=a("#searchbuddy-subscription-notification").detach();a("#subscriptionContainer").append($onHoldNotification.show());a("#results-panel").bind("subscriptiondoneloading",function(b){a("#searchbuddy_subscription div.dark_block").append($onHoldNotification.show());});}else{a("div.subscription-actions").show();}}});}(window.jQuery);