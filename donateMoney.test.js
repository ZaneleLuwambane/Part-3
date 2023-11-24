
const { Display, makeDonation } = require('donateMoney.test.js'); 


document.getElementById = jest.fn((id) => ({
    value: 'mockedValue', 
    checked: false,
    innerText: 'mockedInnerText'
}));


global.alert = jest.fn();

describe('Donate Money Functions', () => {
    beforeEach(() => {
       
        jest.clearAllMocks();
    });

    test('Display Function', () => {
        Display();
        expect(document.getElementById).toHaveBeenCalledWith('donation-date');
        expect(document.getElementById).toHaveBeenCalledWith('donation-amount');
        expect(document.getElementById).toHaveBeenCalledWith('anonymous');
        expect(document.getElementById).toHaveBeenCalledWith('Donate');
        expect(document.getElementById).toHaveBeenCalledWith('output1');
    });

    test('Make Donation Function', () => {
        makeDonation();
        expect(parseFloat).toHaveBeenCalledWith('mockedValue');
        expect(document.getElementById).toHaveBeenCalledWith('donation-amount');
        expect(document.getElementById).toHaveBeenCalledWith('anonymous');
        expect(document.getElementById).toHaveBeenCalledWith('total-amount');
        expect(alert).toHaveBeenCalledWith('Thank you for your donation!');
    });
});
