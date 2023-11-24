// donation.test.js

// Import functions to be tested
const {
    authorizeUser,
    addNewCategory,
    saveDonationData
} = require('./your-script-file'); // Replace with the correct path

// Mock prompt function for addNewCategory
global.prompt = jest.fn();

// Mock localStorage
global.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn()
};

// Mock document.getElementById
document.getElementById = jest.fn((id) => ({
    value: 'mockedValue', // Set a default value, replace with appropriate values
    checked: false
}));

// Mock Date
global.Date = jest.fn(() => ({
    toISOString: jest.fn().mockReturnValue('2023-12-01T12:00:00.000Z')
}));

describe('Donation Functions', () => {
    beforeEach(() => {
        // Clear mock calls before each test
        jest.clearAllMocks();
    });

    test('Authorize User', () => {
        authorizeUser();
        expect(document.getElementById).toHaveBeenCalledWith('username');
        expect(document.getElementById).toHaveBeenCalledWith('password');
        expect(localStorage.setItem).toHaveBeenCalledWith('authorization', 'true');
    });

    test('Add New Category', () => {
        prompt.mockReturnValue('newCategory');
        addNewCategory();
        expect(prompt).toHaveBeenCalledWith('Enter a new category:');
        expect(document.getElementById).toHaveBeenCalledWith('category');
        expect(document.createElement).toHaveBeenCalledWith('option');
        // Add more assertions as needed
    });

    test('Save Donation Data', () => {
        saveDonationData();
        expect(document.getElementById).toHaveBeenCalledWith('items');
        expect(document.getElementById).toHaveBeenCalledWith('category');
        expect(document.getElementById).toHaveBeenCalledWith('description');
        expect(document.getElementById).toHaveBeenCalledWith('anonymous');
        expect(localStorage.getItem).toHaveBeenCalledWith('donationData');
        expect(localStorage.setItem).toHaveBeenCalledWith('donationData', expect.any(String));
        expect(document.getElementById).toHaveBeenCalledWith('total-goods-received');
    });
});

