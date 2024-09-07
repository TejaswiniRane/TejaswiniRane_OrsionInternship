document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.details-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            showDetails(category);
        });
    });

    function showDetails(category) {
        let message = '';
        switch (category) {
            case 'starters':
                message = 'Starters include: Samosa, Kachori, Masala-Papad, Pakora, Chaat, Panner Chilli, Manchurian, Panner Crispy, Cheeseballs, Kababs.';
                break;
            case 'main':
                message = 'Main courses include: Paneer Butter Masala, Paneer Angara, Paneer Masala, Matar Panner, Roti, Chapati, Bhakari, Naan, Rice, Jeera Rice, Biryani.';
                break;
            case 'desserts':
                message = 'Desserts include :Gulab Jamun, Jalebi, Rasgulla, RasMalai, Cake, Pastery,Ice-cream.';
                break;
            default:
                message = 'Details coming soon!';
        }
        prompt(message);
    }
});