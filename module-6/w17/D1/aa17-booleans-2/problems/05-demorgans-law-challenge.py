# Create a function that uses DeMorgan's Law to get the expected `True`/`False`
# statement.

# Write your function here.

# DeMorgan's Law: not (A and B) = (not A) or (not B)


def de_morgans_law(arg1, arg2):
    
    return not (arg1 and arg2)



print(de_morgans_law(True, True)) # False
print(de_morgans_law(True, False)) # True
print(de_morgans_law(False, False)) # True
print(de_morgans_law("", [])) # True
print(de_morgans_law(2, 2)) # False
print(de_morgans_law(2, 0)) # True
