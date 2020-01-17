use strict;
use warnings;
use 5.20.1;

select(STDOUT); # Set print target
$| = 1; # Set autoflush (print will happen immediately and won't be buffered)

chomp(my $n = <STDIN>);
chomp(my $tokens = <STDIN>);

my @inputs = split(/ /,$tokens);
my $total = 0;

for (my $i = 0; $i <= $n - 2; $i++) {
    @inputs = sort { $a <=> $b } @inputs;
    print STDERR "@inputs\n";
    my $sum = $inputs[0] + $inputs[1];
    splice @inputs, 0, 2;
    unshift @inputs, $sum;
    $total = $total + $sum;
}

print $total;
