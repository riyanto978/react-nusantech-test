import { ChangeEvent, Dispatch } from 'react'
import { formater } from 'src/utils';
import { angka } from './angka.interface';



/**
 * class untuk memisahkan logik dan view calculator
 */
class calculatorService {

    // initial
    SetListAngka: Dispatch<React.SetStateAction<angka[]>>;
    setPesan: Dispatch<React.SetStateAction<string>>;
    listAngka: angka[];


    constructor(SetListAngka: Dispatch<React.SetStateAction<angka[]>>, setPesan: Dispatch<React.SetStateAction<string>>, listAngka: angka[]) {
        this.SetListAngka = SetListAngka;
        this.setPesan = setPesan;
        this.listAngka = listAngka;
    }

    /**
     * 
     * ubah check jadi true atau false
     * 
     */
    ubahCheck(index: number, e: ChangeEvent<HTMLInputElement>): void {

        let list = [...this.listAngka]
        list[index].isChecked = e.target.checked

        this.SetListAngka(list)
    }

    /**
     * 
     * ubah number dari list
     * 
     */
    ubahNumber(index: number, e: ChangeEvent<HTMLInputElement> | string): void {

        let list = [...this.listAngka]
        list[index].number = typeof e === 'string' ? e : e.target.value

        this.SetListAngka(list)

    }


    /**
     * 
     * fungsi untuk kalkulasi kalkulator dengan format +, -, / , x
     */
    calculateFunction(format: '+' | '-' | '/' | 'x'): void {


        /**
         * ambil semua object angka dengan status ischecked dari list angka
         */
        let filterCheck = this.listAngka.filter(item => item.isChecked === true)

        // jika checkbox kurang dari 2 maka munculkan pesan error
        if (filterCheck.length <= 1) return this.setPesan('maaf, minimal harus di check adalah 2')

        //kosongkan pesan error
        this.setPesan('')

        //kalkulasi hitungan
        const total = filterCheck.reduce((total, current, currentIndex) => {
            //jika index pertama makan total disamakan dengan value dari index pertama
            if (currentIndex === 0) return total = formater.moneyToNumber(current.number)


            //jika format + maka tambahkan index pertama dan seterusnya
            if (format === '+') {
                return total + formater.moneyToNumber(current.number)
            }

            //jika format - maka kurangi index pertama dan seterusnya
            if (format === '-') {
                return total - formater.moneyToNumber(current.number)
            }

            //jika format / maka bagi index pertama dan seterusnya
            if (format === '/') {
                return total / formater.moneyToNumber(current.number)
            }

            //jika format x maka kalikan index pertama dan seterusnya
            if (format === 'x') {
                return total * formater.moneyToNumber(current.number)
            }

            return total + formater.moneyToNumber(current.number)
        }, 0)

        //munculkan pesan dengan format money indonesia
        this.setPesan(formater.numberToMoney(total.toString()))
    }


}

export default calculatorService;