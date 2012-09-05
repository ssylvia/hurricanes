(function($){
	$.fn.pictureframe = function() {
		
		var _self = this;
		var _img = this.find("img")[0];
		console.log("_self ",_self);
		console.log("_img ",_img);
		
		var _actualImageWidth = getImageWidth(); 
		var _actualImageHeight = getImageHeight();
		console.log(_actualImageWidth);
		console.log(_actualImageHeight);		
		measure();

		function getImageWidth() {
			var imageWidth = _img.naturalWidth;
			if (imageWidth == null) {
				var tempImage = new Image();
				tempImage.src = $(_img).attr("src");
				imageWidth = tempImage.width;
			}
			return imageWidth;
		}
		
		function getImageHeight() {
			var imageHeight = _img.naturalHeight;
			if (imageHeight == null) {
				var tempImage = new Image();
				tempImage.src = $(_img).attr("src");
				imageHeight = tempImage.height;
			}
			return imageHeight;
		}
		
			
		function measure() {
			
			var ALLOWABLE_WIDTH = $(_self).width();
			var ALLOWABLE_HEIGHT = $(_self).height();

			var currentAR = _actualImageWidth / _actualImageHeight;
			var allowableAR = ALLOWABLE_WIDTH / ALLOWABLE_HEIGHT;
			
			if (currentAR > allowableAR) {
				$(_img).width(ALLOWABLE_WIDTH);
				$(_img).height(ALLOWABLE_WIDTH / currentAR);
			} else {
				$(_img).height(ALLOWABLE_HEIGHT);
				$(_img).width(ALLOWABLE_HEIGHT * currentAR);
			}
			$(_img).css("left",($(_self).width() - $(_img).width()) / 2);
			$(_img).css("top",($(_self).height() - $(_img).height()) / 2);
			
		}
				
	}
	
})(jQuery);