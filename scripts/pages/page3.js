const extend = require('js-base/core/extend');
const Page3Design = require('ui/ui_page3');
const touch = require("sf-extension-utils/lib/touch");

const Page3 = extend(Page3Design)(
	function(_super) {
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
	}
);

function onShow(superOnShow) {
	superOnShow();
}

function onLoad(superOnLoad) {
	superOnLoad();

	const page = this;

	touch.addPressEvent(page.checkBox, () => {
		page.checkBox.status = !page.checkBox.status;

		var status = page.checkBox.status ? 'Isaretli' : 'Isaretsiz';
		alert(`durum : ${status}`);
	});


}

module.exports = Page3;
