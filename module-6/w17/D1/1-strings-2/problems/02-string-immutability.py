# Declare a variable that contains a string. Then try to change the first letter
# of the string and `print` your string.

# Write your function here.

def makestr(str):
    return str[0:1].upper() + str[1:]
    # return str.capitalize()
    # return str[0].upper() + str[1:]
    # return f"{str[0].upper()}{str[1:]}"
    # return str.replace(str[0], str[0].upper(), 1)

    # chars = list(str)
    # chars[0] = chars[0].upper()
    # return ''.join(chars)

print(makestr("lsllslslsl"))

