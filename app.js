import { Template } from './Template.js'
import { Template799 } from './template799.js'


function main() {
	console.log("启动js代码");
	testTemplate();
}

function testTemplate() {
	let context = "context";

	let tem = new Template(context);
	var reslut = tem.appendExt();
	console.log("测试父模板结果："+reslut);

	let tem799 = new Template799(context);
	var result799 = tem799.show();
	console.log("测试799子模板结果："+result799);
}

main();