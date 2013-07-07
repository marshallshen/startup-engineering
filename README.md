startup-engineering
===================

Coursera class Startup Engineering from Stanford.

## Week 4
- STDIN, STDOUT, STDERR
  0 stdin, 1 stdout, 2 stderr
- How to pipe different command output to different channel.
  ````
  $ curl google.com "fakeurl" 1> out1.txt 2> out2.txt
  ````
  Here we are saying that pipe STDOUT to *out1.txt* and pipe STDERR to *out2.txt*

  ````
  $ curl google.com "fakeurl" &>out-both.txt
  ````
  We sent both outputs intot *out-both.txt*
- Learn Bash short cut
  Control + (A, B, E, F, C, A+K)
- Backtick
  $ echo "the name of this machine is `hostname`"