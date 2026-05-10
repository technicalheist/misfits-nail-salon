
<script>
    document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const serviceDetailsElement = document.getElementById('service-details');
        
        if (serviceDetailsElement) {
            const elementPosition = serviceDetailsElement.getBoundingClientRect().top;
            const startPosition = window.pageYOffset;
            const distance = elementPosition + startPosition - 470;
            
            window.scrollTo({
                top: distance,
                behavior: 'smooth'
            });
        }
    }, 400);
});
</script>