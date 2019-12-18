// Given some bitstring b, you may change one bit from a 0 to a 1 in
// order to create the longest possible sequence of consecutive 1s.
// Output the length of the resulting longest sequence.

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;

class Solution
{
    static void Main(string[] args)
    {
        string bits = Console.ReadLine();
        string[] sequences = bits.Split('0');
        
        int longest = 0;
        for(int i = 0; i < sequences.Length - 1; i++) {
            int next = sequences[i].Length + sequences[i + 1].Length + 1;
            longest = Math.Max(longest, next);
        }
        Console.WriteLine(longest);
    }
}
