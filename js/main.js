var data = [];
data[0] = [[]]; // holidays - currently not implemented
data[1] = [[]]; // lundi monday (beware! 8.30 means 08:30, using decimal part than is bigger than 59 will generate warning!
data[2] = [[12, 20]]; // tuesday
data[3] = [[12, 20]]; // wednesday
data[4] = [[12, 20]]; // thursday
data[5] = [[12, 20]]; // friday
data[6] = [[12, 20]]; // saturday
data[7] = [[]]; // dimanche sunday = closed (optional, if entry for a day is empty, it's assumed that it is closed)

$('.current-status-placeholder').openingHours({
    show: 'current-status',
    hours: data
});

$('.closing-in-placeholder').openingHours({
    show: 'closing-in',
    hours: data
});
