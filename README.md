# Node.js ||  Lab 1 - Variant 8
### Installing NPM modules

```
npm install
```

### Usage example:

CLI tool accept 3 options:

1. -i, --input: an input file
2. -o, --output: an output file
3. -a, --action: an action string/array

Operation with string input.txt to output.txt:

```
$ node app -i input.txt -o output.txt -a string
```

Operation with array input.txt to output.txt:

```
$ node app --input input.txt --output output.txt --action array
```

Operation with string stdin to stdout with shift 7:

```
$ node app --action string
```

### NPM scripts

Operation with string input.txt to output.txt:

```
$ npm run string
```

Operation with array input.txt to output.txt:

```
$ npm run array
```

# Example task 1

**Input:** *123*

**Output:** *1-2-3*

-----------------

**Input:** *6253*

**Output:** *62-5-3*

# Example task 2

**Input:** *[1,2,3,4]*

**Output:** *0 inversions*

-----------------

**Input:** *[4,1,2,3]*

**Output:** *3 inversions: 1 and 4, 2 and 4, 3 and 4*
