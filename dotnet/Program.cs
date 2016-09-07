using System;
using System.Collections.Generic;
using System.Linq;

namespace Hypo.Dates
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // parse the command line args
            try{
                IEnumerable<DateTime> dates = args.Select(d => DateTime.Parse(d));
                App app = new App(dates);
                Console.WriteLine(app.GetDiff());
            } catch (FormatException){
                Console.WriteLine("Invalid Arguments, run with a space delimited list of date strings");
            }
        }
    }
}
