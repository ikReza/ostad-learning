1. Try to use `try-catch` when using js query.

```js
try {

} catch(err) {
	return NextResponse.json({status: "fail"})
}
```