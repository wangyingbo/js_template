
class Template {
	constructor(context) {
		this.data = context;
		this.ext = "";
	}
	appendExt() {
		return this.data + "父模板";
	}
}

// let context = "";
// let template = new Template(context);
// console.log(template.appendExt())


export { Template };