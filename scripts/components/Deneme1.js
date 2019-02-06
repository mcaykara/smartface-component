const Color = require("sf-core/ui/color");
const extend = require('js-base/core/extend');
const Deneme1Design = require('library/Deneme1');

const Deneme1 = extend(Deneme1Design)(
	function(_super, props = {}, pageName) {
		_super(this, props);
		this.pageName = pageName;
		this.setStatus = setStatus.bind(this);


		const component = this;
		var _status = false;


		Object.defineProperties(component, {
			status: {
				get: () => _status,
				set: value => {
					_status = value;
					component.setStatus(value);
				}
			}
		});
	}
);


function setStatus(isChecked) {
	const backgroundColor = isChecked ? '#ff0000' : '#0000FF';

	this.flCheck.dispatch({
		type: "updateUserStyle",
		userStyle: { backgroundColor }
	});
}

module.exports = Deneme1;
