var data = [];
data[0] = [[10,14]]; // holidays - currently not implemented
data[1] = [[8.30, 19.30]]; // lundi monday (beware! 8.30 means 08:30, using decimal part than is bigger than 59 will generate warning!
data[2] = [[8.30, 18.30]]; // tuesday
data[3] = [[6.30, 18.30]]; // wednesday
data[4] = [[6,12.59],[16.35,16.39],[18.30, 19.30]]; // thursday
data[5] = [[8.30, 18.30]]; // friday
data[6] = [[8.30, 12],[14,18]]; // saturday
data[7] = [[8.30, 12.59],[14,18]]; // dimanche sunday = closed (optional, if entry for a day is empty, it's assumed that it is closed)


$('.current-status-placeholder').openingHours({
    show: 'current-status',
    hours: data
});

$('.closing-in-placeholder').openingHours({
    show: 'closing-in',
    hours: data
});
