/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */


const users = [
    { name: "Beryll", age: 20, major: "Teknik Informatika" },
    { name: "Maulana", age: 20, major: "Teknik Informatika" },
    { name: "Agnes", age: 19, major: "Sistem Infomasi" },
    { name: "Lula", age: 19, major: "Sistem Informasi" },
    { name: "Dimas", age: 21, major: "Teknik Informatika" }
  ];

  const store = (name, age, major) => {
    const newUser = { name, age, major };
    users.push(newUser);
    console.log(`User ${name} berhasil ditambahkan!`);
};
store("Rahul", 22, "Sistem Informasi");
