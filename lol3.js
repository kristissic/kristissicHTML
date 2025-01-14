document.getElementById('pateikti').addEventListener('click', () => {
    const formosDuomenys = {
        vardas: document.getElementById('vardas').value,
        pavarde: document.getElementById('pavarde').value,
        elpastas: document.getElementById('elpastas').value,
        telefonas: document.getElementById('telefonas').value,
        adresas: document.getElementById('adresas').value,
        papildomiLaukai: [
            parseFloat(document.getElementById('laukas1').value),
            parseFloat(document.getElementById('laukas2').value),
            parseFloat(document.getElementById('laukas3').value),
            parseFloat(document.getElementById('laukas4').value),
            parseFloat(document.getElementById('laukas5').value)
        ]
    };

    console.log(formosDuomenys);

    const suma = formosDuomenys.papildomiLaukai.reduce((a, b) => a + b, 0);
    const vidurkis = suma / formosDuomenys.papildomiLaukai.length;

    const rezultatuDiv = document.getElementById('rezultatai');
    rezultatuDiv.innerHTML = `
        <p>Vardas: ${formosDuomenys.vardas}</p>
        <p>Pavardė: ${formosDuomenys.pavarde}</p>
        <p>El. paštas: ${formosDuomenys.elpastas}</p>
        <p>Telefonas: ${formosDuomenys.telefonas}</p>
        <p>Adresas: ${formosDuomenys.adresas}</p>
        <p>Papildomas laukas 1: ${formosDuomenys.papildomiLaukai[0]}</p>
        <p>Papildomas laukas 2: ${formosDuomenys.papildomiLaukai[1]}</p>
        <p>Papildomas laukas 3: ${formosDuomenys.papildomiLaukai[2]}</p>
        <p>Papildomas laukas 4: ${formosDuomenys.papildomiLaukai[3]}</p>
        <p>Papildomas laukas 5: ${formosDuomenys.papildomiLaukai[4]}</p>
        <p>${formosDuomenys.vardas} ${formosDuomenys.pavarde} (${formosDuomenys.elpastas}): Vidurkis - ${vidurkis.toFixed(2)}</p>
    `;
});
