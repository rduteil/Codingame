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
        int N = int.Parse(Console.ReadLine());
        for (int i = 0; i < N; i++)
        {
            long F = long.Parse(Console.ReadLine());
            while( F != 1)
            {
                if (F % 5 == 0)
                {
                    F /= 5;
                }
                else if (F % 3 == 0)
                {
                    F /= 3;    
                }
                else if (F % 2 == 0)
                {
                    F /= 2;    
                }
                else
                {
                    break;
                }
            }
            if ( F == 1)
            {
                Console.WriteLine("VICTORY");
            }
            else 
            {
                Console.WriteLine("DEFEAT");    
            }
        }
    }
}
