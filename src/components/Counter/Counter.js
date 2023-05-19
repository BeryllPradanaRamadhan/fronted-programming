import { useEffect, useState } from "react";

function Counter() {
    const [angka, setAngka] = useState(0);
    const [nama, setNama] = useState


    function addAngka() {
        setAngka(angka + 1);
    }

    function ubahNama() {
        setNama("Beryll Ramadhan");
    }
    
    useEffect(function () {
        console.log("Dijalankan ketika component di-mount dan update");

        document.title = `Angka: $(angka)`;
    });

    console.log("Dijalankan ketika component di-render");

    return (
        <div>
            <p>Result: {angka}</p>
            <p>Result: {nama}</p>
            <button oneClick={addAngka}> Add </button>
            <button oneClick={ubahNama}> Nama</button>
        </div>
    )
}

export default Counter;