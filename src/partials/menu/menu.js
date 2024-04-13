document.addEventListener("DOMContentLoaded", function() {
    const selectItems = document.querySelectorAll('.select_item');
    selectItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetBlock = document.getElementById(targetId);
            if (targetBlock) {
                targetBlock.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
