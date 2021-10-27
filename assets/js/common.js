document.getElementById("plus").addEventListener("click", function () {
	document.getElementById("view").insertAdjacentHTML("beforeend", `
	<div class="col-6 offset-6"> 
	</div>	
	<div class="col-12">
	<div class="form-row">
		<div class="col-6">
			<label>氏名</label>
			<input class="form-control" type="text" name="name">
		</div>
		<div class="col-6">
			<label>金額[半角数字]</label>
			<input class="form-control money" type="number" name="money" pattern="\\d*">
		</div>
	</div>
</div>
	`);
	evnt_money();
});
evnt_money();
function evnt_money() {
	var object = document.getElementsByClassName("money");
	for (let index = 0; index < object.length; index++) {
		const element = object[index];
		element.addEventListener("input", money_sum);
	}
}


function money_sum() {
	var money = 0;
	var object = document.getElementsByClassName("money");
	for (let index = 0; index < object.length; index++) {
		const element = object[index];
		const ptn = /[ |　|,|、|，]/g;
		var mval = element.value.replace(ptn,"");
		if (mval) {
			money = parseInt(money) + parseInt(mval);
		}
	}

	document.getElementById("sum").innerText = money + "円";
}