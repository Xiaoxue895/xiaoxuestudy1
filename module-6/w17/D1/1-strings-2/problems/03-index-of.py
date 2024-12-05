# Create a function that returns the index of a given letter in the string.

# Using enumerate with a list
# fruits = ['apple', 'banana', 'cherry']

# for index, fruit in enumerate(fruits):
#     print(f"Index: {index}, Fruit: {fruit}")

# Write your function here.
def index_of(str,letter):
    str = str.lower()
    for i,l in enumerate(str):
        while l == letter.lower():
            return i
    return -1


print(index_of("Arm", "a"))  #> 0
print(index_of("Pie", "e"))  #> 2
print(index_of("Lucid", "i"))  #> 3
print(index_of("Obvious","u"))  #> 5
