# functional-sass

## イントロ

* よくあるCSS

css

```css
.mt-5 {
  margin-top: 5px;
}

.mt-10 {
  margin-top: 10px;
}

・
・
・

.mt-1000 {
  margin-top: 1000px;
}
```

sass

```sass
@for $i from 1 through 200 {
  $val: 5 * $i;

  .mt-#{$val} {
    margin-top: $val + px;
  }
}
```

## Sassの機能

### 使っている機能

* import
* nest
* variable
* mixin
* extend

### 使っていない機能

* function

## なぜfunctionを使っていないのか？

* function == 関数 でプログラミングの領域に少し入りかけている。
* 関数を作ってもメンテナンスする人がいない。
* 使うところが少ない。(mixinで間に合うものが多い)

## どういう時に使うといいのか？

* 複雑な計算を要するもの。(アニメーションの距離や時間など)
