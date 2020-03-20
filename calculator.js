function calculate() {
    let loan = document.getElementById("loan").value
    let interest = document.getElementById("interest").value / 100.0
    let years = document.getElementById("end").value - 2020

    let result = Math.floor(loan * 9 * (power(1 + interest, years) - 1))

    document.getElementById("result").innerHTML = result
}

function power (base, exponent) {
    if (exponent <= 0) return 1
    return base * power (base, exponent - 1)
}