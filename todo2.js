/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */

const users = [
    { name: "Beryll", age: 20, major: "Teknik Informatika" },
    { name: "Maulana", age: 20, major: "Teknik Informatika" },
    { name: "Agnes", age: 19, major: "Sistem Infomasi" },
    { name: "Lula", age: 19, major: "Sistem Informasi" },
    { name: "Dimas", age: 21, major: "Teknik Informatika" }
  ];

  const all = () => {
    for (const user of users) {
      console.log(users);
    }
  };