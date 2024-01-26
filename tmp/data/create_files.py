import random
import string

def generate_random_string(size, line_length):
    characters = string.ascii_letters + string.digits
    content = ''.join(random.choice(characters) for _ in range(size))
    content_with_newlines = '\n'.join([content[i:i+line_length] for i in range(0, len(content), line_length)])
    return content_with_newlines

def create_files(file_count, file_size, line_length):
    for i in range(1, file_count + 1):
        content = generate_random_string(file_size, line_length)
        with open(f"{i}.txt", "w") as file:
            file.write(content)

if __name__ == "__main__":
    file_count = 30
    file_size = 10 * 1024 * 1024  # 100MB in bytes
    line_length = 100  # Insert a new line after every 100 characters

    create_files(file_count, file_size, line_length)
    print("Files created successfully.")
