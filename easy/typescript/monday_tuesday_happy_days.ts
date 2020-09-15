const leapYear: number = parseInt(readline());

var inputs: string[] = readline().split(' ');
const sourceDayOfWeek: string = inputs[0];
const sourceMonth: string = inputs[1];
const sourceDayOfMonth: number = parseInt(inputs[2]);

var inputs: string[] = readline().split(' ');
const targetMonth: string = inputs[0];
const targetDayOfMonth: number = parseInt(inputs[1]);


function getDaysFromMonth(month: string): number {
    let days: number[] = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

    if (month === "Jan") return days[0];
    if (month === "Feb") return days[1];

    let totalDays = 0;
    if (month === "Mar") totalDays = days[2];
    if (month === "Apr") totalDays = days[3];
    if (month === "May") totalDays = days[4];
    if (month === "Jun") totalDays = days[5];
    if (month === "Jul") totalDays = days[6];
    if (month === "Aug") totalDays = days[7];
    if (month === "Sep") totalDays = days[8];
    if (month === "Oct") totalDays = days[9];
    if (month === "Nov") totalDays = days[10];
    if (month === "Dec") totalDays = days[11];

    totalDays += leapYear;
    return totalDays;
}

let difference: number = (getDaysFromMonth(targetMonth) + targetDayOfMonth)%7 - (getDaysFromMonth(sourceMonth) + sourceDayOfMonth)%7;
let namedDays: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let sourceDay: number = namedDays.indexOf(sourceDayOfWeek);
sourceDay = (sourceDay + difference)%7;
if (sourceDay < 0) {
    sourceDay += 7;
}

console.log(namedDays[sourceDay]);
