# Caesar cipher CLI

__CLI tool encode and decode a text by Caesar cipher.__

CLI tool accept 4 options (short alias and full name):

* -s, --shift: a shift
* -i, --input: an input file
* -o, --output: an output file
* -a, --action: an action encode/decode

Usage example:
```
$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
$ node my_caesar_cli --action decode --shift 7 --input decoded.txt --output plain.txt
```
