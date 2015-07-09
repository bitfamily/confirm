var $ = require("modules-common/jquery/jquery.js"),
	Backbone = require("modules-common/backbone/backbone.js");

var Confirm = Backbone.View.extend({

	attributes: {
		"class": "confirm"
	},

	initialize: function(){
		this.$el = null;
	},

	render: function(){
		this.$el = $(__inline("confirm.html"));
		this.$ok = this.$el.find(".JS-ok");
		this.$cancel = this.$el.find(".JS-cancel");
		this.$close = this.$el.find(".JS-close");
		this.$content = this.$el.find(".JS-content");
		$("#wraper").append( this.$el );
	},

	initEvent: function(){
		var that = this;
		this.$cancel.on("click", function(){
			that.hide();
		});

		this.$ok.on("click", function(){
			that.callback && that.callback();
			that.hide();
		});
	},

	set: function(option){
		option = option || {};
		this.callback = option.callback;
		this.$content.html(option.text);
	},

	showMask: function(){
		this.$mask = $("<div class='confirm-mask'></div>");
		$("#wraper").append(this.$mask);
		this.$mask.on("click", function( event ) {
			event.stopPropagation();
		});
	},

	hideMask: function(){
		this.$mask.remove();
	},

	show: function(option){
		this.render();
		this.set(option);
		this.initEvent();
		this.$el.show();
		this.showMask();
	},

	hide: function(){
		this.$el.hide();
		this.$el.remove();
		this.$el = null;
		this.hideMask();
	}
});


// var mask = {
// 	init: function() {
// 		this.$el = $("<div class='confirm-mask'></div>");
// 		$("#wraper").append(this.$el);
// 		this.$el.on("click", function( event ) {
// 			event.stopPropagation();
// 		});
// 	},

// 	show: function() {
// 		if (this.showing) {
// 			return;
// 		}
// 		this.$el.show();
// 		this.showing = true;
// 	},

// 	hide: function() {
// 		if (this.showing) {
// 			this.$el.hide();
// 			this.showing = false;
// 		}
// 	}
// };

// mask.init();
	
// var confirm = {
// 	init: function(){
// 		if ( this.inited ) {
// 			return;
// 		}
// 		this.inited = true;

// 		this.$el = $( __inline("confirm.html") );
// 		this.$ok = this.$el.find(".JS-ok");
// 		this.$cancel = this.$el.find(".JS-cancel");
// 		this.$close = this.$el.find(".JS-close");
// 		this.$content = this.$el.find(".JS-content");
// 		$("#wraper").append(this.$el);
// 		this.initEvent();
// 	},

// 	initEvent: function(){
// 		var that = this;
// 		this.$cancel.on("click", function(){
// 			that.hide();
// 		});

// 		this.$ok.on("click", function(){
// 			that.callback && that.callback();
// 			that.hide();
// 		});

// 		this.$close.on("click", function(){
// 			that.hide();
// 		});
// 	},

// 	show: function( option ){
// 		option = option || {};
// 		this.callback = option.callback;
// 		this.$content.html(option.text);
// 		this.$el.show();
// 		mask.show();
// 	},

// 	hide: function(){
// 		this.$el.hide();
// 		mask.hide();
// 	}
// };

// confirm.init();
var confirm = new Confirm();

module.exports = confirm;