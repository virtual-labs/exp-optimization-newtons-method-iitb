let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
		<div class='divide'>
   			<div style='margin-top: 2vw;'>
   				<h4 class="center-text fs-28px fb-600">Newton Raphson Method</h4>
				<br>
				<p>Objective: To find the minima using Newton Raphson Method.</p>
				<br>
   				<button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
   			</div>
   		</div>
   `;
    maindiv.innerHTML = text;
}
//for starting first activity
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    temp_btn && temp_btn.remove();
    internal_calculation();
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
    	${btn_text}
    	<div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='act1-div'>
        	<p style='text-align: left;' class='fb-600 fs-16px'>Find the minima using Newton Raphson Method.</p>
        	<div id='act1-data-div'>
            	<div class="row justify-content-center " style="align-items:center;">
               		<div class="col-md-5 fs-18px fb-500"> 
						$$ f(x) = x^a - ax + b  $$ 
						$$ a = ${a}, b = ${b} $$
					</div>
            	</div>
            	<button class='btn btn-info std-btn' style='margin: auto;' id='act1-btn-1' onclick='calculations_itr1();'>Next</button>
         	</div>
      	</div>
   	`;
    maindiv.innerHTML += text;
    setTimeout(() => MathJax.typeset(), 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
}
function internal_calculation() {
    a = 3;
    b = 5;
    x1 = 2;
    a = random1(3, 6);
    b = random1(5, 11);
    console.log("a= ", a);
    console.log("b= ", b);
}
function calculations_itr1() {
    let outer_div = (document.getElementById('act1-div'));
    let div = (document.getElementById('equ-select-div'));
    let btn = (document.getElementById('act1-btn-1'));
    btn && btn.remove();
    act1_table_data1 = [];
    itr1 = 0;
    itr2 = 0;
    act1_table_data1 = newton(x1, a);
    itr1 = act1_table_data1[0][2];
    itr2 = act1_table_data1[1][2];
    xmin = act1_table_data1[9][1];
    console.log("itr1 ", itr1);
    console.log("itr2 ", itr2);
    console.log("xmin ", xmin);
    outer_div.innerHTML += `
		$$ Take \\ initial \\ guess \\ x \\ = \\ ${x1} $$
		$$ f^{'}(x) = ax^{a-1} - a  $$
        $$ f^{''}(x) = a (a-1) \\ x^{a-2}  $$
		<div id="itr1-div">
			<div class="row" style="display:flex; align-items:center; justify-content:center;">
				<div class="col-sm-12" style="display:flex; justify-content:center;">
					<table>
						<tbody>
							<tr>
								<td>
									<h4 style='text-align:left;' class='fb-600 fs-16px'>Iteration 1: </h4>
								</td>
							</tr>
							<tr>
								<td> $$ x_2 = x_1 - \\frac{f^{'} (x_1)}{f^{''} (x_1)} $$ </td>
								<td> $$ = $$ </td>
								<td>
									<input type='text' style="margin:0 auto;" id='itr1-fdx-inp' class='form-control fs-16px' />
								</td>
								<td></td>
								<td>
									<button class='btn btn-info btn-sm std-btn' onclick='act1_verify_itr1_fdx();' id='vf-itr1-fdx'>Verify</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<br>
		<div id="itr2-div" style="display:none">
			<div class="row" style="display:flex; align-items:center; justify-content:center;">
				<div class="col-sm-12" style="display:flex; justify-content:center;">
					<table>
						<tbody>
							<tr>
								<td><h4 style='text-align:left;' class='fb-600 fs-16px'>Iteration 2: </h4></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td> $$ x_1=${(itr1).toFixed(4)} $$ </td>
							</tr>
							<tr>
								<td> $$ x_2 = x_1 - \\frac{f^{'} (x_1)}{f^{''} (x_1)} $$ </td>
								<td> $$ = $$ </td>
								<td>
									<input type='text' style="margin:0 auto;" id='itr2-fdx-inp' class='form-control fs-16px' />
								</td>
								<td></td>
								<td>
									<button class='btn btn-info btn-sm std-btn' onclick='act1_verify_itr2_fdx();' id='vf-itr2-fdx'>Verify</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

   		<div id="act1-tb-box1"> </div>
		<button class='btn btn-info std-btn' style='margin: auto; display:none;' id='act1-btn-2' onclick='display_chart();' >Plot Graph</button>

		<br>
		<div id="graph-div" style="display:none;">
			<canvas id="act1-graph"></canvas>
			<br>
			<button class='btn btn-info std-btn' style='margin: auto;' id='act1-btn-3' onclick='load_questions();' >Next</button>
		</div>


		<br>
		<div id="question-div" style="display:none;">
			<div class="row justify-content-center" style="align-items:center">
				<div class="col-md-4">
					What is the minimum value of f(x)?
				</div>
				<div class="col-md-4">
					<input type='number' id='fxmin-val-inp' class='form-control fs-16px' />
				</div>
				<div class="col-md-4">
					<button class='btn btn-info std-btn' style='margin: auto;' id='act1-btn-vf-fx' onclick='verify_fxmin();' >Verify</button>
				</div>
			</div>
			<br>
			<button class='btn btn-info std-btn' style='margin: auto; display:none;' id='act1-btn-5' onclick='exp_complete();' >Next</button>
		</div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
function act1_verify_itr1_fdx() {
    let inp = (document.getElementById('itr1-fdx-inp'));
    if (!verify_values(parseFloat(parseFloat(inp.value).toFixed(4)), parseFloat(itr1.toFixed(4)))) {
        inp.style.border = '1px solid red';
        alert("Incorrect value of x2");
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    let btn = (document.getElementById('vf-itr1-fdx'));
    btn && btn.remove();
    let tr = (document.getElementById('itr2-div'));
    tr.style.display = 'block';
}
function act1_verify_itr2_fdx() {
    let inp = (document.getElementById('itr2-fdx-inp'));
    if (!verify_values(parseFloat(parseFloat(inp.value).toFixed(4)), parseFloat(itr2.toFixed(4)))) {
        inp.style.border = '1px solid red';
        alert("Incorrect value of x2");
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    let btn = (document.getElementById('vf-itr2-fdx'));
    btn && btn.remove();
    // act1_table_data1 = newton(x, a);
    console.log(act1_table_data1);
    act1_table_data_graph = graph_table(x, a, b);
    console.log(act1_table_data_graph);
    after_verify_table1();
}
function after_verify_table1() {
    let header = ['iter', 'x1', 'x2', `f<sup>'</sup>(x2)`];
    let tb_box = (document.getElementById('act1-tb-box1'));
    let btn = (document.getElementById('act1-btn-2'));
    btn.style.display = 'block';
    tb_box.innerHTML = '';
    let t = new Show_Table_Custom_Fixed(header, act1_table_data1, tb_box, 5);
    t.load_table();
    fxmin = Math.pow(xmin, a) - (a * xmin) + b;
    console.log("fxmin ", fxmin);
}
function display_chart() {
    let btn = (document.getElementById('act1-btn-2'));
    btn && btn.remove();
    let div = (document.getElementById('graph-div'));
    div.style.display = 'block';
    var ctx = document.getElementById('act1-graph');
    ctx.style.backgroundColor = 'white';
    ctx.style.marginTop = '5px';
    // ctx.style.marginLeft = '10%';
    ctx.style.padding = '10px';
    ctx.style.borderRadius = '8px';
    if (typeof chart != 'undefined') {
        chart.destroy();
    }
    let x = act1_table_data_graph.map((data) => data[1]);
    let y = act1_table_data_graph.map((data) => data[2]);
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: x,
            datasets: [
                {
                    label: 'f(x)',
                    data: y,
                    fill: false,
                    borderColor: 'blue',
                    tension: 0,
                    showLine: true,
                },
            ],
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'f(x)',
                        font: { size: 14, weight: 'bold' },
                    },
                },
                x: {
                    title: {
                        display: true,
                        text: 'x',
                        font: { size: 14, weight: 'bold' },
                    },
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: `x vs f(x)`,
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } },
            },
        },
    });
}
function load_questions() {
    let btn = (document.getElementById('act1-btn-3'));
    btn && btn.remove();
    let outer_div = (document.getElementById('question-div'));
    outer_div.style.display = 'block';
}
function verify_fxmin() {
    let inp = (document.getElementById(`fxmin-val-inp`));
    if (!verify_values(parseFloat(inp.value), parseFloat(fxmin.toFixed(5)))) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    let btn = document.getElementById('act1-btn-vf-fx');
    btn && btn.remove();
    let btn1 = (document.getElementById('act1-btn-5'));
    btn1.style.display = 'block';
}
function exp_complete() {
    let btn = (document.getElementById('act1-btn-5'));
    btn && btn.remove();
    alert('Experiment completed');
}
activity1();
//# sourceMappingURL=activity1.js.map