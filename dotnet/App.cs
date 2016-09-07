using System;
using System.Collections.Generic;
using System.Linq;

namespace Hypo.Dates
{
    public class App {
        private readonly DateTime _from;
        private readonly DateTime _to;
        
        public App(IEnumerable<DateTime> dates){
            _from = dates.Min().AddDays(1);
            _to = dates.Max();
        }

        public int GetDiff(){
            TimeSpan difference = _to - _from;
            return difference.Days;
        }
    }
}