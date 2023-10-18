### Prisma Query

1. Data Operators



2. Logical Operators

```js
const result = await prisma.Employee.findMany({
	where: {NOT:[
				{name: {contains: "John"}},
				{salary: {gt: 50000}}
		]
});
```

3. Comparison Operators

```js
const result = await prisma.Employee.findMany({
	where: {salary:{equals:75000}}
});
```


- equals
- not
- in
- notIn
- lt (less than)
- lte
- gt
- gte
- contains
- startsWith
- endsWith

4. Transaction & Rollback

In a database, a transaction is a sequence of operations that are executed as a single unit of work. A transaction can be composed of one or more database operations, such as insert, update, and delete. The purpose of a transaction is to ensure that all the operations in the transaction are executed successfully, or none of them are executed at all. This ensures that the database remains in a consistent state.

A rollback is an operation that undoes all the changes made to the database by a transaction. If a transaction fails to execute successfully, it can be rolled back to its previous state. This ensures that the database remains in a consistent state and that no data is lost.

```js
const deleteComment = prisma.Comment.delete({
	where:{id:1}
});

const createUser = prisma.Comment.create({
	data:{email:"abc@gmail.com", password: "123"}
});

const result = await prisma.$transaction([deleteComment, createUser]);
```

5. Raw queries

```js
const result = await prisma.$queryRaw `SELECT * FROM employee`;
```

6. Query Time Enable Logging

```js
const prisma = new PrismaClient(log:["query", "info", "warn", "error"]);

startTime = Date.now();

const result = await prisma.Employee.findMany({
	cursor: {id:5}, //ignore first 5 data
	take: 3 // then take next 3 data
});

const executionTime = Date.now()-startTime;

return  NextResponse.json({ status: "success",
							data: result,
							executionTime: executionTime })
```


7. Pagination

```js
const result = await prisma.Employee.findMany({
	cursor: {id:5}, //ignore first 5 data
	take: 3 // then take next 3 data
});
```

```js
const result = await prisma.Employee.findMany({
	skip: 5, //alternate to cursor
	take: 3 // then take next 3 data
})
```

8. Aggregate (groupBy, having)

Suppose I have a column with *city* names. Now I want to show the data as a group.

```js
const result = await prisma.Employee.groupBy({
	by: {"city"},
	_avg: {salary:true},
	having: {city: "Dhaka"}
})
```

9. Aggregate (avg, count, max, min, sum)

Suppose I have a database where a feature name is **salary**. If I want to do sum, average, minimum, maximum etc., it'll be called aggregation.

```js
const result = await prisma.Employee.aggregate({
	_avg: {salary:true}
})
```