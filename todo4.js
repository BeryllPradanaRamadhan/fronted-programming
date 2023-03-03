/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */

const users = [
    { name: "Beryll", age: 20, major: "Teknik Informatika" },
    { name: "Maulana", age: 20, major: "Teknik Informatika" },
    { name: "Agnes", age: 19, major: "Sistem Infomasi" },
    { name: "Lula", age: 19, major: "Sistem Informasi" },
    { name: "Dimas", age: 21, major: "Teknik Informatika" }
  ];

    const update = (name, newData) => {
     const index = users.findIndex((user) => user.name === name);
    if (index !== -1) {
      users[index] = { ...users[index], ...newData };
      console.log(`Data user ${name} berhasil diupdate!`);
    } else {
      console.log(`Data user ${name} tidak ditemukan!`);
    }
  };

  update("Beryll", { age: 19, major: "Sistem Informasi" });