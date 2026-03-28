function calculate_fx_x(x, a) {
    itr1_fdx = (12 * Math.pow(x, 2)) + (12 * x) - a;
    //console.log("itr1 f'x= ", itr1_fdx);
    calculate_x(alpha, itr1_fdx);
    return itr1_fdx;
}
function calculate_x(alpha, itr1_fdx) {
    itr1_x = x - (alpha * itr1_fdx);
    //console.log("itr1 x= ",itr1_x);
    return itr1_x;
}
// function newton(x11: number, a: number, alpha: number): number[][] {
// 	let table = [];
// 	for (let i = 0; i < 21; i++) {
// 		table[i] = [];
// 		let fdxx = (12*x11**2)+(12*x11)-a;
// 		let x22 = x11-(alpha*fdxx);
// 		table[i][0] = i + 1;
// 		table[i][1] = x11;
// 		table[i][2] = fdxx;
// 		table[i][3] = x22;
// 		x11 = x22;
// 	}
// 	return table;
// }
function graph_table(x111, a, b) {
    let table = [];
    for (let i = 0; i < 37; i++) {
        table[i] = [];
        let fx = (4 * Math.pow(x111, 3)) + (6 * Math.pow(x111, 2)) - (a * x111) + b;
        table[i][0] = i + 1;
        table[i][1] = x111;
        table[i][2] = fx;
        x111 = x111 + 0.01;
    }
    return table;
}
function f(x, a) {
    // let eq_drop = <HTMLSelectElement>document.getElementById('equ-select'); //id to be change
    //var eq = equ;
    // alert(xx);
    //var scope = { x: xx };
    //var eq1 = "-0.03^1.5"
    //alert(math.eval(eq1, scope));
    //return math.eval(eq, scope);
    var fx = a * Math.pow(x, (a - 1)) - a;
    return fx;
}
// x^2-cos(x), exp(x)*cos(x)-1.4
//initial guess 0 1 x1=0 and x2=1
function df(x, a) {
    // var scope = { x: xx };
    // let eq = df_equ;
    //var eq1 = "-0.03^1.5"
    //alert(math.eval(eq1, scope));
    // return math.eval(eq, scope);
    var dfx = (a * (a - 1)) * (x * (a - 2));
    return dfx;
}
function newton(x1, a) {
    let table = [];
    for (let i = 0; i < 10; i++) {
        table[i] = [];
        let x2 = x1 - f(x1, a) / df(x1, a);
        table[i][0] = i + 1;
        table[i][1] = x1;
        table[i][2] = x2;
        table[i][3] = f(x1, a);
        x1 = x2;
    }
    return table;
}
function newton_raphson(x1, a) {
    let table = [];
    for (let i = 0; i < 37; i++) {
        table[i] = [];
        let fx = Math.pow(x1, a) - (a * x1) + b;
        table[i][0] = i + 1;
        table[i][1] = x1;
        table[i][2] = fx;
        x1 = x1 - 0.05;
    }
    return table;
}
//# sourceMappingURL=newton.js.map