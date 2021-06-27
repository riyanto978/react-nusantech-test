
/**
 * formater helper class
 */
class formater {


    /**
     * ubah format 1000 ke 1.000 
     */
    static moneyToNumber(val: string) {
        var string = val.toString().replaceAll(".", "");

        return parseInt(string);
    }


    /**
     * ubah format 1.000 ke 1000
     */
    static numberToMoney(val: string) {


        return new Intl.NumberFormat("id-ID").format(parseFloat(val));
    }
}

export { formater }