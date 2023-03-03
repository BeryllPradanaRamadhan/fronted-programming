/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */

const users = [
    { name: "Beryll", age: 20, major: "Teknik Informatika" },
    { name: "Maulana", age: 20, major: "Teknik Informatika" },
    { name: "Agnes", age: 19, major: "Sistem Infomasi" },
    { name: "Lula", age: 19, major: "Sistem Informasi" },
    { name: "Dimas", age: 21, major: "Teknik Informatika" }
  ];

const destroy = (name) => {
    const index = users.findIndex((user) => user.name === name);
    if (index !== -1) {
      users.splice(index, 1);
      console.log(`Data user ${name} berhasil dihapus!`);
    } else {
      console.log(`Data user ${name} tidak ditemukan!`);
    }
  };
  
  destroy("Dimas");