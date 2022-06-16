export const calculatePoints = (rating: number, teamSize = 5) => {
    if (!rating || rating <= 150) {
        return null;
    }
    const exp = -0.00412 * rating;
    const mathed = 123 * Math.pow(2.71828, exp);
    let points = (1022 / (1 + mathed)) + 580;
    if (teamSize === 2) { points *= 0.76; }
    if (teamSize === 3) { points *= 0.88; }
    return Math.round(points);
};
