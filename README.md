#Subtiles
Solution for creating a site that shows subtitles over a movie. The
subtitles are based off of the .srt subtitle format. The subtitles
have been converted to JavaScript objects.

### Original .srt Format
```
0
00:00:36,830 --> 00:00:39,430
Act as normal and calm
as you can.

0
00:00:40,470 --> 00:00:42,550
I'll see if
he has time for you.

```

### Translated JavaScript Objects
```js
var SUBTITLES = [
  {
    duration: "00:00:36,830 --> 00:00:39,430",
    line1: "Act as normal and calm",
    line2: "as you can.",
  },
  {
    duration: "00:00:40,470 --> 00:00:42,550",
    line1: "I'll see if",
    line2: "he has time for you.",
  }
];
```

## Parsing Strings into Numbers
You'll need to use JavaScript String methods and number parsing
to manipulate timestamps into their hour, minute, second, milliseconds
components.

Here's a good way to tease numbers out of a string:
<https://repl.it/ElF6/2>

```js
var groceryString = "Bananas: $14.99,Apples: $12.22,Oranges: $0.25"

// use .split() to create an array splitting the original string up by commas.
var items = groceryString.split(",");

// just look at the banana description for now.
var banana = items[0];

// split the banana description into two halfs, and grab what's to
// the right of the dollar sign.
var price = banana.split("$")[1];

// chop the price string in half across the decimal.
// dollars end up at the first index.
// cents end up at the second index.
var dollars = price.split(".")[0];
var cents = price.split(".")[1];

// dollars and cents are still strings.
// Use the parseInt(str, 10) command to convert them into base-10 actual numbers.
dollars = parseInt(dollars, 10);
cents = parseInt(cents, 10);
```

Read more about the original file format here:
<https://en.wikipedia.org/wiki/SubRip#SubRip_text_file_format>


## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.

