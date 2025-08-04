n = int(input())
files = [input().rstrip() for _ in range(n)]

length = len(files[0])
pattern = []

for i in range(length):
    char = files[0][i]
    all_same = all(file[i] == char for file in files)
    pattern.append(char if all_same else '?')

print(''.join(pattern))
