
class Generator {
    constructor(object) {
        this.length = object.length;
        this.characters = object.characters;
    }
    
    genereratePassword() {
        function arrayFromLowToHigh(low, high) {
            const array = []
            for (let i = low; i <= high; i++) {
                array.push(i);
            }
            return array;
        }
        const uppercaseCharCodes = arrayFromLowToHigh(65, 90);
        const lowercaseCharCodes = arrayFromLowToHigh(97, 122);
        const numericCharCodes = arrayFromLowToHigh(48, 57);
        const specialCharCodes = arrayFromLowToHigh(35, 47).concat(
            arrayFromLowToHigh(58, 64)
        ).concat(
            arrayFromLowToHigh(91, 96)
        ).concat(
            arrayFromLowToHigh(123, 126)
        );
        let charCodes = [];
        let lowercaseval = this.characters.includes("Lowercase");
        let uppercaseval = this.characters.includes("Uppercase");
        let numericval = this.characters.includes("Numbers");
        let specialval = this.characters.includes("Special");

        if (lowercaseval) charCodes.push(lowercaseCharCodes);
        if (uppercaseval) charCodes.push(uppercaseCharCodes);
        if (numericval) charCodes.push(numericCharCodes);
        if (specialval) charCodes.push(specialCharCodes); 

        const passwordCharacters = []
        for (let i = 0; i < this.length; i++) {
            const codeArray = charCodes[Math.floor(Math.random() * charCodes.length)];
            const characterCode = codeArray[Math.floor(Math.random() * codeArray.length)];
            passwordCharacters.push(String.fromCharCode(characterCode));
        }

        let password = passwordCharacters.join('');
        return password;
    }
}

module.exports = Generator;


