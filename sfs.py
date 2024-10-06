with open('words.txt', 'r') as file:
    word_list = [line.strip() for line in file]

# Now word_list contains all the words from the file
print(word_list)