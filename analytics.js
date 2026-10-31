/* Privacy-conscious, optional page-view analytics. No cookies or visitor identifiers.
   Disabled by default until production endpoint and privacy review are ready. */
(() => {
    const enabled = false; // Change only after reviewing consent/privacy requirements.
    const base = (window.EDGE_API_BASE || '').replace(/\/$/, '');
    if (!enabled || !base) return;
    fetch(`${base}/api/analytics/page-view`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page_path: window.location.pathname })
    }).catch(() => { /* Analytics must never interrupt the website. */ });
})();
