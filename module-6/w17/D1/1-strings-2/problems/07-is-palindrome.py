# Create a function that returns whether or not the string is a Palindrome.

# Write your function here.

# string[start:end:step]
# When using string[::-1], you're providing all three components of the slice:

# start: The slice starts from the beginning of the string (by default, if not specified).
# end: The slice ends at the last character of the string (also default behavior when not specified).
# step: The step value is -1, which means you want to move backward through the string.
# This effectively reverses the string because the negative step moves from the end of the string towards the beginning.

def is_palindrome(string):
    string = string.lower()
    return string == string[::-1]


print(is_palindrome("kayak")) # True
print(is_palindrome("app"))  # False
print(is_palindrome("racecar")) # True
print(is_palindrome("valid")) # False