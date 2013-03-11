# Receipt printing fun

I wanted to print stuff to a receipt printer. Here are some notes and some tools to help you get past the terrible lower-level stuff.

## What you'll need

- [DYMO LabelWriter 450 Turbo](http://www.amazon.com/gp/product/B0027JIIKQ/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0027JIIKQ&linkCode=as2&tag=jonafuch-20)

- [Receipt paper](http://www.amazon.com/gp/product/B00004Z5Q2/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00004Z5Q2&linkCode=as2&tag=jonafuch-20)

- A Mac with homebrew. If this excludes you, pull request!

## Some setup

1. Install the printer and its crappy software. I ended up downloading [http://download.dymo.com/software/mac/MacDls842Installer.dmg]() via [the download page here](http://sites.dymo.com/Support/Pages/ProductDetails.aspx?MainTab=1&Tab=1&ProductID=1752265\(DYMO\)). At this point I'd use the crappy software just to make sure everything about the printer and drivers work.

1. Install PhantomJS

```brew install phantomjs```

1. Install ImageMagick

```brew install imagemagick```

1. Install NetPBM

```brew install netpbm```

1. Build pbm2lwxl.c (included)

```gcc -o pbm2lwxl pbm2lwxl.c```

## Printing stuff

My basic workflow is: [Something] → [Image] → [Print!]

To get to an image file, I've included a PhantomJS script

Once you have your image file, you can use `receipt_print`, a simple shell script. It does the following:

- Uses ImageMagick's `convert` to convert your image to a 660px wide, monochrome dithered PBM.

- Uses `pnmtoplainpnm` to use an ASCII PBM representation ([learn more here](http://en.wikipedia.org/wiki/Netpbm_format))

- Uses `pbm2lwxl` to convert that to some kind of raw input to the printer that I don't understand

- Uses `lpr -o raw` to send that to the printer

## Help me

Clearly I only understand about a quarter of what I"m talking about here. Feel free to comment, or better yet, create a pull request.
