# ポートフォリオ02

## 1. サイトの概要

ポートフォリオ02は、HTML、CSS、JavaScriptで構築された静的なWebサイトです。
このリポジトリでは、Cresta Designという架空のオフィスデザイン会社のポートフォリオを作成しています。

このポートフォリオは[PENGINさんが配布しているデザインカンプ](https://pengi-n.co.jp/blog/coding-practice2/) を実装したものです。

GitHub Pagesで公開中:[https://inaka-de-mac.github.io/web-design-pengin-practice2/](https://inaka-de-mac.github.io/web-design-pengin-practice2/)

## 2. ファイル構成

### HTML
   - `index.html`: サイトのメインページ
   - `contact-page.html`: 問い合わせページ
   - `header.html`: header部分（jQueryのloadメソッドを使用して各ページへ書き込み）
   - `footer.html`: footer部分（jQueryのloadメソッドを使用して各ページへ書き込み）
### CSS
   - `css/style.css`: PC向けのスタイルを定義
   - `css/sp-style.css`: モバイル向けのスタイルを定義
### jQuery・その他
   - `js/main.js`: サイトの動的な振る舞いを制御
   - `img/`: サイトで使用される画像ファイルを格納

## 3. 主な機能
   ### 3.1 ナビゲーション
   - サイト内の異なるセクションへのリンクを提供する。
   - メインメニューとしてヘッダーに表示される。
   - レスポンシブ対応としてハンバーガーメニューに変化する。

   ### 3.2 メインビジュアル
   - サイトのトップセクションに配置される。
   - 3枚の画像のスライドショー形式で表示する。

   ### 3.3 CONTACTセクション
   - 「送信」ボタンでcontact-page.htmlに遷移する。

   ### 3.4 レスポンシブデザイン
   - 1000pxをブレイクポイントとして要素の配置やデザインが変化する。

## 4. 使用言語とツール
   - HTML (バージョン: HTML5)
   - CSS (バージョン: CSS3)
   - jQuery (バージョン： 3.6.0)
   - Swiper.js (バージョン: 10)
   - Google Fonts: 'Noto Serif', 'Noto Serif JP'
   - リセットCSS: ress.min.css

以上がポートフォリオ02の基本情報です。詳細な実装や設定については、各ファイルのコメントやソースコードを参照してください。
