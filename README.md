# Step2  データの参照

## 1. データベースの確認

### データベースの起動

Dockerが起動していなければ、起動させておきましょう。  
データベースのリセットもできます。

`./beginner/demo/demo/local/start.sh`  



### ツールのインストール

データベースの中身を見るために、`PGAdmin4`というGUIツールを利用します。

- [こちら](https://www.pgadmin.org/download/)から`PGAdmin4`をインストールします。
  <!--- [インストール方法](https://qiita.com/pyon_kiti_jp/items/01d6150e46bd66be29f0)-->

- インストール後
  - Serversを右クリック -> Register -> Server...
  - Generalタブ  
  Name:&ensp;`warehouse`
  - Connectionタブ  
  Host name/address:&ensp; `localhost` ,  
  Port:&ensp; `5432` ,  
  Maintenance database:&ensp; `warehouse` ,  
  Username:&ensp; `warehouseuser` ,  
  Password:&ensp; `warehousepassword`  
  savepassword?:&ensp; `ON` 
  - -> `Save` をクリック

- `Intellij`で`DemoApplication`をRun
  - pgAdmin4で Servers -> warehouse -> Databases -> warehouse -> Schemas -> public -> Tables -> example_orderを右クリック -> View/Edit Data -> All Rows -> 用意されたデータが表示されます。  
  これらをTutorialで使用します。

## 2. Tutorial

1. 動作の確認  
`DemoApplication`をRunしましょう。  
`order.html`ファイルをブラウザで開き、表示された`get orders`ボタンをクリックすると、`example_order`と同じデータが表示されます。

2. クライアントサイドのコードリーディング  
`order.js`ファイルを見て、どのように表が出力されているかを確認しましょう。  

3. サーバーサイドのコードリーディング  
`Intellij`を見ましょう。
いくつかのフォルダが追加されていると思います。  
それぞれのフォルダの意味を説明しておきます。 

   - Controller  
   … Controllerは、クライアントとの架け橋です。クライアントがリクエストを送信すると、まずControllerに送信され、処理が完了すると、クライアントに返信されます。

   - Service  
   … Serviceは、このアプリケーションがどのような処理を行うかを決定するものです。今回の例では、全ての注文を得ることができます。

   - Repository  
   … Repositoryは、複雑なコードを隠すことができるインターフェースです。インターフェースの活用はコードをよりシンプルに、見やすくすることができます。

   - Datasource  
   … Datasourceは、Repositoryから複雑なコードを実装するものです。今回の例では、データベースに接続し、SQL文を実行します。

   - Model  
   … Modelは、このアプリケーションにどのようなデータの型があるかを宣言します。  

   クラスがどのようにつながっているかを理解しましょう。

## 3. Exercise

`exercise.html`ファイルを開くと、`get menus`ボタンがあると思います。  
ボタンを押すと、`example_menu`のテーブルが表示されるようにしましょう。  
ヒント：コードが不十分なのは、`MenuDatasource`、`MenuController`、`MenusResponse`です。それぞれのクラスにはTODOコメントで指示が書かれています。  
