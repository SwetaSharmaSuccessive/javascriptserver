export default (rows: number): void => {

    if ((rows >= 2) && ( rows <= 10)) {
        for (let i = 1; i <= rows; i++) {
            let sp = '';
            for (let j = rows; j >= i; j--) {
                sp = sp + ' ';
            }

        for (let k = 1; k <= i; k++) {
            sp = sp + '* ';
        }
        console.log(sp);
        }

        for (let i = rows; i >= 1; i--) {
            let sp = '';
            for (let j = rows; j >= i; j--) {
                sp = sp + ' ';

            }
            for (let k = i; k >= 1; k--) {
                sp = sp + '* ';
            }
            console.log(sp);

        }

    }
    else {
        console.log('error: Something went wrong');
    }
};



