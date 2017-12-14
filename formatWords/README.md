This program takes array and format into string.Output should be like below sentences.

formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
formatWords([]) // should return ""

Program checks if input is null, returns empty string.
It finds empty elements, and delete from array.
If there is one element prints it.
If there are two element in array it takes and connect  element with "and"
if there are more than two elements, it adds coma at the end of each elements and add "and" between last two elements of array.
