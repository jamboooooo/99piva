let pivo = 99;

function generateSongText(pivoCount) {
    let s = '';
    for (let i = pivoCount; i > 0; i--) {
        if (i === 1) {
            s = s + `${i} бутылок пива на стене
${i} бутылок пива!
Возьми одну, пусти по кругу
нет бутылок пива на стене!

`
        }
        s = s + `${i} бутылок пива на стене
${i} бутылок пива!
Возьми одну, пусти по кругу
${i-1} бутылок пива на стене!

`
    }

    return s;
}

console.log(generateSongText(pivo));