
/**
 * formater helper class
 */
class formater {


    /**
     * ubah format 1.000 ke 1000 
     */
    static moneyToNumber(val: string) {

        var data: string = val.split('.').join('');

        return parseInt(data);
    }


    /**
     * ubah format 1000 ke 1.000
     */
    static numberToMoney(val: string) {

        return new Intl.NumberFormat("id-ID").format(parseFloat(val));
    }


}

export { formater }