document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('classifyBtn').addEventListener('click', function() {
        const name = document.getElementById('heroName').value.trim();
        const xp = parseInt(document.getElementById('heroXP').value);
        
        if (!name || isNaN(xp)) {
            alert('Por favor, preencha todos os campos corretamente!');
            return;
        }
        
        const level = classifyHeroLevel(xp);
        const resultText = `O Herói de nome ${name} está no nível de ${level}`;
        
        document.getElementById('resultText').textContent = resultText;
        document.getElementById('result').classList.add('show');
    });
    
    function classifyHeroLevel(xp) {
        if (xp < 1000) return "Ferro";
        if (xp >= 1001 && xp <= 2000) return "Bronze";
        if (xp >= 2001 && xp <= 5000) return "Prata";
        if (xp >= 5001 && xp <= 7000) return "Ouro";
        if (xp >= 7001 && xp <= 8000) return "Platina";
        if (xp >= 8001 && xp <= 9000) return "Ascendente";
        if (xp >= 9001 && xp <= 10000) return "Imortal";
        return "Radiante";
    }
});