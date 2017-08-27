class PraiseButton {
	constructor (num,element) {
		this.count = num ;
		this.element = element ;
	}
	clickButton(){
		this.element.on('click' ,() => {
			this.count = window.add(this.count);
			console.log(this.count);
			$('#add1').addClass('click');
			setTimeout(function (argument) {
				$('#add1').removeClass('click');
			},1000)
		})
	}
	getCount (){
		return count;
	}
}
export default class Thumb extends PraiseButton {
	constructor(num,element){
		super(num,element);
	}
}
