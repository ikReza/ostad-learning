Every model consists of fields which have 4 parts -

1. name of the field (id, name, intro),
2. type of the field (BigInt, String)
3. Optional: field modifier (String?)
4. field attributes (always starts with `@`)

```prisma
model User {
  id      BigInt    @id @default(autoincrement())
  name    String    @db.VarChar(50)
  intro   String?   @db.Text
}
```

Difference between `@db.VarChar`, `@db.Text`, and `@db.TinyText`:

- `@db.varchar` is used to define a string field with a maximum length of 65535 characters. The string value is stored in a fixed amount of space.
- `@db.text` is used to define a string field with a maximum length of 65535 characters. The string value is stored in a variable amount of space.
- `@db.tinytext` is used to define a string field with a maximum length of 255 characters. The string value is stored in a variable amount of space.

#### Foreign Key:

A foreign key is a database constraint that links data in one table to data in another table. It is used to enforce referential integrity between tables.

In the context of Prisma, a foreign key is used to represent a relationship between two tables in the database. For example, records in a Posts table might have a foreign key named authorId that refers to the id column of the Users table. This relationship makes it possible to, for example, find all blog posts by a particular author.

In Prisma, you can define foreign keys using the @relation attribute on the field that represents the relationship. The @relation attribute takes two arguments: fields and references. The fields argument specifies the fields in the current model that should be used as foreign keys, while the references argument specifies the fields in the related model that should be used as primary keys.

```prisma
model User {
  id        BigInt    @id @default(autoincrement()) @db.UnsignedBigInt
  name      String    @db.VarChar(50)

  Post Post[]
}

model Post {
  id        BigInt    @id @default(autoincrement()) @db.UnsignedBigInt
  authorId  BigInt    @db.UnsignedBigInt

  User User @relation(fields: [authorId], references: [id])
}
```

**note:** Here, attribute of _authorId_ (`@db.UnsignedBigInt`) in `Post` model, should be as same as _id_ attribute (`@db.UnsignedBigInt`) in the `User` model. Otherwise the following error can occur:

> Foreign key constraint is incorrectly formed
