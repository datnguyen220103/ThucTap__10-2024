// BT1
function prime(){
    const int = prompt("Nhập số nguyên dương:");
    if(int <= 1){
        console.log( int + " không phải số nguyên tố")
        return false
    }
    for(let i = 2; i < int; i++){
        if(int % i === 0){
            console.log( int + " không phải số nguyên tố")
            return false
        }
        
    }
    console.log( int +" là số nguyên tố")
    return true

}

// prime()

// BT2
function TBC(){
    const contain = prompt("Nhập số lượng phần tử của mảng:")
    let array = []
    let sum = 0

    for (let i = 0; i < contain; i++) {
        let value = parseInt(prompt(`Nhập giá trị cho phần tử thứ ${i + 1}:`))
        array.push(value)
    }

    for (let i = 0; i< array.length; i++){
        sum += array[i]
    }

    let average = sum / contain

    console.log("Tổng các phần tử:", sum)
    console.log("Trung bình cộng:", average)

}

// TBC()


// BT3
function student(){
    class Person{
        constructor(hoTen,tuoi, diaChi){
            this.hoTen = hoTen
            this.tuoi = tuoi
            this.diaChi = diaChi
        }

        nhapThongTin(){
            this.hoTen = prompt("Nhập họ tên")
            this.tuoi = prompt("nhập tuổi: ")
            this.diaChi = prompt("nhập địa chỉ: ")
        }

        inThongTin(){
            console.log(`Họ tên ${this.hoTen}`)
            console.log(`Tuổi : ${this.tuoi}`)
            console.log(`Địa chỉ: ${this.diaChi}`)
        }
    }
    class sinhvienP{
        constructor(maSinhVien, diemTB){
            this.maSinhVien = MaSinhVien
            this.diemTB = diemTB
        }
    }
}