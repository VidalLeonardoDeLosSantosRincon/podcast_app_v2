const isPlainObject = function (obj) {
	return Object.prototype.toString.call(obj) === '[object Object]';
};

export const Utils = {
	isPlainObject
}