#!/bin/bash

# 1. Take the specified file
# 2. Resize to 700 wide
# 3. Crop the bottom off anything taller than 4095 px (sorry, pbm2lwxl won't
#     work with taller things (though it's easy enough to change the constant
#     and recompile))
# 4. Dither
# 5. Output as PBM
# convert "$1" -resize 700x -crop 660x4095+0+0 -ordered-dither h4x4o pbm:- |
convert "$1" -resize 700x -crop 660x4095+0+0 -monochrome pbm:- |
pnmtoplainpnm |
./pbm2lwxl 700 -1 |
lpr -P DYMO_LabelWriter_450_Turbo -o raw > /dev/null &&
bash feed.sh > /dev/null