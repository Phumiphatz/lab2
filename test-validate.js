const chai = require('chai');
const expect = chai.expect;
const validate = require('./validate');

describe('Validate',()=>{
    context('isUserNameValid', ()=> {
        it('Function prototype : boolean isUserNameValid(username: String)',()=>{
            expect(validate.isUserNameValid('dome')).to.be.true;
        });
        it('จำนวนตัวอักษรอย่างน้อย 3 ตัวอักษร',()=>{
            expect(validate.isUserNameValid('Dm')).to.be.false;
        });
        it('ทุกตัวต้องเป็นตัวเล็ก',()=>{
            expect(validate.isUserNameValid('Dome')).to.be.false;
        });
        it('จำนวนตัวอักษรที่มากที่สุดคือ 15 ตัวอักษร',()=>{
            expect(validate.isUserNameValid('Dome123456789123')).to.be.false;
        });
    });
    context('isAgeValid',()=>{
        it('Function prototype : boolean isAgeValid (age: String)',()=>{
            expect(validate.isAgeValid('19')).to.be.true;
        });
        it('age ต้องเป็นข้อความที่เป็นตัวเลข',()=>{
            expect(validate.isAgeValid('a')).to.be.false;
        });
        it('อายุต้องไม่ต่ำกว่า 18 ปี และไม่เกิน 100 ปี',()=>{
            expect(validate.isAgeValid('105')).to.be.false;
            expect(validate.isAgeValid('17')).to.be.false;
        });  
    });
    context('isPasswordValid',()=>{
        it('Function prototype : boolean isUserNameValid(password: String)',()=>{
            expect(validate.isPasswordValid('A987asd<>"')).to.be.true;
        });
        it('จำนวนตัวอักษรอย่างน้อย 8 ตัวอักษร',()=>{
            expect(validate.isPasswordValid('1234567891')).to.be.false;
        });
        it('ต้องมีอักษรตัวใหญ่เป็นส่วนประกอบอย่างน้อย 1 ตัว',()=>{
            expect(validate.isPasswordValid('domino123<>"')).to.be.false;
            expect(validate.isPasswordValid('Domino123<>()')).to.be.true;
        });
        it('ต้องมีตัวเลขเป็นส่วนประกอบอย่างน้อย 3 ตัว',()=>{
            expect(validate.isPasswordValid('Domino12<>""')).to.be.false;
            expect(validate.isPasswordValid('Domino123<>""')).to.be.true;
        });
        it('ต้องมีอักขระ พิเศษ !@#$%^&*()_+|~-=\`{}[]:";<>?,./ อย่างน้อย 1 ตัว',()=>{
            expect(validate.isPasswordValid('Domino123')).to.be.false;
            expect(validate.isPasswordValid('Domino123<>"\\')).to.be.true;
        });
    });
    context('isDateValid', ()=>{
        it('Function prototype : boolean isDateValid(day: Integer, month: Integer, year: Integer)', ()=>{
            expect(validate.isDateValid('1','1','1970')).to.be.true;
        });
        it('day เริ่ม 1 และไม่เกิน 31 ในทุก ๆ เดือน', ()=>{
            expect(validate.isDateValid('32','1','1970')).to.be.false;
            expect(validate.isDateValid('5','1','1970')).to.be.true;
        });
        it('month เริ่มจาก 1 และไม่เกิน 12 ในทุก ๆ เดือน', ()=>{
            expect(validate.isDateValid('1','13','1970')).to.be.false;
            expect(validate.isDateValid('1','12','1970')).to.be.true;
        });
        it('year จะต้องไม่ต่ำกว่า 1970 และ ไม่เกิน ปี 2020', ()=>{
            expect(validate.isDateValid('1','1','1969')).to.be.false;
            expect(validate.isDateValid('1','1','1970')).to.be.true;
            expect(validate.isDateValid('1','1','2020')).to.be.true;
            expect(validate.isDateValid('1','1','2021')).to.be.false;
        });
        it('month 1,3,5,7,8,10,12', ()=>{
            expect(validate.isDateValid('33','1','1970')).to.be.false;
            expect(validate.isDateValid('31','1','1970')).to.be.true;
        });
        it('month 4,6,9,11', ()=>{
            expect(validate.isDateValid('31','4','1970')).to.be.false;
            expect(validate.isDateValid('30','11','1970')).to.be.true;
        });
        it('month 2', ()=>{
            expect(validate.isDateValid('31','2','1970')).to.be.false;
            expect(validate.isDateValid('28','2','1970')).to.be.true;
        });
        it('ในกรณีของปี อธิกสุรทิน ให้คำนวนตามหลักเกณฑ์นี้', ()=>{
            expect(validate.isDateValid('31','2','2000')).to.be.false;
            expect(validate.isDateValid('29','2','2000')).to.be.true;
        });
    });
});
