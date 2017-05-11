# functional-sass

## イントロ

Sassを書く時に同じようなやつ書いていない？

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

### うちで使っている機能

* import
* nest
* variable
* mixin
* extend

### 弊社で使っていない機能

* function

---

## Sassをもっと使いこなそう！
