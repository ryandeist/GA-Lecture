# Intro to Mongoose - Query Options
Mongoose offers a variety of options for manipulating database queries. When you call upon a method like `find()`, it returns an instance of a [Query](https://mongoosejs.com/docs/api/query.html#Query()). You can then then built-in query methods, such as `limit()`, `sort()`, or `skip()`, to refine the query's results. 

Below is a list of some common methods for augmenting queries:
1. **`sort()`**: This option specifies the order in which documents are returned. You can sort a collection of documents by any field, in ascending or descending order. 
```
const todos = await Todo.find({ }).sort({ text: 'asc' })
```

2. **`limit()`**: This limits the number of documents returned by the operation, which is useful for pagination or reducing server load. 
```
const todos = await Todo.find({ }).limit(10)
```

3. **`skip()`**: Used alongside `limit()` for pagination, the `skip()` method determines the number of documents to skip before starting to return results. In the example below, only documents after the first 10 results will be included in what returns. 
```
const todos = await Todo.find({ }).skip(10)
```

4. **`select()`**: This option specifies which fields to include or exclude in the documents that are returned. It can help reduce the amount of data we need to send over networks.
```
const todos = await Todo.find({ }).select('text');
```

All of these options can be combines to create precise queries, tailored to specific need in your application:

```
const todos = await Todo.find({ }).skip(10).limit(5).select('text')
```

Visit the [Mongoose Docs](https://mongoosejs.com/docs/api/query.html) for more information and a full list of available query methods. 