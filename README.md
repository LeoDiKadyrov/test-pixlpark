# test-pxlpark

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Description
Было сказано о том, что важнее реализация, поэтому UI такой какой есть
В задании старался разделить бизнес-логику и реализацию, с помощью своеобразного слоя API,
Который скрывает все детали реализации от компонентов, и в итоге app.vue и дочерним компонентам, не надо ничего
Знать о том, как мы получаем данные
По поводу Vuex, я думал использовать localStorage, но это только если конкретно в рамках этого задания
Но я решил использовать Vuex, так как по мне, рамки тестового задания это одно, а реальная архитектура другое
