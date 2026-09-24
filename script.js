// script.js
// ============================================================
// MODULE: Document Target - UI Utilities
// ============================================================

(function() {
    'use strict';

    // ------------------------------------------------------------
    // 1. Log initialization
    // ------------------------------------------------------------
    console.log('[TargetDoc] Script loaded.');

    // ------------------------------------------------------------
    // 2. Handle image load errors gracefully (fallback placeholder)
    // ------------------------------------------------------------
    document.querySelectorAll('img').forEach(function(img) {
        img.addEventListener('error', function(e) {
            // If image fails, replace with a placeholder text
            var parent = this.parentNode;
            var fallback = document.createElement('span');
            fallback.textContent = '🖼️';
            fallback.style.cssText = 'display:block; padding:20px; background:#222; color:#666; text-align:center; font-size:2rem;';
            this.style.display = 'none';
            parent.appendChild(fallback);
            console.warn('[TargetDoc] Image failed to load:', this.src);
        });
    });

    // ------------------------------------------------------------
    // 3. File link simulation (MD file)
    // ------------------------------------------------------------
    var mdLink = document.querySelector('.file-link');
    if (mdLink) {
        mdLink.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real scenario, this would open or download the .md file.
            // For demonstration, we show an alert.
            alert('File "data keluarga lengkap.md" would be opened here.\n(Simulated - local file access)');
        });
    }

    // ------------------------------------------------------------
    // 4. Additional: toggle details (if needed) - placeholder
    // ------------------------------------------------------------
    // No extra toggles required; all data is visible.

})();