# insertOne(): https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/

# insertMany(): https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/

# Atomicity: https://docs.mongodb.com/manual/core/write-operations-atomicity/#atomicity

# Write Concern: https://docs.mongodb.com/manual/reference/write-concern/

# Using mongoimport: https://docs.mongodb.com/manual/reference/program/mongoimport/index.html

# Before writing to disc mongodb write opertions in journals, this config can be modified by:

 - insertOne( {....}, {w:1, j: false})
 - default value of journal writing is true