describe('InteractiveDataDisplay.AdaptiveFormatter', function () {
    it('0.0000nn___  ->  0.nn x 10^-mmm in segment case', function () {   
        var format = new InteractiveDataDisplay.AdaptiveFormatter(0.000000001, 0.000003);
        expect(format.toString(0.00000003)).toBe('0.030e-6');
    });
    it('0.0000nn___  ->  0.nn x 10^-mmm in array case', function () {
        var array = [0.00000001, 0.000004, 0.0000054, 0.000005];
        var format = new InteractiveDataDisplay.AdaptiveFormatter(array);
        expect(format.toString(array[1])).toBe('4.00e-6');
    });
});