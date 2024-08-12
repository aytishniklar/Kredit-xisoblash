function calculateKredit(){
    kreditSumma = document.getElementById("kredit-summa").value;
    kreditFoiz = document.getElementById("kredit-foiz").value;
    kreditMuddati = document.getElementById("kredit-muddat").value;

    xisoblash = (kreditSumma * (kreditFoiz * 0.01)) / kreditMuddati;

    oylikTolov = (kreditSumma / kreditMuddati + xisoblash).toFixed(2);

    document.getElementById("payment").innerHTML = `Oylik to\'lov: ${oylikTolov}`;
}