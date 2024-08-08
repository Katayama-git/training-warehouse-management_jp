// Javascriptからのメッセージを表示
function helloFromJavascript() {
    alert("hello from javascript");
}

// Java(サーバー)からのメッセージを表示
async function helloFromJava() {
    // fetchにより、指定したエンドポイントとhttp通信する
    const response = await fetch("http://localhost:8080/hello");
    if (!response.ok) {
        alert("something wrong! have you run the server yet?");
        return;
    }
    const text = await response.text();
    alert(text);
}

// TODO: helloExercise()を完成させて、サーバーからのメッセージをアラートで表示する
async function helloExercise() {
    const response = await fetch("http://localhost:8080/exercise");
    if(!response.ok){
        alert("Something wrong! Have you run the server yet?");
        return;
    }
    console.log(response,"response");
    const text = await response.text();
    alert(text);
}

const box = 1;                 //constで定数boxを宣言し、1という数値の値を代入する。

console.log(box,"box");        //コンソール上に定数の中身を表示する。


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var variable;                          //variableという任意の名前の変数を宣言する。

console.log(variable,"container1");    //変数に何も代入していない状態で変数の中身をコンソール上に表示する。

variable = "apple";                    //変数variableにappleという文字列の値を代入する。

variable = "アップル";                 //変数variableにアップルという文字列の値を再代入する。

console.log(variable,'container2');    //コンソール上に変数variableの中身を表示する。