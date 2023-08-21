// predefined datd
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);

// solution
const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const avgTimeForEvent = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${avgTimeForEvent} minutes`);

for (const [min, event] of gameEvents) {
    console.log(`${min <= 45 ? "[FIRST HALF]" : "[SECOND HALD]"} ${min}: ${event}`);
}