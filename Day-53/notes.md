
# Update document
    - updateOne()
    - updateMany({filter},{set},{upsert})

# updateMany()
    - upsert: if doc doesn't exist then create one

# Miscellaneous
    - We can update fields with many operators like $inc,$set,$min,$max,$mul
    - Operators like ($, $[], $[identifier]) helps to update array
    - $push, $pop can be used to update array elements
 
## More to know: https://docs.mongodb.com/manual/tutorial/update-documents/