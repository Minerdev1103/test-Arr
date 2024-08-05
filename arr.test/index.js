function hasPairWithSum(arr, targetSum) {
    const complements = new Set(); // สร้าง Set เพื่อเก็บค่าที่ต้องการ สำหรับแต่ละตัวเลขในอาเรย์
  
    for (let num of arr) { // วนลูปผ่านแต่ละตัวเลขในอาเรย์
      if (complements.has(num)) { // ตรวจสอบว่า Set มีค่าปัจจุบัน (num) หรือไม่
        return true; // ถ้าใช่ แสดงว่าเราพบคู่ตัวเลขที่บวกกันแล้วได้ผลเท่ากับ targetSum ดังนั้นให้ return true
      }
      complements.add(targetSum - num); // ถ้าไม่ใช่ เพิ่มค่าที่ต้องการ (targetSum - num) เข้าไปใน Set
    }
  
    return false; // ถ้าวนลูปจบแล้วไม่พบคู่ตัวเลขที่บวกกันได้ผลเท่ากับ targetSum ให้ return false
  }
  
  const numbers = [1, 5, 13, 2, 7, 6]; // อาเรย์ของตัวเลข
  const targetSum = 11; // ผลบวกที่ต้องการ
  
  console.log(hasPairWithSum(numbers, targetSum)); // เรียกใช้ฟังก์ชันและพิมพ์ผลลัพธ์ ซึ่งจะเป็น true