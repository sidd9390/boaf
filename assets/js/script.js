function toggleAnswer(index) {
    const answer = document.getElementById('answer' + index);
    const icon = document.getElementById('icon' + index);

    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        icon.innerHTML = '-';
    } else {
        answer.style.display = 'none';
        icon.innerHTML = '+';
    }
}