document.getElementById('copyBtn').addEventListener('click', async () => {
    const status = document.getElementById('status');

    try {
        // Get all tabs
        const tabs = await chrome.tabs.query({ currentWindow: true });

        // Format data
        const data = {
            source: 'linkease-extension',
            timestamp: new Date().toISOString(),
            tabs: tabs.map(tab => ({
                title: tab.title,
                url: tab.url,
                favIconUrl: tab.favIconUrl
            }))
        };

        // Copy to clipboard
        await navigator.clipboard.writeText(JSON.stringify(data));

        status.style.color = '#10b981';
        status.textContent = `✓ Copied ${tabs.length} tabs to clipboard!`;

        setTimeout(() => {
            status.textContent = '';
        }, 3000);

    } catch (err) {
        status.style.color = '#ef4444';
        status.textContent = 'Error copying tabs';
        console.error(err);
    }
});
